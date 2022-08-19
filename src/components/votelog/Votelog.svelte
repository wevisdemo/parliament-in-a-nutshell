<script lang="ts">
	import VoteLegend from './VoteLegend.svelte';

	export let hideHint = true;
	export let hintPracharat = false;
</script>

<VoteLegend {hideHint} {hintPracharat} />
<div class="votelog-container">
	<div class="votelog-head">
		<div class="votelog-head-spacer" />
		<div class="votelog-head-columns">
			<slot name="header" />
		</div>
	</div>
	<slot />
</div>

<style lang="scss">
	.votelog-container {
		max-width: 100%;
	}

	.votelog-head,
	.votelog-head-columns {
		display: flex;
	}

	// .votelog-row, .votelog-value are in scss file

	.votelog-head {
		position: sticky;
		top: 0;
		z-index: 3;
		margin-bottom: 24px;
	}

	.votelog-head-columns {
		padding: 72px 9px 16px 8px;
		gap: 16px;
		background: #000a;
		backdrop-filter: blur(8px);
		box-shadow: 0 0 16px #000;
	}

	.votelog-head-spacer {
		background: #000a;
		backdrop-filter: blur(8px);
		box-shadow: 0 0 16px #000;
	}

	.votelog-head-spacer {
		width: 48px;
		flex: 0 0 48px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	// .votelog-icon, .votelog-body, .votelog-value, .votelog-subject are in scss file
</style>
