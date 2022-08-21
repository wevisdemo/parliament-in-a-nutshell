<script>
	import VoteCell from './VoteCell.svelte';
	import VoteIcon from './VoteIcon.svelte';

	export let hintPracharat = false;
</script>

<div class="votelegend-container">
	<div class="legend fw">
		<div class="type">
			<VoteCell style="display:inline-block" />
			<span>=</span>
			<span>เห็นด้วยกับฝ่ายรัฐบาล</span>
		</div>
		<div class="type">
			<VoteCell side="opp" style="display:inline-block" />
			<span>=</span>
			<span>ไม่เห็นด้วยกับฝ่ายรัฐบาล</span>
		</div>
		{#if hintPracharat}
			<div class="type">
				<VoteCell side="pracharat" style="display:inline-block;box-shadow:0 0 0 1px #a0a0a0" />
				<span>=</span>
				<span>ยุบพรรคไปเข้าร่วมพรรคพลังประชารัฐ</span>
			</div>
		{:else}
			<div class="type">
				<VoteCell side="black" style="display:inline-block;box-shadow:0 0 0 1px #a0a0a0" />
				<span>=</span>
				<span>ลาออก/ถูกระงับ/ไม่อยู่ในการปฏิบัติหน้าที่</span>
			</div>
		{/if}
	</div>
	<div class="legend fw">
		<div class="type">
			<div class="line" />
			<span>=</span>
			<span>จุดเวลาที่ย้ายขั้ว/สังกัดพรรค</span>
		</div>
		<div class="sep" />
		<div class="type">
			<VoteIcon style="color:#a4a4a4" type="choose" />
			<span>=</span>
			<span>การเลือกนายกรัฐมนตรี</span>
		</div>
		<div class="sep" />
		<div class="type">
			<VoteIcon style="color:#a4a4a4" />
			<span>=</span>
			<span>การลงมติทั่วไป</span>
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
		gap: 32px;
		margin-bottom: 16px;
	}

	.sep {
		width: 2px;
		background: #fff;
	}

	.line {
		width: 64px;
		height: 5px;
		background: #a0a0a0;
	}

	.type {
		display: flex;
		align-items: center;
		gap: 1ch;
	}
</style>
