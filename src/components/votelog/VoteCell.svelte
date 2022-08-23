<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { scroll } from 'motion';

	const dispatch = createEventDispatcher();

	export let side: 'gov' | 'opp' | 'pracharat' | 'black' = 'gov';
	export let line: string = '';
	export let fireEvent: boolean = false;
	export let threshold: number = 192; // 120 + unit ละ 24 px

	let el: any;
	let y_progress_mem: number = 1;
	onMount(() => {
		if (!fireEvent) return;
		scroll(
			({ y }) => {
				if (y_progress_mem === y.progress) return;
				y_progress_mem = y.progress;
				return dispatch('moved', y.targetOffset - y.current <= threshold);
			},
			{ target: el }
		);
	});
</script>

<div bind:this={el} class="cell {side}" class:line style:--line={line} {...$$restProps}>
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
		height: calc(24px - 1px);
		margin-left: 1px;
		margin-top: 1px;
		box-shadow: 0 0 0 1px #a0a0a0;

		color: var(--c);

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

		&.line::after {
			content: '';
			position: absolute;
			bottom: -3px;
			left: 0;
			width: 100%;
			height: 5px;
			background: var(--line);
			z-index: 1;
		}
	}
</style>
