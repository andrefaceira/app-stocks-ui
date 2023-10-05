<script>
	var reportsNumber = 5;
	var reports = [
		{
			year: 2023,
			revenue: 41,
			profit: 42
		},
		{
			year: 2022,
			revenue: 31,
			profit: 32
		},
		{
			year: 2021,
			revenue: 21,
			profit: 22
		},
		{
			year: 2020,
			revenue: 11,
			profit: 12
		},
		{
			year: 2019,
			revenue: 1,
			profit: 2
		},
		{
			year: 2018,
			revenue: 1,
			profit: 2
		},
		{
			year: 2017,
			revenue: 1,
			profit: 2
		}
	];

	var columns = reports
		.slice(0, reportsNumber)
		.sort((p) => p.year)
		.map((p) => p.year);

	var rows = [
		{
			label: 'Revenue',
			subRows: [
				{
					values: [1, 2, 3, 4, 5]
				},
				{
					values: [1, 2, 3, 4, 5]
				}
			],
			childRows: [
				{
					label: 'Costs of Good Sold',
					subRows: [
						{
							values: [10, 20, 30, 40, 50]
						},
						{
							values: [10, 20, 30, 40, 50]
						}
					]
				}
			]
		},
		{
			label: 'Revenue2',
			subRows: [
				{
					values: [1, 2, 3, 4, 5]
				},
				{
					values: [1, 2, 32, 4, 5]
				}
			],
			childRows: []
		}
	];
</script>

<h1>Welcome to SvelteKit</h1>

<table>
	<thead>
		<tr>
			<th colspan="10" />

			{#each columns as column}
				<th>{column}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each rows as row}

			{#each row.subRows as subRow, i}
				<tr>
					{#if i == 0}
						<td colspan="10">{row.label}</td>
					{:else}
						<td colspan="10" />
					{/if}

					{#each subRow.values as value}
						<td>{value}</td>
					{/each}
				</tr>
			{/each}

			{#each row.childRows as childRow}
				{#each childRow.subRows as subRow, i}
					<tr>
						<td colspan="4" />

						{#if i == 0}
							<td colspan="6">{childRow.label}</td>
						{:else}
							<td colspan="6" />
						{/if}

						{#each subRow.values as value}
							<td>{value}</td>
						{/each}
					</tr>
				{/each}
			{/each}
		{/each}
	</tbody>
</table>