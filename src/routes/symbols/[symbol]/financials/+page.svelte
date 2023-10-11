<script lang="ts">
	import Financials from '$lib/financials/financials.svelte';
	import { page } from '$app/stores';

	let symbol = $page.params.symbol;
</script>


<div class="text-xl font-semibold ">Financials - {symbol}</div>
<div class="divider mt-2"></div>
<div class="card w-full p-6 bg-base-100 shadow-xl mt-6">
	<div class="card-body">
		<Financials />
	</div>
</div>
