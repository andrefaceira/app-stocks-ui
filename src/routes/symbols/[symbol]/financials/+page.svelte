<script lang="ts">
	import { page } from '$app/stores';

	import { type SymbolFinancials, type Financial, getFinancialsYear, getFinancialsQuarter } from './financials';

	import type { Table, TableHeaderCellGrouping, TableRow } from './financials-table';
	import FinancialsTable from './financials-table.svelte';

	let symbol: string = $page.params.symbol;

	let financialsYear: SymbolFinancials = getFinancialsYear(symbol);
	let financialsQuarter: SymbolFinancials = getFinancialsQuarter(symbol);

	let financials = financialsQuarter;

	interface KeyValuePair<T> {
		[key: string]: T;
	}

	var yearsCount: KeyValuePair<number> = financials.nominal.reduce((acc, item) => {
		let key = item.year.toString();

		if (!(key in acc)) {
			acc[key] = 0;
		}

		acc[key]++;

		return acc;
	}, {} as KeyValuePair<number>);

	var yearsRow: TableHeaderCellGrouping[] = Object.keys(yearsCount).map((p) => {
		return {
			value: p,
			count: yearsCount[p]
		};
	});

	var quartersRow: string[] = financials.nominal.map((p) => `Q${p.quarter}`);

	var financialsColumns = [
		{
			key: 'Revenue',
			value: (p: Financial) => p.revenue
		},
		// {
		// 	key: 'revenue',
		// 	value: 'other'
		// }
	];

	let formatMoney = (p: number | null | undefined): string => {
		if (p == null) {
			return '-'
		}
	
		return p.toFixed(2);
	};

	let formatPercentage = (p: number | null | undefined): string => {
		if (p == null) {
			return '-'
		}
	
		return `${p.toFixed(2)} %`;
	};

	var bodyRows: TableRow[] = financialsColumns.map((p) => {
		return {
			value: p.key,
			subRows: [
				{
					value: 'M$',
					cells: financials.nominal.map((pp) => formatMoney(p.value(pp)))
				},
				{
					value: 'growth-1',
					cells: financials.growth1.map((pp) => formatPercentage(p.value(pp)))
				},
				{
					value: 'growth-2',
					cells: financials.growth2.map((pp) => formatPercentage(p.value(pp)))
				},
				{
					value: 'growth-3',
					cells: financials.growth3.map((pp) => formatPercentage(p.value(pp)))
				},
				{
					value: 'growth-4',
					cells: financials.growth4.map((pp) => formatPercentage(p.value(pp)))
				}
			]
		};
	});

	let table: Table = {
		header: {
			colspan: 2,
			groupingRows: [yearsRow],
			subRows: [quartersRow]
		},
		bodyRows: bodyRows
	};
</script>

<FinancialsTable {table} />
