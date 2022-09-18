<script lang="ts">
	const SITE_LINK = 'https://wevisdemo.github.io/shaking-parliament/';

	let copy_class = '';
	const copyLinkToClipboard = () => {
		navigator.clipboard
			.writeText(SITE_LINK)
			.then(() => {
				copy_class = 'success';
			})
			.catch(() => {
				copy_class = 'fail';
			})
			.finally(() => {
				setTimeout(() => (copy_class = ''), 100);
			});
	};
</script>

<div class="s-16 container c tc">
	<h2 class="header mtb0">
		ร่วมจับตาดูความเคลื่อนไหวในสภา<span class="nw">อย่างต่อเนื่อง</span><br />
		<small class="subheader">ก่อนเข้าสู่การเลือกตั้งครั้งถัดไปที่จะเกิดขึ้นในปี 2566</small>
	</h2>
	<div class="share-text">แชร์เพื่อบอกเล่าเรื่องราวกับเพื่อนของคุณ</div>
	<div class="social-container">
		<div class="row" style="--gap:32px">
			<div class="col">
				<a
					class="social-share"
					href="https://www.facebook.com/sharer/sharer.php?u={SITE_LINK}"
					target="_blank"
					rel="nofollow noopener noreferrer"
					title="Share on Facebook"
				>
					<svg
						role="img"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						stroke="none"
						aria-label="Share on Facebook"
					>
						<path
							d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
						/>
					</svg>
				</a>
			</div>
			<div class="col">
				<a
					class="social-share"
					href="https://twitter.com/intent/tweet?url={SITE_LINK}"
					target="_blank"
					rel="nofollow noopener noreferrer"
					title="Share on Twitter"
				>
					<svg
						role="img"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						stroke="none"
						aria-label="Share on Twitter"
					>
						<path
							d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
						/>
					</svg>
				</a>
			</div>
			<div class="col">
				<button
					type="button"
					class={`social-share copy ${copy_class}`}
					aria-label="Copy link to clipboard"
					on:click={copyLinkToClipboard}
				>
					<svg
						role="img"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						aria-label="Copy link to clipboard"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
						/>
					</svg>
				</button>
			</div>
		</div>
		<a class="home-btn" href="https://wevis.info/" rel="nofollow noopener noreferrer"
			>กลับสู่หน้าหลัก</a
		>
	</div>
</div>
<div class="they-work-container c tc">
	<div class="decor">
		<img
			class="d1"
			src="/shaking-parliament/star_01.svg"
			alt=""
			decoding="async"
			loading="lazy"
			width="326"
			height="342"
		/>
		<img
			class="d2"
			src="/shaking-parliament/circles_02.svg"
			alt=""
			decoding="async"
			loading="lazy"
			width="443"
			height="443"
		/>
		<img
			class="d3"
			src="/shaking-parliament/circles_02.svg"
			alt=""
			decoding="async"
			loading="lazy"
			width="443"
			height="443"
		/>
	</div>
	<h2 class="header" style="line-height:1.5">ติดตามการลงมติในสภาเพิ่มเติมได้ที่</h2>
	<a
		class="card"
		href="https://theyworkforus.wevis.info/"
		target="_blank"
		rel="nofollow noopener noreferrer"
	>
		<img
			src="/shaking-parliament/theywork.png"
			alt=""
			aria-labelledby="theywork-content"
			decoding="async"
			loading="lazy"
		/>
		<div class="card-body" id="theywork-content">
			<div class="card-header">They Work For Us รู้จักและติดตาม 'ผู้แทน' ในสภาของเรา</div>
			<p>ใครเป็นใคร เคยทำอะไรมาบ้าง ตอนนี้อยู่ตำแหน่งไหน และยกมือสนับสนุนอะไรในสภา</p>
		</div>
	</a>
</div>

<style lang="scss">
	.header,
	.subheader {
		font-weight: 700;
		font-size: 3rem;
	}

	.subheader {
		font-size: 2rem;
	}

	.social-share {
		border: 2px #6a6a6a solid;
		border-radius: 999px;

		color: #6a6a6a;
		cursor: pointer;

		display: flex;
		justify-content: center;
		align-items: center;

		position: relative;

		width: 80px;
		height: 80px;

		outline: none;
		transition-property: color, box-shadow;
		transition-duration: 0.3s;

		> svg {
			height: 44px;
			width: auto;
			position: relative;
		}

		&::before {
			content: '';

			background: #6a6a6a;
			border: 2px #6a6a6a solid;
			border-radius: 999px;

			display: block;
			position: absolute;
			inset: 0;

			transform: scale(0);
			transition: transform 0.3s;
		}

		&:is(:hover, :focus) {
			color: #fff;

			&::before {
				transform: scale(1);
			}
		}

		&:focus {
			box-shadow: 0 0 0 8px #6a6a6a80;
		}
	}

	.social-share.copy {
		--cpy-c: #6a6a6a;
		border: 2px var(--cpy-c) solid;
		transition: color 0.3s, border 0.3s;

		&::before {
			background: var(--cpy-c);
			border: 2px var(--cpy-c) solid;
			transition: transform 0.3s, background 0.3s, border 0.3s;
		}

		&.success,
		&.fail {
			--cpy-c: #92da1f;
			transition: color 0.3s;

			&::before {
				transition: transform 0.3s;
			}
		}

		&.fail {
			--cpy-c: #dd5a5a;
		}

		&.success:focus {
			box-shadow: 0 0 0 8px #92da1f80;
		}

		&.fail:focus {
			box-shadow: 0 0 0 8px #dd5a5a80;
		}
	}

	.home-btn {
		font-weight: 700;
		font-size: 1.5rem;
		text-align: center;
		color: #fff;
		text-decoration: none;

		background: #000;
		border-radius: 20px;
		padding: 20px 48px;
		margin-top: 48px;

		letter-spacing: 0.01em;
		cursor: pointer;
		display: inline-block;

		outline: none;
		transition-property: box-shadow;
		transition-duration: 0.3s;

		&:is(:hover, :focus) {
			background: #333;
		}

		&:focus {
			box-shadow: 0 0 0 8px #3338;
		}
	}

	.share-text {
		font-size: 1.5rem;
		margin: 48px 0 32px;
	}

	.they-work-container {
		padding: 250px 0 200px;
		overflow: hidden;

		> .header {
			margin-bottom: 64px;
		}
	}

	.card {
		display: flex;
		flex-direction: column;

		max-width: 640px;
		width: 90%;

		overflow: hidden;

		color: #000;
		text-decoration: none;

		border-radius: 8px;

		box-shadow: 0 0 0 0 #f3b8d080, 15px 17px 18px rgba(0, 0, 0, 0.29);
		transition-property: box-shadow;
		transition-duration: 0.3s;
		outline: none;

		&:hover {
			box-shadow: 0 0 0 0 #f3b8d080, 30px 34px 72px rgba(0, 0, 0, 0.29);
		}

		&:focus {
			box-shadow: 0 0 0 8px #f3b8d080, 15px 17px 18px rgba(0, 0, 0, 0.29);
		}

		img {
			width: 100%;
			position: relative;
		}

		.card-body {
			background: #fff;
			padding: 16px;
			text-align: left;

			> .card-header {
				font-size: 1.45rem;
				font-weight: 700;
				margin-bottom: 8px;
			}

			p {
				font-size: 1rem;
				line-height: 1.5;
			}
		}
	}

	.decor {
		position: absolute;
		inset: 0;

		> img {
			position: absolute;
			transform: translate(var(--x), -50%);
		}

		.d1 {
			--x: -30%;
			left: 0;
			top: 55%;
		}

		.d2 {
			--x: 50%;
			right: 0;
			top: 45%;
		}

		.d3 {
			--x: 50%;
			right: 0;
			top: 65%;
		}
	}
</style>
