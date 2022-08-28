<script lang="ts">
	import { onMount } from 'svelte';
	import { inView } from 'motion';

	let el_logo_container: any;
	let is_logo_inview = false;
	onMount(() => {
		inView(
			el_logo_container,
			() => {
				is_logo_inview = true;
			},
			{ amount: 0.3 }
		);
	});
</script>

<div class="h100 s5-container c" class:in-view={is_logo_inview} bind:this={el_logo_container}>
	<img
		class="logo-decor"
		src="/shaking-parliament/title_decor.svg"
		alt=""
		decoding="async"
		loading="lazy"
	/>
	<img class="logo" src="/shaking-parliament/title.png" alt="" decoding="async" loading="lazy" />
</div>

<style lang="scss">
	.s5-container {
		background: #000;

		> .logo {
			opacity: 0.1;

			height: 60vh;
			width: 60vw;
			object-fit: contain;
		}

		> .logo-decor {
			opacity: 0.3;

			height: 70vh; /* O */
			width: 70vw; /* O */
			object-fit: contain;

			position: absolute;
			top: 15vh; /* O */
		}

		&.in-view {
			> .logo {
				opacity: 1;
				animation: flickering 1s linear forwards;
			}
			> .logo-decor {
				opacity: 1;
				transition: opacity 1s linear;
				transition-delay: 0.5s;
			}
		}
	}
</style>
