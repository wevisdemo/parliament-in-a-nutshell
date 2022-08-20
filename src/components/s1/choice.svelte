<script lang="ts">
	export let data = { value: 0, isCorrect: false };
	export let group: any;
	export let submitted = false;
</script>

<label
	class:submitted
	class:correct={group === data.value && submitted && data.isCorrect}
	class:incorrect={group === data.value && submitted && !data.isCorrect}
	class="choice"
>
	<div class="box" />
	<input type="radio" bind:group name="quiz" value={data.value} disabled={submitted} />
	<span class="text">{data.value} คน</span>
	<div class="cross">
		<img
			class="c1"
			src="/shaking-parliament/mark-tlbr.png"
			alt=""
			decoding="async"
			loading="eager"
		/>
		<img
			class="c2"
			src="/shaking-parliament/mark-bltr.png"
			alt=""
			decoding="async"
			loading="eager"
		/>
	</div>
</label>

<style lang="scss">
	.choice {
		display: flex;
		margin: 0 auto 24px;
		position: relative;
		cursor: pointer;

		& > * {
			pointer-events: none;
		}

		.box {
			width: 48px;
			background: #fff;
			border: 2px solid #000;
			border-right: none;
		}

		> input {
			display: none;
		}

		> .text {
			display: inline-block;
			border: 2px solid #000;
			background: #cdcdcd;
			padding: 16px 24px;
			text-align: center;
			width: 196px;
			font-size: 1.5rem;
		}

		> .cross {
			position: absolute;
			top: 50%;
			left: 24px;
			mix-blend-mode: multiply;

			transform: translateY(-2px);
			opacity: 0;
			transition: opacity 0.3s;

			> .c1,
			> .c2 {
				position: absolute;
				mix-blend-mode: multiply;

				transform: translate(-48%, -60%) rotate(53.75deg);
				width: 95px;
				height: auto;

				clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
				transition: clip-path 0.3s;
			}

			> .c2 {
				transform: translate(-50%, -25%) rotate(-52.25deg);
				width: 115px;
			}
		}
	}

	.choice > input:checked ~ .cross {
		opacity: 0.5;

		> .c1,
		> .c2 {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
			transition: clip-path 0.3s;
		}

		> .c2 {
			transition-delay: 0.1s;
		}
	}

	@media (hover) {
		.choice:not(.submitted):hover > .cross {
			opacity: 0.5;

			> .c1,
			> .c2 {
				clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
				transition: clip-path 0.3s;
			}

			> .c2 {
				transition-delay: 0.1s;
			}
		}
	}

	.choice > input:checked ~ .cross {
		opacity: 1 !important;
		transition: none !important;
	}

	@keyframes shakeX {
		from,
		to {
			transform: translate3d(0, 0, 0);
		}

		10%,
		30%,
		50%,
		70%,
		90% {
			transform: translate3d(-10px, 0, 0);
		}

		20%,
		40%,
		60%,
		80% {
			transform: translate3d(10px, 0, 0);
		}
	}

	.choice.correct > .text {
		background: #92da1f;
		transition: background 0.3s;
	}

	.choice.incorrect {
		animation: shakeX 0.5s;

		> .text {
			background: #dd5a5a;
		}
	}

	.choice.submitted {
		cursor: default;
	}
</style>
