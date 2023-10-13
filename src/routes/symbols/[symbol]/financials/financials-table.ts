import { getFinancialFieldsConfig, getFinancialsReportsConfig } from './financials';
import { FinancialsTimeframe } from './financials';


export const getHeadRows = (financialReports: FinancialReport[], timeframe: FinancialsTimeframe): TableRowGroup[] => {
    if (financialReports.length < 1) {
        return [];
    }

    let financials: Financial[] = financialReports[0].financials;

    const yearsCount: Record<string, number> = financials.reduce((acc, item) => {
        const key = item.year.toString();
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const yearRow: TableRow = {
        cells: Object.entries(yearsCount).map(([value, count]) => ({
            value,
            count,
        })),
    };

    if (timeframe == FinancialsTimeframe.year) {
        return [{
            rows: [yearRow],
        }];
    }

    const quarterRow: TableRow = {
        cells: financials.map(p => ({
            value: `Q${p.quarter}`,
        }))
    };

    return [{
        rows: [yearRow, quarterRow],
    }];
};

export const getBodyRows = (financialReports: FinancialReport[]): TableRowGroup[] => {
    return getFinancialFieldsConfig()
        .filter(field => !field.hidden)
        .map(field => ({
            label: field.label,
            rows: getFinancialsReportsConfig()
                .filter(config => !config.hidden)
                .filter(config => financialReports
                    .filter(report => report.type == config.key).length > 0)
                .map(config => ({
                    label: config.label,
                    cells: financialReports
                        .filter(report => report.type == config.key)[0]
                        .financials
                        .map(report => ({
                            value: config.accessor(field.accessor(report))
                        })),
                })),
        }));
};
