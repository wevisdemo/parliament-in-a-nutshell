<script>
	import Caret from 'components/Caret.svelte';
</script>

<div class="s8-bridge c tc">
	<p>
		เรียกได้ว่าฝ่ายรัฐบาลสามารถรักษาเก้าอี้ไว้ได้อย่างเหนียวแน่น<br />
		<br />
		แต่ไม่เพียงเท่านั้น พวกเขายังได้เปรียบไปอีกขั้น<br />
		ด้วยการได้ <strong>เก้าอี้เสริม</strong> มาอย่างน่าอัศจรรย์ใจ
	</p>
	<Caret />
</div>

<style lang="scss">
	.s8-bridge {
		padding: 100px 0 150px;
	}

	p {
		line-height: 1.5;
		font-size: 2rem;

		> strong {
			font-size: 1.25em;
		}
	}
</style>
