<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { sineOut } from 'svelte/easing';
	import { inView } from 'motion';

	const DATA = {
		รัฐบาล: {
			color: '#5b5b5b',
			image: 'mini_rect.svg'
		},
		อิสระ: {
			color: '#858585',
			image: 'mini_hex.svg'
		},
		ค้าน: {
			color: '#9f9e9e',
			image: 'mini_circle.svg'
		}
	};

	export let side: 'รัฐบาล' | 'ค้าน' | 'อิสระ' = 'รัฐบาล';
	export let oldNum = 0;
	export let newNum = 0;

	export let showNewNum = false;

	let old_num_display = tweened(0, { duration: 500, easing: sineOut });
	let new_num_display = tweened(0, { duration: 500, easing: sineOut });

	let el_bignum: any;
	onMount(() => {
		inView(
			el_bignum,
			() => {
				old_num_display.set(oldNum);
			},
			{ amount: 1 }
		);
	});

	$: {
		if (showNewNum) {
			new_num_display.set(newNum, { delay: 500 });
		}
	}
</script>

<div class="bignum-container" class:showNewNum bind:this={el_bignum}>
	<div class="title-container">
		<img
			src="/shaking-parliament/part1/{DATA[side].image}"
			alt=""
			decoding="async"
			loading="lazy"
		/>
		<div class="bignum-text">
			เป็น ส.ส.<br />
			ฝ่าย<span style="color:{DATA[side].color}">{side}</span>
		</div>
	</div>
	<div class="new-num T1 tc">{~~$new_num_display}</div>
	<div class="slash" />
	<div class="base-num T1 tc" style:--sidecolor={DATA[side].color}>{~~$old_num_display}</div>
	<div class="unit tc">คน</div>
	<div class="unit-new tc">คน</div>
</div>

<style lang="scss">
	.bignum-container {
		height: 184px;
	}

	.bignum-text {
		white-space: nowrap;
	}

	.title-container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	.slash {
		position: absolute;
		opacity: 0;

		width: 60%;
		height: 3px;

		background: black;

		top: 70%;
		left: 37%;
		transform-origin: center;
		transform: translateX(-10px) rotate(130deg);

		transition-property: opacity, transform;
		transition-duration: 0.5s;
	}

	.new-num {
		position: absolute;
		width: 100%;
		opacity: 0;

		transform: translateY(0.5rem);

		transition-property: transform, opacity;
		transition-duration: 0.5s;
	}

	.base-num {
		position: absolute;
		right: -10%;
		bottom: 0;
		width: 120%;

		transform: translateY(-1.5rem);

		transition-property: transform, color;
		transition-duration: 0.5s;
	}

	.base-num,
	.new-num {
		font-size: 7rem;
		font-weight: 700;
		line-height: 1;
		font-variant-numeric: tabular-nums;
	}

	.title-container,
	.unit,
	.unit-new {
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 1;
	}

	.unit {
		position: absolute;
		width: 100%;
		bottom: 0rem;

		transition-property: opacity, transform;
		transition-duration: 0.3s;
	}

	.unit-new {
		opacity: 0;
		position: absolute;
		left: 0;
		width: 80%;
		bottom: 2.8rem;
		transform: translateX(20%);

		transition-property: opacity, transform;
		transition-duration: 0.5s;
	}

	.bignum-container.showNewNum {
		.slash {
			opacity: 1;
			transform: rotate(130deg);
		}

		.new-num {
			opacity: 1;
			transform: translate(-0.75rem, -1rem) scale(0.57);
		}

		.base-num {
			color: var(--sidecolor);
			transform: translate(2.5rem, 2.5rem) scale(0.42);
		}

		.unit {
			opacity: 0;
			transform: translateX(20%);
		}

		.unit-new {
			opacity: 1;
			transform: translateX(0%);
		}
	}
</style>
