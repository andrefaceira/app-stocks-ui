<script lang="ts">
	import { page } from '$app/stores';

	import type { SymbolFinancials } from './financials';
	import { getFinancialsYear } from './financials';
	import { getFinancialsQuarter } from './financials';

	import type { Table } from './financials-table';
	import FinancialsTable from './financials-table.svelte';

	let symbol: string = $page.params.symbol;

	let financialsYear: SymbolFinancials = getFinancialsYear(symbol);
	let financialsQuarter: SymbolFinancials = getFinancialsQuarter(symbol);

	let table: Table = {
		header: {
			colspan: 2,
			groupingRows: [
				[
					{
						value: '2020',
						count: 2
					},
					{
						value: '2021',
						count: 4
					},
					{
						value: '2020',
						count: 2
					}
				]
			],
			subRows: [['Q3', 'Q4', 'Q1', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2']]
		},
		bodyRows: [
			{
				value: 'Revenue',
				subRows: [
					{
						value: 'M$',
						cells: ['1', '2', '3', '4', '5', '6', '7', '8']
					},
					{
						value: 'growth-1',
						cells: ['10', '20', '30', '40', '50', '60', '70', '80']
					},
					{
						value: 'growth-2',
						cells: ['100', '200', '300', '400', '500', '600', '700', '800']
					}
				]
			},
			{
				value: 'other',
				subRows: [
					{
						value: 'M$',
						cells: ['1', '2', '3', '4', '5', '6', '7', '8']
					},
					{
						value: 'growth-1',
						cells: ['10', '20', '30', '40', '50', '60', '70', '80']
					},
					{
						value: 'growth-2',
						cells: ['100', '200', '300', '400', '500', '600', '700', '800']
					}
				]
			}
		]
	};
</script>

<FinancialsTable {table} />
