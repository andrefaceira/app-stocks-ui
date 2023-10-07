<script lang="ts">
	import type { FinancialsTableRow } from '$lib/financials-table/financials-table-row.type';
	import type { FinancialsTableColumn } from '$lib/financials-table/financials-table-column.type';
	import type { FinancialsTableData } from '$lib/financials-table/financials-table-data.type';

	import FinancialsTable from '$lib/financials-table/financials-table.svelte';
	
    export let symbol: string;

    var rows: FinancialsTableRow[] = [
		{
			label: 'Revenue',
			key: 'revenue'
		},
		{
			label: 'Profit',
			key: 'profit'
		}
	];

	var columns: FinancialsTableColumn[] = [
		{
			key: 'year'
		}
		// {
		// 	key: 'quarter',
		// },
	];

	var data: FinancialsTableData[] = [
		{
			label: '',
			values: [
				{
					year: 2020,
					quarter: 1,
					revenue: 1,
					profit: 2
				},
				// {
				// 	year: 2020,
				// 	quarter: 2,
				// 	revenue: 1,
				// 	profit: 2
				// },
				// {
				// 	year: 2020,
				// 	quarter: 3,
				// 	revenue: 1,
				// 	profit: 2
				// },
				// {
				// 	year: 2020,
				// 	quarter: 4,
				// 	revenue: 1,
				// 	profit: 2
				// },
				{
					year: 2021,
					quarter: 0,
					revenue: 1,
					profit: 2
				},
				{
					year: 2022,
					quarter: 0,
					revenue: 1,
					profit: 2
				}
			]
		},
		{
			label: '-1',
			values: [
				{
					year: 2020,
					quarter: 1,
					revenue: 1,
					profit: 2
				},
				// {
				// 	year: 2020,
				// 	quarter: 2,
				// 	revenue: 1,
				// 	profit: 2
				// },
				// {
				// 	year: 2020,
				// 	quarter: 3,
				// 	revenue: 1,
				// 	profit: 2
				// },
				// {
				// 	year: 2020,
				// 	quarter: 4,
				// 	revenue: 1,
				// 	profit: 2
				// },
				{
					year: 2021,
					quarter: 0,
					revenue: 10,
					profit: 20
				},
				{
					year: 2022,
					quarter: 0,
					revenue: 10,
					profit: 20
				}
			]
		}
	];
</script>

<FinancialsTable {rows} {columns} {data} />
