<script lang="ts">
	import { onMount } from 'svelte';
	import 'styles/master.scss';

	let all_import = 6 + 1; /* onMount + pages */
	let complete_import = 0;
	let status: string[] = [];

	const finish_load = (what_loaded: string) => {
		complete_import += 1;
		status = [...status, what_loaded];
	};

	let S1: any;
	let S2: any;
	let S3S4: any;
	let S5S6: any;
	let S7: any;
	let S8: any;

	onMount(() => {
		finish_load('Svelte mounted');
	});

	import('components/s1/s1.svelte').then((c) => {
		S1 = c.default;
		finish_load('S1 loaded');
	});

	import('components/s2/s2.svelte').then((c) => {
		S2 = c.default;
		finish_load('S2 loaded');
	});

	import('components/s3s4/s3s4.svelte').then((c) => {
		S3S4 = c.default;
		finish_load('S3S4 loaded');
	});

	import('components/s5s6/s5s6.svelte').then((c) => {
		S5S6 = c.default;
		finish_load('S5S6 loaded');
	});

	import('components/s7/s7.svelte').then((c) => {
		S7 = c.default;
		finish_load('S7 loaded');
	});

	import('components/s8/s8.svelte').then((c) => {
		S8 = c.default;
		finish_load('S8 loaded');
	});

	$: load_percent = ((complete_import / all_import) * 100).toFixed(2);
</script>

{#if load_percent !== '100.00'}
	<div class="h100 c">
		<h1>Loading...</h1>
		<p>{load_percent}%</p>
		<p>
			<small style="white-space:pre-wrap"
				>{status.length ? status.join('\n') : 'Waiting for Svelte'}</small
			>
		</p>
	</div>
{:else}
	<svelte:component this={S1} />
	<svelte:component this={S2} />
	<svelte:component this={S3S4} />
	<svelte:component this={S5S6} />
	<svelte:component this={S7} />
	<svelte:component this={S8} />
{/if}
