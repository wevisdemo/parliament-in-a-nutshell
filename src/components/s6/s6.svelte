<script lang="ts">
	import { scroll, ScrollOffset, timeline } from 'motion';
	import { onMount } from 'svelte';

	import CircleFold from 'components/CircleFold.svelte';
	import Curtain from './curtain.svelte';

	let el_chair_container: any;
	onMount(() => {
		const el_chairchild = el_chair_container.children;
		const seq: TimelineDefinition = [
			[
				el_chairchild[0],
				{ transform: ['translateY(0)', 'translateY(600px)'] },
				{ easing: 'linear' }
			],
			[
				el_chairchild[1],
				{ transform: ['translateY(0)', 'translateY(600px)'] },
				{ easing: 'linear', at: '<' }
			],
			[
				el_chairchild[2],
				{ transform: ['translateY(0)', 'translateY(400px)'] },
				{ easing: 'linear', at: '<' }
			],
			[
				el_chairchild[3],
				{ transform: ['translateY(0)', 'translateY(400px)'] },
				{ easing: 'linear', at: '<' }
			]
		];

		scroll(timeline(seq), {
			target: el_chair_container,
			offset: ScrollOffset.Exit
		});
	});
</script>

<!-- VH skip check -->
<div style="--h:calc(210vh + 480px)">
	<div class="stick part1-section" style="--h:calc(110vh + 480px)">
		<div bind:this={el_chair_container} class="part1-decor" aria-hidden="true">
			<img
				class="chair1"
				src="/parliament-in-a-nutshell/part1_bg1.png"
				alt=""
				decoding="async"
				loading="lazy"
				width="348"
				height="286"
			/>
			<img
				class="chair2"
				src="/parliament-in-a-nutshell/part1_bg2.png"
				alt=""
				decoding="async"
				loading="lazy"
				width="430"
				height="372"
			/>
			<img
				class="chair3"
				src="/parliament-in-a-nutshell/part1_bg3.png"
				alt=""
				decoding="async"
				loading="lazy"
				width="487"
				height="578"
			/>
			<img
				class="chair4"
				src="/parliament-in-a-nutshell/part1_bg4.png"
				alt=""
				decoding="async"
				loading="lazy"
				width="537"
				height="660"
			/>
		</div>
		<h2 class="h100 c mtb0">
			<img
				class="title-img"
				src="/parliament-in-a-nutshell/part1_title.png"
				alt="บทที่ 1 — เริ่มเกมเก้าอี้ดนตรี ตลอดระยะเวลา 3 ปี มีตำแหน่งในที่ว่างลงบ้าง"
				decoding="async"
				loading="lazy"
			/>
		</h2>
		<CircleFold>
			มาสำรวจสถิติ<br />
			<strong style="font-size:2rem;line-height:1.2">
				การออกสภา<br />
				และการแทนที่<br />
			</strong>
			ตลอดสมัยสภาผู้แทนราษฎร<br />
			ชุดที่ 25 กันดีกว่า
		</CircleFold>
	</div>
	<Curtain />
</div>

<style lang="scss">
	.part1-decor {
		position: absolute;
		inset: 0;
		width: 100%;

		> img {
			position: absolute;
			object-fit: contain;
			object-position: center;

			&.chair1 {
				top: 0;
				left: 3%;
				max-width: 40vw;
			}

			&.chair2 {
				top: 0;
				right: 0;
				max-width: 30vw;
			}

			&.chair3 {
				top: 25%;
				left: 0;
				max-width: 30vw;
			}

			&.chair4 {
				top: 35%;
				right: 0;
				max-width: 40vw;
			}
		}
	}

	.title-img {
		width: min(75vw, 75vh);
	}
</style>
