<script lang="ts">
	const SIDE_DATA = {
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
</script>

<div class="title-container">
	<img
		src="/shaking-parliament/part1/{SIDE_DATA[side].image}"
		alt=""
		decoding="async"
		loading="lazy"
	/>
	<div class="bignum-text">
		เป็น ส.ส.<br />
		ฝ่าย<span style="color:{SIDE_DATA[side].color}">{side}</span>
	</div>
</div>

<style lang="scss">
	.title-container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;

		font-size: 1.5rem;
		font-weight: 700;
		line-height: 1;
	}

	.bignum-text {
		white-space: nowrap;
	}
</style>
