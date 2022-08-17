<script lang="ts">
	import { onMount } from 'svelte';
	import { timeline, scroll } from 'motion';

	import Sankey from './sankey.svelte';

	let el_decor_container: any;
	onMount(() => {
		const el_decorchild = el_decor_container.children;
		const seq: TimelineDefinition = [
			[
				el_decorchild[0],
				{ transform: ['translateY(-300px)', 'translateY(300px)'] },
				{ easing: 'linear' }
			],
			[
				el_decorchild[1],
				{ transform: ['translateY(-300px)', 'translateY(200px)'] },
				{ easing: 'linear', at: '<' }
			]
		];

		scroll(timeline(seq), {
			target: el_decor_container,
			offset: ['start end', 'end start']
		});
	});
</script>

<img class="crack" src="/shaking-parliament/crack.svg" alt="" />
<div class="s14-container h100 tc c">
	<div bind:this={el_decor_container} class="decor">
		<img
			class="d1"
			src="/shaking-parliament/part1_bg4.png"
			alt=""
			decoding="async"
			loading="lazy"
		/>
		<img
			class="d2"
			src="/shaking-parliament/part1_bg3.png"
			alt=""
			decoding="async"
			loading="lazy"
		/>
	</div>
	<img
		class="title-img"
		src="/shaking-parliament/part4_title.png"
		alt=""
		decoding="async"
		loading="lazy"
	/>
</div>
<div class="tc c" style="--mt:-30vh">
	<img src="/shaking-parliament/pt4_newspaper.png" alt="" />
</div>
<p class="news-text tc" style="--mb:15vh">
	&ldquo; มกราคม 2565 พล.อ.ประวิตร วงษ์สุวรรณ<br />
	<span class="special-lh">หัวหน้าพรรคพลังประชารัฐ<br /></span>
	<span class="black">ได้มีมติให้ขับ 21 ส.ส. &ldquo;ก๊วนธรรมนัส&rdquo; ออกจากพรรค</span><br />
	ด้วยเห็นว่าในช่วงหลายเดือนที่ผ่านมา<br />
	<span class="black">มีเหตุแห่งความร้ายแรงของพรรค ที่เกิดจากคนทั้ง 21 คน</span>
	<br /><br /><br /><br />
	โดยในเวลาต่อมา
	<strong>ร.อ. ธรรมนัสได้นำทีม <span class="T1 num">18</span> ส.ส. เข้าสังกัด</strong><br />
	<span class="T1 thaiecon">พรรคเศรษฐกิจไทย</span><br />
	<span class="black" style="margin-top:.5rem"
		>ซึ่งมิได้ประกาศจุดยืนอย่างแน่ชัดว่าจะถือตนอยู่ในขั้วข้างใด</span
	><br />
	ในขณะที่อีก <span class="T1 num">3</span> ส.ส. ได้เข้าสังกัด<br />
	<span class="T1 poomjaithai">พรรคภูมิใจไทย</span><br />
	ตามที่มีกระแสข่าวก่อนหน้านี้ &rdquo;
</p>
<Sankey />
<p class="circle-text c tc">
	แน่นอนว่าด้วยฐานะ<br />
	&ldquo;อดีต&rdquo; คนใกล้ชิดของ<br />
	หัวหน้าพรรคพลังประชารัฐ<br />
	<br />
	<span>การวางตัวเป็น <strong>&ldquo;ฝ่ายอิสระ&rdquo;</strong></span>
	<span>ของ<span class="thaiecon-light">พรรคเศรษฐกิจไทย</span></span>
	ซึ่งนำโดย ร.อ. ธรรมนัส<br />
	<strong>จึงเป็นที่น่าจับตามอง</strong>
	<strong>อย่างยิ่ง</strong>
</p>
<div class="bridge-15 tc c">
	<div>
		ลองมาสำรวจสถิติการลงมติของ <strong>18 สมาชิก</strong>พรรคเศรษฐกิจไทย<br />
		ว่าพวกเขา <strong>&ldquo;เข้าข้าง&rdquo; หรือ &ldquo;ตรงข้าม&rdquo; กับฝ่ายรัฐบาล</strong> มากน้อยเพียงใด
	</div>
</div>

<style lang="scss">
	.crack {
		width: 100vw;
		height: 70vh;
	}

	.title-img {
		width: min(70vw, 90vh);
		margin-top: -30vh;
	}

	.decor {
		position: absolute;
		top: 0;
		height: 100%;
		width: 100%;

		> img {
			position: absolute;
			top: -30%;
			left: 0;
			z-index: 0;
			transform: translateY(-300px);

			&.d2 {
				left: unset;
				top: 25%;
				right: -10%;
				transform: translateY(-300px);
			}
		}
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

	.circle-text {
		background: #000;
		color: white;

		width: 315px;
		height: 315px;

		border-radius: 50%;

		margin: 15vh auto 0;

		position: relative;
		z-index: 1;

		font-size: 1rem;
		line-height: 1.5;

		strong {
			font-size: 1.3em;
		}
	}

	.bridge-15 {
		background: linear-gradient(#0000, #000f);
		font-size: 2.5rem;
		color: white;
		height: 50vh;
		line-height: 1.3;
		justify-content: flex-end;
		padding-bottom: 10vh;
	}
</style>
