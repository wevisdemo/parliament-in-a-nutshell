<script lang="ts">
	import { inView, timeline } from 'motion';
	import { onMount } from 'svelte';

	import RP from 'components/RepPortrait.svelte';

	let el_sankey: any;
	let el_sankey2: any;
	let el_sankey3: any;

	let sankey_inview = false;
	onMount(() => {
		inView(el_sankey, () => {
			sankey_inview = true;
		});

		inView(
			el_sankey,
			() => {
				const el_c = el_sankey.children;
				const sequence: TimelineDefinition = [
					[el_c[0], { opacity: [0, 1] }, { duration: 0.5 }],
					[el_c[1], { opacity: [0, 1] }, { duration: 0.5, at: '<' }],
					[el_c[2], { opacity: [0, 1] }, { duration: 0.5, at: '<' }],
					[el_c[3], { opacity: [0, 1] }, { duration: 0.5, at: '<' }],
					[el_c[4], { opacity: [0, 1] }, { duration: 0.5, at: '<' }],
					[el_c[5], { opacity: [0, 1] }, { duration: 0.5, at: '-0.25' }],
					[
						el_c[6],
						{
							clipPath: [
								'polygon(0 0, 0 0, 0 100%, 0 100%)',
								'polygon(0 0, 101% 0, 101% 100%, 0 100%)'
							]
						},
						{ duration: 1, at: '-0.25' }
					],
					[el_c[7], { opacity: [0, 1] }, { duration: 0.5, at: '-0.1' }],
					[el_c[8], { opacity: [0, 1] }, { duration: 0.5, at: '-0.25' }],
					[el_c[9], { opacity: [0, 1] }, { duration: 0.5, at: '<' }],
					[el_c[10], { opacity: [0, 1] }, { duration: 0.5, at: '<' }],
					[el_c[11], { opacity: [0, 1] }, { duration: 0.5, at: '<' }],
					[el_c[12], { opacity: [0, 1] }, { duration: 0.5, at: '<' }]
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
					[el_c1[1], { opacity: [0, 1] }, { duration: 0.5 }],
					[el_c1[2], { opacity: [0, 1] }, { duration: 0.5, at: '<' }],
					[el_c1[3], { opacity: [0, 1] }, { duration: 0.5, at: '<' }],
					[el_c1[5], { opacity: [0, 1] }, { duration: 0.5, at: '-0.25' }],
					[
						el_c2[6].children[0],
						{
							clipPath: [
								'polygon(0 0, 0 0, 0 100%, 0 100%)',
								'polygon(0 0, 101% 0, 101% 100%, 0 100%)'
							]
						},
						{ duration: 1, at: '-0.25' }
					],
					[el_c2[7], { opacity: [0, 1] }, { duration: 0.5, at: '-0.1' }],
					[el_c2[8], { opacity: [0, 1] }, { duration: 0.5, at: '-0.25' }],
					[el_c2[9], { opacity: [0, 1] }, { duration: 0.5, at: '<' }],
					[el_c2[10], { opacity: [0, 1] }, { duration: 0.5, at: '<' }]
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
		src="/parliament-in-a-nutshell/sankey2.svg"
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
	bind:this={el_sankey}
	class="row sankey"
	style="--from-c:#0b3757;--from-p:'พรรคพลังประชารัฐ';--to-c:#f0da8c;--to-p:'พรรคเศรษฐกิจไทย';--to-c-text:#cbb979"
>
	<div class="row vert sankey-people">
		<RP src="rp/pt14-ธรรมนัส.png" color="#0b3757" name="ธรรมนัส พรหมเผ่า" size="48" />
		<RP src="rp/pt14-เกษม.png" color="#0b3757" name="เกษม ศุภรานนท์" size="48" />
		<RP src="rp/pt14-ไผ่.png" color="#0b3757" name="ไผ่ ลิกค์" size="48" />
	</div>
	<div class="row vert sankey-people">
		<RP src="rp/pt14-สะถิระ.png" color="#0b3757" name="สะถิระ เผือกประพันธุ์" size="48" />
		<RP src="rp/pt14-บุญสิงห์.png" color="#0b3757" name="บุญสิงห์ วรินทร์รักษ์" size="48" />
		<RP src="rp/pt14-จีรเดช.png" color="#0b3757" name="จีรเดช ศรีวิราช" size="48" />
		<RP src="rp/pt14-พรชัย.png" color="#0b3757" name="พรชัย อินทร์สุข" size="48" />
	</div>
	<div class="row vert sankey-people">
		<RP src="rp/pt14-ปัญญา.png" color="#0b3757" name="ปัญญา จีนาคำ" size="48" />
		<RP src="rp/pt14-ธนะสิทธิ์.png" color="#0b3757" name="ธนะสิทธิ์ โควสุรัตน์" size="48" />
		<RP src="rp/pt14-วัฒนา.png" color="#0b3757" name="วัฒนา สิทธิวัง" size="48" />
		<RP src="rp/pt14-ยงยุทธ.png" color="#0b3757" name="ยงยุทธ เทพจำนงค์" size="48" />
	</div>
	<div class="row vert sankey-people">
		<RP src="rp/pt14-จอมขวัญ.png" color="#0b3757" name="จอมขวัญ กลับบ้านเกาะ" size="48" />
		<RP src="rp/pt14-ทัศนาพร.png" color="#0b3757" name="ทัศนาพร เกษเมธีการุณ" size="48" />
		<RP src="rp/pt14-ธนัสถ์.png" color="#0b3757" name="ธนัสถ์ ทวีเกื้อกูลกิจ" size="48" />
		<RP src="rp/pt14-ภาคภูมิ.png" color="#0b3757" name="ภาคภูมิ บูลย์ประมุข" size="48" />
	</div>
	<div class="row vert sankey-people">
		<RP src="rp/pt14-ยุทธนา.png" color="#0b3757" name="ยุทธนา โพธสุธน" size="48" />
		<RP src="rp/pt14-สมศักดิ์.png" color="#0b3757" name="สมศักดิ์ คุณเงิน" size="48" />
		<RP src="rp/pt14-ณัฏฐพล.png" color="#0b3757" name="ณัฏฐพล จรัสรพีพงษ์" size="48" />
	</div>
	<div class="sankey-block start" />
	<div class="sankey-fade" />
	<div class="sankey-block end" />
	<div class="row vert sankey-people">
		<RP src="rp/pt14-ธรรมนัส.png" color="#f0da8c" side="free" name="ธรรมนัส พรหมเผ่า" size="48" />
		<RP src="rp/pt14-เกษม.png" color="#f0da8c" side="free" name="เกษม ศุภรานนท์" size="48" />
		<RP src="rp/pt14-ไผ่.png" color="#f0da8c" side="free" name="ไผ่ ลิกค์" size="48" />
	</div>
	<div class="row vert sankey-people">
		<RP
			src="rp/pt14-สะถิระ.png"
			color="#f0da8c"
			side="free"
			name="สะถิระ เผือกประพันธุ์"
			size="48"
		/>
		<RP
			src="rp/pt14-บุญสิงห์.png"
			color="#f0da8c"
			side="free"
			name="บุญสิงห์ วรินทร์รักษ์"
			size="48"
		/>
		<RP src="rp/pt14-จีรเดช.png" color="#f0da8c" side="free" name="จีรเดช ศรีวิราช" size="48" />
		<RP src="rp/pt14-พรชัย.png" color="#f0da8c" side="free" name="พรชัย อินทร์สุข" size="48" />
	</div>
	<div class="row vert sankey-people">
		<RP src="rp/pt14-ปัญญา.png" color="#f0da8c" side="free" name="ปัญญา จีนาคำ" size="48" />
		<RP
			src="rp/pt14-ธนะสิทธิ์.png"
			color="#f0da8c"
			side="free"
			name="ธนะสิทธิ์ โควสุรัตน์"
			size="48"
		/>
		<RP src="rp/pt14-วัฒนา.png" color="#f0da8c" side="free" name="วัฒนา สิทธิวัง" size="48" />
		<RP src="rp/pt14-ยงยุทธ.png" color="#f0da8c" side="free" name="ยงยุทธ เทพจำนงค์" size="48" />
	</div>
	<div class="row vert sankey-people">
		<RP
			src="rp/pt14-จอมขวัญ.png"
			color="#f0da8c"
			side="free"
			name="จอมขวัญ กลับบ้านเกาะ"
			size="48"
		/>
		<RP
			src="rp/pt14-ทัศนาพร.png"
			color="#f0da8c"
			side="free"
			name="ทัศนาพร เกษเมธีการุณ"
			size="48"
		/>
		<RP
			src="rp/pt14-ธนัสถ์.png"
			color="#f0da8c"
			side="free"
			name="ธนัสถ์ ทวีเกื้อกูลกิจ"
			size="48"
		/>
		<RP
			src="rp/pt14-ภาคภูมิ.png"
			color="#f0da8c"
			side="free"
			name="ภาคภูมิ บูลย์ประมุข"
			size="48"
		/>
	</div>
	<div class="row vert sankey-people">
		<RP src="rp/pt14-ยุทธนา.png" color="#f0da8c" side="free" name="ยุทธนา โพธสุธน" size="48" />
		<RP src="rp/pt14-สมศักดิ์.png" color="#f0da8c" side="free" name="สมศักดิ์ คุณเงิน" size="48" />
		<RP src="rp/pt14-ณัฏฐพล.png" color="#f0da8c" side="free" name="ณัฏฐพล จรัสรพีพงษ์" size="48" />
	</div>
</div>
<div bind:this={el_sankey2} class="row sankey sankey-notop" style="--from-c:#0b3757">
	<div class="sankey-people-gap" />
	<RP
		class="sankey-people"
		src="rp/pt14s-วัฒนา.png"
		color="#0b3757"
		name="วัฒนา ช่างเหลา"
		size="48"
	/>
	<RP
		class="sankey-people"
		src="rp/pt14s-สมศักดิ์.png"
		color="#0b3757"
		name="สมศักดิ์ พันธ์เกษม"
		size="48"
	/>
	<RP
		class="sankey-people"
		src="rp/pt14-เอกราช.png"
		color="#0b3757"
		name="เอกราช ช่างเหลา"
		size="48"
	/>
	<div class="sankey-people-gap" />
	<div class="sankey-block start" />
	<div class="sankey-connector-container" />
	<div class="sankey-block-gap" />
	<div class="sankey-people-gap" />
	<div class="sankey-people-gap" />
	<div class="sankey-people-gap" />
	<div class="sankey-people-gap" />
	<div class="sankey-people-gap" />
</div>
<div
	bind:this={el_sankey3}
	class="row sankey sankey-overlap"
	style="--to-c:#065CAB;--to-p:'พรรคภูมิใจไทย'"
>
	<div class="sankey-people-gap" />
	<div class="sankey-people-gap" />
	<div class="sankey-people-gap" />
	<div class="sankey-people-gap" />
	<div class="sankey-people-gap" />
	<div class="sankey-block-gap" />
	<div class="sankey-connector-container">
		<img
			class="sankey-connector"
			src="/parliament-in-a-nutshell/sankey2.svg"
			alt=""
			decoding="async"
			loading="lazy"
			height="104"
		/>
	</div>
	<div class="sankey-block end" />
	<RP
		class="sankey-people"
		src="rp/pt14s-วัฒนา.png"
		color="#065CAB"
		name="วัฒนา ช่างเหลา"
		size="48"
	/>
	<RP
		class="sankey-people"
		src="rp/pt14s-สมศักดิ์.png"
		color="#065CAB"
		name="สมศักดิ์ พันธ์เกษม"
		size="48"
	/>
	<RP
		class="sankey-people"
		src="rp/pt14-เอกราช.png"
		color="#065CAB"
		name="เอกราช ช่างเหลา"
		size="48"
	/>
	<div class="sankey-people-gap" />
	<div class="sankey-people-gap" />
</div>

<style lang="scss">
	// `.sankey-people` is in `_global.scss`

	.sankey {
		margin-top: 40px;
		padding: 0 16px;
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
			font-weight: 700;
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

	.sankey-block {
		opacity: 0;
	}

	.sankey-overlap {
		margin-top: -24px;
	}

	.sankey-connector {
		position: absolute;
		bottom: 0;
		width: 100%;
		clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
	}
</style>
