<script lang="ts">
	import { inView, scroll, timeline } from 'motion';
	import { onMount } from 'svelte';

	import Circle from 'components/Circle.svelte';
	import CircleFold from 'components/CircleFold.svelte';

	let play_star_animation = false;

	let el_decor_container: any;
	let el_logo: any;
	onMount(() => {
		const el_decorchild = el_decor_container.children;
		const seq: TimelineDefinition = [
			[
				el_decorchild[1],
				{ transform: ['translateY(-300px)', 'translateY(100px)'] },
				{ easing: 'ease-out' }
			],
			[
				el_decorchild[2],
				{ transform: ['translateY(-200px)', 'translateY(200px)'] },
				{ easing: 'linear', at: '<' }
			],
			[
				el_decorchild[3],
				{ transform: ['translateY(-300px)', 'translateY(200px)'] },
				{ easing: 'ease-out', at: '<' }
			]
		];

		scroll(timeline(seq), {
			target: el_decor_container,
			offset: ['start end', 'end start']
		});

		inView(el_logo, () => void (play_star_animation = true), { amount: 1 });
	});
</script>

<div class="fade" />
<div class="s11-container h100 tc c">
	<div bind:this={el_decor_container} class="decor">
		<img
			class="star"
			class:play_star_animation
			src="/parliament-in-a-nutshell/star_02.svg"
			alt=""
			decoding="async"
			loading="lazy"
			width="384"
			height="396"
		/>
		<img
			class="hand1"
			src="/parliament-in-a-nutshell/part3_bg1.png"
			alt=""
			decoding="async"
			loading="lazy"
			width="507"
			height="297"
		/>
		<img
			class="hand2"
			src="/parliament-in-a-nutshell/part3_bg2.png"
			alt=""
			decoding="async"
			loading="lazy"
			width="507"
			height="347"
		/>
		<img
			class="hand3"
			src="/parliament-in-a-nutshell/part3_bg3.png"
			alt=""
			decoding="async"
			loading="lazy"
			width="559"
			height="420"
		/>
	</div>
	<h2 class="mtb0">
		<img
			bind:this={el_logo}
			class="title-img"
			src="/parliament-in-a-nutshell/part3_title.png"
			alt="บทที่ 3 — เพราะภายในมีจุดยืนต่าง ขั้วข้างจึงสั่นคลอน"
			decoding="async"
			loading="lazy"
		/>
	</h2>
</div>
<Circle style="font-size:1rem">
	แน่นอนว่ามันเป็นไปได้ยาก<br />
	ที่ภายในพรรคหนึ่งพรรค<br />
	จะออกเสียงตามมติพรรคได้โดยเอกฉันท์<br />
	<span>ดังนั้น<strong style="font-size:1.3em">การโหวตสวนมติพรรค</strong></span>
	ของ ส.ส. บางรายจึงปรากฏให้เห็น<br />
	บนหน้าข่าวอยู่เรื่อยไป
</Circle>
<div style="--h:128px" />
<CircleFold
	decorSrc={[
		'/parliament-in-a-nutshell/part3_deco1.svg',
		'/parliament-in-a-nutshell/part3_deco2.svg',
		'/parliament-in-a-nutshell/part3_deco3.svg'
	]}
	circleStyle="font-size:1rem"
>
	ซึ่งในหลาย ๆ ครั้ง<br />
	การโหวตสวนมติพรรคก็ได้นำไปสู่<br />
	<span>
		<strong style="font-size:1.3em">&ldquo;การขับพ้นพรรค&rdquo;</strong>
		<span style="font-size:1.3em">และ</span>
	</span>
	<strong style="font-size:1.3em">&ldquo;การเปลี่ยนขั้วย้ายค่าย&rdquo;</strong>
	สร้างตัวเลขที่ไม่หยุดนิ่ง<br />
	ต่อจำนวนเก้าอี้ส.ส.ฝ่ายค้าน<br />
	และฝ่ายรัฐบาล
</CircleFold>

<style lang="scss">
	.title-img {
		width: 75vw;
		height: 75vh;
		object-fit: contain;
		object-position: center;
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
			object-fit: contain;
			object-position: center;
			max-width: 30vw;

			&.star {
				top: 50%;
				left: 38%;
				transform: translate(-50%, -50%) scale(0);
				max-width: initial;
				height: 40vh;

				&.play_star_animation {
					--btxm: -50%;
					--btym: -50%;
					animation: bounceInRev 1s forwards;
				}
			}

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
		height: 30vh; /* O */

		background: linear-gradient(#000f, #0000);
	}
</style>
