<script lang="ts">
	import { onMount } from 'svelte';
	import { timeline, scroll, inView, animate } from 'motion';

	import Sankey from './sankey.svelte';
	import TableBridge from 'components/TableBridge.svelte';
	import Circle from 'components/Circle.svelte';

	let play_star_animation = false;

	let el_decor_container: any;
	let el_logo: any;
	onMount(() => {
		const el_decorchild = el_decor_container.children;
		const seq: TimelineDefinition = [
			[
				el_decorchild[1],
				{ transform: ['translateY(0)', 'translateY(950px)'] },
				{ easing: 'linear' }
			],
			[
				el_decorchild[2],
				{ transform: ['translateY(0)', 'translateY(1500px)'] },
				{ easing: 'linear', at: '<' }
			]
		];

		scroll(timeline(seq), {
			target: el_decor_container,
			offset: ['start end', 'end start']
		});

		inView(el_logo, () => void (play_star_animation = true), { amount: 1 });
	});
</script>

<div class="s14-container tc c">
	<img class="crack" src="/shaking-parliament/crack.svg" alt="" />
	<div bind:this={el_decor_container} class="decor">
		<img
			class="star"
			class:play_star_animation
			src="/shaking-parliament/star_02.svg"
			alt=""
			decoding="async"
			loading="lazy"
			width="384"
			height="396"
		/>
		<img
			class="d1"
			src="/shaking-parliament/part1_bg4.png"
			alt=""
			decoding="async"
			loading="lazy"
			width="537"
			height="660"
		/>
		<img
			class="d2"
			src="/shaking-parliament/part1_bg3.png"
			alt=""
			decoding="async"
			loading="lazy"
			width="487"
			height="578"
		/>
	</div>
	<img
		bind:this={el_logo}
		class="title-img"
		src="/shaking-parliament/part4_title.png"
		alt=""
		decoding="async"
		loading="lazy"
	/>
	<img class="news-img" src="/shaking-parliament/pt4_newspaper.png" alt="" />
	<p class="news-text tc">
		&ldquo; มกราคม 2565 พล.อ.ประวิตร วงษ์สุวรรณ<br />
		<span class="special-lh">หัวหน้าพรรคพลังประชารัฐ<br /></span>
		<span class="black">ได้มีมติให้ขับ 21 ส.ส. &ldquo;ก๊วนธรรมนัส&rdquo; ออกจากพรรค</span><br />
		ด้วยเห็นว่าในช่วงหลายเดือนที่ผ่านมา<br />
		<span class="black"
			>มีเหตุแห่งความร้ายแรงของพรรค ที่เกิดจากคน<span class="nw">ทั้ง 21 คน</span></span
		>
		<br /><br /><br /><br />
		โดยในเวลาต่อมา
		<strong>ร.อ. ธรรมนัสได้นำทีม <span class="T1 num">18</span> ส.ส. เข้าสังกัด</strong><br />
		<span class="T1 thaiecon">พรรคเศรษฐกิจไทย</span><br />
		<span class="black" style="margin-top:8px"
			>ซึ่งมิได้ประกาศจุดยืนอย่างแน่ชัดว่าจะถือตนอยู่ใน<span class="nw">ขั้วข้างใด</span></span
		><br />
		ในขณะที่อีก <span class="T1 num">3</span> ส.ส. ได้เข้าสังกัด<br />
		<span class="T1 poomjaithai">พรรคภูมิใจไทย</span><br />
		ตามที่มีกระแสข่าวก่อนหน้านี้ &rdquo;
	</p>
</div>
<div style="--h:128px" />
<Sankey />
<Circle style="margin:144px auto 0;font-size:1rem">
	แน่นอนว่าด้วยฐานะ<br />
	&ldquo;อดีต&rdquo; คนใกล้ชิดของ<br />
	หัวหน้าพรรคพลังประชารัฐ<br />
	<br />
	<span>การวางตัวเป็น <strong style="font-size:1.3em">&ldquo;ฝ่ายอิสระ&rdquo;</strong></span>
	<span>ของ<span class="thaiecon-light">พรรคเศรษฐกิจไทย</span></span>
	ซึ่งนำโดย ร.อ. ธรรมนัส<br />
	<strong style="font-size:1.3em">จึงเป็นที่น่าจับตามอง</strong>
	<strong style="font-size:1.3em">อย่างยิ่ง</strong>
</Circle>
<TableBridge>
	<div class="bridge-text">
		ลองมาสำรวจสถิติ<span class="nw">การลงมติ</span><span class="nw"
			>ของ <strong>18 สมาชิก</strong></span
		><span class="nw">พรรคเศรษฐกิจไทย</span><br />
		ว่าพวกเขา
		<strong
			><span class="nw">&ldquo;เข้าข้าง&rdquo;</span> หรือ
			<span class="nw">&ldquo;ตรงข้าม&rdquo;</span>
			<span class="nw">กับ ฝ่ายรัฐบาล</span></strong
		> <span class="nw">มากน้อยเพียงใด</span>
	</div>
</TableBridge>

<style lang="scss">
	.crack {
		width: 100%;
		height: 30vw;
	}

	.title-img {
		width: 70vw;
		height: 50vh;
		object-fit: contain;
		object-position: center;
		margin: 96px 0;
	}

	.decor {
		position: absolute;
		top: 0;
		height: 100%;
		width: 100%;

		overflow: hidden;

		> img {
			position: absolute;
			top: 0;
			left: 0;
			object-fit: contain;
			object-position: center;
			max-width: 25vw;

			&.star {
				top: calc(30vw + 96px + 5vh);
				left: 30%;
				transform: translateX(-50%) scale(0);
				max-width: initial;
				height: 40vh;

				&.play_star_animation {
					animation: bounceInPt4 1s forwards;
				}
			}

			&.d2 {
				left: unset;
				top: 20vw;
				right: 0;
			}
		}
	}

	.news-img {
		width: 80%;
		max-width: 800px;
		margin-bottom: 96px;
	}

	.news-text {
		font-size: 2rem;
		line-height: 1.2;
		position: relative;

		> .black {
			display: inline-block;
			background: #000;
			color: #fff;
			padding: 8px 16px;
			margin: 1.6px 0;
			line-height: 1.5;
			font-weight: 700;
		}

		.T1 {
			font-size: 3.5rem;
			line-height: 1.1;
		}

		.num {
			font-size: 4rem;
		}
	}

	.special-lh {
		line-height: var(--lh, 2);
	}

	.thaiecon {
		color: #cbb979;
	}

	.thaiecon-light {
		color: #f0da8c;
	}

	.poomjaithai {
		color: #065cab;
	}

	.bridge-text {
		font-size: 2.5rem;
		color: #fff;
		line-height: 1.2;
		letter-spacing: 1px;
		text-shadow: 0 1px 2px #000c;

		padding: 64px 0 96px;
	}
</style>
