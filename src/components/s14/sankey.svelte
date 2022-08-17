<script lang="ts">
	import { onMount } from 'svelte';
	import { inView, timeline } from 'motion';

	import RP from 'components/RepPortrait.svelte';

	let el_sankey: any;
	let el_sankey2: any;
	let el_sankey3: any;
	onMount(() => {
		inView(
			el_sankey,
			() => {
				const el_c = el_sankey.children;
				const sequence: TimelineDefinition = [
					[el_c[0], { opacity: 1 }, { duration: 0.5 }],
					[el_c[1], { opacity: 1 }, { duration: 0.5, at: '<' }],
					[el_c[2], { opacity: 1 }, { duration: 0.5, at: '<' }],
					[el_c[3], { opacity: 1 }, { duration: 0.5, at: '<' }],
					[el_c[4], { opacity: 1 }, { duration: 0.5, at: '<' }],
					[el_c[5], { opacity: 1 }, { duration: 0.5, at: '-0.25' }],
					[
						el_c[6],
						{
							clipPath: 'polygon(0 0, 101% 0, 101% 100%, 0% 100%)'
						},
						{ duration: 1, at: '-0.25' }
					],
					[el_c[7], { opacity: 1 }, { duration: 0.5, at: '-0.1' }],
					[el_c[8], { opacity: 1 }, { duration: 0.5, at: '-0.25' }],
					[el_c[9], { opacity: 1 }, { duration: 0.5, at: '<' }],
					[el_c[10], { opacity: 1 }, { duration: 0.5, at: '<' }],
					[el_c[11], { opacity: 1 }, { duration: 0.5, at: '<' }],
					[el_c[12], { opacity: 1 }, { duration: 0.5, at: '<' }]
				];
				timeline(sequence);
			},
			{ amount: 1 }
		);

		inView(
			el_sankey,
			() => {
				const el_c1 = el_sankey2.children;
				const el_c2 = el_sankey3.children;
				const sequence: TimelineDefinition = [
					[el_c1[0], { opacity: 1 }, { duration: 0.5 }],
					[el_c1[1], { opacity: 1 }, { duration: 0.5, at: '<' }],
					[el_c1[2], { opacity: 1 }, { duration: 0.5, at: '<' }],
					[el_c1[4], { opacity: 1 }, { duration: 0.5, at: '-0.25' }],
					[
						el_c2[0],
						{
							clipPath: 'polygon(0 0, 101% 0, 101% 100%, 0% 100%)'
						},
						{ duration: 1, at: '-0.25' }
					],
					[el_c2[2], { opacity: 1 }, { duration: 0.5, at: '-0.1' }],
					[el_c2[3], { opacity: 1 }, { duration: 0.5, at: '-0.25' }],
					[el_c2[4], { opacity: 1 }, { duration: 0.5, at: '<' }],
					[el_c2[5], { opacity: 1 }, { duration: 0.5, at: '<' }]
				];
				timeline(sequence);
			},
			{ amount: 1 }
		);
	});
</script>

<div
	bind:this={el_sankey}
	class="row sankey"
	style="--gap:16px;--from-c:#0b3757;--from-p:'พรรคพลังประชารัฐ';--to-c:#f0da8c;--to-p:'พรรคเศรษฐกิจไทย';--to-c-text:#cbb979"
>
	<div class="row vert sankey-people" style="--gap:16px">
		<RP
			src="rp/pt14-ธรรมนัส.png"
			color="#0b3757"
			name="ธรรมนัส พรหมเผ่า"
			size="48px"
			tooltip="top"
		/>
		<RP src="rp/pt14-เกษม.png" color="#0b3757" name="เกษม ศุภรานนท์" size="48px" tooltip="top" />
		<RP src="rp/pt14-ไผ่.png" color="#0b3757" name="ไผ่ ลิกค์" size="48px" tooltip="top" />
	</div>
	<div class="row vert sankey-people" style="--gap:16px">
		<RP
			src="rp/pt14-สะถิระ.png"
			color="#0b3757"
			name="สะถิระ เผือกประพันธุ์"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt14-บุญสิงห์.png"
			color="#0b3757"
			name="บุญสิงห์ วรินทร์รักษ์"
			size="48px"
			tooltip="top"
		/>
		<RP src="rp/pt14-จีรเดช.png" color="#0b3757" name="จีรเดช ศรีวิราช" size="48px" tooltip="top" />
		<RP src="rp/pt14-พรชัย.png" color="#0b3757" name="พรชัย อินทร์สุข" size="48px" tooltip="top" />
	</div>
	<div class="row vert sankey-people" style="--gap:16px">
		<RP src="rp/pt14-ปัญญา.png" color="#0b3757" name="ปัญญา จีนาคำ" size="48px" tooltip="top" />
		<RP
			src="rp/pt14-ธนะสิทธิ์.png"
			color="#0b3757"
			name="ธนะสิทธิ์ โควสุรัตน์"
			size="48px"
			tooltip="top"
		/>
		<RP src="rp/pt14-วัฒนา.png" color="#0b3757" name="วัฒนา สิทธิวัง" size="48px" tooltip="top" />
		<RP
			src="rp/pt14-ยงยุทธ.png"
			color="#0b3757"
			name="ยงยุทธ เทพจำนงค์"
			size="48px"
			tooltip="top"
		/>
	</div>
	<div class="row vert sankey-people" style="--gap:16px">
		<RP
			src="rp/pt14-จอมขวัญ.png"
			color="#0b3757"
			name="จอมขวัญ กลับบ้านเกาะ"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt14-ทัศนาพร.png"
			color="#0b3757"
			name="ทัศนาพร เกษเมธีการุณ"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt14-ธนัสถ์.png"
			color="#0b3757"
			name="ธนัสถ์ ทวีเกื้อกูลกิจ"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt14-ภาคภูมิ.png"
			color="#0b3757"
			name="ภาคภูมิ บูลย์ประมุข"
			size="48px"
			tooltip="top"
		/>
	</div>
	<div class="row vert sankey-people" style="--gap:16px">
		<RP src="rp/pt14-ยุทธนา.png" color="#0b3757" name="ยุทธนา โพธสุธน" size="48px" tooltip="top" />
		<RP
			src="rp/pt14-สมศักดิ์.png"
			color="#0b3757"
			name="สมศักดิ์ คุณเงิน"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt14-ณัฏฐพล.png"
			color="#0b3757"
			name="ณัฏฐพล จรัสรพีพงษ์"
			size="48px"
			tooltip="top"
		/>
	</div>
	<div class="sankey-block start" />
	<div class="sankey-fade" />
	<div class="sankey-block end" />
	<div class="row vert sankey-people" style="--gap:16px">
		<RP
			src="rp/pt14-ธรรมนัส.png"
			color="#f0da8c"
			side="free"
			name="ธรรมนัส พรหมเผ่า"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt14-เกษม.png"
			color="#f0da8c"
			side="free"
			name="เกษม ศุภรานนท์"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt14-ไผ่.png"
			color="#f0da8c"
			side="free"
			name="ไผ่ ลิกค์"
			size="48px"
			tooltip="top"
		/>
	</div>
	<div class="row vert sankey-people" style="--gap:16px">
		<RP
			src="rp/pt14-สะถิระ.png"
			color="#f0da8c"
			side="free"
			name="สะถิระ เผือกประพันธุ์"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt14-บุญสิงห์.png"
			color="#f0da8c"
			side="free"
			name="บุญสิงห์ วรินทร์รักษ์"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt14-จีรเดช.png"
			color="#f0da8c"
			side="free"
			name="จีรเดช ศรีวิราช"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt14-พรชัย.png"
			color="#f0da8c"
			side="free"
			name="พรชัย อินทร์สุข"
			size="48px"
			tooltip="top"
		/>
	</div>
	<div class="row vert sankey-people" style="--gap:16px">
		<RP
			src="rp/pt14-ปัญญา.png"
			color="#f0da8c"
			side="free"
			name="ปัญญา จีนาคำ"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt14-ธนะสิทธิ์.png"
			color="#f0da8c"
			side="free"
			name="ธนะสิทธิ์ โควสุรัตน์"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt14-วัฒนา.png"
			color="#f0da8c"
			side="free"
			name="วัฒนา สิทธิวัง"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt14-ยงยุทธ.png"
			color="#f0da8c"
			side="free"
			name="ยงยุทธ เทพจำนงค์"
			size="48px"
			tooltip="top"
		/>
	</div>
	<div class="row vert sankey-people" style="--gap:16px">
		<RP
			src="rp/pt14-จอมขวัญ.png"
			color="#f0da8c"
			side="free"
			name="จอมขวัญ กลับบ้านเกาะ"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt14-ทัศนาพร.png"
			color="#f0da8c"
			side="free"
			name="ทัศนาพร เกษเมธีการุณ"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt14-ธนัสถ์.png"
			color="#f0da8c"
			side="free"
			name="ธนัสถ์ ทวีเกื้อกูลกิจ"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt14-ภาคภูมิ.png"
			color="#f0da8c"
			side="free"
			name="ภาคภูมิ บูลย์ประมุข"
			size="48px"
			tooltip="top"
		/>
	</div>
	<div class="row vert sankey-people" style="--gap:16px">
		<RP
			src="rp/pt14-ยุทธนา.png"
			color="#f0da8c"
			side="free"
			name="ยุทธนา โพธสุธน"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt14-สมศักดิ์.png"
			color="#f0da8c"
			side="free"
			name="สมศักดิ์ คุณเงิน"
			size="48px"
			tooltip="top"
		/>
		<RP
			src="rp/pt14-ณัฏฐพล.png"
			color="#f0da8c"
			side="free"
			name="ณัฏฐพล จรัสรพีพงษ์"
			size="48px"
			tooltip="top"
		/>
	</div>
</div>
<div bind:this={el_sankey2} class="row sankey sankey-notop" style="--gap:16px;--from-c:#0b3757">
	<RP
		class="sankey-people"
		src="rp/pt14s-วัฒนา.png"
		color="#0b3757"
		name="วัฒนา ช่างเหลา"
		size="48px"
		tooltip="top"
	/>
	<RP
		class="sankey-people"
		src="rp/pt14s-สมศักดิ์.png"
		color="#0b3757"
		name="สมศักดิ์ พันธ์เกษม"
		size="48px"
		tooltip="top"
	/>
	<RP
		class="sankey-people"
		src="rp/pt14-เอกราช.png"
		color="#0b3757"
		name="เอกราช ช่างเหลา"
		size="48px"
		tooltip="top"
	/>
	<div class="empty-people" />
	<div class="sankey-block start" />
	<div class="sankey-gap" />
</div>
<div
	bind:this={el_sankey3}
	class="row sankey sankey-overlap"
	style="--gap:16px;--to-c:#065CAB;--to-p:'พรรคภูมิใจไทย'"
>
	<img
		class="sankey-connector"
		src="/shaking-parliament/sankey2.svg"
		alt=""
		decoding="async"
		loading="lazy"
	/>
	<div class="sankey-gap" />
	<div class="sankey-block end" />
	<RP
		class="sankey-people"
		src="rp/pt14s-วัฒนา.png"
		color="#065CAB"
		name="วัฒนา ช่างเหลา"
		size="48px"
		tooltip="top"
	/>
	<RP
		class="sankey-people"
		src="rp/pt14s-สมศักดิ์.png"
		color="#065CAB"
		name="สมศักดิ์ พันธ์เกษม"
		size="48px"
		tooltip="top"
	/>
	<RP
		class="sankey-people"
		src="rp/pt14-เอกราช.png"
		color="#065CAB"
		name="เอกราช ช่างเหลา"
		size="48px"
		tooltip="top"
	/>
	<div class="empty-people" />
</div>

<style lang="scss">
	.sankey {
		margin-top: 40px;
	}

	.sankey-block {
		color: var(--from-c, #f0da8c);
		background: var(--from-c, #f0da8c);
		width: 96px;

		&::after {
			content: var(--from-p, '');

			position: absolute;
			left: 50%;
			top: -4px;
			transform: translate(-50%, -100%);

			font-style: italic;
			font-weight: 600;
			font-size: 0.7rem;
			line-height: 1;
			white-space: nowrap;
		}

		&.end {
			color: var(--to-c-text, var(--to-c, #f0da8c));
			background: var(--to-c, #f0da8c);

			&::after {
				content: var(--to-p, '');
			}
		}
	}

	.sankey-fade {
		background: linear-gradient(90deg, var(--from-c, #f0da8c), var(--to-c, #f0da8c));
		width: 288px;
		opacity: 0.6;
		margin: 0 -16px;
		clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
	}

	.sankey-gap {
		width: 624px;
	}

	.sankey-people,
	:global(.sankey-people) {
		margin: 8px 0;
		opacity: 0;
	}

	.sankey-notop {
		margin-top: 0;
	}

	.sankey-block {
		opacity: 0;
	}

	.sankey-overlap {
		margin-top: -24px;
	}

	.empty-people {
		width: 48px;
	}

	.sankey-connector {
		position: absolute;
		bottom: 0;
		clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
	}
</style>
