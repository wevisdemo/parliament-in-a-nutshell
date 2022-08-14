<script lang="ts">
	import RP from 'components/RepPortrait.svelte';
</script>

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
			<RP
				color="#0b3757"
				name="ปารีณา ไกรคุปต์"
				size="96px"
				side="gov"
				src="rp/parina.png"
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
				src="rp/wiroj.png"
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
</style>
