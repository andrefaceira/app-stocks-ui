
export interface Financial {
    year: number;
    quarter: number;
    revenue?: number | null;
    profit?: number | null;
}

export interface SymbolFinancials {
    nominal: Financial[];
    growth1: Financial[];
    growth2: Financial[];
    growth3: Financial[];
    growth4: Financial[];
    growth5: Financial[];
    growth6: Financial[];
    growth7: Financial[];
    growth8: Financial[];
}

export function getFinancialsYear(symbol: string): SymbolFinancials {
    return {
        nominal: getFinancialsYearSingle(symbol),
        growth1: getFinancialsYearSingle(symbol),
        growth2: getFinancialsYearSingle(symbol),
        growth3: getFinancialsYearSingle(symbol),
        growth4: getFinancialsYearSingle(symbol),
        growth5: getFinancialsYearSingle(symbol),
        growth6: getFinancialsYearSingle(symbol),
        growth7: getFinancialsYearSingle(symbol),
        growth8: getFinancialsYearSingle(symbol),
    }
}

export function getFinancialsQuarter(symbol: string): SymbolFinancials {
    return {
        nominal: getFinancialsQuarterSingle(symbol),
        growth1: getFinancialsQuarterSingle(symbol),
        growth2: getFinancialsQuarterSingle(symbol),
        growth3: getFinancialsQuarterSingle(symbol),
        growth4: getFinancialsQuarterSingle(symbol),
        growth5: getFinancialsQuarterSingle(symbol),
        growth6: getFinancialsQuarterSingle(symbol),
        growth7: getFinancialsQuarterSingle(symbol),
        growth8: getFinancialsQuarterSingle(symbol),
    }
}

function getFinancialsYearSingle(symbol: string): Financial[] {
    return [
        {
            year: 2020,
            quarter: 0,
            revenue: 10,
            profit: 11,
        },
        {
            year: 2021,
            quarter: 0,
            revenue: 20,
            profit: 21,
        },
        {
            year: 2022,
            quarter: 0,
            revenue: 30,
            profit: 31,
        },
        {
            year: 2023,
            quarter: 0,
            revenue: 40,
            profit: 41,
        },
        {
            year: 2024,
            quarter: 0,
            revenue: 50,
            profit: 51,
        },
    ];
}

function getFinancialsQuarterSingle(symbol: string): Financial[] {
    return [
        {
            year: 2020,
            quarter: 3,
            revenue: 10,
            profit: 11,
        },
        {
            year: 2020,
            quarter: 4,
            revenue: 20,
            profit: 21,
        },
        {
            year: 2021,
            quarter: 1,
            revenue: 30,
            profit: 31,
        },
        {
            year: 2021,
            quarter: 2,
            revenue: 40,
            profit: 41,
        },
        {
            year: 2021,
            quarter: 3,
            revenue: 50,
            profit: 51,
        },
        {
            year: 2021,
            quarter: 4,
            revenue: 50,
            profit: 51,
        },
        {
            year: 2022,
            quarter: 1,
            revenue: 50,
            profit: 51,
        },
    ];
}

