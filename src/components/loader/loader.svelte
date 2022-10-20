<script lang="ts">
	import VoteIcon from 'components/votelog/VoteIcon.svelte';

	export let loaded = false;
	export let isReady = false;
</script>

<div class="c loader-container" class:finish={isReady} aria-hidden={isReady}>
	<div class="content tc">
		<div class="row" class:stop={loaded}>
			<div class="icon">
				<VoteIcon type="choose" style="height:24px;width:24px" />
			</div>
			<div class="icon">
				<VoteIcon style="height:24px;width:24px" />
			</div>
			<div class="icon">
				<VoteIcon type="distrust" style="height:24px;width:24px" />
			</div>
		</div>
		<div class="text">LOADING ...</div>
	</div>
</div>

<style lang="scss">
	.loader-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 98;

		background: url(/parliament-in-a-nutshell/bg.jpg), #eee;
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

	.icon {
		width: 64px;
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 24px;

		color: #5b5b5b;

		opacity: 0.25;
		animation: op 1.5s infinite;

		&:nth-child(2) {
			animation-delay: 0.5s;
		}

		&:nth-child(3) {
			animation-delay: 1s;
		}

		&::before {
			content: '';
			position: absolute;
			width: 64px;
			height: 64px;

			border-radius: 50%;
			animation: spin 8s linear infinite;
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 80 80'%3E%3Ccircle cx='40' cy='40' r='38.5' stroke='%235B5B5B' stroke-dasharray='3 3' stroke-width='3'/%3E%3C/svg%3E");
		}
	}

	.stop > .icon {
		opacity: 1;
		animation: none;
	}

	.text {
		font-style: italic;
		font-weight: 700;
		font-size: 1.5rem;
		color: #5b5b5b;
		letter-spacing: 0.04em;

		margin-bottom: 16px;
	}
</style>
