<script lang="ts">
	import RP from 'components/RepPortrait.svelte';
</script>

<div class="curtain h100 c" aria-hidden="true">
	<h2 class="T1" style="margin-bottom:24px">วิธีอ่านข้อมูล</h2>
	<div class="pill dark">ข้อมูลทั่วไป</div>
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
	<div class="pill dark">ข้อมูล ส.ส. รายคน</div>
	<div class="small-explain hover-rp">รูปภาพเพื่อดูชื่อ ส.ส.</div>
	<div class="row" style="--gap:32px">
		<div class="col tc">
			<RP color="#0b3757" name="ปารีณา ไกรคุปต์" size="96" side="gov" src="rp/ศาลตัด-ปารีณา.png" />
			<div class="side-explain">ส.ส.<br />ฝ่ายรัฐบาล</div>
			<div class="small-explain">(ไอคอนสี่เหลี่ยม)</div>
		</div>
		<div class="col tc">
			<RP
				color="#85e8fe"
				name="มงคลกิตติ์ สุขสินธารานนท์"
				size="96"
				side="free"
				src="rp/mongkonkit.png"
			/>
			<div class="side-explain">ส.ส.<br />ฝ่ายอิสระ</div>
			<div class="small-explain">(ไอคอนหกเหลี่ยม)</div>
		</div>
		<div class="col tc">
			<RP
				color="#ff6f21"
				name="วิโรจน์ ลักขณาอดิศร"
				size="96"
				side="opp"
				src="rp/ลาออก-วิโรจน์.png"
			/>
			<div class="side-explain">ส.ส.<br />ฝ่ายค้าน</div>
			<div class="small-explain">(ไอคอนวงกลม)</div>
			<div class="explainer">พรรคที่สังกัด</div>
		</div>
	</div>
</div>

<style lang="scss">
	.curtain {
		width: 100%;
		background: url(/parliament-in-a-nutshell/curtain.png) repeat-x;
		background-size: auto 100%;
		background-position: center;

		position: absolute;
		top: 0;

		color: #fff;

		padding-bottom: 5%;
	}

	.T1 {
		font-size: 4rem;
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

		border: 1px dashed #fff;
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

	.hover-rp {
		margin: -1rem 0 1rem;

		&::before {
			content: 'แตะที่';
		}

		@media (hover) {
			&::before {
				content: 'วางเมาส์เหนือ';
			}
		}
	}
</style>
