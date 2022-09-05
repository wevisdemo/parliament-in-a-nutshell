<script lang="ts">
	import { VOTE_METADATA } from 'data/vote_metadata';
	import { PART4_DATA } from 'data/thammanas';

	import Votelog from 'components/votelog/Votelog.svelte';
	import RP from 'components/RepPortrait.svelte';
	import Cell from 'components/votelog/VoteCell.svelte';
	import Icon from 'components/votelog/VoteIcon.svelte';

	let showTop = false;
	const setShowTop = ({ detail }: { detail: boolean }) => {
		if (detail === showTop) return;
		showTop = detail;
	};
</script>

<div class="s15-container black tc c">
	<Votelog lineColor="#f0da8c">
		<svelte:fragment slot="header">
			<RP
				src="rp/pt14-ธรรมนัส.png"
				name="ธรรมนัส พรหมเผ่า"
				color="#0b3757"
				size="56"
				tooltip="top"
				{showTop}
				shift="0"
			>
				<RP
					src="rp/pt14-ธรรมนัส.png"
					name="ธรรมนัส พรหมเผ่า"
					color="#f0da8c"
					size="56"
					tooltip="top"
					side="free"
				/>
			</RP>
			<RP
				src="rp/pt14-สมศักดิ์.png"
				name="สมศักดิ์ คุณเงิน"
				color="#0b3757"
				size="56"
				tooltip="top"
				{showTop}
				shift="0"
			>
				<RP
					src="rp/pt14-สมศักดิ์.png"
					name="สมศักดิ์ คุณเงิน"
					color="#f0da8c"
					size="56"
					tooltip="top"
					side="free"
				/>
			</RP>
			<RP
				src="rp/pt14-เกษม.png"
				name="เกษม ศุภรานนท์"
				color="#0b3757"
				size="56"
				tooltip="top"
				{showTop}
				shift="0"
			>
				<RP
					src="rp/pt14-เกษม.png"
					name="เกษม ศุภรานนท์"
					color="#f0da8c"
					size="56"
					tooltip="top"
					side="free"
				/>
			</RP>
			<RP
				src="rp/pt14-ไผ่.png"
				name="ไผ่ ลิกค์"
				color="#0b3757"
				size="56"
				tooltip="top"
				{showTop}
				shift="0"
			>
				<RP
					src="rp/pt14-ไผ่.png"
					name="ไผ่ ลิกค์"
					color="#f0da8c"
					size="56"
					tooltip="top"
					side="free"
				/>
			</RP>
			<RP
				src="rp/pt14-บุญสิงห์.png"
				name="บุญสิงห์ วรินทร์รักษ์"
				color="#0b3757"
				size="56"
				tooltip="top"
				{showTop}
				shift="0"
			>
				<RP
					src="rp/pt14-บุญสิงห์.png"
					name="บุญสิงห์ วรินทร์รักษ์"
					color="#f0da8c"
					size="56"
					tooltip="top"
					side="free"
				/>
			</RP>
			<RP
				src="rp/pt14-จีรเดช.png"
				name="จีรเดช ศรีวิราช"
				color="#0b3757"
				size="56"
				tooltip="top"
				{showTop}
				shift="0"
			>
				<RP
					src="rp/pt14-จีรเดช.png"
					name="จีรเดช ศรีวิราช"
					color="#f0da8c"
					size="56"
					tooltip="top"
					side="free"
				/>
			</RP>
			<RP
				src="rp/pt14-จอมขวัญ.png"
				name="จอมขวัญ กลับบ้านเกาะ"
				color="#0b3757"
				size="56"
				tooltip="top"
				{showTop}
				shift="0"
			>
				<RP
					src="rp/pt14-จอมขวัญ.png"
					name="จอมขวัญ กลับบ้านเกาะ"
					color="#f0da8c"
					size="56"
					tooltip="top"
					side="free"
				/>
			</RP>
			<RP
				src="rp/pt14-ทัศนาพร.png"
				name="ทัศนาพร เกษเมธีการุณ"
				color="#0b3757"
				size="56"
				tooltip="top"
				{showTop}
				shift="0"
			>
				<RP
					src="rp/pt14-ทัศนาพร.png"
					name="ทัศนาพร เกษเมธีการุณ"
					color="#f0da8c"
					size="56"
					tooltip="top"
					side="free"
				/>
			</RP>
			<RP
				src="rp/pt14-พรชัย.png"
				name="พรชัย อินทร์สุข"
				color="#0b3757"
				size="56"
				tooltip="top"
				{showTop}
				shift="0"
			>
				<RP
					src="rp/pt14-พรชัย.png"
					name="พรชัย อินทร์สุข"
					color="#f0da8c"
					size="56"
					tooltip="top"
					side="free"
				/>
			</RP>
			<RP
				src="rp/pt14-ปัญญา.png"
				name="ปัญญา จีนาคำ"
				color="#0b3757"
				size="56"
				tooltip="top"
				{showTop}
				shift="0"
			>
				<RP
					src="rp/pt14-ปัญญา.png"
					name="ปัญญา จีนาคำ"
					color="#f0da8c"
					size="56"
					tooltip="top"
					side="free"
				/>
			</RP>
			<RP
				src="rp/pt14-วัฒนา.png"
				name="วัฒนา สิทธิวัง"
				color="#0b3757"
				size="56"
				tooltip="top"
				{showTop}
				shift="0"
			>
				<RP
					src="rp/pt14-วัฒนา.png"
					name="วัฒนา สิทธิวัง"
					color="#f0da8c"
					size="56"
					tooltip="top"
					side="free"
				/>
			</RP>
			<RP
				src="rp/pt14-ยงยุทธ.png"
				name="ยงยุทธ เทพจำนงค์"
				color="#0b3757"
				size="56"
				tooltip="top"
				{showTop}
				shift="0"
			>
				<RP
					src="rp/pt14-ยงยุทธ.png"
					name="ยงยุทธ เทพจำนงค์"
					color="#f0da8c"
					size="56"
					tooltip="top"
					side="free"
				/>
			</RP>
			<RP
				src="rp/pt14-ภาคภูมิ.png"
				name="ภาคภูมิ บูลย์ประมุข"
				color="#0b3757"
				size="56"
				tooltip="top"
				{showTop}
				shift="0"
			>
				<RP
					src="rp/pt14-ภาคภูมิ.png"
					name="ภาคภูมิ บูลย์ประมุข"
					color="#f0da8c"
					size="56"
					tooltip="top"
					side="free"
				/>
			</RP>
			<RP
				src="rp/pt14-ยุทธนา.png"
				name="ยุทธนา โพธสุธน"
				color="#0b3757"
				size="56"
				tooltip="top"
				{showTop}
				shift="0"
			>
				<RP
					src="rp/pt14-ยุทธนา.png"
					name="ยุทธนา โพธสุธน"
					color="#f0da8c"
					size="56"
					tooltip="top"
					side="free"
				/>
			</RP>

			<RP
				src="rp/pt14-สะถิระ.png"
				name="สะถิระ เผือกประพันธุ์"
				color="#0b3757"
				size="56"
				tooltip="top"
				{showTop}
				shift="0"
			>
				<RP
					src="rp/pt14-สะถิระ.png"
					name="สะถิระ เผือกประพันธุ์"
					color="#f0da8c"
					size="56"
					tooltip="top"
					side="free"
				/>
			</RP>
			<RP
				src="rp/pt14-ธนะสิทธิ์.png"
				name="ธนะสิทธิ์ โควสุรัตน์"
				color="#0b3757"
				size="56"
				tooltip="top"
				{showTop}
				shift="0"
			>
				<RP
					src="rp/pt14-ธนะสิทธิ์.png"
					name="ธนะสิทธิ์ โควสุรัตน์"
					color="#f0da8c"
					size="56"
					tooltip="top"
					side="free"
				/>
			</RP>
			<RP
				src="rp/pt14-ธนัสถ์.png"
				name="ธนัสถ์ ทวีเกื้อกูลกิจ"
				color="#0b3757"
				size="56"
				tooltip="top"
				{showTop}
				shift="0"
			>
				<RP
					src="rp/pt14-ธนัสถ์.png"
					name="ธนัสถ์ ทวีเกื้อกูลกิจ"
					color="#f0da8c"
					size="56"
					tooltip="top"
					side="free"
				/>
			</RP>
			<RP
				src="rp/pt14-ณัฏฐพล.png"
				name="ณัฏฐพล จรัสรพีพงษ์"
				color="#0b3757"
				size="56"
				tooltip="top"
				{showTop}
				shift="0"
			>
				<RP
					src="rp/pt14-ณัฏฐพล.png"
					name="ณัฏฐพล จรัสรพีพงษ์"
					color="#f0da8c"
					size="56"
					tooltip="top"
					side="free"
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
						<div class="votelog-subject">{@html mati.html_name}</div>
						{#each PART4_DATA[mati_index] as vote, person_index}
							{#if vote === 1}
								{#if mati_index === 37}
									{#if person_index === 9}
										<Cell line="#f0da8c" fireEvent on:moved={setShowTop} />
									{:else}
										<Cell line="#f0da8c" />
									{/if}
								{:else}
									<Cell />
								{/if}
							{:else if vote === 2}
								{#if mati_index === 37 && person_index === 7}
									<Cell line="#f0da8c" side="black" />
								{:else}
									<Cell side="black" />
								{/if}
							{:else}
								<Cell side="opp" />
							{/if}
						{/each}
					</div>
				</div>
			{/each}
		</svelte:fragment>
	</Votelog>
</div>

<style lang="scss">
	.s15-container {
		padding: 0 0 96px;
	}
</style>
