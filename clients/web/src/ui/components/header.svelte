<script lang="ts">
	import Felipeornelis from '@icons/felipeornelis.svelte';
</script>

<header
	class="w-full h-[65px] border-b border-b-light-gray left-0 top-0 fixed px-5 backdrop-blur-[9px] z-50 bg-gray-700/10"
>
	<div class="max-w-[1200px] mx-auto flex items-center h-full justify-between">
		<a href="/">
			<!-- <Felipeornelis size={38} /> -->
			<img class="h-full w-[38px]" src="/felipeornelis-icon.svg" alt="FelipeOrnelis.com logo" />
		</a>

		<nav>
			<ul class="flex items-center gap-8 text-[16px] font-poppins">
				<li>
					<a href="/posts">Posts</a>
				</li>
				<li>
					<a href="/labs">Labs</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
			</ul>
		</nav>
	</div>
</header>
