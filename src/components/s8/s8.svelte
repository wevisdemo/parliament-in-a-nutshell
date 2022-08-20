<script lang="ts">
	import { onMount } from 'svelte';
	import { animate, scroll } from 'motion';

	let el_title_section: any;
	let el_bg: any;
	onMount(() => {
		scroll(animate(el_bg, { transform: 'translateY(150px)' }, { easing: 'linear' }), {
			target: el_title_section,
			offset: ['start end', 'end start']
		});
	});
</script>

<div bind:this={el_title_section} class="h100 c tc part2-title">
	<img
		bind:this={el_bg}
		src="/shaking-parliament/part2_bg.png"
		alt=""
		class="bg"
		decoding="async"
		loading="lazy"
	/>
	<img
		class="title-img"
		src="/shaking-parliament/part2_title.png"
		alt=""
		decoding="async"
		loading="lazy"
		style="position:relative"
	/>
</div>
<div style="--h:300px" />
<div class="news-container">
	<img
		src="/shaking-parliament/part2_papers.png"
		alt=""
		class="newspaper"
		decoding="async"
		loading="lazy"
	/>
	<div class="news-text-container c">
		<p class="news-text tc">
			<span class="special-lh">&ldquo; ผ่านไป 45 วัน<br /></span>
			หลังจากที่สังคมทราบผลการเลือกตั้ง<br />
			<span class="black">กกต. จึงได้เปิดเผยตัวเลขที่นั่งในสภาออกมา</span><br />
			<br />
			ผลปรากฏคือ<br />
			<span class="black">มีพรรคที่ได้ที่นั่งเพิ่มมาทั้งหมด 12 พรรค</span><br />
			<span class="black">แต่ละพรรคได้ไป 1 ที่นั่ง</span><br />
			หักปากกาบรรดาเซียน<br />
			<span class="special-lh">ที่พยายามคำนวณที่นั่ง ส.ส. ไว้ก่อนหน้า &rdquo;</span>
		</p>
	</div>
</div>
<div style="--h:96px" />

<style lang="scss">
	.bg {
		position: absolute;
		top: 50%;
		width: 80vw;
		object-fit: contain;
		transform: translateY(-150px);
	}

	.title-img {
		width: min(60vw, 60vh);
	}

	.news-container {
		display: flex;
		gap: 32px;

		max-height: 80vh; /* O */
	}

	.newspaper {
		flex: 1 1 0%;

		object-fit: contain;
		object-position: right;
	}

	.news-text-container {
		flex: 1 1 0%;
		align-items: flex-start;
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

	.special-lh {
		line-height: var(--lh, 2);
	}
</style>
