import type { Metadata } from 'next';
import ArmCalculatorClient from './ArmCalculatorClient';

export const metadata: Metadata = {
    title: 'Adjustable Rate Mortgage (ARM) Calculator | What is my worst-case payment?',
    description: 'Free ARM mortgage calculator. Instantly see your worst-case payment scenario, fully-indexed rate, and understand rate caps (5/1, 7/1 ARMs).',
};

export default function ArmCalculatorPage() {
    return <ArmCalculatorClient />;
}
