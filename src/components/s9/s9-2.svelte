<script lang="ts">
	import { VOTE_METADATA } from 'data/vote_metadata';
	import { PART2_DATA, PART2_TRIGGER } from 'data/part2';

	import Votelog from 'components/votelog/Votelog.svelte';
	import RP from 'components/RepPortrait.svelte';
	import Cell from 'components/votelog/VoteCell.svelte';
	import Icon from 'components/votelog/VoteIcon.svelte';

	let taeMoved = false;
	const setTaeMoved = (val: boolean) => () => {
		if (val === taeMoved) return;
		taeMoved = val;
	};

	let ppcMoved = false;
	const setPpcMoved = (val: boolean) => () => {
		if (val === ppcMoved) return;
		ppcMoved = val;
	};

	let pnyMoved = false;
	const setPnyMoved = (val: boolean) => () => {
		if (val === pnyMoved) return;
		pnyMoved = val;
	};

	let pttMoved = false;
	const setPttMoved = (val: boolean) => () => {
		if (val === pttMoved) return;
		pttMoved = val;
	};
</script>

<div class="s9-2-container black tc c">
	<Votelog hideHint={false} hintPracharat>
		<svelte:fragment slot="header">
			<RP src="party/รวมแผ่นดิน.jpg" name="รวมแผ่นดิน" tooltip="top" color="#aac826" />
			<RP src="party/ประชาภิวัฒน์.jpg" name="ประชาภิวัฒน์" tooltip="top" color="#288707" />
			<RP src="party/เพื่อชาติไทย.jpg" name="เพื่อชาติไทย" tooltip="top" color="#afbcd8" />
			<RP src="party/ครูไทย.jpg" name="ครูไทยเพื่อประชาชน" tooltip="top" color="#ca5d3b" />
			<RP src="party/พลเมืองไทย.jpg" name="พลเมืองไทย" tooltip="top" color="#4f5285" />
			<RP src="party/ปชตใหม่.jpg" name="ประชาธิปไตยใหม่" tooltip="top" color="#e19164" />
			<RP src="party/พลังธรรมใหม่.jpg" name="พลังธรรมใหม่" tooltip="top" color="#507b9b" />
			<RP src="party/ไทรักธรรม.jpg" name="ไทรักธรรม" tooltip="top" color="#ff7e62" />
			<RP
				src="party/ปชชปฏิรูป.jpg"
				name="ประชาชนปฏิรูป"
				tooltip="top"
				color="#f3c628"
				showTop={ppcMoved}
				shift="0"
			>
				<RP src="party/ปชชปฏิรูป2.jpg" name="ประชาชนปฏิรูป" tooltip="top" color="#f3c628" />
			</RP>
			<RP
				src="party/ประชานิยม.jpg"
				name="ประชานิยม"
				tooltip="top"
				color="#de2559"
				showTop={pnyMoved}
				shift="0"
			>
				<RP src="party/ประชานิยม2.jpg" name="ประชานิยม" tooltip="top" color="#de2559" />
			</RP>
			<RP
				src="party/ประชาธรรมไทย.jpg"
				name="ประชาธรรมไทย"
				tooltip="top"
				color="#2f2fea"
				showTop={pttMoved}
				shift="0"
			>
				<RP src="party/ประชาธรรมไทย2.jpg" name="ประชาธรรมไทย" tooltip="top" color="#2f2fea" />
			</RP>
			<RP
				src="party/ไทยศรีวิไลย์.jpg"
				name="ไทยศรีวิไลย์"
				tooltip="top"
				color="#85e8fe"
				showTop={taeMoved}
				shift="0"
			>
				<RP
					src="party/ไทยศรีวิไลย์.jpg"
					name="ไทยศรีวิไลย์"
					tooltip="top"
					color="#85e8fe"
					side="free"
				/>
			</RP>
		</svelte:fragment>
		<div class="votelog-body">
			{#each VOTE_METADATA as mati, i}
				<div class="votelog-row">
					<div class="votelog-icon">
						<Icon type={mati.icon} />
					</div>
					<div class="votelog-value">
						<div class="votelog-subject">{@html mati.html_name}</div>
						{#each PART2_DATA[i] as vote, j}
							{#if vote === 1}
								{#if j === 11 && i === 0}
									<Cell
										trigger={PART2_TRIGGER(i)(j)}
										on:inside={setTaeMoved(false)}
										on:outside={setTaeMoved(true)}
										margin="-168px 0px 1500px 0px"
									/>
								{:else if j === 8 && i === 0}
									<Cell
										trigger={PART2_TRIGGER(i)(j)}
										on:inside={setPpcMoved(false)}
										on:outside={setPpcMoved(true)}
										margin="-168px 0px 1500px 0px"
									/>
								{:else if j === 9 && i === 22}
									<Cell
										trigger={PART2_TRIGGER(i)(j)}
										on:inside={setPnyMoved(false)}
										on:outside={setPnyMoved(true)}
										margin="-168px 0px 1500px 0px"
									/>
								{:else if j === 10 && i === 29}
									<Cell
										trigger={PART2_TRIGGER(i)(j)}
										on:inside={setPttMoved(false)}
										on:outside={setPttMoved(true)}
										margin="-168px 0px 1500px 0px"
									/>
								{:else}
									<Cell />
								{/if}
							{:else if vote === 2}
								<Cell side="pracharat" />
							{:else}
								<Cell side="opp" />
							{/if}
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</Votelog>
</div>

<style lang="scss">
	.s9-2-container {
		padding: 0 0 10vh;
	}
</style>
