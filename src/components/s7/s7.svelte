<script lang="ts">
	import { onMount } from 'svelte';

	import RP from 'components/RepPortrait.svelte';
	import Bignum from './bignum.svelte';

	import { PART1_DATA } from 'data/part1';

	let showReplaced = false;
	let toggleReplace = () => (showReplaced = !showReplaced);

	let Bridge: any;
	import('./bridge.svelte').then((c) => {
		Bridge = c.default;
	});
</script>

<div class="h100 c">
	<div class="event-container" style="--gap:0">
		<div class="event resign">
			<h3 class="tc" on:click={toggleReplace}>ลาออก</h3>
			<div class="row rp-grid" style="--gap:1rem">
				{#each PART1_DATA.resign as res_c}
					<div class="col row vert" style="--gap:1rem">
						{#each res_c as rep}
							<RP
								size="34px"
								color={rep.color}
								name={rep.name}
								side={rep.side}
								src={rep.src}
								showTop={showReplaced}
								__useExperimentTooltip={true}
							>
								{#if rep.replace_by}
									<RP
										size="34px"
										color={rep.replace_by.color}
										name={rep.replace_by.name}
										side={rep.replace_by.side}
										src={rep.replace_by.src}
										__useExperimentTooltip={true}
									/>
								{/if}
							</RP>
						{/each}
					</div>
				{/each}
			</div>
		</div>
		<div class="sep" />
		<div class="event pass">
			<h3 class="tc">เสียชีวิต</h3>
			<div class="row rp-grid" style="--gap:1rem">
				{#each PART1_DATA.pass as res_c}
					<div class="col row vert" style="--gap:1rem">
						{#each res_c as rep}
							<RP
								size="34px"
								color={rep.color}
								name={rep.name}
								side={rep.side}
								src={rep.src}
								showTop={showReplaced}
								__useExperimentTooltip={true}
							>
								{#if rep.replace_by}
									<RP
										size="34px"
										color={rep.replace_by.color}
										name={rep.replace_by.name}
										side={rep.replace_by.side}
										src={rep.replace_by.src}
										__useExperimentTooltip={true}
									/>
								{/if}
							</RP>
						{/each}
					</div>
				{/each}
			</div>
		</div>
		<div class="sep" />
		<div class="event fire">
			<h3 class="tc">ศาลตัดสินให้พ้นสภาพ ส.ส.</h3>
			<div class="row rp-grid" style="--gap:1rem">
				{#each PART1_DATA.fire as res_c}
					<div class="col row vert" style="--gap:1rem">
						{#each res_c as rep}
							<RP
								size="34px"
								color={rep.color}
								name={rep.name}
								side={rep.side}
								src={rep.src}
								showTop={showReplaced}
								__useExperimentTooltip={true}
							>
								{#if rep.replace_by}
									<RP
										size="34px"
										color={rep.replace_by.color}
										name={rep.replace_by.name}
										side={rep.replace_by.side}
										src={rep.replace_by.src}
										__useExperimentTooltip={true}
									/>
								{/if}
							</RP>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="pill">ส.ส. ที่มีเหตุต้อง<strong>พ้นจากการปฏิบัติหน้าที่</strong></div>
	<div class="row">
		<Bignum num="27" />
		<Bignum side="ค้าน" num="20" />
	</div>
</div>
{#if Bridge}
	<svelte:component this={Bridge} />
{/if}

<style lang="scss">
	.event-container {
		display: grid;
		grid-template-columns: 1fr auto auto auto 1fr;
	}

	.event {
		// overflow: hidden;
		border-radius: 12px;
		padding: 2rem;
	}

	h3 {
		white-space: nowrap;
		margin-bottom: 1.5rem;
	}

	.sep {
		border-right: 2px dashed rgb(128, 128, 128);
	}

	.resign {
		flex: 2 2 0;
		background: linear-gradient(rgba(217, 217, 217, 0.8) 80%, rgba(217, 217, 217, 1) 100%),
			url(/shaking-parliament/part1/bg-resign.jpg) no-repeat center/cover;
	}

	.pass {
		flex: 1 1 0;
		background: linear-gradient(rgba(217, 217, 217, 0.8) 80%, rgba(217, 217, 217, 1) 100%),
			url(/shaking-parliament/part1/bg-pass.jpg) no-repeat center/cover;
	}

	.fire {
		flex: 2 2 0;
		background: linear-gradient(rgba(217, 217, 217, 0.8) 80%, rgba(217, 217, 217, 1) 100%),
			url(/shaking-parliament/part1/bg-fire.jpg) no-repeat center/cover;
	}

	.rp-grid {
		width: min-content;
		margin: auto;
	}

	.pill {
		border-radius: 999px;
		line-height: 3rem;
		padding: 0 1.5rem;

		font-size: 1.5rem;
		margin: 2rem 0;

		color: white;
		background: #000;
	}
</style>
