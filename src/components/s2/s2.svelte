<!-- SECTION 2 - OVERALL NUMBER -->
<script lang="ts">
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { inView, scroll, animate, ScrollOffset } from 'motion';

	import ARC from 'components/s2/arc.svelte';

	let show_current_data = false;

	let el_part2_trigger;
	let el_h1;
	let el_h2;

	onMount(() => {
		inView(el_part2_trigger, () => {
			show_current_data = true;

			return () => (show_current_data = false);
		});

		scroll(
			animate(el_h1, {
				opacity: [1, 1, 0, 0]
			}),
			{
				target: el_h1,
				offset: ScrollOffset.Exit
			}
		);

		scroll(
			animate(el_h2, {
				opacity: [0, 0, 1, 1]
			}),
			{
				target: el_h1,
				offset: ScrollOffset.Exit
			}
		);
	});
</script>

<section>
	<div class="stick c" style="--h:120vh">
		<ARC {show_current_data} />
	</div>
	<div class="floating">
		<h1 bind:this={el_h1} class="T1">
			ณ ปีสุดท้าย ของสมัยสภาผู้แทนราษฏรชุดที่ 25<br />
			<span class="bigger">มี ส.ส. ปฏิบัติหน้าที่อยู่ทั้งสิ้น ...</span>
		</h1>
		<h1 bind:this={el_h2} class="T1">
			ณ ปีสุดท้าย ของสมัยสภาผู้แทนราษฏรชุดที่ 25<br />
			<span class="bigger">มี ส.ส. ปฏิบัติหน้าที่อยู่ทั้งสิ้น ...</span>
		</h1>
	</div>
	<div bind:this={el_part2_trigger} style="--h:40vh;margin-bottom:-40vh;" />
</section>

<style lang="scss">
	.stick {
		z-index: 1;
	}

	.floating {
		position: absolute;
		inset: 0;
	}

	h1 {
		width: 100%;
		padding-top: 17vh;
		margin: 0;
	}

	.bigger {
		font-size: 1.5em;
		line-height: 1.6;
	}
</style>
