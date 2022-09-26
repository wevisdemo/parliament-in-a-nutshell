<script lang="ts">
	import { onMount } from 'svelte';
	import { timeline, inView } from 'motion';

	let el_deco_container: any;
	onMount(() => {
		const el_decors = el_deco_container.children;
		const seq: TimelineDefinition = [
			[
				el_decors[0],
				{
					transform: ['translate(0,0) scale(0) rotate(180deg)', 'translate(15vw,-38vh) scale(1)']
				},
				{ easing: [0.5, 0, 0.27, 1.55], duration: 0.5 }
			],
			[
				el_decors[1],
				{
					transform: ['translate(0,0) scale(0) rotate(-180deg)', 'translate(-30vw,-10vh) scale(1)']
				},
				{ easing: [0.5, 0, 0.27, 1.55], duration: 0.5, at: '<' }
			],
			[
				el_decors[2],
				{
					transform: ['translate(0,0) scale(0) rotate(-180deg)', 'translate(15vw,25vh) scale(1)']
				},
				{ easing: [0.5, 0, 0.27, 1.55], duration: 0.5, at: '<' }
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
			src="/shaking-parliament/part2_bg1.png"
			alt=""
			decoding="async"
			loading="lazy"
			width="184"
			height="186"
		/>
		<img
			src="/shaking-parliament/part2_bg2.png"
			alt=""
			decoding="async"
			loading="lazy"
			width="214"
			height="274"
		/>
		<img
			src="/shaking-parliament/part2_bg3.png"
			alt=""
			decoding="async"
			loading="lazy"
			width="270"
			height="202"
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
	.decor {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100vh;

		> img {
			position: absolute;
			object-fit: contain;
			object-position: center;
			top: 50%;
			left: 50%;
			transform: scale(0);
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
