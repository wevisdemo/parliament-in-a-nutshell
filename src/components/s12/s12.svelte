<script lang="ts">
	import Bignum from 'components/Bignum.svelte';
</script>

<div style="--h:10vh" />
<div class="row">
	<div>
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
	<div>
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

<style lang="scss">
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
</style>
