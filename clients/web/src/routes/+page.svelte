<script lang="ts">
	import Title from '@components/title.svelte';
	import Button from '@components/button.svelte';

	import Principles from '@compositions/principles.svelte';
	import Posts from '@compositions/posts.svelte';
	import Labs from '@compositions/labs.svelte';
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
		<Button as="a" href="/about">
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
		</Button>
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
			<Labs />
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
