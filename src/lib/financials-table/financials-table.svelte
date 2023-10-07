<script lang="ts">
	import type { FinancialsTableRow } from './financials-table-row.type';
	import type { FinancialsTableColumn } from './financials-table-column.type';
    import type { FinancialsTableData } from './financials-table-data.type';

	export let rows: FinancialsTableRow[];
	export let data: FinancialsTableData[];
	export let columns: FinancialsTableColumn[];
</script>

<table> 
	{#each columns as column, i}
		<thead>
			<tr>
				{#if i == 0}
					<th rowspan={columns.length} colspan="2" />
				{/if}

				{#each data[0].values as value}
					<th>{value[column.key]}</th>
				{/each}
			</tr>
		</thead>
	{/each}
	{#each rows as row}
		<tbody>
			{#each data as subRow, i}
				<tr>
					{#if i == 0}
						<td rowspan={data.length}>
							{row.label}
						</td>
					{/if}

					<td>{subRow.label}</td>

					{#each subRow.values as value}
						<td>{value[row.key]}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	{/each}
</table>
