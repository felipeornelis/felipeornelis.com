<script lang="ts">
	import { networks } from '@resources/social-network';
	import Felipeornelis from '@icons/felipeornelis.svelte';
</script>

<footer class="w-full h-[62px] flex-shrink-0 mt-[102px] bg-black border-t border-t-light-gray px-5">
	<div class="max-w-[1200px] mx-auto w-full h-full flex justify-between items-center">
		<a href="#!" class="text-white">
			<Felipeornelis size={38} white={true} />
		</a>

		<span> Copyright &copy; 2022 Felipe Ornelis. All rights reserved.</span>

		<ul class="flex items-center gap-6 h-full">
			{#each networks as { name, url, hidden, icon } (name)}
				{#if !hidden}
					<li title={name}>
						<a href={url} class="text-white" target="_blank" rel="noreferrer">
							<svelte:component this={icon} />
						</a>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</footer>
