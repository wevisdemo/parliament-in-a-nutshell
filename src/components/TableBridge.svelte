<script lang="ts">
	import { animate, scroll } from 'motion';
	import { onMount } from 'svelte';

	let el_bridge: any;
	let el_text: any;
	onMount(() => {
		scroll(
			animate(
				el_bridge.children[0],
				{ opacity: [0, 1], transform: ['translateY(-100%)', 'translateY(0)'] },
				{ easing: 'linear' }
			),
			{
				target: el_bridge,
				offset: ['0 1', '0.7 0.7']
			}
		);
	});
</script>

<div bind:this={el_bridge} class="bridge-container tc c">
	<slot />
</div>

<style lang="scss">
	.bridge-container {
		background: linear-gradient(#0000, #000f);
		height: 50vh; /* R */
		justify-content: flex-end;
		padding: 0 16px;
	}
</style>
