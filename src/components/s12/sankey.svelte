<script lang="ts">
	import { inView, timeline } from 'motion';
	import { onMount } from 'svelte';

	import RP from 'components/RepPortrait.svelte';

	const animate2ColSankey = (el: any) => {
		const el_c = el.children;
		const sequence: TimelineDefinition = [
			[el_c[0], { opacity: [0, 1] }, { duration: 0.5 }],
			[el_c[1], { opacity: [0, 1] }, { duration: 0.5, at: '<' }],
			[el_c[2], { opacity: [0, 1] }, { duration: 0.5, at: '-0.25' }],
			[
				el_c[3],
				{
					clipPath: ['polygon(0 0, 0 0, 0 100%, 0 100%)', 'polygon(0 0, 101% 0, 101% 100%, 0 100%)']
				},
				{ duration: 1, at: '-0.25' }
			],
			[el_c[4], { opacity: [0, 1] }, { duration: 0.5, at: '-0.1' }],
			[el_c[5], { opacity: [0, 1] }, { duration: 0.5, at: '-0.25' }],
			[el_c[6], { opacity: [0, 1] }, { duration: 0.5, at: '<' }]
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

	let sankey_inview = false;
	onMount(() => {
		inView(
			el_sankey1,
			() => {
				animate2ColSankey(el_sankey1);
				sankey_inview = true;
			},
			{ amount: 1 }
		);
		inView(el_sankey2, () => animate2ColSankey(el_sankey2), { amount: 1 });
		inView(el_sankey3, () => animate2ColSankey(el_sankey3), { amount: 1 });
		inView(el_sankey4, () => animate2ColSankey(el_sankey4), { amount: 1 });
		inView(el_sankey5, () => animate2ColSankey(el_sankey5), { amount: 1 });
		inView(
			el_sankeyX2,
			() => {
				const x1_c = el_sankeyX1.children;
				const x2_c = el_sankeyX2.children;
				const sequence: TimelineDefinition = [
					[x2_c[1], { opacity: [0, 1] }, { duration: 0.5 }],
					[x2_c[2], { opacity: [0, 1] }, { duration: 0.5, at: '-0.25' }],
					[
						x2_c[3].children[0],
						{
							clipPath: [
								'polygon(0 0, 0 0, 0 100%, 0 100%)',
								'polygon(0 0, 101% 0, 101% 100%, 0 100%)'
							]
						},
						{ duration: 1, at: '-0.25' }
					],
					[x1_c[4], { opacity: [0, 1] }, { duration: 0.5, at: '-0.1' }],
					[x1_c[5], { opacity: [0, 1] }, { duration: 0.5, at: '-0.25' }]
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
					[el_c[0], { opacity: [0, 1] }, { duration: 0.5 }],
					[el_c[1], { opacity: [0, 1] }, { duration: 0.5, at: '<' }],
					[el_c[2], { opacity: [0, 1] }, { duration: 0.5, at: '-0.25' }],
					[
						el_c[3].children[0],
						{
							clipPath: [
								'polygon(0 0, 0 0, 0 100%, 0 100%)',
								'polygon(0 0, 101% 0, 101% 100%, 0 100%)'
							]
						},
						{ duration: 1, at: '-0.25' }
					],
					[
						el_c[3].children[1],
						{
							opacity: [0, 1],
							transform: ['translateX(-50%) scale(0)', 'translateX(-50%) scale(1)']
						},
						{ duration: 0.5, at: '<' }
					],
					[el_c[5], { opacity: [0, 1] }, { duration: 0.5, at: '-0.1' }],
					[el_c[6], { opacity: [0, 1] }, { duration: 0.5, at: '-0.25' }],
					[el_c[7], { opacity: [0, 1] }, { duration: 0.5, at: '<' }]
				];
				timeline(sequence);
			},
			{ amount: 1 }
		);
	});
</script>

<!-- Load curved connector on first sankey -->
{#if sankey_inview}
	<img
		src="/parliament-in-a-nutshell/sankey1.svg"
		alt=""
		decoding="async"
		loading="eager"
		width="0"
		height="0"
		style="display:none"
	/>
{/if}
<!-- SANKEY 1 -->
<div
	bind:this={el_sankey1}
	class="row sankey"
	style="--from-p:'พรรคอนาคตใหม่';--to-c:#065CAB;--to-p:'พรรคภูมิใจไทย'"
>
	<div class="row vert sankey-people">
		<RP src="rp/pt12-ศรีนวล.png" color="#ff6f21" name="ศรีนวล บุญลือ" side="opp" size="48" />
		<RP
			src="rp/pt12-กิตติชัย.png"
			color="#ff6f21"
			name="กิตติชัย เรืองสวัสดิ์"
			side="opp"
			size="48"
		/>
		<RP
			src="rp/pt12-กฤติเดช.png"
			color="#ff6f21"
			name="กฤติเดช สันติวชิระกุล"
			side="opp"
			size="48"
		/>
		<RP
			src="rp/pt12-โชติพิพัฒน์.png"
			color="#ff6f21"
			name="โชติพิพัฒน์ เตชะโสภณมณี"
			side="opp"
			size="48"
		/>
		<RP src="rp/pt12-ฐิตินันท์.png" color="#ff6f21" name="ฐิตินันท์ แสงนาค" side="opp" size="48" />
	</div>
	<div class="row vert sankey-people">
		<RP src="rp/pt12-มณฑล.png" color="#ff6f21" name="มณฑล โพธิ์คาย" side="opp" size="48" />
		<RP src="rp/pt12-วิรัช.png" color="#ff6f21" name="วิรัช พันธุมะผล" side="opp" size="48" />
		<RP src="rp/pt12-สำลี.png" color="#ff6f21" name="สำลี รักสุทธี" side="opp" size="48" />
		<RP src="rp/pt12-อนาวิล.png" color="#ff6f21" name="อนาวิล รัตนสถาพร" side="opp" size="48" />
		<RP src="rp/pt12-เอกการ.png" color="#ff6f21" name="เอกการ ซื่อทรงธรรม" side="opp" size="48" />
	</div>
	<div class="sankey-block start" />
	<div class="sankey-fade" />
	<div class="sankey-block end" />
	<div class="row vert sankey-people">
		<RP src="rp/pt12-ศรีนวล.png" color="#065cab" name="ศรีนวล บุญลือ" size="48" />
		<RP src="rp/pt12-กิตติชัย.png" color="#065cab" name="กิตติชัย เรืองสวัสดิ์" size="48" />
		<RP src="rp/pt12-กฤติเดช.png" color="#065cab" name="กฤติเดช สันติวชิระกุล" size="48" />
		<RP src="rp/pt12-โชติพิพัฒน์.png" color="#065cab" name="โชติพิพัฒน์ เตชะโสภณมณี" size="48" />
		<RP src="rp/pt12-ฐิตินันท์.png" color="#065cab" name="ฐิตินันท์ แสงนาค" size="48" />
	</div>
	<div class="row vert sankey-people">
		<RP src="rp/pt12-มณฑล.png" color="#065cab" name="มณฑล โพธิ์คาย" size="48" />
		<RP src="rp/pt12-วิรัช.png" color="#065cab" name="วิรัช พันธุมะผล" size="48" />
		<RP src="rp/pt12-สำลี.png" color="#065cab" name="สำลี รักสุทธี" size="48" />
		<RP src="rp/pt12-อนาวิล.png" color="#065cab" name="อนาวิล รัตนสถาพร" size="48" />
		<RP src="rp/pt12-เอกการ.png" color="#065cab" name="เอกการ ซื่อทรงธรรม" size="48" />
	</div>
</div>
<!-- SANKEY X1 -->
<div bind:this={el_sankeyX1} class="row sankey sankey-notop" style="--to-c:#065CAB">
	<div class="sankey-people-gap" />
	<div class="sankey-people-gap" />
	<div class="sankey-block-gap" />
	<div class="sankey-connector-container" />
	<div class="sankey-block end" />
	<RP
		class="sankey-people"
		src="rp/pt12-พรพิมล.png"
		color="#065CAB"
		name="พรพิมล ธรรมสาร"
		size="48"
	/>
	<div class="sankey-people-gap" />
</div>
<!-- SANKEY 2 -->
<div bind:this={el_sankey2} class="row sankey" style="--to-c:#70D267;--to-p:'พรรคพลังท้องถิ่นไท'">
	<RP
		class="sankey-people"
		src="rp/pt12-กวินนาถ.png"
		color="#ff6f21"
		name="กวินนาถ ตาคีย์"
		side="opp"
		size="48"
	/>
	<RP
		class="sankey-people"
		src="rp/pt12-จารึก.png"
		color="#ff6f21"
		name="จารึก ศรีอ่อน"
		side="opp"
		size="48"
	/>
	<div class="sankey-block start" />
	<div class="sankey-fade" />
	<div class="sankey-block end" />
	<RP
		class="sankey-people"
		src="rp/pt12-กวินนาถ.png"
		color="#70D267"
		name="กวินนาถ ตาคีย์"
		size="48"
	/>
	<RP
		class="sankey-people"
		src="rp/pt12-จารึก.png"
		color="#70D267"
		name="จารึก ศรีอ่อน"
		size="48"
	/>
</div>
<!-- SANKEY 3 -->
<div bind:this={el_sankey3} class="row sankey" style="--to-c:#0B3757;--to-p:'พรรคพลังประชารัฐ'">
	<div class="sankey-people-gap" />
	<RP
		class="sankey-people"
		src="rp/pt12-ฐนภัทร.png"
		color="#ff6f21"
		name="ฐนภัทร กิตติวงศา"
		side="opp"
		size="48"
	/>
	<div class="sankey-block start" />
	<div class="sankey-fade" />
	<div class="sankey-block end" />
	<RP
		class="sankey-people"
		src="rp/pt12-ฐนภัทร.png"
		color="#0B3757"
		name="ฐนภัทร กิตติวงศา"
		size="48"
	/>
	<div class="sankey-people-gap" />
</div>
<!-- SANKEY 4 -->
<div bind:this={el_sankey4} class="row sankey" style="--to-c:#CC8AE3;--to-p:'พรรคชาติไทยพัฒนา'">
	<div class="sankey-people-gap" />
	<RP
		class="sankey-people"
		src="rp/pt12-จุลพันธ์.png"
		color="#ff6f21"
		name="จุลพันธ์ โนนศรีชัย"
		side="opp"
		size="48"
	/>
	<div class="sankey-block start" />
	<div class="sankey-fade" />
	<div class="sankey-block end" />
	<RP
		class="sankey-people"
		src="rp/pt12-จุลพันธ์.png"
		color="#CC8AE3"
		name="จุลพันธ์ โนนศรีชัย"
		size="48"
	/>
	<div class="sankey-people-gap" />
</div>
<!-- SANKEY 5 -->
<div bind:this={el_sankey5} class="row sankey" style="--to-c:#FD980D;--to-p:'พรรคชาติพัฒนา'">
	<div class="sankey-people-gap" />
	<RP
		class="sankey-people"
		src="rp/pt12-สมัคร.png"
		color="#ff6f21"
		name="สมัคร ป้องวงษ์"
		side="opp"
		size="48"
	/>
	<div class="sankey-block start" />
	<div class="sankey-fade" />
	<div class="sankey-block end" />
	<RP
		class="sankey-people"
		src="rp/pt12-สมัคร.png"
		color="#FD980D"
		name="สมัคร ป้องวงษ์"
		size="48"
	/>
	<div class="sankey-people-gap" />
</div>
<!-- SANKEY X2 -->
<div bind:this={el_sankeyX2} class="row sankey" style="--from-c:#E50000;--from-p:'พรรคเพื่อไทย'">
	<div class="sankey-people-gap" />
	<RP
		class="sankey-people"
		src="rp/pt12-พรพิมล.png"
		color="#E50000"
		name="พรพิมล ธรรมสาร"
		side="opp"
		size="48"
	/>
	<div class="sankey-block start" />
	<div class="sankey-connector-container">
		<img
			class="sankey-connector"
			src="/parliament-in-a-nutshell/sankey1.svg"
			alt=""
			decoding="async"
			loading="lazy"
			height="584"
		/>
	</div>
	<div class="sankey-block-gap" />
	<div class="sankey-people-gap" />
	<div class="sankey-people-gap" />
</div>
<!-- SANKEY 6 -->
<div bind:this={el_sankey6} class="row sankey" style="--from-c:#75328C;--from-p:'พรรคเศรษฐกิจใหม่'">
	<div class="row vert sankey-people">
		<RP src="rp/pt12-มนูญ.png" color="#75328C" name="มนูญ สิวาภิรมย์รัตน์" size="48" side="opp" />
		<RP src="rp/pt12-มารศรี.png" color="#75328C" name="มารศรี ขจรเรืองโรจน์" size="48" side="opp" />
	</div>
	<div class="row vert sankey-people">
		<RP src="rp/pt12-สุภดิช.png" color="#75328C" name="สุภดิช อากาศฤกษ์" size="48" side="opp" />
		<RP src="rp/pt12-นิยม.png" color="#75328C" name="นิยม วิวรรธนดิฐกุล" size="48" side="opp" />
		<RP src="rp/pt12-ภาสกร.png" color="#75328C" name="ภาสกร เงินเจริญกุล" size="48" side="opp" />
	</div>
	<div class="sankey-block start" />
	<div class="sankey-connector-container">
		<div class="sankey-fade-newecon" />
		<img
			class="sankey-img-newecon"
			src="/parliament-in-a-nutshell/part12.png"
			alt="พรรคเศรษฐกิจใหม่ ย้ายขั้วไปรัฐบาล"
			decoding="async"
			loading="lazy"
		/>
	</div>
	<div class="sankey-block-gap" />
	<div class="row vert sankey-people">
		<RP src="rp/pt12-สุภดิช.png" color="#75328C" name="สุภดิช อากาศฤกษ์" size="48" />
		<RP src="rp/pt12-นิยม.png" color="#75328C" name="นิยม วิวรรธนดิฐกุล" size="48" />
		<RP src="rp/pt12-ภาสกร.png" color="#75328C" name="ภาสกร เงินเจริญกุล" size="48" />
	</div>
	<div class="row vert sankey-people">
		<RP src="rp/pt12-มนูญ.png" color="#75328C" name="มนูญ สิวาภิรมย์รัตน์" size="48" />
		<RP src="rp/pt12-มารศรี.png" color="#75328C" name="มารศรี ขจรเรืองโรจน์" size="48" />
	</div>
</div>

<style lang="scss">
	// `.sankey-people` is in `_global.scss`

	.sankey {
		margin-top: 40px;
		padding: 0 16px;
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

	.sankey-connector-container {
		width: 288px;
		margin: 0 -16px;
	}

	.sankey-block-gap {
		width: 96px;
	}

	.sankey-people-gap {
		width: 48px;
		flex: 0 0 48px;
	}

	.sankey-notop {
		margin-top: 0;
	}

	.sankey-connector {
		position: absolute;
		bottom: 0;
		width: 100%;
		clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
	}

	.sankey-block {
		opacity: 0;
	}

	.sankey-fade-newecon {
		background: linear-gradient(90deg, #75328c, #75328c00);
		opacity: 0.6;

		position: absolute;
		width: 133%;
		height: 100%;

		clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
	}

	.sankey-img-newecon {
		position: absolute;
		bottom: 10%;
		height: 80%;
		opacity: 0;
		left: 66.5%;
		transform: translateX(-50%) scale(0);

		max-width: 100%;
		object-fit: contain;
	}
</style>
