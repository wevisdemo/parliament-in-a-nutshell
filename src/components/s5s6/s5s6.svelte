<script lang="ts">
	import { onMount } from 'svelte';
	import { animate, inView, stagger, timeline, scroll, ScrollOffset } from 'motion';
	import Curtain from './curtain.svelte';

	let el_logo_container: any;
	let is_logo_inview = false;

	let el_circle_container: any;
	let el_chair_container: any;
	onMount(() => {
		inView(
			el_logo_container,
			() => {
				is_logo_inview = true;
			},
			{ amount: 0.5 }
		);

		inView(
			el_circle_container,
			() => {
				const [first, ...rest] = el_circle_container.children;
				animate(first, { opacity: 1 }, { duration: 1 });
				animate(
					rest,
					{
						opacity: 1,
						transform: [`translateY(-100px)`, `translateY(0px)`]
					},
					{ duration: 1, delay: stagger(0.25) }
				);
			},
			{ amount: 0.2 }
		);

		const el_chairchild = el_chair_container.children;
		const seq: TimelineDefinition = [
			[
				el_chairchild[0],
				{ transform: ['translateY(0px)', 'translateY(600px)'] },
				{ easing: 'linear' }
			],
			[
				el_chairchild[1],
				{ transform: ['translateY(0px)', 'translateY(600px)'] },
				{ easing: 'linear', at: '<' }
			],
			[
				el_chairchild[2],
				{ transform: ['translateY(0px)', 'translateY(400px)'] },
				{ easing: 'linear', at: '<' }
			],
			[
				el_chairchild[3],
				{ transform: ['translateY(0px)', 'translateY(400px)'] },
				{ easing: 'linear', at: '<' }
			]
		];

		scroll(timeline(seq), {
			target: el_chair_container,
			offset: ScrollOffset.Exit
		});
	});
</script>

<section class="h100 s5-container c" class:in-view={is_logo_inview} bind:this={el_logo_container}>
	<img
		class="logo-decor"
		src="/shaking-parliament/title_decor.svg"
		alt=""
		decoding="async"
		loading="lazy"
	/>
	<img class="logo" src="/shaking-parliament/title.png" alt="" decoding="async" loading="lazy" />
</section>
<!-- s6 -->
<div style="--h:calc(210vh + 480px)">
	<div class="stick part1-section" style="--h:calc(110vh + 480px)">
		<div bind:this={el_chair_container} class="part1-decor">
			<img
				class="chair1"
				src="/shaking-parliament/part1_bg1.png"
				alt=""
				decoding="async"
				loading="lazy"
			/>
			<img
				class="chair2"
				src="/shaking-parliament/part1_bg2.png"
				alt=""
				decoding="async"
				loading="lazy"
			/>
			<img
				class="chair3"
				src="/shaking-parliament/part1_bg3.png"
				alt=""
				decoding="async"
				loading="lazy"
			/>
			<img
				class="chair4"
				src="/shaking-parliament/part1_bg4.png"
				alt=""
				decoding="async"
				loading="lazy"
			/>
		</div>
		<div class="h100 c">
			<img
				class="title-img"
				src="/shaking-parliament/part1_title.png"
				alt=""
				decoding="async"
				loading="lazy"
			/>
		</div>
		<div bind:this={el_circle_container}>
			<p class="part1-circle c tc">
				มาสำรวจสถิติ<br />
				<strong>
					การออกสภา<br />
					และการแทนที่<br />
				</strong>
				ตลอดสมัยสภาผู้แทนราษฎร<br />
				ชุดที่ 25 กันดีกว่า
			</p>
			<img
				class="part1-deco-circle c1"
				src="/shaking-parliament/circle_03.svg"
				alt=""
				decoding="async"
				loading="lazy"
			/>
			<img
				class="part1-deco-circle c2"
				src="/shaking-parliament/circle_03.svg"
				alt=""
				decoding="async"
				loading="lazy"
			/>
			<img
				class="part1-deco-circle c3"
				src="/shaking-parliament/circle_03.svg"
				alt=""
				decoding="async"
				loading="lazy"
			/>
		</div>
	</div>
	<Curtain />
</div>

<style lang="scss">
	@keyframes flickering {
		70.1%,
		100% {
			opacity: 1;
		}

		50%,
		60%,
		20% {
			opacity: 0.5;
		}

		0%,
		19.9%,
		20.1%,
		49.9%,
		50.1%,
		69.9%,
		99.9% {
			opacity: 0.1;
		}
	}

	.s5-container {
		background: #000;

		> .logo {
			opacity: 0.1;

			height: 60vh;
			width: 60vw;
			object-fit: contain;
		}

		> .logo-decor {
			opacity: 0.3;

			height: 70vh;
			width: 70vw;
			object-fit: contain;

			position: absolute;
			top: 15vh;
		}

		&.in-view {
			> .logo {
				opacity: 1;
				animation: flickering 1s linear forwards;
			}
			> .logo-decor {
				opacity: 1;
				transition: opacity 1s linear;
				transition-delay: 0.5s;
			}
		}
	}

	.part1-decor {
		position: absolute;
		inset: 0;
		width: 100%;

		> img {
			position: absolute;

			&.chair1 {
				top: 0;
				left: 3%;
				max-width: 30vw;
			}

			&.chair2 {
				top: 0;
				right: 0;
				max-width: 30vw;
			}

			&.chair3 {
				top: 25%;
				left: 0;
				max-width: 40vw;
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

	.part1-circle {
		background: #000;
		color: white;

		width: 315px;
		height: 315px;

		border-radius: 50%;

		margin: auto;

		position: relative;
		z-index: 1;

		font-size: 1.2rem;
		line-height: 1.5;

		opacity: 0;

		> strong {
			font-size: 2rem;
			line-height: 1.2;
		}
	}

	.part1-deco-circle {
		position: absolute;
		top: 54px;
		left: calc(50% - 315px / 2);

		width: 315px;
		height: 315px;

		opacity: 0;

		&.c2 {
			top: 108px;
		}

		&.c3 {
			top: 162px;
		}
	}
</style>
