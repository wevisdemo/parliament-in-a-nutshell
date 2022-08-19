<script>
	import VoteCell from './VoteCell.svelte';
	import VoteIcon from './VoteIcon.svelte';

	export let hideHint = true;
	export let hintPracharat = false;
</script>

<div class:hideHint class="votelegend-container">
	<div>
		<div class="legend lg1">
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
	</div>
	<div>
		<div class="legend lg2">
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
</div>

<style lang="scss">
	.votelegend-container {
		z-index: 5;
		margin-bottom: -32px;
	}

	.legend {
		padding: 16px 48px;
		border: 4px solid #fff;
		display: inline-flex;
		gap: 2rem;
		border-radius: 999px;
		margin-bottom: 1rem;
		--distance: 12%;

		&::before {
			content: 'แนวโน้มการลงมติ';
			position: absolute;
			top: 50%;
			left: calc(var(--distance) * -1);
			font-family: 'Kanit', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
				Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
			font-weight: 600;
			text-align: right;
			transform: translate(-100%, -50%);
		}

		&::after {
			content: '';
			position: absolute;
			width: calc(var(--distance) - 1rem);
			height: 2px;
			left: calc((var(--distance) - 1rem) * -1);
			top: 50%;
			transform: translate(0, -50%);
			border-top: 4px dotted #fff;
		}
	}

	.lg2 {
		gap: 1rem;
		--distance: 10%;
		margin-bottom: 0;

		&::before {
			content: 'ประเภทการลงมติ';
		}
	}

	.hideHint > div > .legend {
		border: 4px solid transparent;
		margin-bottom: 0;

		&::before,
		&::after {
			display: none;
		}
	}

	.sep {
		width: 2px;
		background: #fff;
	}

	.line {
		width: 4rem;
		height: 5px;
		background: #a0a0a0;
	}

	.type {
		display: flex;
		align-items: center;
		gap: 1ch;
	}
</style>
