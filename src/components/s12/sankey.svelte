<script lang="ts">
	import { onMount } from 'svelte';
	import { inView, timeline } from 'motion';

	import RP from 'components/RepPortrait.svelte';

	const animate2ColSankey = (el: any) => {
		const el_c = el.children;
		const sequence: TimelineDefinition = [
			[el_c[0], { opacity: 1 }, { duration: 0.5 }],
			[el_c[1], { opacity: 1 }, { duration: 0.5, at: '<' }],
			[el_c[2], { opacity: 1 }, { duration: 0.5, at: '-0.25' }],
			[
				el_c[3],
				{
					clipPath: 'polygon(0 0, 101% 0, 101% 100%, 0% 100%)'
				},
				{ duration: 1, at: '-0.25' }
			],
			[el_c[4], { opacity: 1 }, { duration: 0.5, at: '-0.1' }],
			[el_c[5], { opacity: 1 }, { duration: 0.5, at: '-0.25' }],
			[el_c[6], { opacity: 1 }, { duration: 0.5, at: '<' }]
		];
		timeline(sequence);
	};

	const animate1ColSankey = (el: any) => {
		const el_c = el.children;
		const sequence: TimelineDefinition = [
			[el_c[0], { opacity: 1 }, { duration: 0.5 }],
			[el_c[1], { opacity: 1 }, { duration: 0.5, at: '-0.25' }],
			[
				el_c[2],
				{
					clipPath: 'polygon(0 0, 101% 0, 101% 100%, 0% 100%)'
				},
				{ duration: 1, at: '-0.25' }
			],
			[el_c[3], { opacity: 1 }, { duration: 0.5, at: '-0.1' }],
			[el_c[4], { opacity: 1 }, { duration: 0.5, at: '-0.25' }]
		];
		timeline(sequence);
	};

	let el_sankey1: any;
	let el_sankey2: any;
	let el_sankey3: any;
	let el_sankey4: any;
	let el_sankey5: any;

	let el_sankeyX1: any;
	let el_sankeyX2: any;

	let el_sankey6: any;

	onMount(() => {
		inView(el_sankey1, () => animate2ColSankey(el_sankey1), { amount: 1 });
		inView(el_sankey2, () => animate2ColSankey(el_sankey2), { amount: 1 });
		inView(el_sankey3, () => animate1ColSankey(el_sankey3), { amount: 1 });
		inView(el_sankey4, () => animate1ColSankey(el_sankey4), { amount: 1 });
		inView(el_sankey5, () => animate1ColSankey(el_sankey5), { amount: 1 });
		inView(
			el_sankeyX2,
			() => {
				const x1_c = el_sankeyX1.children;
				const x2_c = el_sankeyX2.children;
				const sequence: TimelineDefinition = [
					[x2_c[0], { opacity: 1 }, { duration: 0.5 }],
					[x2_c[1], { opacity: 1 }, { duration: 0.5, at: '-0.25' }],
					[
						x2_c[2],
						{
							clipPath: 'polygon(0 0, 101% 0, 101% 100%, 0% 100%)'
						},
						{ duration: 1, at: '-0.25' }
					],
					[x1_c[1], { opacity: 1 }, { duration: 0.5, at: '-0.1' }],
					[x1_c[2], { opacity: 1 }, { duration: 0.5, at: '-0.25' }]
				];
				timeline(sequence);
			},
			{ amount: 1 }
		);
		inView(
			el_sankey6,
			() => {
				const el_c = el_sankey6.children;
				const sequence: TimelineDefinition = [
					[el_c[0], { opacity: 1 }, { duration: 0.5 }],
					[el_c[1], { opacity: 1 }, { duration: 0.5, at: '<' }],
					[el_c[2], { opacity: 1 }, { duration: 0.5, at: '-0.25' }],
					[
						el_c[3],
						{
							clipPath: 'polygon(0 0, 101% 0, 101% 100%, 0% 100%)'
						},
						{ duration: 1, at: '-0.25' }
					],
					[
						el_c[5],
						{
							opacity: 1,
							transform: ['translateX(-50%) scale(0)', 'translateX(-50%) scale(1)']
						},
						{ duration: 0.5, at: '<' }
					],
					[el_c[6], { opacity: 1 }, { duration: 0.5, at: '-0.1' }],
					[el_c[7], { opacity: 1 }, { duration: 0.5, at: '-0.25' }],
					[el_c[8], { opacity: 1 }, { duration: 0.5, at: '<' }]
				];
				timeline(sequence);
			},
			{ amount: 1 }
		);
	});
</script>

<!-- SANKEY 1 -->
<div
	bind:this={el_sankey1}
	class="row sankey"
	style="--from-p:'พรรคอนาคตใหม่';--to-c:#065CAB;--to-p:'พรรคภูมิใจไทย'"
>
	<div class="row vert sankey-people">
		<RP
			src="rp/pt12-ศรีนวล.png"
			color="#ff6f21"
			name="ศรีนวล บุญลือ"
			side="opp"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt12-กิตติชัย.png"
			color="#ff6f21"
			name="กิตติชัย เรืองสวัสดิ์"
			side="opp"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt12-กฤติเดช.png"
			color="#ff6f21"
			name="กฤติเดช สันติวชิระกุล"
			side="opp"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt12-โชติพิพัฒน์.png"
			color="#ff6f21"
			name="โชติพิพัฒน์ เตชะโสภณมณี"
			side="opp"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt12-ฐิตินันท์.png"
			color="#ff6f21"
			name="ฐิตินันท์ แสงนาค"
			side="opp"
			size="48px"
			tooltip="top"
		/>
	</div>
	<div class="row vert sankey-people">
		<RP
			src="rp/pt12-มณฑล.png"
			color="#ff6f21"
			name="มณฑล โพธิ์คาย"
			side="opp"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt12-วิรัช.png"
			color="#ff6f21"
			name="วิรัช พันธุมะผล"
			side="opp"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt12-สำลี.png"
			color="#ff6f21"
			name="สำลี รักสุทธี"
			side="opp"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt12-อนาวิล.png"
			color="#ff6f21"
			name="อนาวิล รัตนสถาพร"
			side="opp"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt12-เอกการ.png"
			color="#ff6f21"
			name="เอกการ ซื่อทรงธรรม"
			side="opp"
			size="48px"
			tooltip="top"
		/>
	</div>
	<div class="sankey-block start" />
	<div class="sankey-fade" />
	<div class="sankey-block end" />
	<div class="row vert sankey-people">
		<RP src="rp/pt12-ศรีนวล.png" color="#065cab" name="ศรีนวล บุญลือ" size="48px" tooltip="top" />
		<RP
			src="rp/pt12-กิตติชัย.png"
			color="#065cab"
			name="กิตติชัย เรืองสวัสดิ์"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt12-กฤติเดช.png"
			color="#065cab"
			name="กฤติเดช สันติวชิระกุล"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt12-โชติพิพัฒน์.png"
			color="#065cab"
			name="โชติพิพัฒน์ เตชะโสภณมณี"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt12-ฐิตินันท์.png"
			color="#065cab"
			name="ฐิตินันท์ แสงนาค"
			size="48px"
			tooltip="top"
		/>
		<!-- <div /> -->
	</div>
	<div class="row vert sankey-people">
		<RP src="rp/pt12-มณฑล.png" color="#065cab" name="มณฑล โพธิ์คาย" size="48px" tooltip="top" />
		<RP src="rp/pt12-วิรัช.png" color="#065cab" name="วิรัช พันธุมะผล" size="48px" tooltip="top" />
		<RP src="rp/pt12-สำลี.png" color="#065cab" name="สำลี รักสุทธี" size="48px" tooltip="top" />
		<RP
			src="rp/pt12-อนาวิล.png"
			color="#065cab"
			name="อนาวิล รัตนสถาพร"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt12-เอกการ.png"
			color="#065cab"
			name="เอกการ ซื่อทรงธรรม"
			size="48px"
			tooltip="top"
		/>
	</div>
</div>
<!-- SANKEY X1 -->
<div bind:this={el_sankeyX1} class="row sankey sankey-notop" style="--to-c:#065CAB">
	<div class="sankey-gap" />
	<div class="sankey-block end" />
	<RP
		class="sankey-people"
		src="rp/pt12-พรพิมล.png"
		color="#065CAB"
		name="พรพิมล ธรรมสาร"
		size="48px"
		tooltip="top"
	/>
</div>
<!-- SANKEY 2 -->
<div bind:this={el_sankey2} class="row sankey" style="--to-c:#70D267;--to-p:'พรรคพลังท้องถิ่นไท'">
	<RP
		class="sankey-people"
		src="rp/pt12-กวินนาถ.png"
		color="#ff6f21"
		name="กวินนาถ ตาคีย์"
		side="opp"
		size="48px"
		tooltip="top"
	/>
	<RP
		class="sankey-people"
		src="rp/pt12-จารึก.png"
		color="#ff6f21"
		name="จารึก ศรีอ่อน"
		side="opp"
		size="48px"
		tooltip="top"
	/>
	<div class="sankey-block start" />
	<div class="sankey-fade" />
	<div class="sankey-block end" />
	<RP
		class="sankey-people"
		src="rp/pt12-กวินนาถ.png"
		color="#70D267"
		name="กวินนาถ ตาคีย์"
		size="48px"
		tooltip="top"
	/>
	<RP
		class="sankey-people"
		src="rp/pt12-จารึก.png"
		color="#70D267"
		name="จารึก ศรีอ่อน"
		size="48px"
		tooltip="top"
	/>
</div>
<!-- SANKEY 3 -->
<div bind:this={el_sankey3} class="row sankey" style="--to-c:#0B3757;--to-p:'พรรคพลังประชารัฐ'">
	<RP
		class="sankey-people"
		src="rp/pt12-ฐนภัทร.png"
		color="#ff6f21"
		name="ฐนภัทร กิตติวงศา"
		side="opp"
		size="48px"
		tooltip="top"
	/>
	<div class="sankey-block start" />
	<div class="sankey-fade" />
	<div class="sankey-block end" />
	<RP
		class="sankey-people"
		src="rp/pt12-ฐนภัทร.png"
		color="#0B3757"
		name="ฐนภัทร กิตติวงศา"
		size="48px"
		tooltip="top"
	/>
</div>
<!-- SANKEY 4 -->
<div bind:this={el_sankey4} class="row sankey" style="--to-c:#CC8AE3;--to-p:'พรรคชาติไทยพัฒนา'">
	<RP
		class="sankey-people"
		src="rp/pt12-จุลพันธ์.png"
		color="#ff6f21"
		name="จุลพันธ์ โนนศรีชัย"
		side="opp"
		size="48px"
		tooltip="top"
	/>
	<div class="sankey-block start" />
	<div class="sankey-fade" />
	<div class="sankey-block end" />
	<RP
		class="sankey-people"
		src="rp/pt12-จุลพันธ์.png"
		color="#CC8AE3"
		name="จุลพันธ์ โนนศรีชัย"
		size="48px"
		tooltip="top"
	/>
</div>
<!-- SANKEY 5 -->
<div bind:this={el_sankey5} class="row sankey" style="--to-c:#FD980D;--to-p:'พรรคชาติพัฒนา'">
	<RP
		class="sankey-people"
		src="rp/pt12-สมัคร.png"
		color="#ff6f21"
		name="สมัคร ป้องวงษ์"
		side="opp"
		size="48px"
		tooltip="top"
	/>
	<div class="sankey-block start" />
	<div class="sankey-fade" />
	<div class="sankey-block end" />
	<RP
		class="sankey-people"
		src="rp/pt12-สมัคร.png"
		color="#FD980D"
		name="สมัคร ป้องวงษ์"
		size="48px"
		tooltip="top"
	/>
</div>
<!-- SANKEY X2 -->
<div bind:this={el_sankeyX2} class="row sankey" style="--from-c:#E50000;--from-p:'พรรคเพื่อไทย'">
	<RP
		class="sankey-people"
		src="rp/pt12-พรพิมล.png"
		color="#E50000"
		name="พรพิมล ธรรมสาร"
		side="opp"
		size="48px"
		tooltip="top"
	/>
	<div class="sankey-block start" />
	<img
		class="sankey-connector"
		src="/shaking-parliament/sankey-connector.svg"
		alt=""
		decoding="async"
		loading="lazy"
	/>
	<div class="sankey-gap" />
</div>
<!-- SANKEY 6 -->
<div bind:this={el_sankey6} class="row sankey" style="--from-c:#75328C;--from-p:'พรรคเศรษฐกิจใหม่'">
	<div class="row vert sankey-people">
		<RP
			src="rp/pt12-มนูญ.png"
			color="#75328C"
			name="มนูญ สิวาภิรมย์รัตน์"
			size="48px"
			side="opp"
			tooltip="top"
		/>
		<RP
			src="rp/pt12-มารศรี.png"
			color="#75328C"
			name="มารศรี ขจรเรืองโรจน์"
			size="48px"
			side="opp"
			tooltip="top"
		/>
	</div>
	<div class="row vert sankey-people">
		<RP
			src="rp/pt12-สุภดิช.png"
			color="#75328C"
			name="สุภดิช อากาศฤกษ์"
			size="48px"
			side="opp"
			tooltip="top"
		/>
		<RP
			src="rp/pt12-นิยม.png"
			color="#75328C"
			name="นิยม วิวรรธนดิฐกุล"
			size="48px"
			side="opp"
			tooltip="top"
		/>
		<RP
			src="rp/pt12-ภาสกร.png"
			color="#75328C"
			name="ภาสกร เงินเจริญกุล"
			size="48px"
			side="opp"
			tooltip="top"
		/>
	</div>
	<div class="sankey-block start" />
	<div class="sankey-fade-newecon" />
	<div class="sankey-gap-newecon" />
	<img
		class="sankey-img-newecon"
		src="/shaking-parliament/part12.png"
		alt=""
		decoding="async"
		loading="lazy"
	/>
	<div class="row vert sankey-people">
		<RP
			src="rp/pt12-สุภดิช.png"
			color="#75328C"
			name="สุภดิช อากาศฤกษ์"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt12-นิยม.png"
			color="#75328C"
			name="นิยม วิวรรธนดิฐกุล"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt12-ภาสกร.png"
			color="#75328C"
			name="ภาสกร เงินเจริญกุล"
			size="48px"
			tooltip="top"
		/>
	</div>
	<div class="row vert sankey-people">
		<RP
			src="rp/pt12-มนูญ.png"
			color="#75328C"
			name="มนูญ สิวาภิรมย์รัตน์"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt12-มารศรี.png"
			color="#75328C"
			name="มารศรี ขจรเรืองโรจน์"
			size="48px"
			tooltip="top"
		/>
	</div>
</div>

<style lang="scss">
	// `.sankey-people` is in `_global.scss`

	.sankey {
		margin-top: 40px;
	}

	.sankey-block {
		color: var(--from-c, #ff6f21);
		background: var(--from-c, #ff6f21);
		width: 96px;

		&::after {
			content: var(--from-p, '');

			position: absolute;
			left: 50%;
			top: -4px;
			transform: translate(-50%, -100%);

			font-style: italic;
			font-weight: 700;
			font-size: 0.7rem;
			line-height: 1;
			white-space: nowrap;
		}

		&.end {
			color: var(--to-c, #ff6f21);
			background: var(--to-c, #ff6f21);

			&::after {
				content: var(--to-p, '');
			}
		}
	}

	.sankey-fade {
		background: linear-gradient(90deg, var(--from-c, #ff6f21), var(--to-c, #ff6f21));
		width: 288px;
		opacity: 0.6;
		margin: 0 -16px;
		clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
	}

	.sankey-gap {
		width: 432px;
	}

	.sankey-notop {
		margin-top: 0;
	}

	.sankey-connector {
		position: absolute;
		bottom: 0;
		clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
	}

	.sankey-block {
		opacity: 0;
	}

	.sankey-fade-newecon {
		background: linear-gradient(90deg, #75328c, #75328c00);
		opacity: 0.6;

		position: absolute;
		width: 400px;
		height: 100%;
		transform: translateX(56px);

		clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
	}

	.sankey-gap-newecon {
		width: 368px;
	}

	.sankey-img-newecon {
		position: absolute;
		bottom: 0;
		height: 100%;
		opacity: 0;
		left: calc(48px + 50%);
		transform: translateX(-50%) scale(0);
	}
</style>
