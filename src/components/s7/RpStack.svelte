<script lang="ts">
	import type { RP_TYPE } from 'data/overall_change';

	export let data: RP_TYPE;
	export let showAll = false;
</script>

<div class="stack-rp-container">
	<div class="plbl showAll">{data.name}</div>
	<img
		src="/shaking-parliament/{data.src}"
		alt={data.name}
		class="portrait ly1 {data.side}"
		class:showAll
		style:--c={data.color}
		style:--s="34"
		decoding="async"
		loading="lazy"
		width="34"
		height="34"
	/>
	{#if data.replace_by}
		<div class="plbl lbl2" class:showAll>{data.replace_by.name}</div>
		<img
			src="/shaking-parliament/{data.replace_by.src}"
			alt={data.replace_by.name}
			class="portrait ly2 {data.replace_by.side}"
			class:showAll
			class:dashedBorder={data.replace_by.name === 'ว่าง'}
			class:has3layers={data.replace_by.replace_by}
			style:--c={data.replace_by.color}
			style:--s="34"
			decoding="async"
			loading="lazy"
			width="34"
			height="34"
		/>
		{#if data.replace_by.replace_by}
			<div class="plbl lbl3" class:showAll>{data.replace_by.replace_by.name}</div>
			<img
				src="/shaking-parliament/{data.replace_by.replace_by.src}"
				alt={data.replace_by.replace_by.name}
				class="portrait ly3 {data.replace_by.replace_by.side}"
				class:showAll
				style:--c={data.replace_by.replace_by.color}
				style:--s="34"
				decoding="async"
				loading="lazy"
				width="34"
				height="34"
			/>
		{/if}
	{/if}
</div>

<style lang="scss">
	.portrait {
		--pt: '';

		position: absolute;
		top: 0;
		left: 0;
		transform: var(--pt);

		display: inline-block;
		object-fit: contain;
		object-position: 50% 50%;

		background: var(--c, #fff);

		width: calc(var(--s) * 1px);
		height: calc(var(--s) * 1px);

		opacity: 1;
		transition: opacity 0.3s, transform 0.3s;

		overflow: hidden;

		&.gov {
			border-radius: 25%;
		}

		&.opp {
			border-radius: 50%;
		}

		&.free {
			clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
			transform: var(--pt) scale(1.1);
		}

		&.dashedBorder {
			border: 1px dashed hsl(0, 0%, 32%);
		}
	}

	.ly2 {
		opacity: 0;
		--pt: translate(6px, 6px);
	}

	.ly3 {
		opacity: 0;
		--pt: translate(12px, 12px);
	}

	.plbl {
		position: absolute;
		top: -8px;
		left: -8px;
		height: calc(100% + 16px);
		transform: var(--pt);

		padding-left: 50px;
		padding-right: 12px;

		background: #000;
		border-radius: 8px;

		display: flex;
		align-items: center;

		color: #fff;
		letter-spacing: 0.3px;
		line-height: 1;
		white-space: nowrap;

		-webkit-user-select: none;
		-moz-user-select: none;
		user-select: none;

		font-size: 1rem;
		opacity: 0;
		transition: opacity 0;
		pointer-events: none;
	}

	.showAll {
		&.ly1 {
			opacity: 0.3;
		}

		&.ly2 {
			&.has3layers {
				opacity: 0.3;
			}

			opacity: 1;
		}

		&.ly3 {
			opacity: 1;
		}
	}

	.stack-rp-container {
		width: 34px;
		height: 34px;

		&:hover {
			z-index: 20;

			> .ly1 {
				opacity: 1;
			}

			> .ly2.showAll {
				opacity: 1;
				--pt: translate(100%, calc(100% + 8px));
			}

			> .ly3.showAll {
				--pt: translate(200%, calc(200% + 16px));
			}

			> .plbl.showAll {
				opacity: 1;
				pointer-events: auto;
				transition: opacity 0.1s;
			}

			> .lbl2.showAll {
				--pt: translate(34px, calc(100% - 8px));
			}

			> .lbl3.showAll {
				--pt: translate(68px, calc(200% - 16px));
			}
		}
	}
</style>
