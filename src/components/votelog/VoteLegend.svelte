<script>
	import VoteCell from './VoteCell.svelte';
	import VoteIcon from './VoteIcon.svelte';

	export let hintPracharat = false;
	export let lineColor =
		'linear-gradient(90deg,#70d267 0%,#70d267 25%,#0b3757 25%,#0b3757 50%,#065cab 50%,#065cab 75%,#75328c 75%,#75328c 100%)';
</script>

<div class="votelegend-container">
	<div class="legend fw">
		<div class="type">
			<VoteCell />
			<span>=</span>
			<span>เห็นด้วยกับฝ่ายรัฐบาล</span>
		</div>
		<div class="type">
			<VoteCell side="opp" />
			<span>=</span>
			<span>ไม่เห็นด้วยกับฝ่ายรัฐบาล</span>
		</div>
		{#if hintPracharat}
			<div class="type">
				<VoteCell side="pracharat" style="box-shadow:0 0 0 1px #a0a0a0" />
				<span>=</span>
				<span>ยุบพรรคไปเข้าร่วมพรรคพลังประชารัฐ</span>
			</div>
		{:else}
			<div class="type">
				<VoteCell side="black" style="box-shadow:0 0 0 1px #a0a0a0" />
				<span>=</span>
				<span>ลาออก/ถูกระงับ/ไม่อยู่ในการปฏิบัติหน้าที่</span>
			</div>
		{/if}
	</div>
	<div class="legend fw" style="gap:0 32px">
		<div class="type">
			<div class="line" style:--lineColor={lineColor} />
			<span>=</span>
			<span>จุดเวลาที่ย้ายขั้ว/สังกัดพรรค</span>
		</div>
		<div class="sep" />
		<div class="type">
			<VoteIcon style="color:#a4a4a4" type="choose" />
			<span>=</span>
			<span>การเลือกนายกรัฐมนตรี</span>
		</div>
		<div class="sep s2" />
		<div class="type">
			<VoteIcon style="color:#a4a4a4" />
			<span>=</span>
			<span>การลงมติแก้รัฐธรรมนูญ/มติทั่วไป</span>
		</div>
		<div class="sep" />
		<div class="type">
			<VoteIcon style="color:#a4a4a4" type="distrust" />
			<span>=</span>
			<span>การลงมติอภิปรายไม่ไว้วางใจ</span>
		</div>
	</div>
</div>

<style lang="scss">
	.votelegend-container {
		z-index: 5;
		margin-bottom: -48px;
	}

	.legend {
		display: flex;
		justify-content: center;
		padding: 16px 48px;
		gap: 24px 32px;
		margin-bottom: 16px;
	}

	.sep {
		width: 2px;
		background: #fff;
	}

	.line {
		width: 64px;
		height: 5px;
		background: var(--lineColor, #a0a0a0);
	}

	.type {
		display: flex;
		align-items: center;
		gap: 1ch;
	}

	@media screen and (max-width: 1350px) {
		.s2 {
			width: 0;
			height: 24px;
			background: #000;
			flex-basis: 100%;
		}
	}

	@media screen and (max-width: 700px) {
		.sep {
			width: 0;
			height: 24px;
			background: #000;
			flex-basis: 100%;
		}
	}
</style>
