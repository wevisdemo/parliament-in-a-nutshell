<script lang="ts">
	import { addHtmlClass, removeHtmlClass } from 'utils/html-style-director';
	import { onMount } from 'svelte';

	import Choice from './choice.svelte';
	import JSConfetti from 'js-confetti';

	let jsConfetti: any;

	let selected_choice: number | null = null;
	const choices = [
		{ value: 485, isCorrect: true },
		{ value: 471, isCorrect: false },
		{ value: 479, isCorrect: false }
	];

	let isSubmitted = false;
	$: isCorrect = choices.find((c) => c.value === selected_choice)?.isCorrect;
	$: img_file = `/shaking-parliament/quiz-${isCorrect ? '' : 'in'}correct.png`;

	onMount(() => {
		jsConfetti = new JSConfetti();
		addHtmlClass('lock-body-scroll');
	});

	$: {
		if (isSubmitted) {
			removeHtmlClass('lock-body-scroll');

			isCorrect &&
				jsConfetti?.addConfetti({
					confettiColors: ['#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff'],
					confettiRadius: 8,
					confettiNumber: 500
				});
		}
	}
</script>

<section class="h100 c">
	<h1 class="T1">
		คุณรู้ไหม?<br />
		ตอนนี้ในรัฐสภามี ส.ส. กี่คน
		<small>(พ.ศ. 2565)</small>
	</h1>

	{#each choices as data}
		<Choice bind:group={selected_choice} {data} submitted={isSubmitted} />
	{/each}

	<button
		class="submit-ans-btn"
		class:hide={!selected_choice || isSubmitted}
		type="button"
		on:click={() => (isSubmitted = true)}
	>
		ตรวจคำตอบ
	</button>
	<div class="continue" class:show={isSubmitted}>
		<img src="/shaking-parliament/thinking.png" alt="" decoding="async" loading="lazy" />
		เกิดอะไรขึ้น? ไปดูกัน!
		<img src="/shaking-parliament/hand-down.png" alt="" decoding="async" loading="lazy" />
	</div>

	{#if isSubmitted && !isCorrect}
		<div class="incorrect-overlay" />
	{/if}

	{#if isSubmitted}
		<div class="ans-img-container">
			<img class="ans-img" class:correct={isCorrect} src={img_file} alt="" decoding="async" />
		</div>
	{/if}
</section>

<style lang="scss">
	.T1 {
		font-size: 4rem;
		line-height: 1.2;
		margin-bottom: 2.5rem;

		position: relative;

		> small {
			position: absolute;
			bottom: -0.5rem;
			left: 13%;
			transform: translateX(-50%);

			color: #7b7b7b;
			font-weight: 600;
			font-size: 1rem;
			letter-spacing: 0.01em;
		}
	}

	.submit-ans-btn {
		all: unset;

		font-weight: 700;
		font-size: 1.5rem;
		text-align: center;
		color: #ffffff;

		background: #000000;
		border-radius: 20px;
		padding: 20px 48px;

		margin-top: 1rem;

		letter-spacing: 0.01em;
		cursor: pointer;

		opacity: 1;
		transition: opacity 0.5s;

		&.hide {
			pointer-events: none;
			opacity: 0;
		}

		&:hover {
			background: #333;
		}
	}

	.ans-img-container {
		position: absolute;
		top: calc(50% + 48px);
		left: calc(50% + 304px);
		transform: translate(-50%, -50%);

		> .ans-img {
			backface-visibility: visible !important;
			animation: flipInY 1s;
			width: 256px;
		}

		> .ans-img.correct {
			animation: bounceIn 1s;
		}
	}

	@keyframes incorrect {
		0% {
			background: hsla(0, 66%, 61%, 0.5);
		}
		to {
			background: hsla(0, 66%, 61%, 0);
		}
	}

	.incorrect-overlay {
		position: absolute;
		inset: 0;

		z-index: 1;
		pointer-events: none;

		animation: incorrect 0.5s ease-out;
	}

	.continue {
		display: flex;
		align-items: center;

		opacity: 0;
		pointer-events: none;

		margin-top: -3rem;

		> img {
			width: 2rem;
			height: 2rem;
			margin-right: 1ch;
		}
	}

	.continue.show {
		opacity: 1;
		animation: bounce 4s linear infinite;
		animation-delay: 2s;
		transition: opacity 1s;
	}
</style>
