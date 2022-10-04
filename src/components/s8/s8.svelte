<script lang="ts">
	import { onMount } from 'svelte';
	import { timeline, inView } from 'motion';

	let el_deco_container: any;
	onMount(() => {
		const el_decors = el_deco_container.children;
		const seq: TimelineDefinition = [
			[
				el_decors[1],
				{
					transform: ['translate(30%, -40%) rotate(0deg)', 'translate(30%, -40%) rotate(-60deg)']
				},
				{ duration: 0.5 }
			],
			[
				el_decors[3],
				{
					transform: ['translate(-30%, 40%) rotate(180deg)', 'translate(-30%, 40%) rotate(120deg)']
				},
				{ duration: 0.5, at: '<' }
			]
		];

		inView(
			el_deco_container,
			() => {
				timeline(seq);
			},
			{ amount: 0.8 }
		);
	});
</script>

<h2 class="h100 c tc part2-title mtb0">
	<div bind:this={el_deco_container} class="decor" aria-hidden="true">
		<img
			class="disc d1"
			src="/shaking-parliament/part2_bg1.png"
			alt=""
			decoding="async"
			loading="lazy"
			width="533"
			height="533"
		/>
		<img
			class="reader r1"
			src="/shaking-parliament/part2_bg2.png"
			alt=""
			decoding="async"
			loading="lazy"
			width="374"
			height="374"
		/>
		<img
			class="disc d2"
			src="/shaking-parliament/part2_bg1.png"
			alt=""
			decoding="async"
			loading="lazy"
			width="533"
			height="533"
		/>
		<img
			class="reader r2"
			src="/shaking-parliament/part2_bg2.png"
			alt=""
			decoding="async"
			loading="lazy"
			width="374"
			height="374"
		/>
	</div>
	<img
		class="title-img"
		src="/shaking-parliament/part2_title.png"
		alt="บทที่ 2 — เพลงไม่ทันเปิด เกิดกฏิกาพิเศษ ส.ส. ปัดเศษ เข้าสภา"
		decoding="async"
		loading="lazy"
		style="position:relative"
	/>
</h2>
<div class="news-container">
	<img
		src="/shaking-parliament/part2_papers.png"
		alt="ตะลึง! 12 พรรคเล็ก ผุดที่นั่งหนุนรัฐบาล"
		class="newspaper"
		decoding="async"
		loading="lazy"
	/>
	<p class="news-text tc">
		45 วัน หลังจากทราบผลการเลือกตั้ง<br />
		<span class="b">กกต. จึงได้เปิดเผยตัวเลขที่นั่งในสภา</span>ออกมา<br />
		<br />
		ผลปรากฏคือ<br />
		<span class="b highlight">
			มีพรรคที่ได้ที่นั่งเพิ่มมาทั้งหมด 12 พรรค<br />
			แต่ละพรรคได้ไป 1 ที่นั่ง
		</span><br />
		<br />
		หักปากกาบรรดาเซียน<br />
		ที่พยายามคำนวณที่นั่ง ส.ส. ไว้ก่อนหน้า
	</p>
</div>

<style lang="scss">
	.part2-title {
		position: relative;
	}

	.decor {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;

		> img {
			position: absolute;
			object-fit: contain;
			object-position: center;

			&.disc {
				max-width: 50vw;
				max-height: 50vw;
			}

			&.d1 {
				top: 10vh;
				left: 0;

				transform: translateX(-50%);
			}

			&.d2 {
				bottom: 10vh;
				right: 0;

				transform: translateX(50%);
			}

			&.reader {
				max-width: 35vw;
				max-height: 35vw;
			}

			&.r1 {
				top: 10vh;
				left: 0;

				transform: translate(30%, -40%) rotate(0deg);
			}

			&.r2 {
				bottom: 10vh;
				right: 0;

				transform: translate(-30%, 40%) rotate(180deg);
			}
		}
	}

	.title-img {
		width: min(60vw, 60vh);
	}

	.news-container {
		display: flex;
		justify-content: center;
		align-items: center;

		gap: 32px;
		padding: 0 32px;
		height: 80vh;

		margin-bottom: 96px;
	}

	.newspaper {
		object-fit: contain;
		object-position: right;

		min-height: 0;
		height: 70vh;
		min-width: 0;
		width: auto;
	}

	.news-text {
		font-size: 1.8rem;
		line-height: 1.5;

		> .highlight {
			font-size: 1.11em; // 1.8rem * 1.11em ~= 2.00rem
			text-decoration: underline;
		}
	}
</style>
