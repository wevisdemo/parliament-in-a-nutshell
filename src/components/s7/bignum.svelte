<script lang="ts">
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
	export let num = '0';
</script>

<div class="bignum-container c">
	<div class="title-container">
		<img src="shaking-parliament/part1/{DATA[side].image}" alt="" />
		<div class="bignum-text">
			เป็น ส.ส.<br />
			ฝ่าย<span style="color:{DATA[side].color}">{side}</span>
		</div>
	</div>
	<div class="base-num T1 tc">{num}</div>
	<div class="unit">คน</div>
</div>

<style lang="scss">
	.title-container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	.base-num {
		font-size: 7rem;
		font-weight: 700;
		line-height: 1;
	}

	.title-container,
	.unit {
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 1;
	}
</style>
