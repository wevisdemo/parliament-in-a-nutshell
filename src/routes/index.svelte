<script lang="ts">
	import { onMount } from 'svelte';
	import 'styles/master.scss';

	let complete_import = 0;
	let all_import = 6;

	let status: string[] = [];

	let S1: any;
	import('components/s1/s1.svelte').then((c) => {
		S1 = c.default;
		complete_import += 1;
		status = [...status, 'S1 ready'];
	});

	let S2: any;
	import('components/s2/s2.svelte').then((c) => {
		S2 = c.default;
		complete_import += 1;
		status = [...status, 'S2 ready'];
	});

	let S3S4: any;
	import('components/s3s4/s3s4.svelte').then((c) => {
		S3S4 = c.default;
		complete_import += 1;
		status = [...status, 'S3 ready', 'S4 ready'];
	});

	let S5S6: any;
	import('components/s5s6/s5s6.svelte').then((c) => {
		S5S6 = c.default;
		complete_import += 1;
		status = [...status, 'S5 ready', 'S6 ready'];
	});

	let S7: any;
	import('components/s7/s7.svelte').then((c) => {
		S7 = c.default;
		complete_import += 1;
		status = [...status, 'S7 ready'];
	});

	onMount(() => {
		complete_import += 1;
		status = [...status, 'Svelte mounted'];
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
{/if}
