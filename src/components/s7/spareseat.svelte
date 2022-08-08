<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { sineOut } from 'svelte/easing';

	export let num = 0;
	export let startIncrementWhen = false;

	let num_display = tweened(0, { duration: 500, easing: sineOut });

	$: {
		if (startIncrementWhen) {
			setTimeout(() => {
				num_display.set(num);
			}, 1250);
		}
	}
</script>

<div class="bignum-container">
	<div class="bignum-text tc">
		เกิด<br />
		ที่นั่งว่าง
	</div>
	<div class="title-container" />
	<div class="base-num T1 tc">{~~$num_display}</div>
	<div class="unit tc">ที่นั่ง</div>
</div>

<style lang="scss">
	.bignum-container {
		height: 184px;
	}

	.bignum-text {
		white-space: nowrap;
	}

	.base-num {
		position: absolute;
		right: -10%;
		bottom: 1.5rem;
		width: 120%;

		font-size: 7rem;
		font-weight: 700;
		line-height: 1;
		font-variant-numeric: tabular-nums;
	}

	.bignum-text,
	.unit {
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 1;
	}

	.unit {
		position: absolute;
		width: 100%;
		bottom: 0rem;
	}
</style>
