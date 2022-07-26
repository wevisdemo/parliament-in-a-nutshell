<script lang="ts">
	import { onMount } from 'svelte';
	import { hideTooltip as _hideTooltip, showTooltip as _showTooltip } from 'utils/tooltip';

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

	const altSide = side === 'gov' ? 'ฝ่ายรัฐบาล' : side === 'opp' ? 'ฝ่ายค้าน' : 'ฝ่ายค้านอิสระ';
</script>

{#if $$slots.default}
	<div class="rp-container {clazz}" class:showTop style:--s={size} {...$$restProps}>
		<img
			src="/parliament-in-a-nutshell/{src}"
			alt="{name} ({altSide})"
			class="portrait {side}"
			class:dashedBorder
			style:--c={color}
			decoding="async"
			loading="lazy"
			width={size}
			height={size}
			on:mouseenter={showTooltip}
			on:mouseleave={hideTooltip}
		/>
		<div class="top"><slot /></div>
	</div>
{:else}
	<img
		src="/parliament-in-a-nutshell/{src}"
		alt="{name} ({altSide})"
		class="portrait {side} {clazz}"
		class:dashedBorder
		style:--c={color}
		style:--size={size}
		decoding="async"
		loading="lazy"
		width={size}
		height={size}
		on:mouseenter={showTooltip}
		on:mouseleave={hideTooltip}
		{...$$restProps}
	/>
{/if}

<style lang="scss">
	.rp-container {
		width: calc(var(--s) * 1px);
		height: calc(var(--s) * 1px);

		> .portrait {
			transition: opacity 0.3s;
		}
	}

	.portrait {
		display: inline-block;
		object-fit: contain;
		object-position: 50% 50%;

		background: var(--c, #fff);

		overflow: hidden;

		flex: 0 0 calc(var(--size) * 1px);
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
