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
	export let __useExperimentTooltip: boolean = false;
</script>

<div
	class="rp-container"
	class:showTop
	class:useExperimentTooltip={__useExperimentTooltip}
	style="--s:{size}"
>
	<img
		src={`/shaking-parliament/${src}`}
		alt={name}
		title={__useExperimentTooltip ? null : name}
		class={`${side} ${clazz} portrait`}
		style:--c={color}
		style:--s={size}
		decoding="async"
		loading="lazy"
		{style}
	/>
	<div class="tooltip">{name}</div>
	<div class="top" style="--shift:{shift}"><slot /></div>
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

		background: var(--c, white);

		width: var(--s);
		height: var(--s);

		opacity: 1;
		filter: saturate(1);
		transition: opacity 0.3s, filter 0.3s;

		position: relative;

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
			opacity: 0.4;
			filter: saturate(0.5);
		}

		> .top {
			opacity: 1;
			pointer-events: auto;
		}
	}

	.tooltip {
		position: absolute;
		top: -8px;
		left: -8px;
		z-index: 1;

		width: auto;
		height: calc(100% + 16px);

		padding: 8px 12px 8px calc(100% + 16px);

		border-radius: 8px;

		background: #000c;

		display: flex;
		align-items: center;

		color: #fff;
		white-space: nowrap;

		user-select: none;

		opacity: 0;
		transition: opacity 0s;
		pointer-events: none;
	}

	.rp-container.useExperimentTooltip:not(.showTop) > .portrait:hover {
		z-index: 2;

		+ .tooltip {
			opacity: 1;
			pointer-events: auto;
			transition: opacity 0.1s;
		}
	}
</style>
