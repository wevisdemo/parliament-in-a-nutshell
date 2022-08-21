<!-- SECTION 2 - OVERALL NUMBER -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { scroll, ScrollOffset, timeline, animate } from 'motion';

	import Arc from './arc.svelte';

	let show_current_data = false;

	let el_pill: any;
	let el_arc_container: any;
	let el_trigger: any;
	let el_t1: any;
	let el_t2: any;
	let year = 2562;

	onMount(() => {
		scroll(
			animate(el_pill, { transform: ['translateY(0) scale(1)', 'translateY(-24%) scale(0.75)'] }),
			{
				target: el_arc_container,
				offset: ScrollOffset.Enter
			}
		);

		scroll(
			({ y }) => {
				year = 2562 + ~~(y.progress * 3);
				if (y.progress === 1 && show_current_data === false) {
					show_current_data = true;
					return;
				}
				if (y.progress !== 1 && show_current_data === true) {
					show_current_data = false;
					return;
				}
			},
			{
				target: el_trigger,
				offset: ScrollOffset.Enter
			}
		);

		scroll(
			({ y }) => {
				if (y.progress === 1 && show_current_data === false) {
					show_current_data = true;
					return;
				}
				if (y.progress !== 1 && show_current_data === true) {
					show_current_data = false;
					return;
				}
			},
			{
				target: el_trigger,
				offset: ScrollOffset.Enter
			}
		);

		const seq: TimelineDefinition = [
			[
				el_t1,
				{ opacity: [1, 0], transform: ['translateY(0)', 'translateY(-150%)'] },
				{ easing: 'ease-out' }
			],
			[
				el_t2,
				{ opacity: [0, 1], transform: ['translateY(150%)', 'translateY(0)'] },
				{ at: '<', easing: 'ease-in' }
			]
		];

		scroll(timeline(seq), {
			target: el_trigger,
			offset: ScrollOffset.Enter
		});
	});
</script>

<section>
	<div bind:this={el_pill} class="h100 c tc stick">
		<div class="pill">{year}</div>
		<div class="title-container">
			<h1 bind:this={el_t1} class="T1">
				เปิดสมัยสภาผู้แทนราษฏรชุดที่ 25<br />
				<span class="bigger">มี ส.ส. ปฏิบัติหน้าที่อยู่ทั้งสิ้น ...</span>
			</h1>
			<h1 bind:this={el_t2} class="T1 title2">
				เวลาหมุนไป ถึงคราวสิ้นสุดสมัยสภา<br />
				<span class="bigger">มี ส.ส. ปฏิบัติหน้าที่อยู่ทั้งสิ้น ...</span>
			</h1>
		</div>
	</div>
	<div bind:this={el_arc_container} class="h100 c stick arc-container">
		<Arc {show_current_data} />
	</div>
	<div class="pen" style="--h:10vh" />
	<div bind:this={el_trigger} class="pen" style="--h:40vh" />
	<div class="pen" style="--h:20vh" />
</section>

<style lang="scss">
	.arc-container {
		padding-top: 15%;
		z-index: 1;
	}

	.pill {
		background: #000;
		border-radius: 999px;

		color: #fff;
		font-size: 2.25rem;
		letter-spacing: 2px;
		line-height: 2;
		white-space: nowrap;

		display: inline-block;
		margin-bottom: 8px;
		padding: 0 36px;
		z-index: 1;

		pointer-events: none;
	}

	.T1 {
		font-size: 3.75rem;
		line-height: 0.8;
		will-change: transform, opacity;
	}

	.bigger {
		font-size: 1.5em;
		line-height: 1.6;
	}

	.title2 {
		position: absolute;
		top: 0;
	}
</style>
