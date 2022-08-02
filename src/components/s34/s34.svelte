<script lang="ts">
	import { onMount } from 'svelte';
	import { inView, scroll, animate, ScrollOffset, stagger} from 'motion';
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
						opacity: 1,
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
						opacity: 1,
						transform: [`translateY(100px)`, `translateY(0px)`]
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
						opacity: 1,
						transform: [`translate(-70%, 10%) scale(0)`, `translate(-70%, 10%) scale(1)`]
					},
					{ duration: 1 }
				);
				animate(
					el_paiboon.children[1],
					{
						opacity: 1,
						transform: [`translateX(-500px)`, `translateX(0px)`]
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
						opacity: 1,
						transform: [`translateY(-101px)`, `translateY(0px)`]
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
						opacity: 1,
						transform: [`translateX(500px)`, `translateX(0px)`]
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
						opacity: 1,
						transform: [`scale(0)`, `scale(1)`]
					},
					{ duration: 1, delay: stagger(0.25) }
				);
			},
			{ amount: 1 }
		);
	});
</script>

<section class="s3-container">
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
				size="170px"
				side="opp"
				src="rp/thanathorn.png"
			/>
		</div>
		<div bind:this={el_thammanas} class="thammanas-img">
			<RP color="#f0da8c" name="ธรรมนัส พรหมเผ่า" size="170px" side="free" src="rp/thammanas.png" />
		</div>
		<div bind:this={el_paiboon} class="paiboon-img-container">
			<img class="back" src="star_01.svg" alt="" />
			<RP
				class="paiboon-img"
				color="#f3c628"
				name="ไพบูลย์ นิติตะวัน"
				size="170px"
				side="gov"
				src="rp/paiboon.png"
			/>
		</div>
		<div bind:this={el_parina} class="parina-img">
			<RP color="#0b3757" name="ปารีณา ไกรคุปต์" size="170px" side="gov" src="rp/parina.png" />
		</div>
		<div bind:this={el_pornpimol} class="pornpimol-img-container">
			<div class="back" />
			<RP color="#e50000" name="พรพิมล ธรรมสาร" size="170px" side="opp" src="rp/pornpimol.png" />
		</div>
		<div bind:this={el_mongkonkit} class="mongkonkit-img-container">
			<RP
				class="mongkonkit-img"
				color="#85e8fe"
				name="มงคลกิตติ์ สุขสินธารานนท์"
				size="170px"
				side="free"
				src="rp/mongkonkit.png"
			/>
			<img class="circle1" src="circles_02.svg" alt="" />
			<img class="circle2" src="circles_02.svg" alt="" />
		</div>
	</div>
	<div class="c" bind:this={el_bridge_text1}>
		<div class="s" style="--s:1rem" />
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
		<div class="s" style="--s:15vh" />
	</div>
	<div class="s" style="--s:15vh" />
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
			นับตั้งแต่เปิดสภา พฤษภาคม 62
		</p>
	</div>
</section>
<section class="s4">
	<div class="fade-bg" style="--h:300vh">
		<div class="h100 stick c">
			<div class="T1 s4-title">
				เพราะตัวเลขที่นั่งที่เปลี่ยนแปลงไป<br />
				<strong>สะท้อนอะไรมากกว่า &ldquo;การโยกย้าย&rdquo;</strong>
			</div>
		</div>
	</div>
</section>

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
		right: -3rem;
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
	}

	.line {
		width: 0;
		height: 131px;
		margin: 32px 0 64px;
		border-right: 2px black solid;
	}

	.fade-bg {
		background: linear-gradient(#fff0, #fff0 25%, #000f 90%);

		> div,
		.T1 {
			mix-blend-mode: difference;
			color: white;
		}
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

		> :global(.thanathorn-img) {
			opacity: 0;
		}

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

		> :global(.paiboon-img) {
			opacity: 0;
		}

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

		> :global(.mongkonkit-img) {
			opacity: 0;
		}

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

	.s4-title {
		font-size: 3.5rem;
		line-height:1.5;
		height:unset;
	}
</style>
