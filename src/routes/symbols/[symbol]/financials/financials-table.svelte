<script lang="ts">
	import { getBodyRows, getHeadRows } from './financials-table';
	import type { FinancialsTimeframe } from './financials';

	export let financialReports: FinancialReport[];
	export let timeframe: FinancialsTimeframe;

	const headRows: TableRowGroup[] = getHeadRows(financialReports, timeframe);
	const bodyRows: TableRowGroup[] = getBodyRows(financialReports);
</script>

<table>
	{#each headRows as rowGroup}
		<thead>
			{#each rowGroup.rows as row, i}
				<tr>
					{#if i == 0}
						<th colspan="2" rowspan={rowGroup.rows.length}>
							{rowGroup.label ?? ''}
						</th>
					{/if}

					{#each row.cells as cell}
						<th colspan={cell.count}>
							{cell.value}
						</th>
					{/each}
				</tr>
			{/each}
		</thead>
	{/each}

	{#each bodyRows as rowGroup}
		<tbody>
			{#each rowGroup.rows as row, i}
				<tr>
					{#if i == 0}
						<td rowspan={rowGroup.rows.length}>
							{rowGroup.label ?? ''}
						</td>
					{/if}

					<td class="text-right">{row.label ?? ''}</td>

					{#each row.cells as cell}
						<td class="text-right">{cell.value}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	{/each}
</table>
