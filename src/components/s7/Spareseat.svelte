<div class="bignum-container">
	<div class="bignum-text tc">
		เกิด<br />
		ที่นั่งว่าง
	</div>
	<div class="title-container" />
	<div class="base-num T1 tc">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-2 -2 91 68" aria-label="16">
			<path
				class="num-path"
				stroke="#000"
				stroke-width="2"
				d="M10.72 63V18.35L.555 19.87V4.955L28.58.87V63H10.72zm50.277.95c-17.163 0-25.745-8.265-25.745-24.795v-11.78c0-5.067 1.14-9.595 3.42-13.585 2.28-3.99 5.574-7.125 9.88-9.405C52.86 2.042 58.052.87 64.132.87c3.357 0 6.302.222 8.835.665a35.326 35.326 0 017.41 1.9v13.87a27.489 27.489 0 00-6.84-1.995c-2.343-.443-4.908-.665-7.695-.665-4.56 0-8.011.887-10.355 2.66-2.343 1.71-3.515 3.832-3.515 6.365v1.71c1.647-1.077 3.674-1.9 6.08-2.47 2.407-.57 4.655-.855 6.745-.855 7.537 0 13.015 1.773 16.435 5.32 3.484 3.483 5.225 8.518 5.225 15.105 0 4.117-.855 7.822-2.565 11.115-1.71 3.23-4.433 5.763-8.17 7.6-3.736 1.837-8.645 2.755-14.725 2.755zm.095-12.635c3.167 0 5.51-.697 7.03-2.09 1.584-1.457 2.375-3.483 2.375-6.08 0-2.723-.696-4.782-2.09-6.175-1.33-1.457-3.705-2.185-7.125-2.185-1.583 0-3.166.253-4.75.76a21.137 21.137 0 00-4.56 2.09V42.1c0 3.167.76 5.51 2.28 7.03 1.52 1.457 3.8 2.185 6.84 2.185z"
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

	.num-path {
		stroke-dasharray: 6 3;
		animation: dashmove 1.5s linear infinite;
	}
</style>
