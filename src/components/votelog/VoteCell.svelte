<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { inView } from 'motion';

	const dispatch = createEventDispatcher();

	export let side: 'gov' | 'opp' | 'pracharat' | 'black' = 'gov';
	export let trigger: string = '';
	export let margin: string = '-216px 0px 1500px 0px';

	let el: any;
	onMount(() => {
		if (!trigger) return;
		inView(
			el,
			() => {
				dispatch('inside');

				return () => dispatch('outside');
			},
			{ margin }
		);
	});
</script>

<div bind:this={el} class="cell {side}" class:trigger style="--trigger:{trigger}" {...$$restProps}>
	{#if side === 'gov'}
		<svg width="9" height="9" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M1.02415 2.64688L2.96757 4.97479L6.99949 0.92213"
				stroke="currentColor"
				stroke-width="1.5"
			/>
		</svg>
	{:else if side === 'opp'}
		<svg width="9" height="9" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 1L6 6M6 1L1 6" stroke="currentColor" stroke-width="1.5" />
		</svg>
	{/if}
</div>

<style lang="scss">
	.cell {
		--bg: #5b5b5b;
		--c: #d9d9d9;

		background: var(--bg);
		width: calc(72px - 1px);
		height: calc(1.5rem - 1px);
		margin-left: 1px;
		margin-top: 1px;
		box-shadow: 0 0 0 1px #a0a0a0;

		color: var(--c);

		&:last-of-type {
			border-right: 1px solid #a0a0a0;
		}

		display: flex;
		align-items: center;
		justify-content: center;

		&.opp {
			--bg: #d9d9d9;
			--c: #5b5b5b;
		}

		&.pracharat {
			--bg: hsl(205, 78%, 15%);
			box-shadow: 0 1px 0 0 var(--bg);
		}

		&.black {
			--bg: #000;
			box-shadow: 0 1px 0 0 #000;
		}

		&.trigger::after {
			content: '';
			position: absolute;
			bottom: -3px;
			left: 0;
			width: 100%;
			height: 5px;
			background: var(--trigger);
			z-index: 1;
		}
	}
</style>
