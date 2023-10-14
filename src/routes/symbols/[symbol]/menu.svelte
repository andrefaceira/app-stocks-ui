<script lang="ts">
	import { page } from '$app/stores';

	type SymbolPage = {
		label: string;
		key: string;
		svg?: string;
	};

	const symbolsPages: SymbolPage[] = [
		{
			label: 'Details',
			key: 'details',
			svg: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
		},
		{
			label: 'Financials',
			key: 'financials',
			svg: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z'
		},
		{
			label: 'Ownership',
			key: 'ownership',
			svg: 'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z'
		}
	];

	const basePath: string = `/symbols/${$page.params.symbol}`;
</script>

<ul class="menu menu-md w-56 rounded-box">
    {#each symbolsPages as symbolPage}
        <li>
            <a
                href={`${basePath}/${symbolPage.key}`}
                class={$page.url.pathname == `${basePath}/${symbolPage.key}` ? 'active' : ''}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d={symbolPage.svg} />
                </svg>

                {symbolPage.label}
            </a>
        </li>
    {/each}
</ul>