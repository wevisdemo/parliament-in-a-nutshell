<script lang="ts">
	import RP from 'components/RepPortrait.svelte';
</script>

<div class="curtain h100 c">
	<h1 class="T1" style="margin-bottom:24px">วิธีอ่านข้อมูล</h1>
	<h2 class="pill">ข้อมูลทั่วไป</h2>
	<div class="row" style="--gap:32px;margin-bottom:24px">
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
	<div class="row" style="--gap:32px">
		<div class="col tc">
			<RP
				color="#0b3757"
				name="ปารีณา ไกรคุปต์"
				size="96px"
				side="gov"
				src="rp/ศาลตัด-ปารีณา.png"
				tooltip="top"
			/>
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
				tooltip="top"
			/>
			<div class="side-explain">ส.ส.<br />ฝ่ายอิสระ</div>
			<div class="small-explain">(ไอคอนหกเหลี่ยม)</div>
		</div>
		<div class="col tc">
			<RP
				color="#ff6f21"
				name="วิโรจน์ ลักขณาอดิศร"
				size="96px"
				side="opp"
				src="rp/ลาออก-วิโรจน์.png"
				tooltip="top"
			/>
			<div class="side-explain">ส.ส.<br />ฝ่ายค้าน</div>
			<div class="small-explain">(ไอคอนวงกลม)</div>
			<div class="explainer">พรรคที่สังกัด</div>
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

	.curtain {
		width: 100%;
		height: 100vh;
		background: url(/shaking-parliament/curtain.png) repeat-x;
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
		line-height: 2;
		padding: 0 24px;

		font-size: 1.5rem;
		margin: 32px 0;
	}

	.side-explain {
		margin: 16px 0 8px;
	}

	.small-explain {
		font-style: italic;
		font-weight: 500;
		font-size: 0.8rem;
		letter-spacing: 0.5px;
		line-height: 189%;

		color: #ececec;

		white-space: nowrap;
	}

	.data-explain {
		background: var(--bgc, #dadada);
		color: var(--txc, #000);

		font-weight: 700;
		padding: 8px 48px;
		line-height: 1.2;
	}

	.explainer {
		position: absolute;
		top: 48px;
		left: 150%;
		transform: translateY(-50%);
		z-index: 19;

		border: 1px dashed #ffffff;
		padding: 12px;
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
</style>
