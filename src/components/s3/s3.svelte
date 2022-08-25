<script lang="ts">
	import { onMount } from 'svelte';
	import { inView, scroll, animate, ScrollOffset, stagger } from 'motion';
	import { scaleLinear } from 'd3';

	import RP from 'components/RepPortrait.svelte';

	let el_bridge_text1: any;
	let el_counter: any;

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

		scroll(
			animate(
				el_counter,
				{
					transform: ['translateY(-50%) rotate(-90deg)', 'translateY(50%) rotate(-90deg)']
				},
				{ easing: 'linear' }
			),
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
				const [rp, ...decor] = [...el_mongkonkit.children];
				animate(
					rp,
					{
						opacity: [0, 1],
						transform: [`scale(0)`, `scale(1)`]
					},
					{ duration: 1 }
				);
				animate(
					decor,
					{
						opacity: [0, 1],
						transform: [`translateX(-60%) scale(0)`, `translateX(-60%) scale(1)`]
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
	<div class="decor">
		<div bind:this={el_counter} class="T1 counter-decor">{rp_num}</div>
		<div bind:this={el_thanathorn} class="thanathorn-img-container">
			<div class="circle1" />
			<div class="circle2" />
			<div class="circle3" />
			<RP
				class="thanathorn-img deco-people"
				color="#ff6f21"
				name="ธนาธร จึงรุ่งเรืองกิจ"
				size="170"
				side="opp"
				src="rp/ศาลตัด-ธนาธร.png"
			/>
		</div>
		<div bind:this={el_thammanas} class="thammanas-img">
			<RP
				class="deco-people"
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
				width="326"
				height="342"
			/>
			<RP
				class="paiboon-img deco-people"
				color="#f3c628"
				name="ไพบูลย์ นิติตะวัน"
				size="170"
				side="gov"
				src="rp/paiboon.png"
			/>
		</div>
		<div bind:this={el_parina} class="parina-img">
			<RP
				class="deco-people"
				color="#0b3757"
				name="ปารีณา ไกรคุปต์"
				size="170"
				side="gov"
				src="rp/ศาลตัด-ปารีณา.png"
			/>
		</div>
		<div bind:this={el_pornpimol} class="pornpimol-img-container">
			<div class="back" />
			<RP
				class="deco-people"
				color="#e50000"
				name="พรพิมล ธรรมสาร"
				size="170"
				side="opp"
				src="rp/pt12-พรพิมล.png"
			/>
		</div>
		<div bind:this={el_mongkonkit} class="mongkonkit-img-container">
			<RP
				class="mongkonkit-img deco-people"
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
				width="443"
				height="443"
			/>
			<img
				class="circle2"
				src="/shaking-parliament/circles_02.svg"
				alt=""
				decoding="async"
				loading="lazy"
				width="443"
				height="443"
			/>
		</div>
	</div>
	<div class="c" bind:this={el_bridge_text1} style="padding-bottom:288px">
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
	<!-- <div style="--h:288px" /> -->
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

		padding-bottom: 50vh;
		margin-bottom: -50vh;
	}

	.T1 {
		font-size: 4rem;
	}

	.counter-decor {
		position: absolute;
		top: 0;
		right: -48px;
		transform: translateY(-50%) rotate(-90deg);
		transform-origin: bottom right;
		text-align: center;

		color: #cecbcb;
		font-size: 20rem;
		line-height: 1;
	}

	.decor {
		position: absolute;
		inset: 0;

		overflow: hidden;
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

		@media screen and (max-width: 1500px) {
			left: 7.5%;
		}

		// .thanathorn-img is in the scss file

		> .circle1,
		> .circle2,
		> .circle3 {
			position: absolute;
			z-index: -1;
			width: 170px;
			height: 170px;
			top: min(60px, 4vw);
			border: 2px solid #bfbebe;
			border-radius: 50%;
			opacity: 0;

			max-width: 10vw;
			max-height: 10vw;
		}

		> .circle2 {
			top: min(120px, 7.5vw);
		}

		> .circle1 {
			top: min(180px, 11vw);
		}
	}

	.thammanas-img {
		position: absolute;
		right: 15%;
		top: 20vh;
		opacity: 0;

		@media screen and (max-width: 1500px) {
			right: 7.5%;
		}
	}

	.paiboon-img-container {
		position: absolute;
		left: 8%;
		top: 75vh;

		// .paiboon-img is in the scss file

		@media screen and (max-width: 1500px) {
			left: 4%;
		}

		> .back {
			position: absolute;
			opacity: 0;
			transform: translate(-70%, 10%);

			@media screen and (max-width: 1500px) {
				top: -50%;
			}

			z-index: -1;
		}
	}

	.parina-img {
		position: absolute;
		right: 8%;
		top: 1050px;
		opacity: 0;

		@media screen and (max-width: 1500px) {
			right: 4%;
		}
	}

	.pornpimol-img-container {
		position: absolute;
		top: 1500px;
		right: 15%;
		opacity: 0;

		@media screen and (max-width: 1500px) {
			right: 7.5%;
		}

		> .back {
			position: absolute;
			left: 0;
			top: 0;
			background: #cecccc;
			width: 100vw;
			height: 170px;
			max-height: 10vw;

			transform-origin: min(85px, 5vw);
			transform: rotate(45deg);
			border-radius: 170px;
			z-index: -1;
		}
	}

	.mongkonkit-img-container {
		position: absolute;
		top: 142vh;
		left: 15%;

		@media screen and (max-width: 1500px) {
			left: 7.5%;
		}

		// .mongkonkit-img is in the scss file

		> .circle1,
		> .circle2 {
			position: absolute;
			top: 35px;
			left: 0;
			opacity: 0;
			z-index: -1;

			transform: translateX(-60%);

			max-width: 30vw;
			max-height: 30vw;
		}

		> .circle2 {
			top: 15vw;
		}
	}
</style>
