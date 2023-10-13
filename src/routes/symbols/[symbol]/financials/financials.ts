
let timeframe: FinancialsTimeframe = FinancialsTimeframe.year;

export const getTimeframe = () => timeframe;


let financialFields: FinancialsFieldConfiguration[] = [
    {
        label: "Revenue",
        accessor: p => p.revenue,
        selected: true,
    },
    {
        label: "Profit",
        accessor: p => p.profit,
        hidden: true,
    }
]

export const getFinancialFields = () => financialFields;


let financialsReports: FinancialsReportConfiguration[] = [
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

export const getFinancialsReports = () => financialsReports;


const formatNumber = (p: Nullable<number>): string => {
    if (p == null) {
        return '-';
    }

    return p.toFixed(2);
};

const formatPercentage = (p: Nullable<number>): string => {
    if (p == null) {
        return '-';
    }

    return `${p.toFixed(2)} %`;
};