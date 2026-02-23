import { AlertTriangle } from 'lucide-react';

interface DisclaimerBannerProps {
    calculatorName?: string;
    className?: string;
}

export default function DisclaimerBanner({
    calculatorName = 'this calculator',
    className = '',
}: DisclaimerBannerProps) {
    return (
        <div className={`disclaimer-banner flex gap-3 ${className}`} role="note" aria-label="Disclaimer">
            <AlertTriangle size={16} className="mt-0.5 flex-shrink-0" />
            <p>
                <strong>Estimation Only:</strong>{' '}
                Results from {calculatorName} are for informational and educational purposes only.
                They do not constitute financial, tax, mortgage, or legal advice.
                Actual payments, rates, taxes, and insurance will vary.{' '}
                <strong>Always consult a licensed financial professional</strong> before making any financial decisions.
                No personal data is transmitted by this calculator.
            </p>
        </div>
    );
}
