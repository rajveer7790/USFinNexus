'use client';

import { useState } from 'react';
import { FileDown, Table2, Link2, Check } from 'lucide-react';
import { toast } from 'sonner';
import type { AmortizationRow, MortgageSummary } from '@/lib/formulas';
import { exportAmortizationCSV } from '@/lib/csvExporter';
import { buildShareUrl, copyToClipboard } from '@/lib/utils';

interface DownloadButtonsProps {
    summary: MortgageSummary | null;
    amortization: AmortizationRow[];
    formState?: Record<string, string | number | boolean>;
    calculatorName?: string;
    className?: string;
}

export default function DownloadButtons({
    summary,
    amortization,
    formState,
    calculatorName = 'Mortgage',
    className = '',
}: DownloadButtonsProps) {
    const [pdfLoading, setPdfLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCSV = () => {
        if (!amortization.length) {
            toast.error('Enter loan details first to generate the report.');
            return;
        }
        exportAmortizationCSV(amortization, `USFinNexus-${calculatorName}-Amortization.csv`);
        toast.success('CSV downloaded! Open in Excel or Google Sheets.');
    };

    const handlePDF = async () => {
        if (!summary) {
            toast.error('Enter loan details first to generate the PDF report.');
            return;
        }
        setPdfLoading(true);
        try {
            const { generateMortgagePDF } = await import('@/lib/pdfGenerator');
            await generateMortgagePDF(summary, amortization, calculatorName);
            toast.success('PDF report downloaded! Professional quality — totally free.');
        } catch (e) {
            console.error(e);
            toast.error('PDF generation failed. Try downloading CSV instead.');
        } finally {
            setPdfLoading(false);
        }
    };

    const handleShare = async () => {
        const url = formState ? buildShareUrl(formState) : window.location.href;
        const success = await copyToClipboard(url);
        if (success) {
            setCopied(true);
            toast.success('Link copied! Share it with your spouse, realtor, or lender.');
            setTimeout(() => setCopied(false), 3000);
        } else {
            toast.error('Could not copy link. Please copy manually from the address bar.');
        }
    };

    return (
        <div className={`flex flex-wrap gap-3 ${className}`}>
            {/* PDF Download */}
            <button
                onClick={handlePDF}
                disabled={pdfLoading || !summary}
                className="btn-green flex-1 min-w-[180px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
            >
                {pdfLoading ? (
                    <>
                        <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                        Generating...
                    </>
                ) : (
                    <>
                        <FileDown size={16} />
                        Download Full PDF Report
                    </>
                )}
            </button>

            {/* CSV Download */}
            <button
                onClick={handleCSV}
                disabled={!amortization.length}
                className="btn-outline flex-1 min-w-[160px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <Table2 size={16} />
                Download CSV / Excel
            </button>

            {/* Share Link */}
            <button
                onClick={handleShare}
                className="btn-outline flex-1 min-w-[140px]"
            >
                {copied ? <Check size={16} style={{ color: '#00C853' }} /> : <Link2 size={16} />}
                {copied ? 'Copied!' : 'Copy Share Link'}
            </button>
        </div>
    );
}
