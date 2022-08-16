<script lang="ts">
	import { onMount } from 'svelte';
	import 'styles/master.scss';
	import '@wevisdemo/ui/styles/typography.css';
	import '@wevisdemo/ui/styles/components.css';

	import Loader from 'components/loader/loader.svelte';

	let all_import = 15 + 1; /* onMount + pages */
	let complete_import = 0;
	let status: string[] = [];

	const finish_load = (what_loaded: string) => {
		complete_import += 1;
		status = [...status, what_loaded];
	};

	let S1: any;
	let S2: any;
	let S3: any;
	let S4: any;

	let S5: any;
	let S6: any;
	let S7: any;
	let S8: any;

	let S9: any;
	let S10: any;
	let S11: any;
	let S12: any;

	let S16: any;
	let S17: any;
	let S18: any;

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

	import('components/s3/s3.svelte').then((c) => {
		S3 = c.default;
		finish_load('ส่วนที่ 3 สำเร็จ');
	});

	import('components/s4/s4.svelte').then((c) => {
		S4 = c.default;
		finish_load('ส่วนที่ 4 สำเร็จ');
	});

	import('components/s5/s5.svelte').then((c) => {
		S5 = c.default;
		finish_load('ส่วนที่ 5 สำเร็จ');
	});

	import('components/s6/s6.svelte').then((c) => {
		S6 = c.default;
		finish_load('ส่วนที่ 6 สำเร็จ');
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

	import('components/s10/s10.svelte').then((c) => {
		S10 = c.default;
		finish_load('ส่วนที่ 10 สำเร็จ');
	});

	import('components/s11/s11.svelte').then((c) => {
		S11 = c.default;
		finish_load('ส่วนที่ 11 สำเร็จ');
	});

	import('components/s12/s12.svelte').then((c) => {
		S12 = c.default;
		finish_load('ส่วนที่ 12 สำเร็จ');
	});

	import('components/s16/s16.svelte').then((c) => {
		S16 = c.default;
		finish_load('ส่วนที่ 16 สำเร็จ');
	});

	import('components/s17/s17.svelte').then((c) => {
		S17 = c.default;
		finish_load('ส่วนที่ 17 สำเร็จ');
	});

	import('components/s18/s18.svelte').then((c) => {
		S18 = c.default;
		finish_load('ส่วนที่ 18 สำเร็จ');
	});

	$: load_percent = (complete_import / all_import) * 100;
</script>

<a
	href="https://theyworkforus.wevis.info/"
	rel="nofollow noopener noreferrer"
	style="position:fixed;top:.75rem;left:1rem;z-index:99;mix-blend-mode:difference"
>
	<img
		src="/shaking-parliament/wevis-logo.svg"
		alt=""
		decoding="async"
		loading="eager"
		style="height:1.75rem"
	/>
</a>
<Loader {load_percent} {status} />
{#if load_percent === 100}
	<svelte:component this={S1} />
	<svelte:component this={S2} />
	<svelte:component this={S3} />
	<svelte:component this={S4} />
	<svelte:component this={S5} />
	<svelte:component this={S6} />
	<svelte:component this={S7} />
	<svelte:component this={S8} />
	<svelte:component this={S9} />
	<svelte:component this={S10} />
	<svelte:component this={S11} />
	<svelte:component this={S12} />
	<svelte:component this={S16} />
	<svelte:component this={S17} />
	<svelte:component this={S18} />
{/if}
