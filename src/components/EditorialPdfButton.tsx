'use client';

import { useState } from 'react';

export default function EditorialPdfButton({ title, filename, lines }: { title: string; filename: string; lines: string[] }) {
    const [status, setStatus] = useState('');
    async function download() {
        try {
            const { jsPDF } = await import('jspdf');
            const doc = new jsPDF();
            doc.setFontSize(15);
            doc.text(title, 16, 20);
            doc.setFontSize(10);
            let y = 32;
            for (const line of lines) {
                const wrapped: string[] = doc.splitTextToSize(line, 176);
                if (y + wrapped.length * 5 > 280) { doc.addPage(); y = 20; }
                doc.text(wrapped, 16, y);
                y += wrapped.length * 5 + 4;
            }
            doc.save(filename);
            setStatus('PDF generated.');
        } catch {
            setStatus('Could not generate the PDF. You can still print this page.');
        }
    }
    return <div className="not-prose my-4"><button type="button" className="btn-outline" onClick={download}>{title} (PDF)</button><p role="status" className="text-sm">{status}</p></div>;
}
