<script lang="ts">
	import { VOTE_METADATA } from 'data/vote_metadata';
	import { PART2_DATA, PART2_TRIGGER } from 'data/part2';

	import Votelog from 'components/votelog/Votelog.svelte';
	import RP from 'components/RepPortrait.svelte';
	import Cell from 'components/votelog/VoteCell.svelte';
	import Icon from 'components/votelog/VoteIcon.svelte';
</script>

<div class="s9-2-container black tc c">
	<Votelog>
		<svelte:fragment slot="header">
			<RP src="party/รวมแผ่นดิน.jpg" name="รวมแผ่นดิน" tooltip="top" color="#aac826" />
			<RP src="party/ประชาภิวัฒน์.jpg" name="ประชาภิวัฒน์" tooltip="top" color="#288707" />
			<RP src="party/เพื่อชาติไทย.jpg" name="เพื่อชาติไทย" tooltip="top" color="#afbcd8" />
			<RP src="party/ครูไทย.jpg" name="ครูไทยเพื่อประชาชน" tooltip="top" color="#ca5d3b" />
			<RP src="party/พลเมืองไทย.jpg" name="พลเมืองไทย" tooltip="top" color="#4f5285" />
			<RP src="party/ปชตใหม่.jpg" name="ประชาธิปไตยใหม่" tooltip="top" color="#e19164" />
			<RP src="party/พลังธรรมใหม่.jpg" name="พลังธรรมใหม่" tooltip="top" color="#507b9b" />
			<RP src="party/ไทรักธรรม.jpg" name="ไทรักธรรม" tooltip="top" color="#ff7e62" />
			<RP src="party/ปชชปฏิรูป.jpg" name="ประชาชนปฏิรูป" tooltip="top" color="#f3c628" />
			<RP src="party/ประชานิยม.jpg" name="ประชานิยม" tooltip="top" color="#de2559" />
			<RP src="party/ประชาธรรมไทย.jpg" name="ประชาธรรมไทย" tooltip="top" color="#2f2fea" />
			<RP
				src="party/ไทยศรีวิไลย์.jpg"
				name="ไทยศรีวิไลย์"
				tooltip="top"
				color="#85e8fe"
				side="free"
			/>
		</svelte:fragment>
		<div class="votelog-body">
			{#each VOTE_METADATA as mati, i}
				<div class="votelog-row">
					<div class="votelog-icon">
						<Icon type={mati.icon} />
					</div>
					<div class="votelog-value" class:first-row={i === 0}>
						<div class="votelog-subject">{@html mati.html_name}</div>
						{#each PART2_DATA[i] as vote, j}
							{#if vote === 1}
								<Cell trigger={PART2_TRIGGER(i)(j)} />
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
		padding: 20vh 0;
	}
</style>
