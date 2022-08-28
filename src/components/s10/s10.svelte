<script>
	import Caret from 'components/Caret.svelte';
</script>

<div class="s10 black c tc">
	<p>
		แต่เกมนี้ซับซ้อนกว่าที่คาด<br />
		<strong>เมื่อเก้าอี้ มีมากกว่าหนึ่ง</strong><br />
		<br />
		แม้แต่ในพรรคเล็ก <br />
		ก็ยังมีบางคราที่ลงมติ <strong>ตรงข้าม</strong> กับขั้วข้างของตนเอง<br />
		<br />
		นับประสาอะไรกับพรรคที่มีสมาชิกมากหน้าหลายตา<br />
		หลากความเห็น หลากจุดยืน ...
	</p>
	<Caret color="#fff" />
</div>

<style lang="scss">
	.s10 {
		padding: 100px 0 150px;
		min-height: 100vh;
	}

	p {
		line-height: 1.5;
		font-size: 2rem;

		> strong {
			font-size: 1.25em;
		}
	}
</style>
