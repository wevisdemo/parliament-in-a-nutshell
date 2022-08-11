<script lang="ts">
	import { onMount } from 'svelte';
	import 'styles/master.scss';

	import Loader from 'components/loader/loader.svelte';

	let all_import = 9 + 1; /* onMount + pages */
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
	let S9: any;
	let S11: any;

	let S12: any;

	onMount(() => {
		finish_load('Svelte กำลังรัน');
	});

	import('components/s1/s1.svelte').then((c) => {
		S1 = c.default;
		finish_load('ส่วนที่ 1 สำเร็จ');
	});

	import('components/s2/s2.svelte').then((c) => {
		S2 = c.default;
		finish_load('ส่วนที่ 2 สำเร็จ');
	});

	import('components/s3s4/s3s4.svelte').then((c) => {
		S3S4 = c.default;
		finish_load('ส่วนที่ 3 และ 4 สำเร็จ');
	});

	import('components/s5s6/s5s6.svelte').then((c) => {
		S5S6 = c.default;
		finish_load('ส่วนที่ 5 และ 6 สำเร็จ');
	});

	import('components/s7/s7.svelte').then((c) => {
		S7 = c.default;
		finish_load('ส่วนที่ 7 สำเร็จ');
	});

	import('components/s8/s8.svelte').then((c) => {
		S8 = c.default;
		finish_load('ส่วนที่ 8 สำเร็จ');
	});

	import('components/s9/s9-1.svelte').then((c) => {
		S9 = c.default;
		finish_load('ส่วนที่ 9 สำเร็จ');
	});

	import('components/s11/s11.svelte').then((c) => {
		S11 = c.default;
		finish_load('ส่วนที่ 11 สำเร็จ');
	});

	import('components/s12/s12.svelte').then((c) => {
		S12 = c.default;
		finish_load('ส่วนที่ 12 สำเร็จ');
	});

	$: load_percent = (complete_import / all_import) * 100;
</script>

<Loader {load_percent} {status} />
{#if load_percent === 100}
	<svelte:component this={S1} />
	<svelte:component this={S2} />
	<svelte:component this={S3S4} />
	<svelte:component this={S5S6} />
	<svelte:component this={S7} />
	<svelte:component this={S8} />
	<svelte:component this={S9} />
	<svelte:component this={S11} />
	<svelte:component this={S12} />
{/if}
