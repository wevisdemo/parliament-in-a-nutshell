<script lang="ts">
	import { onMount } from 'svelte';
	import { animate, inView, stagger, timeline, scroll } from 'motion';

	let el_circle1: any;
	let el_circle2: any;
	let el_decor_container: any;
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

		const el_decorchild = el_decor_container.children;
		const seq: TimelineDefinition = [
			[el_decorchild[0], { transform: 'translateY(100px)' }, { easing: 'ease-out' }],
			[el_decorchild[1], { transform: 'translateY(200px)' }, { easing: 'linear', at: '<' }],
			[el_decorchild[2], { transform: 'translateY(200px)' }, { easing: 'ease-out', at: '<' }]
		];

		scroll(timeline(seq), {
			target: el_decor_container,
			offset: ['start end', 'end start']
		});
	});
</script>

<div class="fade" />
<div class="s11-container h100 tc c">
	<div bind:this={el_decor_container} class="decor">
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
	<img
		class="title-img"
		src="/shaking-parliament/part3_title.png"
		alt=""
		decoding="async"
		loading="lazy"
	/>
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
<div bind:this={el_circle2} style="--h:480px">
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
	.title-img {
		width: min(75vw, 75vh);
	}

	.decor {
		position: absolute;
		top: 0;
		height: 100%;
		width: 100%;

		> img {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 0;
			transform: translateY(-300px);

			&.hand2 {
				left: unset;
				top: 25%;
				right: 0;
				transform: translateY(-200px);
			}

			&.hand3 {
				top: 60%;
			}
		}
	}

	.fade {
		height: 30vh;

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
