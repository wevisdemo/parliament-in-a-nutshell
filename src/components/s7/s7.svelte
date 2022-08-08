<script lang="ts">
	import { onMount } from 'svelte';
	import { scroll, animate, ScrollOffset } from 'motion';

	import RP from 'components/RepPortrait.svelte';
	import Bignum from './bignum.svelte';
	import Spareseat from './spareseat.svelte';

	import { PART1_DATA } from 'data/part1';

	let showReplaced = false;
	let showNewNum = false;

	let Bridge: any;
	import('./bridge.svelte').then((c) => {
		Bridge = c.default;
	});

	let el_pill1: any;
	let el_pill2: any;
	let el_trigger: any;
	let prev_scroll_progress: number;
	let new_num_timeout: NodeJS.Timeout;
	onMount(() => {
		scroll(
			animate(el_pill1, {
				opacity: [1, 1, 0, 0],
				transform: ['', '', 'translateY(-100px)']
			}),
			{
				target: el_trigger,
				offset: ScrollOffset.Enter
			}
		);

		scroll(
			animate(el_pill2, {
				opacity: [0, 0, 1, 1],
				transform: [
					'translateX(-50%) translateY(100px)',
					'translateX(-50%) translateY(100px)',
					'translateX(-50%)'
				]
			}),
			{
				target: el_trigger,
				offset: ScrollOffset.Enter
			}
		);

		scroll(
			({ y }) => {
				if (y.progress === prev_scroll_progress) return;
				if ((prev_scroll_progress = y.progress) === 1) {
					showReplaced = true;
					new_num_timeout = setTimeout(() => {
						showNewNum = true;
					}, 500);
				} else {
					clearTimeout(new_num_timeout);
					showNewNum = showReplaced = false;
				}
			},
			{
				target: el_trigger,
				offset: ScrollOffset.Enter
			}
		);
	});
</script>

<div style="--h:155vh">
	<div class="h100 c stick">
		<div class="event-container" style="--gap:0">
			<div class="event resign">
				<h3 class="tc">ลาออก</h3>
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
		<div style="width:max-content">
			<div bind:this={el_pill1} class="pill">
				ส.ส. ที่มีเหตุต้อง<strong>พ้นจากการปฏิบัติหน้าที่</strong>
			</div>
			<div bind:this={el_pill2} class="pill new-pill">
				ส.ส. ที่เข้ามา<strong>แทนที่นั่ง</strong> ทั้งการเลือกตั้งซ่อมและการเลื่อนบัญชีรายชื่อ
			</div>
		</div>
		<div class="row">
			<div class="shifter" class:showNewNum />
			<div class="shifter" class:showNewNum />
			<Bignum {showNewNum} oldNum={27} newNum={27} />
			<div class="will-show" class:showNewNum>
				<div class="bignum-container">
					<Bignum {showNewNum} side="อิสระ" oldNum={0} newNum={1} />
				</div>
			</div>
			<Bignum {showNewNum} side="ค้าน" oldNum={20} newNum={4} />
			<div class="bar" class:showNewNum />
			<div class="will-show" class:showNewNum>
				<div class="bignum-container total">
					<Spareseat num={15} startIncrementWhen={showNewNum} />
				</div>
			</div>
		</div>
	</div>
	<div class="pen" style="--h:5vh" />
	<div class="pen" bind:this={el_trigger} style="--h:40vh" />
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

		display: inline-block;
		white-space: nowrap;

		pointer-events: none;
	}

	.new-pill {
		position: absolute;
		top: 0;
		left: 50%;
		z-index: 1;

		transform: translateX(-50%);
	}

	.bar {
		width: 2px;
		opacity: 0;

		background: #000;
		height: 100%;

		&.showNewNum {
			opacity: 1;
			transition: opacity 0.5s 0.75s;
		}
	}

	.will-show {
		width: 0;
		transition-property: width;
		transition-duration: 0.5s;
		will-change: width;

		.bignum-container {
			position: absolute;
			opacity: 0;
			transition-property: opacity;
			transition-duration: 0.5s;
		}

		&.showNewNum {
			width: 130px;

			.bignum-container {
				opacity: 1;
				transition-delay: 0.5s;

				&.total {
					animation: slide-right 1.25s;
					transition-delay: 0.75s;
				}
			}
		}
	}

	@keyframes slide-right {
		0%,
		60% {
			transform: translateX(-50px);
		}
		to {
			transform: translateX(0);
		}
	}

	.shifter {
		margin-right: 0;
		transition: margin-right 0.5s;

		&.showNewNum {
			margin-right: -2rem;
		}
	}
</style>
