<script lang="ts">
	import { inView } from 'motion';
	import { onMount } from 'svelte';

	let el_logo_container: any;
	let is_logo_inview = false;
	onMount(() => {
		inView(
			el_logo_container,
			() => {
				is_logo_inview = true;
			},
			{ amount: 0.5 }
		);
	});
</script>

<div class="h100 s5-container c" class:in-view={is_logo_inview} bind:this={el_logo_container}>
	<img
		class="logo-decor"
		src="/parliament-in-a-nutshell/title_decor.svg"
		alt=""
		decoding="async"
		loading="lazy"
	/>
	<h1 class="mtb0">
		<img
			class="logo"
			src="/parliament-in-a-nutshell/title.png"
			alt="สรุปสั้นสภาไทย (Thai Parliament in a Coconutshell)"
			decoding="async"
			loading="lazy"
		/>
	</h1>
</div>

<style lang="scss">
	.s5-container {
		background: #000;

		> h1 > .logo {
			opacity: 0.1;

			height: 65vh;
			width: 65vw;
			object-fit: contain;
		}

		> .logo-decor {
			opacity: 0.3;

			height: 65vh; /* O */
			width: 65vw; /* O */
			object-fit: contain;

			position: absolute;
			top: 15vh; /* O */
		}

		&.in-view {
			> h1 > .logo {
				opacity: 1;
				animation: flickering 0.75s linear forwards;
			}
			> .logo-decor {
				opacity: 1;
				transition: opacity 0.75s linear;
				transition-delay: 0.375s;
			}
		}
	}
</style>
