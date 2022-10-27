<script lang="ts">
	import { inView, scroll, timeline } from 'motion';
	import { onMount } from 'svelte';

	import Circle from 'components/Circle.svelte';
	import TableBridge from 'components/TableBridge.svelte';
	import Sankey from './sankey.svelte';

	let play_star_animation = false;
	let show_news = false;

	let el_decor_container: any;
	let el_logo: any;
	let el_newspaper: any;
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

		inView(
			el_logo,
			() => {
				play_star_animation = true;
			},
			{ amount: 1 }
		);
		inView(
			el_newspaper,
			() => {
				show_news = true;
			},
			{ amount: 0.5 }
		);
	});
</script>

<div class="s14-container tc c">
	<img
		class="crack"
		src="/parliament-in-a-nutshell/crack.svg"
		alt=""
		decoding="async"
		loading="lazy"
	/>
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
			class="d1"
			src="/parliament-in-a-nutshell/part1_bg4.png"
			alt=""
			decoding="async"
			loading="lazy"
			width="537"
			height="660"
		/>
		<img
			class="d2"
			src="/parliament-in-a-nutshell/part1_bg3.png"
			alt=""
			decoding="async"
			loading="lazy"
			width="487"
			height="578"
		/>
	</div>
	<h2 class="mtb0">
		<img
			bind:this={el_logo}
			class="title-img"
			src="/parliament-in-a-nutshell/part4_title.png"
			alt="บทที่ 4 — สภาคลอน ขั้วรัฐแตกพ่าย เกิดการโยกย้ายขนานใหญ่"
			decoding="async"
			loading="lazy"
		/>
	</h2>
	<p class="news-text tc">
		<span class="b">มกราคม 2565:</span> พล.อ.ประวิตร วงษ์สุวรรณ หัวหน้าพรรคพปชร.<br />
		<span class="b bggr under">ได้มีมติให้ขับ 21 ส.ส. &ldquo;ก๊วนธรรมนัส&rdquo; ออกจากพรรค</span><br
		/>
		ด้วยเห็นว่าในช่วงหลายเดือนที่ผ่านมา<br />
		<span class="b bggr">มีเหตุแห่งความร้ายแรงของพรรค ที่เกิดจากคนทั้ง 21 คน</span>
	</p>
	<div bind:this={el_newspaper}>
		<img
			class="decor-star"
			class:show_news
			src="/parliament-in-a-nutshell/star_03.svg"
			alt=""
			decoding="async"
			loading="lazy"
			width="410"
			height="428"
			aria-hidden="true"
		/>
		<img
			class="news-img"
			class:show_news
			src="/parliament-in-a-nutshell/pt4_newspaper.png"
			alt="28 มกราคม 2565 ธรรมนัสนำทีมย้ายขั้ว"
			decoding="async"
			loading="lazy"
		/>
	</div>
	<p class="news-text tc">
		โดยในเวลาต่อมา
		<span class="b">ร.อ. ธรรมนัสได้นำทีม <span class="T1 num">18</span> ส.ส.</span><br />
		เข้าสังกัด <span class="b tec tectx">พรรคเศรษฐกิจไทย</span><br />
		<span class="b under">ซึ่งมิได้ประกาศขั้วข้างของตนอย่างแน่ชัด</span><br /><br />
		ในขณะที่อีก <span class="T1 num">3</span> ส.ส. ได้เข้าสังกัด
		<span class="b poomjaithai">พรรคภูมิใจไทย</span><br />
		ตามที่มีกระแสข่าวก่อนหน้านี้
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
	<span>ของ<span class="tec">พรรคเศรษฐกิจไทย</span></span>
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
					--btxm: -50%;
					animation: bounceInRev 1s forwards;
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
		margin: 96px 10vw 96px 0;
		opacity: 0;
		transition: opacity 0.5s;

		&.show_news {
			opacity: 1;
		}
	}

	.decor-star {
		position: absolute;
		right: 0;
		bottom: 56px;
		transform: scale(0);

		&.show_news {
			animation: bounceInRev 1s forwards;
		}
	}

	.news-text {
		position: relative;
		font-size: 1.8rem;
		line-height: 1.5;
		text-shadow: 0 0 32px #fff, 0 0 16px #fff, 0 0 8px #fff, 0 0 4px #fff;

		> .bggr {
			font-size: 1.11em; // 1.8rem * 1.11em ~= 2.00rem
		}

		> .under {
			text-decoration: underline;
		}

		.num {
			font-size: 4rem;
		}
	}

	.tec {
		color: #f0da8c;
	}

	.tectx {
		font-size: 3rem;
		text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000, 0px 1px 0 #000,
			0px -1px 0 #000, -1px 0px 0 #000, 1px 0px 0 #000, 2px 2px 0 #000, -2px 2px 0 #000,
			2px -2px 0 #000, -2px -2px 0 #000, 0px 2px 0 #000, 0px -2px 0 #000, -2px 0px 0 #000,
			2px 0px 0 #000, 1px 2px 0 #000, -1px 2px 0 #000, 1px -2px 0 #000, -1px -2px 0 #000,
			2px 1px 0 #000, -2px 1px 0 #000, 2px -1px 0 #000, -2px -1px 0 #000;
	}

	.poomjaithai {
		color: #065cab;
		font-size: 3rem;
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
