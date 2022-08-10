<script lang="ts">
	import { onMount } from 'svelte';
	import { animate, inView, stagger } from 'motion';

	let el_circle1: any;
	let el_circle2: any;

	onMount(() => {
		inView(
			el_circle1,
			() => {
				animate(el_circle1, { opacity: 1 }, { duration: 1 });
			},
			{ amount: 1 }
		);

		inView(
			el_circle2,
			() => {
				const [first, ...rest] = el_circle2.children;
				animate(first, { opacity: 1 }, { duration: 1 });
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

<div class="s11-container tc c">
	<div class="decor">
		<div class="fade" />
		<img
			class="hand1"
			src="/shaking-parliament/part3_bg1.png"
			alt=""
			decoding="async"
			loading="lazy"
		/>
		<img
			class="hand2"
			src="/shaking-parliament/part3_bg2.png"
			alt=""
			decoding="async"
			loading="lazy"
		/>
		<img
			class="hand3"
			src="/shaking-parliament/part3_bg3.png"
			alt=""
			decoding="async"
			loading="lazy"
		/>
	</div>
	<header>
		<span>เพราะภายในมีจุดยืนต่าง</span>
		<h1 class="T1">ขั้วข้างจึงสั่นคลอน</h1>
	</header>
</div>
<p bind:this={el_circle1} class="circle-text c tc">
	แน่นอนว่ามันเป็นไปได้ยาก<br />
	ที่ภายในพรรคหนึ่งพรรค<br />
	จะออกเสียงตามมติพรรคได้โดยเอกฉันท์ <br />
	<span>ดังนั้น<strong>การโหวตสวนมติพรรค</strong></span>
	ของ ส.ส. บางรายจึงปรากฎให้เห็น<br />
	บนหน้าข่าวอยู่เรื่อยไป
</p>
<div style="--h:25vh" />
<div bind:this={el_circle2}>
	<p class="circle-text c tc">
		ซึ่งในหลาย ๆ ครั้ง<br />
		การโหวตสวนมติพรรคก็ได้นำไปสู่<br />
		<span>
			<strong>&ldquo;การขับพ้นพรรค&rdquo;</strong> <span class="big">และ</span>
		</span>
		<strong>&ldquo;การเปลี่ยนขั้วย้ายค่าย&rdquo;</strong>
		สร้างตัวเลขที่ไม่หยุดนิ่ง<br />
		ต่อจำนวนเก้าอี้ส.ส.ฝ่ายค้าน<br />
		และฝ่ายรัฐบาล
	</p>
	<img
		class="deco-circle c1"
		src="/shaking-parliament/part3_deco1.svg"
		alt=""
		decoding="async"
		loading="lazy"
	/>
	<img
		class="deco-circle c2"
		src="/shaking-parliament/part3_deco2.svg"
		alt=""
		decoding="async"
		loading="lazy"
	/>
	<img
		class="deco-circle c3"
		src="/shaking-parliament/part3_deco3.svg"
		alt=""
		decoding="async"
		loading="lazy"
	/>
</div>

<style lang="scss">
	header {
		font-size: 2.5rem;
		font-weight: 700;

		line-height: 2;

		margin: 50vh 0 30vh;

		position: relative;
		text-shadow: 0 0 32px #fff, 0 0 16px #fff, 0 0 8px #fff, 0 0 4px #fff, 0 0 2px #fff;

		> h1 {
			font-size: 4.5rem;
		}
	}

	.decor {
		position: absolute;
		top: 0;
		height: 100%;
		width: 100%;

		> img {
			position: absolute;
			top: 10%;
			left: 0;
			z-index: 0;

			&.hand2 {
				left: unset;
				top: 25%;
				right: 0;
			}

			&.hand3 {
				top: 50%;
			}
		}
	}

	.fade {
		position: absolute;
		top: 0;
		left: 0;
		height: 50%;
		width: 100%;

		background: linear-gradient(#000f, #0000);
	}

	.circle-text {
		background: #000;
		color: white;

		width: 315px;
		height: 315px;

		border-radius: 50%;

		margin: auto;

		position: relative;
		z-index: 1;

		font-size: 1rem;
		line-height: 1.5;

		opacity: 0;

		strong,
		.big {
			font-size: 1.3em;
		}
	}

	.deco-circle {
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
