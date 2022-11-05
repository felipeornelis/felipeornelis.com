<script>
	import Link from '@components/link.svelte';
</script>

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
