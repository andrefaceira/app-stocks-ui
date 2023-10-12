<script lang="ts">
	import { page } from '$app/stores';

	type SymbolPage = {
		label: string;
		key: string;
	};

	const symbolsPages: SymbolPage[] = [
		{
			label: 'Details',
			key: 'details'
		},
		{
			label: 'Financials',
			key: 'financials'
		},
		{
			label: 'Ownership',
			key: 'ownership'
		}
	];

	const getPagePath = (key: string): string => `/symbols/${$page.params.symbol}/${key}`;
</script>

<div class="drawer drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col p-8 bg-base-200">
		<div class="card w-full p-6 bg-base-100 shadow-xl mt-6">
			<div class="text-left text-xl font-semibold">Financials</div>
			<div class="divider mt-2" />
			<slot />
			<div class="card-body" />
		</div>
	</div>
	<div class="drawer-side">
		<ul class="menu pt-2 w-60 bg-base-100 text-base-content">
			{#each symbolsPages as symbolPage}
				<li class={$page.url.pathname == getPagePath(symbolPage.key) ? 'bg-base-200' : ''}>
					<a href={getPagePath(symbolPage.key)}>{symbolPage.label}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
