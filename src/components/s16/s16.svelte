<script lang="ts">
	import { onMount } from 'svelte';
	import { animate, inView, stagger, timeline, scroll } from 'motion';

	import Caret from 'components/Caret.svelte';

	let el_dots_container: any;
	let el_deco_container: any;
	onMount(() => {
		inView(
			el_dots_container,
			() => {
				animate(
					el_dots_container.children,
					{
						opacity: [0, 1],
						transform: ['translateY(-100%)', 'translateY(0)']
					},
					{ duration: 1, delay: stagger(0.25) }
				);
			},
			{ amount: 1 }
		);

		const el_decochild = el_deco_container.children;
		const seq: TimelineDefinition = [
			[
				el_decochild[0],
				{ transform: ['translateY(-50%)', 'translateY(30%)'] },
				{ easing: 'linear' }
			],
			[
				el_decochild[1],
				{ transform: ['translateY(-40%) translateX(-20%)', 'translateY(20%) translateX(-20%)'] },
				{ easing: 'linear', at: '<' }
			]
		];

		scroll(timeline(seq), {
			target: el_deco_container,
			offset: ['start end', 'end start']
		});
	});
</script>

<div class="semi-circ" style="--h:min(20vw,30vh) /* O */" />
<div bind:this={el_dots_container} class="_3dots c row vert" style="--gap:48px">
	<div class="dot dot1" />
	<div class="dot dot2" />
	<div class="dot dot3" />
</div>
<div class="s16-container c tc">
	<div bind:this={el_deco_container} class="decor">
		<img
			class="d1"
			src="/shaking-parliament/p16_hand_right.png"
			alt=""
			decoding="async"
			loading="lazy"
			width="471"
			height="267"
		/>
		<img
			class="d2"
			src="/shaking-parliament/part1_bg3.png"
			alt=""
			decoding="async"
			loading="lazy"
			width="487"
			height="578"
		/>
	</div>
	<p>
		เดินทางมาไกลกันจนถึงปีสุดท้ายของสมัยสภา<br />
		<br />
		แต่ <strong>เกมเก้าอี้ดนตรี</strong> ที่ไม่เคยหยุดนิ่งนี้<br />
		จะยังคงสร้าง <strong>แรงกระเพื่อม</strong> ต่อการเมืองไทยต่อไป
	</p>
	<Caret />
</div>

<style lang="scss">
	.semi-circ {
		background: #000;
		border-radius: 0% 0% 50% 50% / 0% 0% 100% 100%;
	}

	.s16-container {
		padding: 250px 0 250px;
	}

	p {
		line-height: 1.5;
		font-size: 2rem;
		position: relative;

		text-shadow: 0 0 32px #fff, 0 0 16px #fff, 0 0 8px #fff, 0 0 4px #fff;

		> strong {
			font-size: 1.25em;
		}
	}

	._3dots {
		margin: 48px 0 0;
	}

	.dot {
		--dot-size: 96px;
		background: #000;
		width: var(--dot-size);
		height: var(--dot-size);
		border-radius: 25%;

		opacity: 0;
		transform: translateY(-100%);

		&.dot2 {
			--dot-size: 64px;

			border-radius: 50%;
		}

		&.dot3 {
			--dot-size: 40px;
			width: calc(var(--dot-size) * 1.1);
			clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
		}
	}

	.decor {
		position: absolute;
		inset: 0;

		> img {
			position: absolute;
			top: 0;
			object-fit: contain;
			object-position: center;

			&.d1 {
				right: 0;
				transform: translateY(-50%);
				max-width: 30vw;
			}
			&.d2 {
				top: 30%;
				left: 0;
				transform: translateY(-40%) translateX(-20%);
				max-width: 30vw;
			}
		}
	}
</style>
