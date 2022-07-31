<script>
	import 'styles/master.scss';
	import S2 from 'components/s2/section.svelte';
</script>

<div class="h100">
	<h1>คุณรู้ไหม? ตอนนี้รัฐสภามี ส.ส. กี่คน</h1>
	<button on:click={() => window.scrollTo({ behavior: 'smooth', top: window.innerHeight })}
		>Test</button
	>
</div>
<S2 />
<div class="h100">
	<h1>ตัวเลขที่ผันแปรเหล่านี้ กำลังบอกอะไรเรา ?</h1>
</div>
