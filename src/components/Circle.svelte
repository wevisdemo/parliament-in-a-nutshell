<script lang="ts">
	import { onMount } from 'svelte';
	import { animate, inView } from 'motion';

	let clazz: string = '';
	export { clazz as class };

	let el_circle_container: any;
	onMount(() => {
		inView(
			el_circle_container,
			() => {
				animate(el_circle_container, { opacity: [0, 1] }, { duration: 1 });
			},
			{ amount: 1 }
		);
	});
</script>

<p bind:this={el_circle_container} class="circle-text c tc {clazz}" {...$$restProps}>
	<slot />
</p>

<style lang="scss">
	.circle-text {
		background: #000;
		color: #fff;

		width: 315px;
		height: 315px;

		border-radius: 50%;

		margin: auto;

		position: relative;
		z-index: 1;

		font-size: 1.2rem;
		line-height: 1.5;

		opacity: 0;
	}
</style>
