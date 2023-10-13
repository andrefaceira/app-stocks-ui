import { getFinancialFields as getFinancialFieldsConfiguration, getFinancialsReports as getFinancialsReportsConfiguration } from './financials';


export const getHeadRows = (financials: Financial[], timeframe: FinancialsTimeframe): TableRow[] => {
    const yearsCount: Record<string, number> = financials.reduce((acc, item) => {
        const key = item.year.toString();
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const yearRow: TableRow = Object.entries(yearsCount).map(([value, count]) => ({
        value,
        count,
    }));

    if (timeframe == FinancialsTimeframe.year) {
        return [yearRow];
    }

    const quarterRow: TableRow = financials.map(p => ({
        value: `Q${p.quarter}`,
    }));

    return [yearRow, quarterRow];
};

export const getBodyRows = (financialReports: FinancialReport[]): TableRowGroup[] => {
    return getFinancialFieldsConfiguration()
        .filter(p => p.hidden)
        .map(p => getFinancialsReportsConfiguration()
            .map(r => getRowCell(financialReports, r, p)));



    // financialGroups.forEach((group) => {
    //     const row: TableRow = {
    //         groupName: group.name,
    //         cells: financialFields.map((field) => {
    //             const value = group.financials.reduce((sum, financial) => sum + field.accessor(financial), 0);
    //             return {
    //                 label: field.label,
    //                 value,
    //                 hidden: field.hidden ?? false,
    //             };
    //         }),
    //     };

    //     tableRows.push(row);
    // });
};

const getRowCell = (financialReports: FinancialReport[], financialsReportConfiguration: FinancialsReportConfiguration, financialsFieldConfiguration: FinancialsFieldConfiguration): TableRow => {
    const report: FinancialReport = financialReports
    .filter(p => p.type == financialsReportConfiguration.key)[0];

    return [];
    // const val = financialsFieldConfiguration.accessor()
}