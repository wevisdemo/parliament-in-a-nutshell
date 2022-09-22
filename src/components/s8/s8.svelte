<script lang="ts">
	import { onMount } from 'svelte';
	import { timeline, inView } from 'motion';

	let el_deco_container: any;
	onMount(() => {
		const el_decors = el_deco_container.children;
		const seq: TimelineDefinition = [
			[
				el_decors[0],
				{ transform: ['translate(0,0) scale(0) rotate(180deg)', 'translate(15vw,-35vh) scale(1)'] },
				{ easing: 'ease-out', duration: 0.5 }
			],
			[
				el_decors[1],
				{
					transform: ['translate(0,0) scale(0) rotate(-180deg)', 'translate(-23vw,-5vh) scale(1)']
				},
				{ easing: 'ease-out', duration: 0.5, at: '<' }
			],
			[
				el_decors[2],
				{ transform: ['translate(0,0) scale(0) rotate(-180deg)', 'translate(18vw,23vh) scale(1)'] },
				{ easing: 'ease-out', duration: 0.5, at: '<' }
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
			width="92"
			height="93"
		/>
		<img
			src="/shaking-parliament/part2_bg2.png"
			alt=""
			decoding="async"
			loading="lazy"
			width="107"
			height="137"
		/>
		<img
			src="/shaking-parliament/part2_bg3.png"
			alt=""
			decoding="async"
			loading="lazy"
			width="135"
			height="101"
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
		<span class="ib" style="margin:0 0 .5rem">&ldquo; ผ่านไป 45 วัน<br /></span>
		<span class="nw">หลังจากที่สังคม</span><span class="nw">ทราบผลการเลือกตั้ง</span><br />
		<span class="black"
			>กกต. จึงได้เปิดเผยตัวเลข<span class="nw">ที่นั่ง</span><span class="nw">ในสภา</span><span
				class="nw">ออกมา</span
			></span
		><br />
		<br />
		ผลปรากฏคือ<br />
		<span class="black"
			>มีพรรคที่ได้ที่นั่ง<span class="nw">เพิ่มมา</span>ทั้งหมด
			<span class="nw">12 พรรค</span></span
		><br />
		<span class="black">แต่ละพรรคได้ไป <span class="nw">1 ที่นั่ง</span></span><br />
		หักปากกาบรรดาเซียน<br />
		<span class="ib" style="margin:.5rem 0 0">
			ที่พยายามคำนวณ<span class="nw">ที่นั่ง</span> <span class="nw">ส.ส.</span>
			<span class="nw">ไว้ก่อนหน้า &rdquo;</span>
		</span>
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
		font-size: 2rem;
		line-height: 1.2;

		> .black {
			display: inline-block;
			background: #000;
			color: #fff;
			padding: 8px 16px;
			margin: 1.6px 0;
			line-height: 1.5;
			font-weight: 700;
		}
	}

	.ib {
		display: inline-block;
	}
</style>
