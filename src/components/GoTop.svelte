<script lang="ts">
	import { onMount } from 'svelte';
	import { cubicOut, quadIn } from 'svelte/easing';
	import { scroll } from 'motion';

	let scroll_top_enabled = false;
	let shift_footer = false;
	let goTop: any;

	onMount(() => {
		scroll(({ y }) => {
			if (y.current < 500 && scroll_top_enabled) return (scroll_top_enabled = false);
			if (y.current >= 500 && !scroll_top_enabled) return (scroll_top_enabled = true);
			if (y.progress < 0.99 && shift_footer) return (shift_footer = false);
			if (y.progress >= 0.99 && !shift_footer) return (shift_footer = true);
		});

		goTop = () => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		};
	});

	function goTopTransition(node: any, { delay = 0, duration = 400, easing = cubicOut }) {
		return {
			delay,
			duration,
			easing,
			css: (t: number) => `opacity: ${t}; transform: translateY(${(1 - t) * 72}px);`
		};
	}
</script>

{#if scroll_top_enabled}
	<button
		type="button"
		class="gotop-button no-print"
		class:shift_footer
		in:goTopTransition={{ duration: 250, easing: cubicOut }}
		out:goTopTransition={{ duration: 200, easing: quadIn }}
		on:click={goTop}
		aria-label="Go top"
		data-placeholder="กลับด้านบน"
	/>
{/if}

<style lang="scss">
	.gotop-button {
		position: fixed;
		bottom: 24px;
		right: 32px;
		width: 32px;
		height: 32px;
		padding: 0;
		z-index: 99;

		background: transparent;
		border: none;
		cursor: pointer;
		user-select: none;

		display: flex;
		align-items: center;
		justify-content: center;

		transition: transform 0.2s;
		will-change: transform, opacity;
		mix-blend-mode: difference;
		overflow: hidden;

		&::before {
			content: '';
			position: absolute;
			top: 2px;
			width: 95%;
			border-top: 4px solid white;
			transition: transform 0.2s;
		}

		&::after {
			content: '';
			display: block;

			position: absolute;
			top: 16px;
			width: 70%;
			height: 70%;

			border-top: 4px solid white;
			border-left: 4px solid white;

			transform: rotate(45deg);
			transform-origin: center center;
			transition: transform 0.3s;
		}

		&:hover {
			&::before {
				transform: translateY(24px);
			}

			&::after {
				transform: translateY(-9px) rotate(45deg);
			}
		}

		&.shift_footer {
			transform: translateY(-46px);
		}
	}
</style>
