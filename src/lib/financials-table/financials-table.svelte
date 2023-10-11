<script lang="ts">
	import type { FinancialsTableRow } from './financials-table-row.type';
	import type { FinancialsTableColumn } from './financials-table-column.type';
    import type { FinancialsTableData } from './financials-table-data.type';

	export let rows: FinancialsTableRow[];
	export let data: FinancialsTableData[];
	export let columns: FinancialsTableColumn[];
</script>

<div class="overflow-x-auto">
	<table class="table w-full table-zebra border-collapse border border-slate-500"> 
		{#each columns as column, i}
			<thead>
				<tr>
					{#if i == 0}
						<th class="border border-slate-600" rowspan={columns.length} colspan="2" />
					{/if}

					{#each data[0].values as value}
						<th class="text-center border border-slate-600">{value[column.key]}</th>
					{/each}
				</tr>
			</thead>
		{/each}
		{#each rows as row}
			<tbody>
				{#each data as subRow, i}
					<tr>
						{#if i == 0}
							<td class="text-center border border-slate-600" rowspan={data.length}>
								{row.label}
							</td>
						{/if}

						<td class="text-center border border-slate-600">{subRow.label}</td>

						{#each subRow.values as value}
							<td class="text-right border border-slate-600">
								{#if value[row.key]}
									{value[row.key]}
								{:else}
									-
								{/if}
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		{/each}
	</table>
</div>