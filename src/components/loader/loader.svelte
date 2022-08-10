<script lang="ts">
	export let load_percent: number;
	export let status: string[] = [];

	$: bg = `conic-gradient(from ${
		(load_percent / 100) * 180 + 90
	}deg at 50% 100%,#5b5b5b 0%,#5b5b5b 50%,#dadada 50%,#dadada 100%)`;
</script>

<div class="h100 c loader-container" class:get-out={load_percent === 100}>
	<svg width="0" height="0">
		<defs>
			<clipPath id="parliamentCurve" clipPathUnits="objectBoundingBox">
				<path d="M0 1C0 0 .5 0 .5 0 .5 0 1 0 1 1L.7 1C.7.6.5.6.5.6.5.6.3.6.3 1Z" />
			</clipPath>
		</defs>
	</svg>
	<div class="parliament-container">
		<div class="parliament" style:--bg={bg} />
		<div class="percent-text">
			<div class="loading-text">กำลังโหลดรัฐบาลไทย</div>
			<div class="percent T1">{~~load_percent}%</div>
			<div class="lastest-loaded">{status[status.length - 1] ?? 'กำลังรอ Svelte'}</div>
			<!-- <details>
				<summary>{status[status.length - 1]}</summary>
				<div class="loaded-content">{status.join('\n')}</div>
			</details> -->
		</div>
	</div>
</div>

<style>
	/* .loaded-content {
		white-space: pre-wrap;
	} */
	.get-out {
		position: fixed;
		inset: 0;
		opacity: 0;
		pointer-events: none;
		transform: translateY(-100%);

		transition: all 0.5s;
	}

	.parliament-container {
		width: 80%;
	}

	.parliament {
		aspect-ratio: 1/0.5;

		background: var(--bg);
		clip-path: url(#parliamentCurve);
	}

	.percent-text {
		position: absolute;
		bottom: 15%;
		left: 50%;
		transform: translate(-50%, 50%);
		text-align: center;
	}

	.loading-text {
		font-size: 1.2rem;
		/* font-weight: 700; */
	}

	.percent {
		font-size: 5rem;
	}
</style>
