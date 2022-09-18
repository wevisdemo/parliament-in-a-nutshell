<script lang="ts">
	export let data = { value: 0 };
	export let group: any;
	export let submitted = false;
</script>

<input
	type="radio"
	id="quiz-{data.value}"
	bind:group
	name="quiz"
	value={data.value}
	disabled={submitted}
/>
<label
	for="quiz-{data.value}"
	class:disabled={submitted}
	class:submitted={group === data.value && submitted}
	class="choice"
	aria-hidden="true"
>
	<span class="box" aria-hidden="true" />
	<span class="text">{data.value} คน</span>
	<span class="cross" aria-hidden="true">
		<img
			class="c1"
			src="/shaking-parliament/mark-tlbr.png"
			alt=""
			decoding="async"
			loading="eager"
			width="95"
			height="11"
			aria-hidden="true"
		/>
		<img
			class="c2"
			src="/shaking-parliament/mark-bltr.png"
			alt=""
			decoding="async"
			loading="eager"
			width="115"
			height="15"
			aria-hidden="true"
		/>
	</span>
</label>

<style lang="scss">
	input {
		position: absolute;
		opacity: 0;
		width: 0;
		pointer-events: none;
	}

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

	input:is(:focus, :checked) + .choice > .cross {
		opacity: 1;

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
		.choice:hover > .cross {
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

		.choice.disabled:not(.submitted):hover > .cross {
			opacity: 0;
		}
	}

	.choice.disabled {
		cursor: default;
	}

	.choice.submitted {
		cursor: default;
		animation: shakeX 0.5s;

		> .text {
			background: #dd5a5a;
		}
	}
</style>
