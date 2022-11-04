<script lang="ts">
	import Principles from '@compositions/principles.svelte';
	import Posts from '@compositions/posts.svelte';
	import Link from '@components/link.svelte';
	import Title from '@components/title.svelte';
</script>

<svelte:head>
	<title>Felipe Ornelis - Software Developer</title>
</svelte:head>

<div class="flex flex-col gap-[134px]">
	<section class="h-[504px] w-full flex flex-col gap-20 items-center">
		<h1
			class="text-white text-[113px] font-bold font-poppins tracking-tighter leading-[113.56px] text-center select-none"
		>
			Where <span class="bg-clip-text text-transparent fo-gradient-blue">ideas</span><br />are
			alive.
		</h1>
		<div class="text-center text-[22px] leading-[32px] text-[#627486]">
			<p>Trying to make the world a better place through code.</p>
			<p>Sharing knowledge about Web Development and Software Quality.</p>
		</div>
		<button
			class="rounded-[45px] flex items-center justify-center px-5 py-3 bg-[#2884FF] gap-[15px] text-white text-[17px] font-semibold select-none"
		>
			<svg
				width="30"
				height="30"
				viewBox="0 0 30 30"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0V0ZM8.4375 14.0625C8.18886 14.0625 7.9504 14.1613 7.77459 14.3371C7.59877 14.5129 7.5 14.7514 7.5 15C7.5 15.2486 7.59877 15.4871 7.77459 15.6629C7.9504 15.8387 8.18886 15.9375 8.4375 15.9375H19.2994L15.2738 19.9613C15.1866 20.0484 15.1174 20.1519 15.0703 20.2658C15.0231 20.3797 14.9988 20.5017 14.9988 20.625C14.9988 20.7483 15.0231 20.8703 15.0703 20.9842C15.1174 21.0981 15.1866 21.2016 15.2738 21.2887C15.3609 21.3759 15.4644 21.4451 15.5783 21.4922C15.6922 21.5394 15.8142 21.5637 15.9375 21.5637C16.0608 21.5637 16.1828 21.5394 16.2967 21.4922C16.4106 21.4451 16.5141 21.3759 16.6012 21.2887L22.2262 15.6637C22.3136 15.5767 22.3828 15.4732 22.4301 15.3593C22.4773 15.2454 22.5017 15.1233 22.5017 15C22.5017 14.8767 22.4773 14.7546 22.4301 14.6407C22.3828 14.5268 22.3136 14.4233 22.2262 14.3363L16.6012 8.71125C16.5141 8.62408 16.4106 8.55494 16.2967 8.50777C16.1828 8.4606 16.0608 8.43632 15.9375 8.43632C15.8142 8.43632 15.6922 8.4606 15.5783 8.50777C15.4644 8.55494 15.3609 8.62408 15.2738 8.71125C15.1866 8.79842 15.1174 8.90189 15.0703 9.01578C15.0231 9.12967 14.9988 9.25173 14.9988 9.375C14.9988 9.49827 15.0231 9.62033 15.0703 9.73422C15.1174 9.84811 15.1866 9.95158 15.2738 10.0387L19.2994 14.0625H8.4375Z"
					fill="white"
				/>
			</svg>

			Learn more
		</button>
	</section>
	<section class="w-[1200px] mx-auto flex justify-between items-center">
		<Principles />
	</section>
	<section class="w-[1200px] mx-auto">
		<Title title="What makes the development better" />

		<p>Aloha</p>
	</section>
	<section class="w-[1200px] mx-auto">
		<Title
			title="The latest publications"
			description="I have written some nice stuff. Check them out below."
			to="/articles"
		/>

		<div class="w-full flex items-center justify-between mt-[68px]">
			<Posts />
		</div>
	</section>
	<section class="w-[1200px] mx-auto">
		<Title
			title="From the Labs"
			description="Try out one these latest creations of mine."
			to="/labs"
		/>

		<div class="w-full flex justify-between">
			{#each [0, 0] as item}
				<article
					class="w-[495px] h-[551px] bg-[#10151B] rounded-[14px] border border-light-gray flex flex-col justify-between overflow-hidden"
				>
					<div class="dfds relative">
						<img
							class="w-full h-full"
							src="https://files.tecnoblog.net/wp-content/uploads/2022/11/logotipo-linguagem-python-700x467.jpg"
							alt="A woman holding a Python's sticker"
						/>

						<div class="absolute w-full h-full z-10 top-0 bg-labs-preview" />
					</div>
					<div class="flex flex-col gap-6 text-center py-[26px] px-[44px] ">
						<h3 class="text-[22px] font-bold">Cryptrack</h3>
						<p class="text-[20px]">Lorem ipsum dolor sit amet, consectetur adiscing elit.</p>
						<p class="text-[20px]">
							<Link href="/labs" label="Learn more" />
						</p>
					</div>
				</article>
			{/each}
		</div>
	</section>
	<section class="w-[1200px] mx-auto">
		<Title title="Any question? Say 'Hello'" />

		<div class="w-full flex flex-col gap-8 items-center">
			<p class="text-[20px]">hey@felipeornelis.com</p>
			<p>or</p>
			<button
				href="#/"
				class="rounded-[45px] flex items-center justify-center px-5 py-3 bg-[#2884FF] gap-[15px] text-white text-[17px] font-semibold select-none shrink-0"
			>
				<svg
					width="30"
					height="30"
					viewBox="0 0 30 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0V0ZM8.4375 14.0625C8.18886 14.0625 7.9504 14.1613 7.77459 14.3371C7.59877 14.5129 7.5 14.7514 7.5 15C7.5 15.2486 7.59877 15.4871 7.77459 15.6629C7.9504 15.8387 8.18886 15.9375 8.4375 15.9375H19.2994L15.2738 19.9613C15.1866 20.0484 15.1174 20.1519 15.0703 20.2658C15.0231 20.3797 14.9988 20.5017 14.9988 20.625C14.9988 20.7483 15.0231 20.8703 15.0703 20.9842C15.1174 21.0981 15.1866 21.2016 15.2738 21.2887C15.3609 21.3759 15.4644 21.4451 15.5783 21.4922C15.6922 21.5394 15.8142 21.5637 15.9375 21.5637C16.0608 21.5637 16.1828 21.5394 16.2967 21.4922C16.4106 21.4451 16.5141 21.3759 16.6012 21.2887L22.2262 15.6637C22.3136 15.5767 22.3828 15.4732 22.4301 15.3593C22.4773 15.2454 22.5017 15.1233 22.5017 15C22.5017 14.8767 22.4773 14.7546 22.4301 14.6407C22.3828 14.5268 22.3136 14.4233 22.2262 14.3363L16.6012 8.71125C16.5141 8.62408 16.4106 8.55494 16.2967 8.50777C16.1828 8.4606 16.0608 8.43632 15.9375 8.43632C15.8142 8.43632 15.6922 8.4606 15.5783 8.50777C15.4644 8.55494 15.3609 8.62408 15.2738 8.71125C15.1866 8.79842 15.1174 8.90189 15.0703 9.01578C15.0231 9.12967 14.9988 9.25173 14.9988 9.375C14.9988 9.49827 15.0231 9.62033 15.0703 9.73422C15.1174 9.84811 15.1866 9.95158 15.2738 10.0387L19.2994 14.0625H8.4375Z"
						fill="white"
					/>
				</svg>

				Let's talk
			</button>
		</div>
	</section>
</div>
<footer
	class="w-full h-[62px] mt-[102px] bg-black border-t border-t-light-gray flex justify-between items-center px-5"
>
	<span>
		<a href="#!" class="text-white">FelipeOrnelis</a>
	</span>

	<span> Copyright &copy; 2022 Felipe Ornelis. All rights reserved. </span>

	<div>
		<ul class="flex items-center gap-6">
			<li>
				<a href="#!" class="text-white">
					<svg
						width="21"
						height="21"
						viewBox="0 0 21 21"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M7.8 16.4667C3.46666 17.7667 3.46666 14.3001 1.73333 13.8667M13.8667 19.0667V15.7127C13.8992 15.2995 13.8433 14.884 13.7029 14.494C13.5624 14.104 13.3405 13.7484 13.052 13.4507C15.7733 13.1474 18.6333 12.1161 18.6333 7.38406C18.6331 6.17404 18.1677 5.01043 17.3333 4.13406C17.7284 3.07543 17.7005 1.9053 17.2553 0.866727C17.2553 0.866727 16.2327 0.563393 13.8667 2.14939C11.8803 1.61104 9.78639 1.61104 7.8 2.14939C5.434 0.563393 4.41133 0.866727 4.41133 0.866727C3.96619 1.9053 3.93825 3.07543 4.33333 4.13406C3.49277 5.01693 3.02685 6.19106 3.03333 7.41006C3.03333 12.1074 5.89333 13.1387 8.61466 13.4767C8.32953 13.7714 8.10962 14.1227 7.96926 14.508C7.8289 14.8932 7.77123 15.3037 7.8 15.7127V19.0667"
							stroke="white"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</a>
			</li>
			<li>
				<a href="#!" class="text-white">
					<svg
						width="22"
						height="22"
						viewBox="0 0 22 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M14.4 7.3999C15.8322 7.3999 17.2057 7.96883 18.2184 8.98153C19.2311 9.99422 19.8 11.3677 19.8 12.7999V19.0999H16.2V12.7999C16.2 12.3225 16.0104 11.8647 15.6728 11.5271C15.3352 11.1895 14.8774 10.9999 14.4 10.9999C13.9226 10.9999 13.4648 11.1895 13.1272 11.5271C12.7896 11.8647 12.6 12.3225 12.6 12.7999V19.0999H9V12.7999C9 11.3677 9.56893 9.99422 10.5816 8.98153C11.5943 7.96883 12.9678 7.3999 14.4 7.3999V7.3999Z"
							stroke="white"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M5.4 8.30005H1.8V19.1H5.4V8.30005Z"
							stroke="white"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M3.6 5.6C4.59412 5.6 5.4 4.79411 5.4 3.8C5.4 2.80589 4.59412 2 3.6 2C2.60589 2 1.8 2.80589 1.8 3.8C1.8 4.79411 2.60589 5.6 3.6 5.6Z"
							stroke="white"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</a>
			</li>
			<li>
				<a href="#!" class="text-white">
					<svg
						width="23"
						height="22"
						viewBox="0 0 23 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M21.5 2.89992C20.6381 3.50785 19.6839 3.97282 18.674 4.27692C18.132 3.65368 17.4116 3.21194 16.6103 3.01145C15.8091 2.81096 14.9655 2.8614 14.1939 3.15593C13.4222 3.45046 12.7596 3.97488 12.2957 4.65826C11.8318 5.34165 11.5889 6.15102 11.6 6.97692V7.87692C10.0184 7.91793 8.45114 7.56715 7.03791 6.85582C5.62467 6.14449 4.40928 5.09469 3.5 3.79992C3.5 3.79992 -0.100003 11.8999 8 15.4999C6.14647 16.7581 3.93844 17.389 1.7 17.2999C9.8 21.7999 19.7 17.2999 19.7 6.94992C19.6992 6.69923 19.6751 6.44915 19.628 6.20292C20.5465 5.29706 21.1947 4.15336 21.5 2.89992V2.89992Z"
							stroke="white"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</a>
			</li>
			<li>
				<a href="#!" class="text-white">
					<svg
						width="23"
						height="22"
						viewBox="0 0 23 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.7 9.90005V6.30005M15.2 9.90005V6.30005M19.7 1.80005H3.5V16.2H8V19.8L11.6 16.2H16.1L19.7 12.6V1.80005Z"
							stroke="white"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</a>
			</li>
		</ul>
	</div>
</footer>
