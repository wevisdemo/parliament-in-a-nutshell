<script lang="ts">
	import { onMount } from 'svelte';
	import { showTooltip as _showTooltip, hideTooltip as _hideTooltip } from 'utils/tooltip';

	export let src: string;
	export let side: 'gov' | 'opp' | 'free' = 'gov';
	export let color: string;
	export let name: string;
	export let size: string = '';
	export let tooltip = true;

	let clazz: string = '';
	export { clazz as class };

	export let showTop = false;
	export let dashedBorder = false;

	let showTooltip = tooltip ? _showTooltip : () => {};
	let hideTooltip = tooltip ? _hideTooltip : () => {};
	onMount(() => {
		if (!tooltip) return;
	});
</script>

<div class="rp-container {clazz}" class:showTop style:--s={size} {...$$restProps}>
	<img
		src="/shaking-parliament/{src}"
		alt={name}
		class="portrait {side}"
		class:dashedBorder
		style:--c={color}
		style:--s={size}
		decoding="async"
		loading="lazy"
		width={size}
		height={size}
		on:mouseenter={showTooltip}
		on:mouseleave={hideTooltip}
	/>
	{#if $$slots.default}
		<div class="top"><slot /></div>
	{/if}
</div>

<style lang="scss">
	.rp-container {
		width: calc(var(--s) * 1px);
		height: calc(var(--s) * 1px);
	}

	.portrait {
		display: inline-block;
		object-fit: contain;
		object-position: 50% 50%;

		background: var(--c, #fff);

		width: calc(var(--s) * 1px);
		height: calc(var(--s) * 1px);

		opacity: 1;
		transition: opacity 0.3s;

		overflow: hidden;

		position: relative;
		z-index: 1;

		&.gov {
			border-radius: 25%;
		}
		&.opp {
			border-radius: 50%;
		}
		&.free {
			clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
			transform: scale(1.1);
		}

		&.dashedBorder {
			border: 1px dashed hsl(0, 0%, 32%);
		}
	}

	.top {
		position: absolute;
		top: 0;
		left: 0;

		pointer-events: none;
		opacity: 0;
		transition: opacity 0.3s;
	}

	.rp-container.showTop {
		> .portrait {
			opacity: 0;
		}

		> .top {
			opacity: 1;
			pointer-events: auto;
		}
	}
</style>
