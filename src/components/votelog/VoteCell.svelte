<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { inView } from 'motion';

	const dispatch = createEventDispatcher();

	export let side: 'gov' | 'opp' | 'pracharat' = 'gov';
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
	<div class="particle" />
</div>

<style lang="scss">
	.cell {
		--bg: #5b5b5b;
		--c: #d9d9d9;

		width: 72px;
		height: 1.5rem;
		background: var(--bg);
		border-bottom: 1px solid #a0a0a0;
		border-left: 1px solid #a0a0a0;

		&:last-of-type {
			border-right: 1px solid #a0a0a0;
		}

		display: flex;
		align-items: center;
		justify-content: center;

		> .particle {
			width: 0.5rem;
			height: 0.5rem;
			background: var(--c);
		}

		&.opp {
			--bg: #d9d9d9;
			--c: #5b5b5b;

			> .particle {
				border-radius: 50%;
			}
		}

		&.pracharat {
			--bg: #0b3757;
			border-bottom: none;

			> .particle {
				display: none;
			}
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
