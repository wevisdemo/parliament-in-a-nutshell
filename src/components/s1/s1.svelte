<script lang="ts">
	import { onMount } from 'svelte';
	import { addHtmlClass, removeHtmlClass } from 'utils/html-style-director';

	import Choice from './choice.svelte';

	let selected_choice: number | null = null;
	const choices = [{ value: 500 }, { value: 485 }, { value: 478 }];

	let isSubmitted = false;
	let isCorrect: boolean | undefined;
	const submitAns = () => {
		isSubmitted = true;
		removeHtmlClass('lock-body-scroll');
	};

	onMount(() => {
		addHtmlClass('lock-body-scroll');
	});
</script>

<div class="h100 c">
	<h2 class="T1">
		<span class="nw">คุณรู้ไหม?</span><br />
		<span class="year nw">ตอนนี้</span><span class="nw">ในรัฐสภา</span><span class="nw"
			>มี ส.ส. กี่คน</span
		>
	</h2>

	{#each choices as data}
		<Choice bind:group={selected_choice} {data} submitted={isSubmitted} />
	{/each}

	<button
		class="submit-ans-btn"
		class:hide={!selected_choice || isSubmitted}
		type="button"
		on:click={submitAns}
		tabindex={!selected_choice || isSubmitted ? -1 : 0}
		aria-hidden={isSubmitted}
		disabled={!selected_choice || isSubmitted}
	>
		ตรวจคำตอบ
	</button>

	{#if selected_choice}
		<!-- Trigger stamp load on choice selected -->
		<img
			src="/parliament-in-a-nutshell/quiz-stamp.png"
			alt=""
			decoding="async"
			loading="eager"
			width="0"
			height="0"
			style="display:none"
		/>
	{/if}

	{#if isSubmitted && !isCorrect}
		<div class="incorrect-overlay" aria-hidden="true" />
	{/if}

	{#if isSubmitted}
		<div class="ans-img-container">
			<img
				class="ans-img"
				src="/parliament-in-a-nutshell/quiz-stamp.png"
				alt="ไม่มีคำตอบที่ตายตัวหรอก เพราะที่นั่ง ส.ส. เปลี่ยนแปลงไปแทบทุกวัน"
				decoding="async"
				loading="eager"
				width="256"
				height="256"
			/>
		</div>
	{/if}

	<div class="continue" class:show={isSubmitted} aria-hidden={!isSubmitted}>
		<img
			src="/parliament-in-a-nutshell/thinking.png"
			alt=""
			decoding="async"
			loading="lazy"
			width="32"
			height="32"
			aria-hidden="true"
		/>
		เกิดอะไรขึ้น? ไปดูกัน!
		<img
			src="/parliament-in-a-nutshell/hand-down.png"
			alt=""
			decoding="async"
			loading="lazy"
			width="21"
			height="32"
			aria-hidden="true"
		/>
	</div>
</div>

<style lang="scss">
	.T1 {
		font-size: 4rem;
		line-height: 1.2;
		margin-bottom: 40px;

		position: relative;

		> .year {
			position: relative;

			&::after {
				content: '(พ.ศ. 2565)';
				position: absolute;
				bottom: 0;
				left: 50%;
				transform: translateX(-50%);

				color: #7b7b7b;
				font-weight: 600;
				font-size: 1rem;
				letter-spacing: 0.01em;
				white-space: nowrap;
			}
		}
	}

	.submit-ans-btn {
		all: unset;

		font-weight: 700;
		font-size: 1.5rem;
		text-align: center;
		color: #fff;

		background: #000;
		border-radius: 20px;
		padding: 20px 48px;

		margin-top: 16px;

		letter-spacing: 0.01em;
		cursor: pointer;

		opacity: 1;
		transition: opacity 0.5s;

		&.hide {
			pointer-events: none;
			opacity: 0;
		}

		&:is(:hover, :focus) {
			background: #333;
		}

		&:focus {
			box-shadow: 0 0 0 8px #3338;
		}
	}

	.ans-img-container {
		position: absolute;
		top: calc(50% + 80px);
		left: calc(50% + 304px);
		transform: translate(-50%, -50%);

		> .ans-img {
			width: 256px;
			height: 256px;
			object-fit: contain;
			object-position: center;

			width: 256px;
			height: 256px;
			animation: bounceIn 1s;
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
		gap: 1ch;
		white-space: nowrap;

		opacity: 0;
		pointer-events: none;

		margin-top: -48px;

		> img {
			width: 32px;
			height: 32px;

			&:last-of-type {
				width: 21px;
			}
		}
	}

	.continue.show {
		opacity: 1;
		animation: bounce 4s linear infinite;
		animation-delay: 2s;
		transition: opacity 1s;
	}

	@media screen and (max-width: 1000px) {
		.ans-img-container {
			top: calc(50% + 80px);
			left: calc(50% + 244px);
			transform: translate(-50%, -50%);

			> .ans-img {
				width: 196px;
				height: 196px;
			}
		}
	}
</style>
