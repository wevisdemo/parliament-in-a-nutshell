<script lang="ts">
	import { onMount } from 'svelte';
	import { inView, scroll, animate, ScrollOffset, stagger } from 'motion';
	import { scaleLinear } from 'd3';

	import RP from 'components/RepPortrait.svelte';

	let el_bridge_text1: any;
	let el_thanathorn: any;
	let el_thammanas: any;
	let el_paiboon: any;
	let el_parina: any;
	let el_pornpimol: any;
	let el_mongkonkit: any;

	let rp_scalar = scaleLinear().domain([0, 1]).range([500, 485]);
	let rp_num = 500;

	onMount(() => {
		scroll(
			({ y }) => {
				rp_num = ~~rp_scalar(y.progress);
			},
			{
				target: el_bridge_text1,
				offset: [...ScrollOffset.Enter]
			}
		);

		inView(
			el_thammanas,
			() => {
				animate(
					el_thammanas,
					{
						opacity: [0, 1],
						transform: [`scale(0)`, `scale(1)`]
					},
					{ duration: 1 }
				);
			},
			{ amount: 1 }
		);

		inView(
			el_thanathorn,
			() => {
				animate(
					[...el_thanathorn.children],
					{
						opacity: [0, 1],
						transform: [`translateY(100px)`, `translateY(0)`]
					},
					{ duration: 1, delay: stagger(0.25) }
				);
			},
			{ amount: 1 }
		);

		inView(
			el_paiboon,
			() => {
				animate(
					el_paiboon.children[0],
					{
						opacity: [0, 1],
						transform: [`translate(-70%, 10%) scale(0)`, `translate(-70%, 10%) scale(1)`]
					},
					{ duration: 1 }
				);
				animate(
					el_paiboon.children[1],
					{
						opacity: [0, 1],
						transform: [`translateX(-500px)`, `translateX(0)`]
					},
					{ duration: 1 }
				);
			},
			{ amount: 1 }
		);

		inView(
			el_parina,
			() => {
				animate(
					el_parina,
					{
						opacity: [0, 1],
						transform: [`translateY(-101px)`, `translateY(0)`]
					},
					{ duration: 1 }
				);
			},
			{ amount: 1 }
		);

		inView(
			el_pornpimol,
			() => {
				animate(
					el_pornpimol,
					{
						opacity: [0, 1],
						transform: [`translateX(500px)`, `translateX(0)`]
					},
					{ duration: 1 }
				);
			},
			{ amount: 1 }
		);

		inView(
			el_mongkonkit,
			() => {
				animate(
					[...el_mongkonkit.children],
					{
						opacity: [0, 1],
						transform: [`scale(0)`, `scale(1)`]
					},
					{ duration: 1, delay: stagger(0.25) }
				);
			},
			{ amount: 1 }
		);
	});
</script>

<!-- VH skip check -->
<div class="s3-container">
	<div class="T1 counter-decor">{rp_num}</div>
	<div class="decor">
		<div bind:this={el_thanathorn} class="thanathorn-img-container">
			<div class="circle1" />
			<div class="circle2" />
			<div class="circle3" />
			<RP
				class="thanathorn-img"
				color="#ff6f21"
				name="ธนาธร จึงรุ่งเรืองกิจ"
				size="170"
				side="opp"
				src="rp/ศาลตัด-ธนาธร.png"
			/>
		</div>
		<div bind:this={el_thammanas} class="thammanas-img">
			<RP
				color="#f0da8c"
				name="ธรรมนัส พรหมเผ่า"
				size="170"
				side="free"
				src="rp/pt14-ธรรมนัส.png"
			/>
		</div>
		<div bind:this={el_paiboon} class="paiboon-img-container">
			<img
				class="back"
				src="/shaking-parliament/star_01.svg"
				alt=""
				decoding="async"
				loading="lazy"
			/>
			<RP
				class="paiboon-img"
				color="#f3c628"
				name="ไพบูลย์ นิติตะวัน"
				size="170"
				side="gov"
				src="rp/paiboon.png"
			/>
		</div>
		<div bind:this={el_parina} class="parina-img">
			<RP color="#0b3757" name="ปารีณา ไกรคุปต์" size="170" side="gov" src="rp/ศาลตัด-ปารีณา.png" />
		</div>
		<div bind:this={el_pornpimol} class="pornpimol-img-container">
			<div class="back" />
			<RP color="#e50000" name="พรพิมล ธรรมสาร" size="170" side="opp" src="rp/pt12-พรพิมล.png" />
		</div>
		<div bind:this={el_mongkonkit} class="mongkonkit-img-container">
			<RP
				class="mongkonkit-img"
				color="#85e8fe"
				name="มงคลกิตติ์ สุขสินธารานนท์"
				size="170"
				side="free"
				src="rp/mongkonkit.png"
			/>
			<img
				class="circle1"
				src="/shaking-parliament/circles_02.svg"
				alt=""
				decoding="async"
				loading="lazy"
			/>
			<img
				class="circle2"
				src="/shaking-parliament/circles_02.svg"
				alt=""
				decoding="async"
				loading="lazy"
			/>
		</div>
	</div>
	<div class="c" bind:this={el_bridge_text1}>
		<div style="--h:16px" />
		<h1 class="T1">
			ตัวเลขที่ผันแปรเหล่านี้<br />
			กำลังบอกอะไรเรา ?
		</h1>
		<div class="line" />
		<p class="tc">
			<strong>ความเคลื่อนไหวอย่างต่อเนื่อง</strong> หลังสิ้นสุดฤดูกาลเลือกตั้ง<br />
			<br />
			<strong>ความไม่คงที่</strong> ของจำนวน ส.ส. ฝ่ายรัฐบาล และ ฝ่ายค้าน<br />
			<br />
			<strong>แนวโน้ม</strong> ของผลการลงมติรับ หรือไม่รับร่างกฎหมาย<br />
			ตลอดจนการลงมติหลังการอภิปรายไม่ไว้วางใจ<br />
			<br />
			และอีกมากมาย …<br />
		</p>
	</div>
	<div style="--h:288px" />
	<div class="c">
		<p class="s3-2 tc">
			<strong class="bigger">เมื่อประชาธิปไตยไม่ได้จบแค่การเลือกตั้ง</strong><br />
			<br />
			ขอชวนนั่งไทม์แมชชีน<br />
			ไปย้อนรอย<strong>หลากปรากฏการณ์</strong><br />
			<strong>และความเคลื่อนไหว</strong><br />
			<br />
			ผ่านการสำรวจ<br />
			<strong class="bigger">การเปลี่ยนแปลงที่นั่งของสภาผู้แทนราษฎรไทย</strong><br />
			นับตั้งแต่เปิดสภา พฤษภาคม 2562
		</p>
	</div>
</div>

<style lang="scss">
	.s3-container {
		margin-top: -15vh;
		padding-top: 30vh;
	}

	.T1 {
		font-size: 4rem;
	}

	.counter-decor {
		position: absolute;
		top: 0;
		right: -48px;
		transform: rotate(-90deg);
		transform-origin: bottom right;
		text-align: center;

		color: #cecbcb;
		font-size: 20rem;
		line-height: 1;
	}

	.decor {
		position: absolute;
		inset: 0;

		// overflow: hidden visible;
	}

	.line {
		width: 0;
		height: 131px;
		margin: 32px 0 64px;
		border-right: 2px #000 solid;
	}

	p {
		line-height: 1.5;
	}

	.s3-2 {
		font-size: 2rem;

		padding-bottom: 50vh;
		margin-bottom: -50vh;
	}

	.bigger {
		font-size: 1.1em;
	}

	.thanathorn-img-container {
		position: absolute;
		left: 15%;
		top: 26vh;

		// .thanathorn-img is in the scss file

		> .circle1,
		> .circle2,
		> .circle3 {
			position: absolute;
			z-index: -1;
			width: 170px;
			height: 170px;
			top: 60px;
			border: 2px solid #bfbebe;
			border-radius: 50%;
			opacity: 0;
		}

		> .circle2 {
			top: 120px;
		}

		> .circle1 {
			top: 180px;
		}
	}

	.thammanas-img {
		position: absolute;
		right: 15%;
		top: 20vh;
		opacity: 0;
	}

	.paiboon-img-container {
		position: absolute;
		left: 8%;
		top: 75vh;

		// .paiboon-img is in the scss file

		> .back {
			position: absolute;
			opacity: 0;
			transform: translate(-70%, 10%);
			z-index: -1;
		}
	}

	.parina-img {
		position: absolute;
		right: 8%;
		top: 85vh;
		opacity: 0;
	}

	.pornpimol-img-container {
		position: absolute;
		top: 110vh;
		right: 15%;
		opacity: 0;

		> .back {
			position: absolute;
			left: 0;
			top: 0;
			background: #cecccc;
			width: 100vw;
			height: 170px;

			transform-origin: 85px;
			transform: rotate(45deg);
			border-radius: 170px;
			z-index: -1;
		}
	}

	.mongkonkit-img-container {
		position: absolute;
		top: 142vh;
		left: 15%;

		// .mongkonkit-img is in the scss file

		> .circle1,
		> .circle2 {
			position: absolute;
			top: 35px;
			left: -295px;
			opacity: 0;
			z-index: -1;
		}

		> .circle2 {
			top: 181px;
		}
	}
</style>
