<script lang="ts">
	import { onMount } from 'svelte';
	import { computePosition, offset, shift } from '@floating-ui/dom';

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

	let showTooltip = () => {};
	let hideTooltip = () => {};
	let el_image: any;
	let el_tooltip: any;
	onMount(() => {
		if (!tooltip) return;
		showTooltip = () => {
			if (showTop) return;
			el_tooltip.classList.add('show');

			computePosition(el_image, el_tooltip, {
				placement: 'top',
				middleware: [offset(8), shift({ padding: 8 })]
			}).then(({ x, y }) => {
				Object.assign(el_tooltip.style, {
					left: `${x}px`,
					top: `${y}px`
				});
			});
		};

		hideTooltip = () => {
			el_tooltip.classList.remove('show');
			Object.assign(el_tooltip.style, {
				left: null,
				top: null
			});
		};
	});
</script>

<div class="rp-container {clazz}" class:showTop style:--s={size} {...$$restProps}>
	<img
		src="/shaking-parliament/{src}"
		alt={name}
		bind:this={el_image}
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
	{#if tooltip}
		<div bind:this={el_tooltip} class="tooltip">{name}</div>
	{/if}
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

	.tooltip {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 20;

		padding: 12px;

		background: #000d;
		border-radius: 8px;

		display: flex;

		color: #fff;
		letter-spacing: 0.3px;
		line-height: 1;
		white-space: nowrap;

		-webkit-user-select: none;
		-moz-user-select: none;
		user-select: none;

		font-size: 0;
		opacity: 0;
		transition: opacity 0;
		pointer-events: none;

		&.show {
			font-size: 1rem;
			opacity: 1;
			pointer-events: auto;
			transition: opacity 0.1s;
		}
	}
</style>
