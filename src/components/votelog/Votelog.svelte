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
	.votelog-head-columns,
	:global(.votelog-row),
	:global(.votelog-value) {
		display: flex;
	}

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

	.votelog-head-spacer,
	:global(.votelog-icon) {
		width: 48px;
		flex: 0 0 48px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	:global(.votelog-icon) {
		color: #a4a4a4;
	}

	:global(.votelog-body) {
		margin-top: -16px;
	}

	:global(.votelog-value) {
		transition: none;

		&::before {
			content: '';
			position: absolute;
			inset: -4px;
			border: 4px #fff solid;
			border-radius: 4px;
			opacity: 0;
			transition: none;
			pointer-events: none;
			z-index: 2;
		}
	}

	:global(.votelog-subject) {
		position: absolute;
		bottom: 0;
		transform: translateY(100%);
		left: -4px;
		background: #fff;
		color: #000;
		font-size: 0.8rem;
		border-radius: 0 4px 4px 4px;
		padding: 8px;
		opacity: 0;
		transition: none;
		pointer-events: none;
		box-shadow: 0 0 16px #000;
	}

	:global(.votelog-row:hover > .votelog-icon) {
		stroke: #fff;
	}

	:global(.votelog-row:hover > .votelog-value) {
		z-index: 2;
		transition: opacity 0.1s;
		box-shadow: 0 0 16px #000;

		&::before {
			opacity: 1;
			transition: opacity 0.1s;
		}
	}

	:global(.votelog-row:hover > .votelog-value > .votelog-subject) {
		opacity: 1;
		transition: opacity 0.1s;
	}
</style>
