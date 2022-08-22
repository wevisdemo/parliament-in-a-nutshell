<script lang="ts">
	import VoteIcon from 'components/votelog/VoteIcon.svelte';

	export let loaded = false;
	export let isReady = false;
</script>

<div class="c loader-container" class:finish={isReady}>
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
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
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
			transform: rotate(0);
		}
		to {
			transform: rotate(359deg);
		}
	}

	@keyframes op {
		0%,
		66.67% {
			opacity: 0.25;
		}

		33.33% {
			opacity: 1;
		}
	}

	@keyframes op1 {
		to {
			opacity: 1;
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
			border: 3px dotted #5b5b5b;
			animation: spin 8s linear infinite;
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
