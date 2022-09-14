<div class="bignum-container">
	<div class="bignum-text tc">
		เกิด<br />
		ที่นั่งว่าง
	</div>
	<div class="title-container" />
	<div class="base-num T1 tc">
		<svg viewBox="-4 -4 89 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="15">
			<path
				class="svg15"
				stroke="#000"
				stroke-width="2"
				d="M10.7817 63V18.35L0.616699 19.87V4.955L28.6417 0.869996V63H10.7817ZM54.884 63.95C53.1106 63.95 51.0206 63.8233 48.614 63.57C46.2706 63.38 43.9273 63.0633 41.584 62.62C39.304 62.1133 37.309 61.48 35.599 60.72V46.375C37.119 47.0717 38.8606 47.6733 40.824 48.18C42.8506 48.6867 44.8773 49.0667 46.904 49.32C48.9306 49.5733 50.6406 49.7 52.034 49.7C55.5173 49.7 58.0506 49.1617 59.634 48.085C61.2806 47.0083 62.104 45.2983 62.104 42.955C62.104 40.7383 61.534 39.155 60.394 38.205C59.254 37.1917 57.1006 36.685 53.934 36.685H35.314V28.515L36.929 1.81999H76.544L75.309 15.5H52.224L51.654 24.24H58.589C65.999 24.24 71.4773 25.8867 75.024 29.18C78.5706 32.4733 80.344 37.2867 80.344 43.62C80.344 49.7 78.2223 54.6083 73.979 58.345C69.799 62.0817 63.434 63.95 54.884 63.95Z"
				fill="#fff"
			/>
		</svg>
	</div>
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
		bottom: 24px;
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
		bottom: 0;
	}

	.svg15 {
		stroke-dasharray: 6 3;
		animation: dashmove 1.5s linear infinite;
	}
</style>
