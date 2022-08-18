<script lang="ts">
	import Bignum from 'components/Bignum.svelte';
	import Sankey from './sankey.svelte';
</script>

<div style="--h:10vh" />
<div class="compare">
	<div class="compare-opp">
		<div class="black-lbl tc">
			พรรคฝ่ายค้าน<br />
			ที่มีคน<strong>ย้ายออก</strong>มากที่สุด
		</div>
		<Bignum oldNum={15}>
			<div class="bnt-futureforward tc" slot="header">
				พรรคอนาคตใหม่<br />
				/ก้าวไกล
			</div>
		</Bignum>
	</div>
	<div class="sep" />
	<div class="compare-gov">
		<div class="black-lbl tc">
			พรรคฝ่ายรัฐบาล<br />
			ที่ฝ่ายค้าน<strong>ย้ายเข้า</strong>มากที่สุด
		</div>
		<Bignum oldNum={11}>
			<div class="bnt-bhumjaithai tc" slot="header">
				พรรค<br />
				ภูมิใจไทย
			</div>
		</Bignum>
	</div>
</div>
<div style="--h:10vh" />
<Sankey />
<div style="--h:32px" />
<div class="bridge-13 tc c">
	<div class="T1">
		ถึงอย่างนั้น จำนวนเก้าอี้ฝ่ายรัฐบาลที่เพิ่มขึ้น<br />
		<span class="bigger">เกื้อหนุน</span> การลงมติของ &ldquo;ขั้วรัฐบาล&rdquo; มากน้อยแค่ไหน ?
	</div>
</div>

<style lang="scss">
	.compare {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 2rem;

		> .compare-opp {
			justify-self: flex-end;
		}

		> .compare-gov {
			justify-self: flex-start;
		}
	}

	.sep {
		border-right: 2px dashed #000;
	}

	.black-lbl {
		display: inline-block;

		border-radius: 24px;

		margin-bottom: 1.5rem;
		padding: 0.75rem 2.5rem;

		background: #000;

		color: white;
		font-size: 1.5rem;
		line-height: 1.2;

		white-space: nowrap;

		pointer-events: none;
	}

	.bnt-futureforward,
	.bnt-bhumjaithai {
		font-size: 2rem;
		font-weight: 700;
		line-height: 1.2;
		color: #ff6f21;
		margin-top: 1.5rem;
		transform: translateY(-1.5rem);
	}

	.bnt-bhumjaithai {
		color: #065cab;
	}

	.bridge-13 {
		background: linear-gradient(#0000, #000f);
		height: 50vh;
		justify-content: flex-end;

		.T1 {
			font-size: 2.5rem;
			color: white;
			line-height: 1.2;
			letter-spacing: 1px;

			position: sticky;
			bottom: 40vh;

			padding: 64px 0;

			.bigger {
				font-size: 1.2em;
			}
		}
	}
</style>
