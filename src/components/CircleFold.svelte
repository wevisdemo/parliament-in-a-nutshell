<script lang="ts">
	import { inView, timeline } from 'motion';
	import { onMount } from 'svelte';

	import Circle from 'components/Circle.svelte';

	export let circleClass: string = '';
	export let circleStyle: string = '';
	export let decorSrc: [string, string, string] = [
		'/parliament-in-a-nutshell/circle_03.svg',
		'/parliament-in-a-nutshell/circle_03.svg',
		'/parliament-in-a-nutshell/circle_03.svg'
	];

	let el_circle_container: any;
	let el_decor_1: any;
	let el_decor_2: any;
	let el_decor_3: any;
	onMount(() => {
		const seq: TimelineDefinition = [
			[
				el_decor_1,
				{
					opacity: [0, 1],
					transform: [`translateY(-100px)`, `translateY(0)`]
				},
				{ duration: 1 }
			],
			[
				el_decor_2,
				{
					opacity: [0, 1],
					transform: [`translateY(-100px)`, `translateY(0)`]
				},
				{ duration: 1, at: '-0.75' }
			],
			[
				el_decor_3,
				{
					opacity: [0, 1],
					transform: [`translateY(-100px)`, `translateY(0)`]
				},
				{ duration: 1, at: '-0.75' }
			]
		];

		inView(
			el_circle_container,
			() => {
				timeline(seq);
			},
			{ amount: 0.7 }
		);
	});
</script>

<div bind:this={el_circle_container} class="circle-fold" {...$$restProps}>
	<Circle class={circleClass} style={circleStyle}><slot /></Circle>
	<img
		bind:this={el_decor_1}
		class="circle-deco c1"
		src={decorSrc[0]}
		alt=""
		decoding="async"
		loading="lazy"
		width="315"
		height="315"
	/>
	<img
		bind:this={el_decor_2}
		class="circle-deco c2"
		src={decorSrc[1]}
		alt=""
		decoding="async"
		loading="lazy"
		width="315"
		height="315"
	/>
	<img
		bind:this={el_decor_3}
		class="circle-deco c3"
		src={decorSrc[2]}
		alt=""
		decoding="async"
		loading="lazy"
		width="315"
		height="315"
	/>
</div>

<style lang="scss">
	.circle-fold {
		height: 480px;
	}

	.circle-deco {
		position: absolute;
		top: 54px;
		left: calc(50% - 315px / 2);

		width: 315px;
		height: 315px;

		opacity: 0;

		&.c2 {
			top: 108px;
		}

		&.c3 {
			top: 162px;
		}
	}
</style>
