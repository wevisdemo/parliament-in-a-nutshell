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
					return;
				}
				if (y.progress !== 1 && showSeat === true) {
					showSeat = false;
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
				height: ['0vh', '50vh']
			}),
			{
				target: el_trigger2,
				offset: ScrollOffset.Enter
			}
		);
	});

	$: {
		if (showSeat) {
			gov_seat.set(254);
		} else {
			gov_seat.set(242);
		}
	}
</script>

<div class="c tc">
	<h1>
		แล้ว 12 เก้าอี้ที่เพิ่มมา<br />
		<strong>เกื้อหนุน</strong> ฝั่งรัฐบาลมากน้อยแค่ไหน?
	</h1>
	<p class="s8-p">
		การเข้าสภาของ 12 พรรคเล็ก ส่งผลให้ส.ส.ฝ่ายรัฐบาล <strong>พลิกเป็นเสียงข้างมาก</strong>
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
		/>
	</div>
	<svg width="0" height="0">
		<defs>
			<clipPath id="fadeCurve" clipPathUnits="objectBoundingBox">
				<path d="M0.4872 0 0.5064 0C0.5064 0.8 1 0.2 1 1L0 1C0 0.2 0.4872 0.8 0.4872 0Z" />
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
						อย่างไรก็ดี <br />
						ลองมาสำรวจสถิติการลงมติของ 12 พรรคเล็ก ใน <strong>มติที่สำคัญตลอดสมัยสภา</strong><br />
						ว่าพวกเขา <strong>“เข้าข้าง”</strong> หรือ <strong>“ตรงข้าม”</strong> กับฝ่ายรัฐบาล มากน้อยเพียงใด
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
		}

		margin: 5rem 0;
	}

	.s8-p {
		margin: 0;
		margin-bottom: 10rem;
	}

	.par-size {
		width: 80%;

		> .col {
			padding: 1rem;

			background: var(--bgc, #dadada);
			color: var(--txc, #000);

			font-size: 1.5rem;
			padding: 3rem 0;
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
	}

	.s9-2sep {
		margin-top: -2px;
		padding-top: 2px;
		z-index: -1;
	}
</style>
