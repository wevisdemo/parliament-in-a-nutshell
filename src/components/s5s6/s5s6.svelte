<script lang="ts">
	import { animate, inView, stagger } from 'motion';
	import { onMount } from 'svelte';

	import RP from 'components/RepPortrait.svelte';

	let el_logo_container: any;
	let is_logo_inview = false;

	let el_circle_container: any;

	onMount(() => {
		inView(
			el_logo_container,
			() => {
				is_logo_inview = true;
			},
			{ amount: 0.5 }
		);

		inView(
			el_circle_container,
			() => {
				const [first, ...rest] = el_circle_container.children;
				animate(
					first,
					{
						opacity: 1,
						transform: [`translateY(0px)`]
					},
					{ duration: 1 }
				);
				animate(
					rest,
					{
						opacity: 1,
						transform: [`translateY(-100px)`, `translateY(0px)`]
					},
					{ duration: 1, delay: stagger(0.25) }
				);
			},
			{ amount: 0.2 }
		);
	});
</script>

<section class="h100 s5-container c" class:in-view={is_logo_inview} bind:this={el_logo_container}>
	<img class="logo-decor" src="shaking-parliament/title_decor.svg" alt="" />
	<img class="logo" src="shaking-parliament/title.png" alt="" />
</section>
<!-- s6 -->
<div style="--h:calc(210vh + 480px)">
	<div class="stick part1-section" style="--h:calc(110vh + 480px)">
		<div class="h100 c">
			<h1 class="T1 part1-title">เริ่มเกมเก้าอี้ดนตรี</h1>
			<h2 class="part1-text tc">
				ตลอดระยะเวลา 3 ปี <br />
				มีตำแหน่งใดที่ว่างลงบ้าง
			</h2>
		</div>
		<div bind:this={el_circle_container}>
			<p class="part1-circle c tc">
				มาสำรวจสถิติ<br />
				<strong>
					การออกสภา<br />
					และการแทนที่<br />
				</strong>
				ตลอดสมัยสภาผู้แทนราษฎร<br />
				ชุดที่ 25 กันดีกว่า
			</p>
			<img class="part1-deco-circle c1" src="shaking-parliament/circle_03.svg" alt="" />
			<img class="part1-deco-circle c2" src="shaking-parliament/circle_03.svg" alt="" />
			<img class="part1-deco-circle c3" src="shaking-parliament/circle_03.svg" alt="" />
		</div>
	</div>
	<div class="curtain h100 c">
		<h1 class="T1" style="margin-bottom:1.5rem">วิธีอ่านข้อมูล</h1>
		<h2 class="pill">ข้อมูลทั่วไป</h2>
		<div class="row" style="margin-bottom:1.5rem">
			<div class="col data-explain tc" style="--bgc:#5b5b5b;--txc:#fff">
				<small>ข้อมูลเกี่ยวกับ</small><br />ฝ่ายรัฐบาล
			</div>
			<div class="col data-explain tc" style="--bgc:#a0a0a0">
				<small>ข้อมูลเกี่ยวกับ</small><br />ฝ่ายอิสระ
			</div>
			<div class="col data-explain tc">
				<small>ข้อมูลเกี่ยวกับ</small><br />ฝ่ายค้าน
			</div>
		</div>
		<h2 class="pill">ข้อมูล ส.ส. รายคน</h2>
		<div class="row">
			<div class="col tc">
				<RP color="#0b3757" name="ปารีณา ไกรคุปต์" size="96px" side="gov" src="rp/parina.png" />
				<div class="side-explain">ส.ส.<br />ฝ่ายรัฐบาล</div>
				<div class="small-explain">(ไอคอนสี่เหลี่ยม)</div>
			</div>
			<div class="col tc">
				<RP
					color="#85e8fe"
					name="มงคลกิตติ์ สุขสินธารานนท์"
					size="96px"
					side="free"
					src="rp/mongkonkit.png"
				/>
				<div class="side-explain">ส.ส.<br />ฝ่ายอิสระ</div>
				<div class="small-explain">(ไอคอนหกเหลี่ยม)</div>
			</div>
			<div class="col tc">
				<RP color="#ff6f21" name="วิโรจน์ ลักขณาอดิศร" size="96px" side="opp" src="rp/wiroj.png" />
				<div class="side-explain">ส.ส.<br />ฝ่ายค้าน</div>
				<div class="small-explain">(ไอคอนวงกลม)</div>
				<div class="explainer">พรรคที่สังกัด</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@keyframes flickering {
		70.1%,
		100% {
			opacity: 1;
		}

		50%,
		60%,
		20% {
			opacity: 0.5;
		}

		0%,
		19.9%,
		20.1%,
		49.9%,
		50.1%,
		69.9%,
		99.9% {
			opacity: 0.1;
		}
	}

	.s5-container {
		background: #000;

		> .logo {
			opacity: 0.1;

			height: 60vh;
			width: 60vw;
			object-fit: contain;
		}

		> .logo-decor {
			opacity: 0.3;

			height: 70vh;
			width: 70vw;
			object-fit: contain;

			position: absolute;
			top: 15vh;
		}

		&.in-view {
			> .logo {
				opacity: 1;
				animation: flickering 1s linear forwards;
			}
			> .logo-decor {
				opacity: 1;
				transition: opacity 1s linear;
				transition-delay: 0.5s;
			}
		}
	}

	.curtain {
		width: 100%;
		height: 100vh;
		background: url(shaking-parliament/curtain.png) repeat-x;
		background-size: auto 100%;
		background-position: center;

		position: absolute;
		top: 0;

		color: white;

		padding-bottom: 5%;
	}

	.T1 {
		font-size: 4rem;
	}

	.pill {
		border-radius: 999px;
		border: 2px white solid;
		line-height: 3rem;
		padding: 0 1.5rem;

		font-size: 1.5rem;
		margin: 2rem 0;
	}

	.side-explain {
		margin: 1rem 0 0.5rem;
	}

	.small-explain {
		font-style: italic;
		font-weight: 500;
		font-size: 0.8rem;
		line-height: 189%;

		color: #ececec;

		white-space: nowrap;
	}

	.data-explain {
		background: var(--bgc, #dadada);
		color: var(--txc, #000);

		font-weight: 700;
		padding: 0.5rem 3rem;
		line-height: 1.2rem;
	}

	.explainer {
		position: absolute;
		top: 48px;
		left: 150%;
		transform: translateY(-50%);

		border: 1px dashed #ffffff;
		padding: 0.75rem;
		white-space: nowrap;

		&::before {
			content: '';
			position: absolute;
			width: 50%;
			height: 1px;
			background: #fff;

			top: 50%;
			left: -50%;
			transform: translateY(-50%);
		}

		&::after {
			content: '';
			position: absolute;
			width: 4px;
			height: 4px;
			background: #fff;
			border-radius: 50%;

			top: 50%;
			left: -50%;
			transform: translate(-50%, -50%);
		}
	}
	.part1-section {
		background: url(shaking-parliament/part1_bg.png) no-repeat;
		background-position: bottom center;
		background-size: contain;
	}

	.part1-title {
		font-size: 5rem;
	}

	.part1-text {
		font-size: 2rem;
		line-height: 1.5;
		margin-top: 0.5rem;
	}

	.part1-circle {
		background: #000;
		color: white;

		width: 315px;
		height: 315px;

		border-radius: 50%;

		margin: auto;

		position: relative;
		z-index: 1;

		font-size: 1.2rem;
		line-height: 1.5;

		opacity: 0;

		> strong {
			font-size: 2rem;
			line-height: 1.2;
		}
	}

	.part1-deco-circle {
		position: absolute;
		top: 54px;
		left: calc(50% - 315px / 2);

		width: 315px;
		height: 315px;

		opacity: 0;

		&.c2 {
			top: 108px;
		}

		&.c3 {
			top: 162px;
		}
	}
</style>
