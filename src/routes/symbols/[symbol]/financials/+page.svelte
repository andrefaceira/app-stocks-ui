<script lang="ts">
	import { page } from '$app/stores';

	import FinancialsTable from './financials-table.svelte';
	import { FinancialsTimeframe } from './financials';
	import { getFinancialsQuarter } from './financials-dummy-data';

	const symbol: string = $page.params.symbol;

	const timeframe: FinancialsTimeframe = FinancialsTimeframe.quarter;
	const financialReports: FinancialReport[] = getFinancialsQuarter(symbol);
</script>

<FinancialsTable {financialReports} {timeframe} />
