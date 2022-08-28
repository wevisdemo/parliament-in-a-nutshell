<script lang="ts">
	const SIDE_DATA = {
		รัฐบาล: { color: '#5b5b5b' },
		อิสระ: { color: '#858585' },
		ค้าน: { color: '#9f9e9e' }
	};

	export let side: 'รัฐบาล' | 'ค้าน' | 'อิสระ' = 'รัฐบาล';
</script>

<div class="title-container">
	{#if side === 'รัฐบาล'}
		<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="1" y="1" width="24" height="24" rx="7" stroke="#000" stroke-width="2" />
		</svg>
	{:else if side === 'ค้าน'}
		<svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="12" cy="12" r="11" stroke="#000" stroke-width="2" />
		</svg>
	{:else}
		<svg
			width="28.6"
			height="26"
			viewBox="0 0 27 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M19.2227 1.76846L25.2453 12.2L19.2227 22.6315L7.17737 22.6315L1.15472 12.2L7.17737 1.76846L19.2227 1.76846Z"
				stroke="#000"
				stroke-width="2"
			/>
		</svg>
	{/if}
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
