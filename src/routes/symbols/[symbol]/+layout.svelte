<script lang="ts">
	import Menu from './menu.svelte';
</script>

<div class="drawer drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-side">
		<Menu />
	</div>
	<div class="drawer-content p-8 bg-base-200">
		<div class="card w-full p-6 bg-base-100 shadow-xl mt-6">
			<div class="text-left text-xl font-semibold">Financials</div>
			<div class="divider mt-2" />
			<div class="card-body">
				<slot />
			</div>
		</div>
	</div>
</div>
