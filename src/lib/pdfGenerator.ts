/**
 * Client-side PDF Generation using jsPDF + html2canvas
 * Dynamically imported to avoid SSR issues.
 */

import type { MortgageSummary, AmortizationRow } from './formulas';
import { formatCurrency, formatPercent, formatMonthYear } from './formulas';

export async function generateMortgagePDF(
    summary: MortgageSummary,
    amortization: AmortizationRow[],
    calculatorName = 'Mortgage'
): Promise<void> {
    const { default: jsPDF } = await import('jspdf');
    const { default: autoTable } = await import('jspdf-autotable');

    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'letter' });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - margin * 2;

    const navyR = 10, navyG = 37, navyB = 64;
    const greenR = 0, greenG = 200, greenB = 83;

    // ─── Page 1: Cover & Summary ──────────────────────────────────────────────

    // Header background
    doc.setFillColor(navyR, navyG, navyB);
    doc.rect(0, 0, pageWidth, 55, 'F');

    // Logo area
    doc.setFillColor(greenR, greenG, greenB);
    doc.roundedRect(margin, 12, 18, 10, 2, 2, 'F');
    doc.setTextColor(navyR, navyG, navyB);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text('US', margin + 9, 18.5, { align: 'center' });

    // Site name
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('USFinNexus.com', margin + 22, 20);

    // Tagline
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(255, 255, 255, 0.9);
    doc.text('Free Mortgage & Finance Calculators | usfinnexus.com', margin + 22, 27);

    // Report title
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(greenR, greenG, greenB);
    doc.text(`${calculatorName} Calculator — Full Report`, margin, 44);

    // Date
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(230, 230, 230);
    doc.text(`Generated: ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`, pageWidth - margin, 44, { align: 'right' });

    let y = 70;

    // ─── Payment Highlight Box ────────────────────────────────────────────────
    doc.setFillColor(245, 248, 255);
    doc.roundedRect(margin, y, contentWidth, 40, 3, 3, 'F');
    doc.setDrawColor(220, 230, 245);
    doc.roundedRect(margin, y, contentWidth, 40, 3, 3, 'S');

    doc.setTextColor(100, 100, 120);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('TOTAL MONTHLY PAYMENT (PITI)', margin + contentWidth / 2, y + 10, { align: 'center' });

    doc.setTextColor(navyR, navyG, navyB);
    doc.setFontSize(32);
    doc.setFont('helvetica', 'bold');
    doc.text(formatCurrency(summary.totalMonthly), margin + contentWidth / 2, y + 28, { align: 'center' });

    y += 52;

    // ─── PITI Breakdown Table ─────────────────────────────────────────────────
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(navyR, navyG, navyB);
    doc.text('Monthly Payment Breakdown (PITI)', margin, y);
    y += 6;

    autoTable(doc, {
        startY: y,
        margin: { left: margin, right: margin },
        head: [['Component', 'Monthly Amount', '% of Total']],
        body: [
            ['Principal & Interest', formatCurrency(summary.principalAndInterest), formatPercent((summary.principalAndInterest / summary.totalMonthly) * 100, 1)],
            ['Property Tax', formatCurrency(summary.monthlyPropertyTax), formatPercent((summary.monthlyPropertyTax / summary.totalMonthly) * 100, 1)],
            ['Homeowners Insurance', formatCurrency(summary.monthlyInsurance), formatPercent((summary.monthlyInsurance / summary.totalMonthly) * 100, 1)],
            summary.monthlyHOA > 0 ? ['HOA Fees', formatCurrency(summary.monthlyHOA), formatPercent((summary.monthlyHOA / summary.totalMonthly) * 100, 1)] : null,
            summary.monthlyPMI > 0 ? ['PMI (Private Mortgage Insurance)', formatCurrency(summary.monthlyPMI), formatPercent((summary.monthlyPMI / summary.totalMonthly) * 100, 1)] : null,
        ].filter(Boolean) as string[][],
        foot: [['Total Monthly Payment', formatCurrency(summary.totalMonthly), '100.0%']],
        headStyles: { fillColor: [navyR, navyG, navyB], textColor: [255, 255, 255], fontSize: 9, fontStyle: 'bold' },
        footStyles: { fillColor: [0, 150, 60], textColor: [255, 255, 255], fontSize: 9, fontStyle: 'bold' },
        bodyStyles: { fontSize: 9 },
        alternateRowStyles: { fillColor: [248, 250, 255] },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    y = (doc as any).lastAutoTable.finalY + 12;

    // ─── Loan Summary ──────────────────────────────────────────────────────────
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(navyR, navyG, navyB);
    doc.text('Loan Summary', margin, y);
    y += 6;

    autoTable(doc, {
        startY: y,
        margin: { left: margin, right: margin },
        body: [
            ['Home Price', formatCurrency(summary.loanAmount + summary.downPaymentAmount), 'Loan Amount', formatCurrency(summary.loanAmount)],
            ['Down Payment', `${formatCurrency(summary.downPaymentAmount)} (${formatPercent(summary.downPaymentPercent, 1)})`, 'Loan-to-Value (LTV)', formatPercent(summary.ltv, 1)],
            ['Total Interest Paid', formatCurrency(summary.totalInterest), 'Total Payments', formatCurrency(summary.totalPayments)],
            ['Payoff Date', formatMonthYear(summary.payoffDate), 'Loan Category', summary.loanType.replace('_', ' ').toUpperCase()],
        ],
        headStyles: { fillColor: [navyR, navyG, navyB] },
        bodyStyles: { fontSize: 9 },
        columnStyles: {
            0: { fontStyle: 'bold', textColor: [80, 80, 100] },
            2: { fontStyle: 'bold', textColor: [80, 80, 100] },
        },
        alternateRowStyles: { fillColor: [248, 250, 255] },
    });

    // ─── Page 2: Amortization Schedule ────────────────────────────────────────
    doc.addPage();

    doc.setFillColor(navyR, navyG, navyB);
    doc.rect(0, 0, pageWidth, 20, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Full Amortization Schedule', margin, 13);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('usfinnexus.com', pageWidth - margin, 13, { align: 'right' });

    // Show up to 360 rows (abbreviated for PDF readability — show yearly summary if >60 rows)
    const showYearly = amortization.length > 120;
    let amortBody: string[][];
    let amortHead: string[];

    if (showYearly) {
        amortHead = ['Year', 'Principal Paid', 'Interest Paid', 'Ending Balance', 'Cumulative Interest'];
        amortBody = [];
        for (let y2 = 0; y2 < Math.ceil(amortization.length / 12); y2++) {
            const chunk = amortization.slice(y2 * 12, y2 * 12 + 12);
            const last = chunk[chunk.length - 1];
            amortBody.push([
                String(y2 + 1),
                formatCurrency(chunk.reduce((s, r) => s + r.principal + r.extraPayment, 0)),
                formatCurrency(chunk.reduce((s, r) => s + r.interest, 0)),
                formatCurrency(last.balance),
                formatCurrency(last.cumulativeInterest),
            ]);
        }
    } else {
        amortHead = ['Month', 'Date', 'Payment', 'Principal', 'Interest', 'Balance'];
        amortBody = amortization.map(r => [
            String(r.month),
            r.date.toLocaleDateString('en-US', { month: '2-digit', year: '2-digit' }),
            formatCurrency(r.payment),
            formatCurrency(r.principal),
            formatCurrency(r.interest),
            formatCurrency(r.balance),
        ]);
    }

    autoTable(doc, {
        startY: 28,
        margin: { left: margin, right: margin },
        head: [amortHead],
        body: amortBody,
        headStyles: { fillColor: [navyR, navyG, navyB], textColor: [255, 255, 255], fontSize: 8, fontStyle: 'bold' },
        bodyStyles: { fontSize: 7.5 },
        alternateRowStyles: { fillColor: [248, 250, 255] },
        columnStyles: {
            0: { halign: 'center' },
            1: { halign: 'center' },
        },
    });

    // ─── Disclaimer Page ──────────────────────────────────────────────────────
    doc.addPage();
    doc.setFillColor(navyR, navyG, navyB);
    doc.rect(0, 0, pageWidth, 20, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Important Disclaimer', margin, 13);

    doc.setTextColor(50, 50, 70);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const disclaimerText = `DISCLAIMER — FOR ESTIMATION PURPOSES ONLY

The calculations and information provided in this report and on USFinNexus.com are for general informational and educational purposes only. They do NOT constitute financial, tax, mortgage, legal, or investment advice.

ACCURACY: Results are based solely on the inputs provided and standard mathematical formulas. Actual mortgage payments, interest rates, property taxes, insurance premiums, PMI costs, and other financial figures will differ based on your specific situation, lender terms, local tax assessments, and market conditions.

PROFESSIONAL ADVICE REQUIRED: Always consult a licensed financial advisor, mortgage professional, CPA, or attorney before making any financial decisions. Mortgage approval depends on lender criteria including but not limited to credit score, income verification, employment history, appraisal, and debt-to-income ratios.

LOAN LIMITS: 2026 conforming loan limit data from FHFA (fhfa.gov). FHA limits from HUD (hud.gov). Property tax estimates based on Tax Foundation state averages and may not reflect your actual tax assessment.

DTI GUIDELINES: Debt-to-income ratio guidelines referenced from CFPB (consumerfinance.gov). Individual lender requirements may differ.

NO DATA COLLECTION: USFinNexus.com does not store, transmit, or sell any personal or financial data you enter into our calculators. All calculations occur locally in your browser.

AFFILIATION: USFinNexus.com is not affiliated with, endorsed by, or sponsored by any government agency, financial institution, or lender.

© ${new Date().getFullYear()} USFinNexus.com — Free Finance Calculators for Americans`;

    const lines = doc.splitTextToSize(disclaimerText, contentWidth);
    doc.text(lines, margin, 35);

    // Footer on disclaimer page
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 110);
    doc.text('USFinNexus.com | Free Mortgage Calculators | Not financial advice', pageWidth / 2, pageHeight - 15, { align: 'center' });
    doc.text(`Generated ${new Date().toLocaleDateString('en-US')}`, pageWidth / 2, pageHeight - 10, { align: 'center' });

    // Add page numbers to all pages
    const totalPages = doc.internal.pages.length - 1;
    for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 110);
        doc.text(
            `Page ${i} of ${totalPages} | USFinNexus.com — For estimation only`,
            pageWidth / 2,
            pageHeight - 8,
            { align: 'center' }
        );
    }

    doc.save(`USFinNexus-${calculatorName}-Report-${new Date().toISOString().split('T')[0]}.pdf`);
}
