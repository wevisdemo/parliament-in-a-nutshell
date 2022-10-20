<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { sineIn, sineOut } from 'svelte/easing';

	let screen_width = 0;
	let screen_height = 0;

	const THRESHOLD_WIDTH = 1280;
	const THRESHOLD_HEIGHT = 720;

	let show_notice = false;
	onMount(() => {
		screen_width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
		screen_height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
		show_notice = screen_width < THRESHOLD_WIDTH || screen_height < THRESHOLD_HEIGHT;
	});

	const hide = () => (show_notice = false);
</script>

{#if show_notice}
	<div
		class="small-screen-notice"
		in:fly={{ y: 100, easing: sineOut, duration: 300 }}
		out:fly={{ y: 100, easing: sineIn, duration: 300 }}
		on:click={hide}
	>
		ขนาดจอภาพของคุณคือ {screen_width}&times;{screen_height} ซึ่ง<span class="nw">อาจทำให้</span
		><span class="nw">การแสดงผล</span>ต่างๆ <span class="nw">ไม่ถูกต้อง</span> หากเป็นไปได้
		<span class="nw">กรุณาเปิด</span><span class="nw">บนคอมพิวเตอร์</span>ที่มี<span class="nw"
			>ขนาดจอภาพ</span
		>ตั้งแต่ 1280&times;720
		<span class="nw">ขึ้นไป</span><br />
		<span class="close">แตะเพื่อปิด</span>
	</div>
{/if}

<style lang="scss">
	.small-screen-notice {
		position: fixed;
		bottom: 16px;
		left: 16px;
		max-width: calc(100vw - 32px);
		width: 480px;
		padding: 16px;
		z-index: 99;

		background: #000c;
		box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
			0 1px 5px 0 rgb(0 0 0 / 20%);

		color: #fff;
		line-height: 1.5;
		user-select: none;

		cursor: pointer;

		border-radius: 8px;

		> .close {
			float: right;
		}
	}
</style>
