<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { sineOut } from 'svelte/easing';
	import { scroll, animate, ScrollOffset } from 'motion';

	let showSeat = false;
	let gov_seat = tweened(242, { duration: 500, easing: sineOut });

	let el_trigger1: any;
	let el_trigger2: any;
	let el_fade: any;
	onMount(() => {
		scroll(
			({ y }) => {
				if (y.progress === 1 && showSeat !== true) {
					showSeat = true;
					gov_seat.set(254);
					return;
				}
				if (y.progress !== 1 && showSeat === true) {
					showSeat = false;
					gov_seat.set(242);
					return;
				}
			},
			{
				target: el_trigger1,
				offset: ScrollOffset.Enter
			}
		);

		scroll(
			animate(el_fade, {
				height: ['0', '50vh']
			}),
			{
				target: el_trigger2,
				offset: ScrollOffset.Enter
			}
		);
	});
</script>

<!-- VH skip check -->
<div class="c tc">
	<h1>
		แล้ว 12 เก้าอี้ที่เพิ่มมา<br />
		<strong>เกื้อหนุน</strong> ฝั่งรัฐบาลมากน้อยแค่ไหน?
	</h1>
	<p class="s8-p">
		การเข้าสภาของ 12 พรรคเล็ก ส่งผลให้ ส.ส.ฝ่ายรัฐบาล <strong>พลิกเป็นเสียงข้างมาก</strong>
	</p>
	<div class="row par-size" style="--gap:0" class:showSeat>
		<div class="col c tc gov" style="--bgc:#5b5b5b;--txc:#fff">
			ฝ่ายรัฐบาล<br />
			<strong>{~~$gov_seat} คน</strong>
		</div>
		<div class="col c tc small" style="--bgc:transparent" />
		<div class="col c tc opp">
			ฝ่ายค้าน<br />
			<strong>246 คน</strong>
		</div>
		<div class="small-overlay" />
		<img
			src="/shaking-parliament/middle_line.svg"
			alt=""
			class="middle-line"
			decoding="async"
			loading="lazy"
			width="126"
			height="283"
		/>
	</div>
	<svg width="0" height="0">
		<defs>
			<clipPath id="fadeCurve" clipPathUnits="objectBoundingBox">
				<path d="M.5056 0C.5056.8 1 .2 1 1L0 1C0 .2.4888.8.4888 0Z" />
			</clipPath>
		</defs>
	</svg>
	<div style="--h:50vh" class="fade-container">
		<div bind:this={el_fade} class="fade-container">
			<div class="fade" style="--h:50vh">
				<div bind:this={el_trigger1} style="--h:15vh" />
				<div style="--h:5vh" />
				<div bind:this={el_trigger2} style="--h:30vh;display:flex">
					<p class="s9-2bridge tc">
						อย่างไรก็ดี<br />
						ลองมาสำรวจสถิติ<span class="nw">การลงมติ</span><span class="nw">ของ 12 พรรคเล็ก</span>
						<span class="nw"
							>ใน
							<strong>มติที่สำคัญ</strong></span
						><span class="nw"><strong>ตลอดสมัยสภา</strong></span><br />
						ว่าพวกเขา <strong class="nw">“เข้าข้าง”</strong> หรือ
						<strong class="nw">“ตรงข้าม”</strong>
						กับ<span class="nw">ฝ่ายรัฐบาล</span> <span class="nw">มากน้อยเพียงใด</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="s9-2sep black tc" style="--h:10vh" />

<style lang="scss">
	h1 {
		font-size: 2.5rem;
		line-height: 1;

		> strong {
			font-size: 1.5em;
			font-weight: 700;
		}

		margin: 80px 0;
	}

	.s8-p {
		margin: 0;
		margin-bottom: 160px;
	}

	.par-size {
		width: 70%;

		> .col {
			padding: 16px;

			background: var(--bgc, #dadada);
			color: var(--txc, #000);

			font-size: 1.5rem;
			padding: 48px 0;
			line-height: 1.2;

			transition: flex 0.5s;

			> strong {
				font-size: 1.5em;
			}
		}
	}

	.gov {
		flex: 242 242 0;
	}

	.small {
		flex: 12 12 0;
	}

	.opp {
		flex: 246 246 0;
	}

	.showSeat {
		.gov {
			flex: 254 254 0;
		}

		.small {
			flex: 0 0 0;
		}
	}

	.small-overlay {
		position: absolute;
		left: 48.4%;
		top: 0;
		height: 100%;

		border: 2px #a0a0a0 dashed;
		width: 2.4%;
	}

	.middle-line {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);

		height: 150%;
	}

	.fade-container {
		overflow: hidden;
		width: 100%;
		will-change: height;
	}

	.fade {
		width: 100%;
		background: linear-gradient(to bottom, #5b5b5b, #000);
		clip-path: url(#fadeCurve);
	}

	.s9-2bridge {
		color: #fff;
		font-size: 2rem;
		line-height: 1.5;
		align-self: flex-end;
		width: 100%;
		padding: 0 16px;
	}

	.s9-2sep {
		margin-top: -2px;
		padding-top: 2px;
		z-index: -1;
	}
</style>
