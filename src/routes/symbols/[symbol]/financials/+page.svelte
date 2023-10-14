<script lang="ts">
	import { page } from '$app/stores';

	import FinancialsTable from './financials-table.svelte';
	import { FinancialsTimeframe, getFinancialFieldsConfig, getFinancialsReportsConfig } from './financials';
	import { getFinancialsQuarter } from './financials-dummy-data';
	
	let fieldsConfig: FinancialsFieldConfiguration[] = getFinancialFieldsConfig();
	let financialsReportConfig: FinancialsReportConfiguration[] = getFinancialsReportsConfig();

	const symbol: string = $page.params.symbol;

	const timeframe: FinancialsTimeframe = FinancialsTimeframe.quarter;
	const financialReports: FinancialReport[] = getFinancialsQuarter(symbol);

</script>

<FinancialsTable {financialReports} {timeframe} {fieldsConfig} {financialsReportConfig} />
