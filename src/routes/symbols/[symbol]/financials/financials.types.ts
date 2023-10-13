
type FinancialReport = {
    type: string,
    financials: Financial[],
};

type Financial = {
    year: number;
    quarter: number;
    revenue?: number;
    profit?: number;   
};

enum FinancialsTimeframe {
    year,
    quarter,
};

type FinancialsReportConfiguration = {
    key: string,
    label?: string,
    accessor: (value: Nullable<number>) => string,
    hidden?: boolean,
};

type FinancialsFieldConfiguration = {
    label?: string,
    accessor: (financial: Financial) => Nullable<number>,
    hidden?: boolean,
    selected?: boolean,
};

type Nullable<T> = T | null | undefined;
