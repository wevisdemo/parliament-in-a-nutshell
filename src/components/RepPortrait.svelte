<script lang="ts">
	import { onMount } from 'svelte';
	import { computePosition, offset, shift as fshift } from '@floating-ui/dom';

	export let src: string;
	export let side: 'gov' | 'opp' | 'free' = 'gov';
	export let color: string;
	export let name: string;
	export let size: string = '';
	export let style: string = '';
	let clazz: string = '';
	export { clazz as class };

	export let showTop: boolean = false;
	export let shift: string = '6px';
	export let tooltip: 'top' | 'right' | null = null;
	export let dashedBorder = false;
	export let op: string = shift === '0' ? '0' : '0.3';

	let showTooltip = () => {};
	let hideTooltip = () => {};
	let el_image: any;
	let el_tooltip: any;
	onMount(() => {
		showTooltip = () => {
			if (showTop) return;
			el_tooltip.classList.add('show');

			computePosition(el_image, el_tooltip, {
				placement: tooltip ?? 'top',
				middleware: [offset(8), fshift({ padding: 8 })]
			}).then(({ x, y }) => {
				Object.assign(el_tooltip.style, {
					left: `${x}px`,
					top: `${y}px`,
					bottom: 'unset',
					right: 'unset'
				});
			});
		};

		hideTooltip = () => {
			el_tooltip.classList.remove('show');
			Object.assign(el_tooltip.style, {
				left: null,
				top: null,
				bottom: null,
				right: null
			});
		};
	});
</script>

<div
	class="rp-container {clazz}"
	class:showTop
	style:--s={size}
	style:--op={op}
	bind:this={el_image}
	on:mouseenter={showTooltip}
	on:mouseleave={hideTooltip}
	{...$$restProps}
>
	<img
		src="/shaking-parliament/{src}"
		alt={name}
		class="portrait {side}"
		class:dashedBorder
		style:--c={color}
		style:--s={size}
		decoding="async"
		loading="lazy"
		{style}
		width={size}
		height={size}
	/>
	<div bind:this={el_tooltip} class="tooltip">{name}</div>
	<div class="top" style:--shift={shift}><slot /></div>
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
		// filter: saturate(1);
		transition: opacity 0.3s /*, filter 0.3s*/;
		// will-change: opacity /*, filter*/;

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
		top: var(--shift, calc(var(--s) * 0.25 * 1px));
		left: var(--shift, calc(var(--s) * 0.25 * 1px));

		pointer-events: none;
		opacity: 0;
		transition: opacity 0.3s;
	}

	.rp-container.showTop {
		> .portrait {
			opacity: var(--op, 0.3);
			// filter: saturate(0.5);
		}

		> .top {
			opacity: 1;
			pointer-events: auto;
		}
	}

	.tooltip {
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: 20;

		padding: 12px;

		background: #000d;
		border-radius: 8px;

		display: flex;

		color: #fff;
		letter-spacing: 0.3px;
		line-height: 1;
		white-space: nowrap;

		user-select: none;
		-webkit-user-select: none;
		-moz-user-select: none;

		opacity: 0;
		transition: opacity 0;
		pointer-events: none;

		&.show {
			opacity: 1;
			pointer-events: auto;
			transition: opacity 0.1s;
		}
	}
</style>
