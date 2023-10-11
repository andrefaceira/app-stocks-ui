<script lang="ts">
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
			<li><a>Details</a></li>
			<li><a>Financials</a></li>
			<li><a>Ownership</a></li>
		</ul>
	</div>
</div>
