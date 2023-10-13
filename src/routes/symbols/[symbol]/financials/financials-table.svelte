<script lang="ts">
	export let table: any;
</script>

<table>
	<thead>
		{#each table.header.groupingRows as row}
			<tr>
				<th colspan={table.header.colspan ?? 0} rowspan={table.header.subRows.length + 1} />

				{#each row as cell}
					<th colspan={cell.count}>
						{cell.value}
					</th>
				{/each}
			</tr>
		{/each}
		{#each table.header.subRows as row}
			<tr>
				{#each row as cell}
					<th>
						{cell}
					</th>
				{/each}
			</tr>
		{/each}
	</thead>

	{#each table.bodyRows as row}
		<tbody>
			{#each row.subRows as subRow, i}
				<tr>
					{#if i == 0}
						<td rowspan={row.subRows.length}>{row.value}</td>
					{/if}

					<td class="text-right">{subRow.value}</td>

					{#each subRow.cells as cell}
						<td class="text-right">{cell}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	{/each}
</table>
