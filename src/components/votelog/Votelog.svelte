<script lang="ts">
	import { scroll } from 'motion';

	import { onMount } from 'svelte';

	import VoteLegend from './VoteLegend.svelte';

	export let hintPracharat = false;

	let el_header: any;
	let el_body: any;

	onMount(() => {
		scroll(
			({ x }) => {
				el_header?.scrollTo?.(x.current, 0);
			},
			{
				container: el_body,
				axis: 'x'
			}
		);
	});
</script>

<VoteLegend {hintPracharat} />
<div class="votelog-container">
	<div bind:this={el_header} class="votelog-head">
		<div class="votelog-head-spacer" />
		<div class="votelog-head-columns">
			<slot name="header" />
		</div>
	</div>
	<div bind:this={el_body} class="votelog-body">
		<slot />
	</div>
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
		top: -1px;
		z-index: 3;
		margin-bottom: 24px;
		overflow: hidden;
		padding: 0 4px;
	}

	.votelog-head-columns {
		padding: 72px 9px 16px 8px;
		gap: 16px;
		background: #000a;
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		box-shadow: 0 0 16px #000;
	}

	.votelog-head-spacer {
		background: #000a;
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		box-shadow: 0 0 16px #000;
	}

	.votelog-head-spacer {
		width: 48px;
		flex: 0 0 48px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.votelog-body {
		margin-top: -16px;
		padding: 4px;
		overflow: auto hidden;

		scrollbar-color: #a0a0a0 #5b5b5b;
		scrollbar-width: thin;

		&::-webkit-scrollbar {
			height: 10px;
			width: 10px;
		}

		&::-webkit-scrollbar-track {
			background: #5b5b5b;
			border-radius: 6px;
		}

		&::-webkit-scrollbar-thumb {
			background: #a0a0a0;
			border-radius: 6px;
		}

		&::-webkit-scrollbar-thumb:hover {
			background: #d9d9d9;
		}
	}

	// .votelog-icon, .votelog-value, .votelog-subject are in scss file
</style>
