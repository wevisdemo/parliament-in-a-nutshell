<script lang="ts">
	import { VOTE_METADATA } from 'data/vote_metadata';
	import { PART3_DATA } from 'data/side_shift';

	import Votelog from 'components/votelog/Votelog.svelte';
	import RP from 'components/RepPortrait.svelte';
	import Cell from 'components/votelog/VoteCell.svelte';
	import Icon from 'components/votelog/VoteIcon.svelte';

	const isSrinuanGroup = (mati_index: number, person_index: number) =>
		mati_index === 3 && [0, 1, 2, 3].includes(person_index);
	const isAnakinGroup = (mati_index: number, person_index: number) =>
		mati_index === 4 && [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].includes(person_index);
	const isNeweconGroup = (mati_index: number, person_index: number) =>
		mati_index === 3 && [16, 17, 18, 19, 20].includes(person_index);

	const PART3_TRIGGER = (mati_index: number, person_index: number): string => {
		// กลุ่มคุณศรีนวล
		if (isSrinuanGroup(mati_index, person_index))
			return ['#70d267', '#70d267', '#0b3757', '#065cab'][person_index];
		// กลุ่มเศรษฐกิจใหม่
		if (isNeweconGroup(mati_index, person_index)) return '#75328c';
		// กลุ่มอาณาคินใหม่
		if (isAnakinGroup(mati_index, person_index))
			return [
				'#065cab',
				'#065cab',
				'#065cab',
				'#065cab',
				'#065cab',
				'#065cab',
				'#065cab',
				'#065cab',
				'#065cab',
				'#cc8ae3',
				'#fd980d'
			][person_index - 4];
		return '';
	};

	let srinuanMoved = false;
	let neweconMoved = false;
	let anakinMoved = false;
	let pornpimolMoved = false;

	const setSrinuanMoved = ({ detail }: { detail: boolean }) => {
		if (detail === srinuanMoved) return;
		srinuanMoved = detail;
	};
	const setNeweconMoved = ({ detail }: { detail: boolean }) => {
		if (detail === neweconMoved) return;
		neweconMoved = detail;
	};
	const setAnakinMoved = ({ detail }: { detail: boolean }) => {
		if (detail === anakinMoved) return;
		anakinMoved = detail;
	};
	const setPornpimolMoved = ({ detail }: { detail: boolean }) => {
		if (detail === pornpimolMoved) return;
		pornpimolMoved = detail;
	};
</script>

<div class="s13-container black tc c">
	<Votelog>
		<svelte:fragment slot="header">
			<RP
				src="rp/pt12-กวินนาถ.png"
				color="#ff6f21"
				name="กวินนาถ ตาคีย์"
				side="opp"
				size="56"
				shift="0"
				tooltip="top"
				showTop={srinuanMoved}
			>
				<RP
					src="rp/pt12-กวินนาถ.png"
					color="#70d267"
					name="กวินนาถ ตาคีย์"
					size="56"
					tooltip="top"
				/>
			</RP>
			<RP
				src="rp/pt12-จารึก.png"
				color="#ff6f21"
				name="จารึก ศรีอ่อน"
				side="opp"
				size="56"
				shift="0"
				tooltip="top"
				showTop={srinuanMoved}
			>
				<RP src="rp/pt12-จารึก.png" color="#70d267" name="จารึก ศรีอ่อน" size="56" tooltip="top" />
			</RP>
			<RP
				src="rp/pt12-ฐนภัทร.png"
				color="#ff6f21"
				name="ฐนภัทร กิตติวงศา"
				side="opp"
				size="56"
				shift="0"
				tooltip="top"
				showTop={srinuanMoved}
			>
				<RP
					src="rp/pt12-ฐนภัทร.png"
					color="#065cab"
					name="ฐนภัทร กิตติวงศา"
					size="56"
					tooltip="top"
				/></RP
			>
			<RP
				src="rp/pt12-ศรีนวล.png"
				color="#ff6f21"
				name="ศรีนวล บุญลือ"
				side="opp"
				size="56"
				shift="0"
				tooltip="top"
				showTop={srinuanMoved}
			>
				<RP
					src="rp/pt12-ศรีนวล.png"
					color="#065cab"
					name="ศรีนวล บุญลือ"
					size="56"
					tooltip="top"
				/></RP
			>
			<RP
				src="rp/pt12-กิตติชัย.png"
				color="#ff6f21"
				name="กิตติชัย เรืองสวัสดิ์"
				side="opp"
				size="56"
				shift="0"
				tooltip="top"
				showTop={anakinMoved}
			>
				<RP
					src="rp/pt12-กิตติชัย.png"
					color="#065cab"
					name="กิตติชัย เรืองสวัสดิ์"
					size="56"
					tooltip="top"
				/></RP
			>
			<RP
				src="rp/pt12-กฤติเดช.png"
				color="#ff6f21"
				name="กฤติเดช สันติวชิระกุล"
				side="opp"
				size="56"
				shift="0"
				tooltip="top"
				showTop={anakinMoved}
			>
				<RP
					src="rp/pt12-กฤติเดช.png"
					color="#065cab"
					name="กฤติเดช สันติวชิระกุล"
					size="56"
					tooltip="top"
				/></RP
			>
			<RP
				src="rp/pt12-โชติพิพัฒน์.png"
				color="#ff6f21"
				name="โชติพิพัฒน์ เตชะโสภณมณี"
				side="opp"
				size="56"
				shift="0"
				tooltip="top"
				showTop={anakinMoved}
			>
				<RP
					src="rp/pt12-โชติพิพัฒน์.png"
					color="#065cab"
					name="โชติพิพัฒน์ เตชะโสภณมณี"
					size="56"
					tooltip="top"
				/></RP
			>
			<RP
				src="rp/pt12-ฐิตินันท์.png"
				color="#ff6f21"
				name="ฐิตินันท์ แสงนาค"
				side="opp"
				size="56"
				shift="0"
				tooltip="top"
				showTop={anakinMoved}
			>
				<RP
					src="rp/pt12-ฐิตินันท์.png"
					color="#065cab"
					name="ฐิตินันท์ แสงนาค"
					size="56"
					tooltip="top"
				/></RP
			>
			<RP
				src="rp/pt12-มณฑล.png"
				color="#ff6f21"
				name="มณฑล โพธิ์คาย"
				side="opp"
				size="56"
				shift="0"
				tooltip="top"
				showTop={anakinMoved}
			>
				<RP
					src="rp/pt12-มณฑล.png"
					color="#065cab"
					name="มณฑล โพธิ์คาย"
					size="56"
					tooltip="top"
				/></RP
			>
			<RP
				src="rp/pt12-วิรัช.png"
				color="#ff6f21"
				name="วิรัช พันธุมะผล"
				side="opp"
				size="56"
				shift="0"
				tooltip="top"
				showTop={anakinMoved}
			>
				<RP
					src="rp/pt12-วิรัช.png"
					color="#065cab"
					name="วิรัช พันธุมะผล"
					size="56"
					tooltip="top"
				/></RP
			>
			<RP
				src="rp/pt12-สำลี.png"
				color="#ff6f21"
				name="สำลี รักสุทธี"
				side="opp"
				size="56"
				shift="0"
				tooltip="top"
				showTop={anakinMoved}
			>
				<RP
					src="rp/pt12-สำลี.png"
					color="#065cab"
					name="สำลี รักสุทธี"
					size="56"
					tooltip="top"
				/></RP
			>
			<RP
				src="rp/pt12-อนาวิล.png"
				color="#ff6f21"
				name="อนาวิล รัตนสถาพร"
				side="opp"
				size="56"
				shift="0"
				tooltip="top"
				showTop={anakinMoved}
			>
				<RP
					src="rp/pt12-อนาวิล.png"
					color="#065cab"
					name="อนาวิล รัตนสถาพร"
					size="56"
					tooltip="top"
				/></RP
			>
			<RP
				src="rp/pt12-เอกการ.png"
				color="#ff6f21"
				name="เอกการ ซื่อทรงธรรม"
				side="opp"
				size="56"
				shift="0"
				tooltip="top"
				showTop={anakinMoved}
			>
				<RP
					src="rp/pt12-เอกการ.png"
					color="#065cab"
					name="เอกการ ซื่อทรงธรรม"
					size="56"
					tooltip="top"
				/></RP
			>
			<RP
				src="rp/pt12-จุลพันธ์.png"
				color="#ff6f21"
				name="จุลพันธ์ โนนศรีชัย"
				side="opp"
				size="56"
				shift="0"
				tooltip="top"
				showTop={anakinMoved}
			>
				<RP
					src="rp/pt12-จุลพันธ์.png"
					color="#cc8ae3"
					name="จุลพันธ์ โนนศรีชัย"
					size="56"
					tooltip="top"
				/></RP
			>
			<RP
				src="rp/pt12-สมัคร.png"
				color="#ff6f21"
				name="สมัคร ป้องวงษ์"
				side="opp"
				size="56"
				shift="0"
				tooltip="top"
				showTop={anakinMoved}
			>
				<RP
					src="rp/pt12-สมัคร.png"
					color="#fd980d"
					name="สมัคร ป้องวงษ์"
					size="56"
					tooltip="top"
				/></RP
			>
			<RP
				src="rp/pt12-พรพิมล.png"
				color="#E50000"
				name="พรพิมล ธรรมสาร"
				side="opp"
				size="56"
				shift="0"
				tooltip="top"
				showTop={pornpimolMoved}
			>
				<RP
					src="rp/pt12-พรพิมล.png"
					color="#065cab"
					name="พรพิมล ธรรมสาร"
					size="56"
					tooltip="top"
				/></RP
			>
			<RP
				src="rp/pt12-สุภดิช.png"
				color="#75328C"
				name="สุภดิช อากาศฤกษ์"
				size="56"
				shift="0"
				side="opp"
				tooltip="top"
				showTop={neweconMoved}
			>
				<RP
					src="rp/pt12-สุภดิช.png"
					color="#75328C"
					name="สุภดิช อากาศฤกษ์"
					size="56"
					tooltip="top"
				/></RP
			>
			<RP
				src="rp/pt12-นิยม.png"
				color="#75328C"
				name="นิยม วิวรรธนดิฐกุล"
				size="56"
				shift="0"
				side="opp"
				tooltip="top"
				showTop={neweconMoved}
			>
				<RP
					src="rp/pt12-นิยม.png"
					color="#75328C"
					name="นิยม วิวรรธนดิฐกุล"
					size="56"
					tooltip="top"
				/></RP
			>
			<RP
				src="rp/pt12-ภาสกร.png"
				color="#75328C"
				name="ภาสกร เงินเจริญกุล"
				size="56"
				shift="0"
				side="opp"
				tooltip="top"
				showTop={neweconMoved}
			>
				<RP
					src="rp/pt12-ภาสกร.png"
					color="#75328C"
					name="ภาสกร เงินเจริญกุล"
					size="56"
					tooltip="top"
				/></RP
			>
			<RP
				src="rp/pt12-มนูญ.png"
				color="#75328C"
				name="มนูญ สิวาภิรมย์รัตน์"
				size="56"
				shift="0"
				side="opp"
				tooltip="top"
				showTop={neweconMoved}
			>
				<RP
					src="rp/pt12-มนูญ.png"
					color="#75328C"
					name="มนูญ สิวาภิรมย์รัตน์"
					size="56"
					tooltip="top"
				/></RP
			>
			<RP
				src="rp/pt12-มารศรี.png"
				color="#75328C"
				name="มารศรี ขจรเรืองโรจน์"
				size="56"
				shift="0"
				side="opp"
				tooltip="top"
				showTop={neweconMoved}
			>
				<RP
					src="rp/pt12-มารศรี.png"
					color="#75328C"
					name="มารศรี ขจรเรืองโรจน์"
					size="56"
					tooltip="top"
				/></RP
			>
		</svelte:fragment>
		<svelte:fragment>
			{#each VOTE_METADATA as mati, mati_index}
				<div class="votelog-row" class:last-row={mati_index > VOTE_METADATA.length - 3}>
					<div class="votelog-icon">
						<Icon type={mati.icon} />
					</div>
					<div class="votelog-value">
						<div class="votelog-subject">{@html mati.html_name}</div>
						{#each PART3_DATA[mati_index] as vote, person_index}
							{#if vote === 0}
								{#if isSrinuanGroup(mati_index, person_index)}
									<Cell
										line={PART3_TRIGGER(mati_index, person_index)}
										fireEvent={person_index === 3}
										on:moved={setSrinuanMoved}
										side="opp"
									/>
								{:else if isAnakinGroup(mati_index, person_index)}
									<Cell
										line={PART3_TRIGGER(mati_index, person_index)}
										fireEvent={person_index === 9}
										on:moved={setAnakinMoved}
										side="opp"
									/>
								{:else if mati_index === 28 && person_index === 15}
									<Cell line="#065cab" fireEvent on:moved={setPornpimolMoved} side="opp" />
								{:else if isNeweconGroup(mati_index, person_index)}
									<Cell
										line={PART3_TRIGGER(mati_index, person_index)}
										fireEvent={person_index === 18}
										on:moved={setNeweconMoved}
										side="opp"
									/>
								{:else}
									<Cell side="opp" />
								{/if}
							{:else if vote === 2}
								<Cell side="black" />
							{:else}
								<Cell line={PART3_TRIGGER(mati_index, person_index)} />
							{/if}
						{/each}
					</div>
				</div>
			{/each}
		</svelte:fragment>
	</Votelog>
</div>

<style lang="scss">
	.s13-container {
		padding: 0 0 96px;
	}
</style>
