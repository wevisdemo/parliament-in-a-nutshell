<script lang="ts">
	import { VOTE_METADATA } from 'data/vote_metadata';
	import { PART2_DATA } from 'data/12parties';

	import Votelog from 'components/votelog/Votelog.svelte';
	import RP from 'components/RepPortrait.svelte';
	import Cell from 'components/votelog/VoteCell.svelte';
	import Icon from 'components/votelog/VoteIcon.svelte';

	let taeMoved = false;
	const setTaeMoved = ({ detail }: { detail: boolean }) => {
		if (detail === taeMoved) return;
		taeMoved = detail;
	};

	let ppcMoved = false;
	const setPpcMoved = ({ detail }: { detail: boolean }) => {
		if (detail === ppcMoved) return;
		ppcMoved = detail;
	};

	let pnyMoved = false;
	const setPnyMoved = ({ detail }: { detail: boolean }) => {
		if (detail === pnyMoved) return;
		pnyMoved = detail;
	};

	let pttMoved = false;
	const setPttMoved = ({ detail }: { detail: boolean }) => {
		if (detail === pttMoved) return;
		pttMoved = detail;
	};
</script>

<div class="s9-2-container black tc c">
	<Votelog hintPracharat lineColor="linear-gradient(90deg,#0b3757 50%,#85e8ff 50%)">
		<svelte:fragment slot="header">
			<RP src="party/รวมแผ่นดิน.jpg" name="รวมแผ่นดิน" tooltip="top" color="#aac826" size="56" />
			<RP
				src="party/ประชาภิวัฒน์.jpg"
				name="ประชาภิวัฒน์"
				tooltip="top"
				color="#288707"
				size="56"
			/>
			<RP
				src="party/เพื่อชาติไทย.jpg"
				name="เพื่อชาติไทย"
				tooltip="top"
				color="#afbcd8"
				size="56"
			/>
			<RP
				src="party/ครูไทย.jpg"
				name="ครูไทยเพื่อประชาชน"
				tooltip="top"
				color="#ca5d3b"
				size="56"
			/>
			<RP src="party/พลเมืองไทย.jpg" name="พลเมืองไทย" tooltip="top" color="#4f5285" size="56" />
			<RP src="party/ปชตใหม่.jpg" name="ประชาธิปไตยใหม่" tooltip="top" color="#e19164" size="56" />
			<RP
				src="party/พลังธรรมใหม่.jpg"
				name="พลังธรรมใหม่"
				tooltip="top"
				color="#507b9b"
				size="56"
			/>
			<RP src="party/ไทรักธรรม.jpg" name="ไทรักธรรม" tooltip="top" color="#ff7e62" size="56" />
			<RP
				src="party/ปชชปฏิรูป.jpg"
				name="ประชาชนปฏิรูป"
				tooltip="top"
				color="#f3c628"
				showTop={ppcMoved}
				shift="0"
				size="56"
			>
				<RP
					src="party/ปชชปฏิรูป2.jpg"
					name="ประชาชนปฏิรูป"
					tooltip="top"
					color="#f3c628"
					size="56"
				/>
			</RP>
			<RP
				src="party/ประชานิยม.jpg"
				name="ประชานิยม"
				tooltip="top"
				color="#de2559"
				showTop={pnyMoved}
				shift="0"
				size="56"
			>
				<RP src="party/ประชานิยม2.jpg" name="ประชานิยม" tooltip="top" color="#de2559" size="56" />
			</RP>
			<RP
				src="party/ประชาธรรมไทย.jpg"
				name="ประชาธรรมไทย"
				tooltip="top"
				color="#2f2fea"
				showTop={pttMoved}
				shift="0"
				size="56"
			>
				<RP
					src="party/ประชาธรรมไทย2.jpg"
					name="ประชาธรรมไทย"
					tooltip="top"
					color="#2f2fea"
					size="56"
				/>
			</RP>
			<RP
				src="party/ไทยศรีวิไลย์.jpg"
				name="ไทยศรีวิไลย์"
				tooltip="top"
				color="#85e8fe"
				showTop={taeMoved}
				shift="0"
				size="56"
			>
				<RP
					src="party/ไทยศรีวิไลย์.jpg"
					name="ไทยศรีวิไลย์"
					tooltip="top"
					color="#85e8fe"
					side="free"
					size="56"
				/>
			</RP>
		</svelte:fragment>
		<svelte:fragment>
			{#each VOTE_METADATA as mati, mati_index}
				<div class="votelog-row" class:top-row={mati_index < 2}>
					<div class="votelog-icon">
						<Icon type={mati.icon} style={`color:#${mati.pass ? '92da1f' : 'dd5a5a'}`} />
					</div>
					<div class="votelog-value">
						<div class="votelog-subject">
							{@html mati.html_name}
						</div>
						{#each PART2_DATA[mati_index] as vote, person_index}
							{#if vote === 1}
								{#if person_index === 11 && mati_index === 0}
									<Cell line="#85e8ff" fireEvent on:moved={setTaeMoved} threshold={144} />
								{:else if person_index === 8 && mati_index === 0}
									<Cell line="#0b3757" fireEvent on:moved={setPpcMoved} threshold={144} />
								{:else if person_index === 9 && mati_index === 28}
									<Cell line="#0b3757" fireEvent on:moved={setPnyMoved} threshold={144} />
								{:else if person_index === 10 && mati_index === 35}
									<Cell line="#0b3757" fireEvent on:moved={setPttMoved} threshold={144} />
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
					<!-- <div class="votelog-icon">
						{mati.pass}
					</div> -->
				</div>
			{/each}
		</svelte:fragment>
	</Votelog>
</div>

<style lang="scss">
	.s9-2-container {
		padding: 0 0 96px;
	}
</style>
