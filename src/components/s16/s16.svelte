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
						opacity: 1,
						transform: `translateY(0)`
					},
					{ duration: 1, delay: stagger(0.25) }
				);
			},
			{ amount: 1 }
		);

		const el_decochild = el_deco_container.children;
		const seq: TimelineDefinition = [
			[el_decochild[0], { transform: 'translateY(30%)' }, { easing: 'linear' }],
			[
				el_decochild[1],
				{ transform: ['translateY(-40%) translateX(-20%)', 'translateY(30%) translateX(-20%)'] },
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
		/>
		<img
			class="d2"
			src="/shaking-parliament/part1_bg3.png"
			alt=""
			decoding="async"
			loading="lazy"
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
		background: black;
		border-radius: 0% 0% 50% 50% / 0% 0% 100% 100%;
	}

	.s16-container {
		padding: 250px 0 250px;
	}

	p {
		line-height: 1.5;
		font-size: 2rem;
		position: relative;

		> strong {
			font-size: 1.25em;
		}
	}

	._3dots {
		margin: 48px 0 0;
	}

	.dot {
		--dot-size: 96px;
		background: black;
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

		> .d1 {
			position: absolute;
			top: 0;
			right: 0;
			transform: translateY(-40%);
		}

		> .d2 {
			position: absolute;
			left: 0;
			top: 30%;
			transform: translateY(-40%) translateX(-20%);
		}
	}
</style>
