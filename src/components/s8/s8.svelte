<div class="h100 c tc part2-title">
	<img src="/shaking-parliament/part2_bg.png" alt="" class="bg" decoding="async" loading="lazy" />
	<header>
		<span>นกหวีดดัง เกิดกติกาพิเศษ</span>
		<h1 class="T1">&ldquo;ส.ส.ปัดเศษ&rdquo; เข้าสภา</h1>
	</header>
</div>
<div style="--h:90vh">
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
			<span class="special-lh" style="--lh:2.5">ที่พยายามคำนวณที่นั่ง ส.ส. ไว้ก่อนหน้า &rdquo;</span
			>
		</p>
		<div style="--h:10vh" />
	</div>
</div>

<style lang="scss">
	.bg {
		position: absolute;
		width: 80%;
		height: 80%;
		object-fit: contain;
	}

	header {
		font-size: 2.5rem;
		font-weight: 700;

		line-height: 1.5;

		margin-bottom: 15vh;

		> h1 {
			font-size: 4.5rem;
		}
	}

	.news-text-container {
		position: absolute;
		left: 30vw;
		height: 80vh;
		width: 70vw;
	}

	.news-text {
		font-size: 2rem;
		line-height: 1.2;

		> .black {
			display: inline-block;
			background: #000;
			color: white;
			padding: 0.5rem 1rem;
			margin: 0.1rem 0;
			line-height: 1.5;
			font-weight: 700;
		}
	}

	.newspaper {
		position: absolute;
		right: 50%;
		height: 80vh;
		width: 50vw;

		object-fit: contain;
		object-position: right center;
	}

	.special-lh {
		line-height: var(--lh, 2);
	}
</style>
