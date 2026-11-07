export interface CDRung {
    principal: number;
    apy: number;
    months: number;
}

export function calculateCDLadder(rungs: CDRung[]) {
    const schedule = rungs.map(({ principal, apy, months }) => {
        if (!Number.isFinite(principal) || principal < 0 || principal > 1e7 ||
            !Number.isFinite(apy) || apy < 0 || apy > 30 ||
            !Number.isInteger(months) || months < 1 || months > 120) {
            throw new RangeError('Use an amount from $0 to $10 million, APY from 0% to 30%, and a whole term from 1 to 120 months.');
        }
        const interest = Math.round(principal * Math.expm1(Math.log1p(apy / 100) * months / 12) * 100) / 100;
        return { principal, apy, months, interest, maturity: principal + interest };
    }).sort((left, right) => left.months - right.months);
    return {
        schedule,
        principal: schedule.reduce((sum, rung) => sum + rung.principal, 0),
        interest: schedule.reduce((sum, rung) => sum + rung.interest, 0),
    };
}
