<script lang="ts">
	import { networks } from '@resources/social-network';
	import Felipeornelis from '@icons/felipeornelis.svelte';
</script>

<footer class="w-full h-[62px] flex-shrink-0 mt-[102px] bg-black border-t border-t-light-gray px-5">
	<div class="max-w-[1200px] mx-auto w-full h-full flex justify-between items-center">
		<a href="#!" class="text-white">
			<!-- <Felipeornelis size={38} white={true} /> -->
			<svg
				width="38"
				height="38"
				viewBox="0 0 81 81"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect width="81" height="81" rx="14" fill="url(#paint0_linear_116_8)" />
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M48.5752 14L42.2035 39.2478H65.2212L31.8496 68L38.2212 42.4336H16L48.5752 14ZM42.9203 23.0796L24.4425 39.2478H38.8584L42.9203 23.0796ZM56.6195 42.4336H41.4071L37.3451 59.0796L56.6195 42.4336Z"
					fill="#0C1014"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_116_8"
						x1="3.5"
						y1="-3"
						x2="81"
						y2="81"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FFFFFF	" />
						<stop offset="0.765625" stop-color="#FFFFFF	" />
					</linearGradient>
				</defs>
			</svg>
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
