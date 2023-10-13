export enum FinancialsTimeframe {
    year,
    quarter,
};

let timeframe: FinancialsTimeframe = FinancialsTimeframe.year;

export const getTimeframe = (): FinancialsTimeframe => timeframe;


let financialFieldsConfig: FinancialsFieldConfiguration[] = [
    {
        label: "Revenue",
        accessor: p => p.revenue,
        selected: true,
    },
    {
        label: "Profit",
        accessor: p => p.profit,
        // hidden: true,
    }
]

export const getFinancialFieldsConfig = (): FinancialsFieldConfiguration[] => financialFieldsConfig;


let financialsReportsConfig: FinancialsReportConfiguration[] = [
    {
        key: 'nominal',
        label: 'M',
        accessor: p => formatNumber(p),
    },
    {
        key: 'growth-1',
        label: '-1 growth',
        accessor: p => formatPercentage(p),
    },
    {
        key: 'growth-2',
        label: '-2 growth',
        accessor: p => formatPercentage(p),
    },
    {
        key: 'growth-3',
        label: '-3 growth',
        accessor: p => formatPercentage(p),
    },
    {
        key: 'growth-4',
        label: '-4 growth',
        accessor: p => formatPercentage(p),
    },
    {
        key: 'growth-5',
        label: '-5 growth',
        accessor: p => formatPercentage(p),
        hidden: true,
    }
];

export const getFinancialsReportsConfig = (): FinancialsReportConfiguration[] => financialsReportsConfig;


const formatNumber = (p: Nullable<number>): string => {
    return p == null
        ? '-'
        : p.toFixed(2);
};

const formatPercentage = (p: Nullable<number>): string => {
    return p == null
        ? '-'
        : `${p.toFixed(2)} %`;
};