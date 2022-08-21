<!-- Representative Portrait -->
<script lang="ts">
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
</script>

<div
	class="rp-container {clazz} tooltip-{tooltip}"
	class:showTop
	style:--s={size}
	style:--op={op}
	{...$$restProps}
>
	<img
		src="/shaking-parliament/{src}"
		alt={name}
		title={tooltip ? null : name}
		class="portrait {side}"
		class:dashedBorder
		style:--c={color}
		style:--s={size}
		decoding="async"
		loading="lazy"
		{style}
	/>
	<div class="tooltip">{name}</div>
	<div class="top" style:--shift={shift}><slot /></div>
</div>

<style lang="scss">
	.rp-container {
		width: var(--s);
		height: var(--s);
	}

	.portrait {
		display: inline-block;
		object-fit: contain;
		object-position: 50% 50%;

		background: var(--c, #fff);

		width: var(--s);
		height: var(--s);

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
			// width: calc(var(--s) * 1.1);
			// In the future use `aspect-ratio: 1.1/1` and with fixed `height`.
		}

		&.dashedBorder {
			border: 1px dashed hsl(0, 0%, 32%);
		}
	}

	.top {
		position: absolute;
		top: var(--shift, calc(var(--s) * 0.25));
		left: var(--shift, calc(var(--s) * 0.25));

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
		top: -8px;
		z-index: 18;

		background: #000d;
		border-radius: 8px;

		display: flex;

		color: #fff;
		line-height: 1;
		white-space: nowrap;

		user-select: none;
		-webkit-user-select: none;
		-moz-user-select: none;

		opacity: 0;
		transition: opacity 0;
		pointer-events: none;
	}

	.tooltip-right .tooltip {
		left: -8px;
		padding: 8px 12px 8px calc(100% + 16px);
		height: calc(100% + 16px);
		align-items: center;
	}

	.tooltip-top .tooltip {
		left: 50%;
		padding: 12px;
		transform: translate(-50%, -100%);
		letter-spacing: 0.3px;
	}

	.rp-container:is(.tooltip-right, .tooltip-top):not(.showTop) > .portrait:hover {
		z-index: 19;

		+ .tooltip {
			opacity: 1;
			pointer-events: auto;
			transition: opacity 0.1s;
		}
	}
</style>
