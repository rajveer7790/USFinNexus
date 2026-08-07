export default function FirePlannerSeoContent() {
    return (
        <article className="prose prose-emerald max-w-none mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mt-0">Understanding a FIRE Number</h2>
            <p className="text-gray-600">
                FIRE stands for Financial Independence, Retire Early. A FIRE calculator is best used as a scenario model: it estimates how a portfolio could grow under selected savings, spending, return and withdrawal assumptions. It cannot predict future market returns, inflation, taxes, healthcare costs or how long a retirement will last.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8">Withdrawal Rate and Portfolio Target</h3>
            <p className="text-gray-600">
                A common planning shortcut divides annual portfolio spending by an assumed withdrawal rate. With a 4% rate, the result is 25 times annual spending. With a 3.5% rate, the required portfolio is about 28.6 times spending. These are mathematical consequences of the selected rate, not guarantees that a portfolio will support those withdrawals indefinitely.
            </p>
            <p className="font-medium text-gray-800 bg-gray-50 p-4 rounded border-l-4 border-emerald-500">
                Planning target = Annual portfolio spending ÷ Assumed withdrawal rate
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8">Why Savings Rate Matters</h3>
            <p className="text-gray-600">
                Increasing the amount invested each year can shorten a modeled timeline, while reducing spending can also lower the portfolio target. But there is no universal table saying a given savings rate always produces retirement in a fixed number of years. Starting assets, investment returns, taxes, spending growth and the withdrawal-rate target all change the result.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8">Use Return Assumptions Carefully</h3>
            <p className="text-gray-600">
                Historical stock-market returns are not a forecast. If the calculator uses a real return, that means the assumed investment return after inflation. Test several scenarios—such as lower, middle and higher real returns—rather than treating one percentage as the expected outcome.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8">Common FIRE Terms</h3>
            <div className="space-y-4 mt-4 text-gray-600">
                <p><strong className="text-gray-900">Lean FIRE:</strong> an informal label for financial independence with relatively low planned spending.</p>
                <p><strong className="text-gray-900">Fat FIRE:</strong> an informal label for a higher-spending retirement target.</p>
                <p><strong className="text-gray-900">Barista FIRE:</strong> an informal strategy in which part-time or flexible work continues to cover some expenses after leaving a traditional full-time career.</p>
                <p><strong className="text-gray-900">Coast FIRE:</strong> a planning concept where current invested assets are projected to grow to a later retirement target without additional retirement contributions, assuming the selected return occurs.</p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-8">Important Planning Gaps</h3>
            <p className="text-gray-600">
                A simple FIRE projection can omit Social Security, pensions, taxes, health insurance, Medicare timing, required minimum distributions, sequence-of-returns risk, investment fees and major one-time expenses. Treat the result as a starting scenario and build a more complete retirement plan before making a major work or withdrawal decision.
            </p>
        </article>
    );
}
