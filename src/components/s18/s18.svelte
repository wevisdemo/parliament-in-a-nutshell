<script lang="ts">
	import WvFooter from '@wevisdemo/ui/components/footer.svelte';
</script>

<footer class="black c tc ref-container">
	<h2 class="T1 title">แหล่งที่มาของข้อมูล</h2>
	<div class="pill dark">แหล่งที่มาชุดข้อมูลการลงมติ</div>
	<div style="width:95%">
		<a
			class="link"
			href="https://msbis.parliament.go.th/ewtadmin/ewt/parliament_report/main.php"
			target="_blank"
			rel="nofollow noopener noreferrer"
			title="ระบบฐานข้อมูลรายงานและบันทึกการประชุม สำนักเลขาธิการสมาชิกสภาผู้แทนราษฎร"
		>
			ระบบฐานข้อมูลรายงานและบันทึกการประชุม สำนักเลขาธิการสมาชิกสภาผู้แทนราษฎร
		</a>
	</div>
	<div class="pill dark">แหล่งที่มาข่าว</div>
	<div style="width:95%">
		<a
			class="link"
			href="https://ilaw.or.th/node/6069"
			target="_blank"
			rel="nofollow noopener noreferrer"
			title="เปิดเส้นทางพรรคเล็ก จาก ส.ส. ปัดเศษ สู่ผู้กำหนดชะตากรรมรัฐบาล (ilaw)"
		>
			เปิดเส้นทางพรรคเล็ก จาก ส.ส. ปัดเศษ สู่ผู้กำหนดชะตากรรมรัฐบาล (ilaw)
		</a>
	</div>
	<div style="width:95%">
		<a
			class="link"
			href="https://www.bbc.com/thai/thailand-60059393"
			target="_blank"
			rel="nofollow noopener noreferrer"
			title={'ธรรมนัส พรหมเผ่า : พลังประชารัฐมีมติขับ ส.ส. 21 คน "ผิดจรรยาบรรณร้ายแรง" (BBC News)'}
		>
			ธรรมนัส พรหมเผ่า : พลังประชารัฐมีมติขับ ส.ส. 21 คน "ผิดจรรยาบรรณร้ายแรง" (BBC News)
		</a>
	</div>
	<div style="width:95%">
		<a
			class="link"
			href="https://www.thairath.co.th/news/politic/2300268"
			target="_blank"
			rel="nofollow noopener noreferrer"
			title={'"ธรรมนัส" นำทีม 18 ส.ส.พปชร.แจ้งย้ายเข้า "เศรษฐกิจไทย" ไร้ชื่อ 3 ส.ส. (ไทยรัฐออนไลน์)'}
		>
			"ธรรมนัส" นำทีม 18 ส.ส.พปชร.แจ้งย้ายเข้า "เศรษฐกิจไทย" ไร้ชื่อ 3 ส.ส. (ไทยรัฐออนไลน์)
		</a>
	</div>
	<div class="ref_date">— สืบค้นเมื่อ กรกฎาคม 2565 —</div>
	<div style="--h:192px" />
	<h2 class="T1">WeVis Interns</h2>
	<div class="row intern-container" style="--gap:80px">
		<div class="col c tc intern">
			<img
				class="intern-portrait"
				src="/parliament-in-a-nutshell/i1.jpg"
				alt="ทินกร หวานแท้ — Intern Project Coordinator"
				decoding="async"
				loading="lazy"
				width="250"
				height="250"
			/>
			<div class="intern-name T1">ทินกร หวานแท้</div>
			<div class="intern-sep" />
			<div class="intern-education">
				รัฐศาสตร์<br />
				ภาควิชาการปกครอง
			</div>
			<div class="intern-role">Intern Project Coordinator</div>
		</div>
		<div class="col c tc intern">
			<img
				class="intern-portrait"
				src="/parliament-in-a-nutshell/i2.jpg"
				alt="ณภัทร แต้เถา — Intern Digital Designer"
				decoding="async"
				loading="lazy"
				width="250"
				height="250"
			/>
			<div class="intern-name T1">ณภัทร แต้เถา</div>
			<div class="intern-sep" />
			<div class="intern-education">
				รัฐศาสตร์<br />
				ภาควิชาความสัมพันธ์ระหว่างประเทศ
			</div>
			<div class="intern-role">Intern Digital Designer</div>
		</div>
		<div class="col c tc intern">
			<img
				class="intern-portrait"
				src="/parliament-in-a-nutshell/i3.jpg"
				alt="สุเทพ จันทร์ชูผล — Intern Web Developer"
				decoding="async"
				loading="lazy"
				width="250"
				height="250"
			/>
			<div class="intern-name T1">สุเทพ จันทร์ชูผล</div>
			<div class="intern-sep" />
			<div class="intern-education">
				วิศวกรรมศาสตร์<br />
				ภาควิชาวิศวกรรมคอมพิวเตอร์
			</div>
			<div class="intern-role">Intern Web Developer</div>
		</div>
	</div>
</footer>
<WvFooter dark />

<style lang="scss">
	.ref-container {
		padding: 192px 0 144px;
		z-index: 3;
		box-shadow: 0 24px 38px 3px rgb(0 0 0 / 14%), 0 9px 46px 8px rgb(0 0 0 / 12%),
			0 11px 15px -7px rgb(0 0 0 / 20%);
	}

	.title {
		margin: 0.67em 0;
	}

	.T1 {
		font-size: 3.5rem;
	}

	.pill {
		margin: 64px 0 32px;
	}

	.link {
		font-style: italic;
		font-weight: 500;
		line-height: 2;
		font-size: 1.25rem;

		color: #fff;
		text-decoration: none;

		background: linear-gradient(#fff, #fff) no-repeat right bottom / 0 2px;
		transition: background-size 0.3s;
		outline: none;

		&:is(:hover, :focus) {
			background-size: 100% 2px;
			background-position-x: left;
		}
	}

	.ref_date {
		font-style: italic;
		font-weight: 500;
		line-height: 2;
		color: #b5b5b5;
		margin-top: 16px;
	}

	.intern {
		line-height: 1.5;
		font-size: 1.5rem;
	}

	.intern-portrait {
		border-radius: 999px;
		margin: 80px 0 40px;

		width: min(20vw, 250px);
		height: min(20vw, 250px);
	}

	.intern-name.T1 {
		font-size: 2rem;
	}

	.intern-sep {
		border-bottom: 2px #fff dashed;
		width: 48px;
		margin: 32px 0 24px;
	}

	.intern-education {
		white-space: nowrap;
	}

	.intern-role {
		color: #787878;
		font-weight: 700;
		margin-top: 12px;
	}

	@media screen and (max-width: 1240px) {
		.intern-container {
			flex-direction: column;
		}
	}
</style>
