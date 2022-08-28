<script lang="ts">
	import 'styles/master.scss';
	import '@wevisdemo/ui/styles/typography.css';
	import '@wevisdemo/ui/styles/components.css';

	import { onMount } from 'svelte';
	import { weAreAlwaysHiring } from 'utils/we-are-hiring';

	import Loader from 'components/loader/loader.svelte';
	import GoTop from 'components/GoTop.svelte';
	import ScreenNotice from 'components/ScreenNotice.svelte';

	import S1 from 'components/s1/s1.svelte';
	import S2 from 'components/s2/s2.svelte';
	import S3 from 'components/s3/s3.svelte';
	import S4 from 'components/s4/s4.svelte';

	import S5 from 'components/s5/s5.svelte';
	import S6 from 'components/s6/s6.svelte';
	import S7 from 'components/s7/s7.svelte';
	import S8 from 'components/s8/s8.svelte';

	import S9 from 'components/s9/s9.svelte';
	import S10 from 'components/s10/s10.svelte';
	import S11 from 'components/s11/s11.svelte';
	import S12 from 'components/s12/s12.svelte';

	import S13 from 'components/s13/s13.svelte';
	import S14 from 'components/s14/s14.svelte';
	import S15 from 'components/s15/s15.svelte';
	import S16 from 'components/s16/s16.svelte';

	import S17 from 'components/s17/s17.svelte';
	import S18 from 'components/s18/s18.svelte';

	let loaded = false;
	let isReady = false;
	onMount(() => {
		weAreAlwaysHiring();
		loaded = true;
		if ('requestIdleCallback' in window) {
			window.requestIdleCallback(() => (isReady = true));
			// failsafe, the idle should not be long anyway
			setTimeout(() => window.requestAnimationFrame(() => (isReady = true)), 3000);
		} else {
			window.requestAnimationFrame(() => (isReady = true));
		}
	});
</script>

<a
	href="https://wevis.info/"
	rel="nofollow noopener noreferrer"
	style="position:fixed;top:12px;left:16px;z-index:99;mix-blend-mode:difference"
	title="WeVis"
>
	<img
		src="/shaking-parliament/wevis-logo.svg"
		alt="WeVis"
		decoding="async"
		loading="eager"
		width="93"
		height="28"
	/>
</a>
<ScreenNotice />
<Loader {loaded} {isReady} />
<GoTop />
<S1 />
<S2 />
<S3 />
<S4 />
<S5 />
<S6 />
<S7 />
<S8 />
<S9 />
<S10 />
<S11 />
<S12 />
<S13 />
<S14 />
<S15 />
<S16 />
<S17 />
<S18 />
