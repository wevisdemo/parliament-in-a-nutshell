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
</script>

<img
	src={`shaking-parliament/${src}`}
	alt={name}
	title={name}
	class={`${side} ${clazz} portrait`}
	style:--c={color}
	style:--s={size}
	decoding="async"
	loading="lazy"
	{style}
/>

<style lang="scss">
	.portrait {
		display: inline-block;
		object-fit: contain;
		object-position: 50% 50%;

		background: var(--c, white);

		width: var(--s);
		height: var(--s);

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
</style>
