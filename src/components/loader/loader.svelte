<script lang="ts">
	import VoteIcon from 'components/votelog/VoteIcon.svelte';

	export let total: number;
	export let loaded: number[] = [];

	let isReady: boolean = false;
	$: percent = (loaded.length / total) * 100;
	$: {
		if (percent === 100) {
			if (window?.requestIdleCallback) {
				window.requestIdleCallback(() => (isReady = true));
			} else {
				window.requestAnimationFrame(() => (isReady = true));
			}
		}
	}
</script>

<div class="c loader-container" class:finish={isReady}>
	<div class="content tc">
		<div class="row" style="--gap:1rem">
			<div class="icon" class:check={percent >= 25}>
				<VoteIcon type="choose" />
			</div>
			<div class="icon" class:check={percent >= 50}>
				<VoteIcon />
			</div>
			<div class="icon" class:check={percent >= 75}>
				<VoteIcon type="distrust" />
			</div>
		</div>
		<div class="text">LOADING ...</div>
		<div class="load-bar">
			{#each Array(total) as _, i}
				<div class="load-block" class:loaded={loaded.includes(i)} />
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	@keyframes holdFade {
		0%,
		50% {
			opacity: 1;
		}
		to {
			opacity: 0;
			display: none;
		}
	}

	.loader-container {
		position: fixed;
		inset: 0;
		z-index: 98;

		background: url(/shaking-parliament/bg.jpg), #eee;
		background-size: 100%;
	}

	.finish {
		animation: holdFade 2s forwards;
		pointer-events: none;

		> .content {
			opacity: 0;
			transition: opacity 1s;
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}

	.icon {
		width: 4rem;
		height: 4rem;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 1.5rem;

		opacity: 0.25;
		transition: opacity 0.3s;

		&::before {
			content: '';
			position: absolute;
			width: 4rem;
			height: 4rem;

			border-radius: 50%;
			border: 3px dotted #5b5b5b;
		}

		&.check {
			opacity: 1;

			&::before {
				animation: spin 8s linear infinite;
			}
		}

		> :global(svg) {
			width: 1.5rem;
			height: 1.5rem;
			color: #5b5b5b;
		}
	}

	.text {
		font-style: italic;
		font-weight: 700;
		font-size: 1.5rem;
		color: #5b5b5b;
		letter-spacing: 0.04em;

		margin-bottom: 1rem;
	}

	.load-bar {
		display: flex;
	}

	.load-block {
		width: 16px;
		height: 8px;
		background: #d5d5d5;
		transition: background 0.3s;

		&.loaded {
			background: #5b5b5b;
		}
	}
</style>
