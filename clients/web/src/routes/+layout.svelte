<script lang="ts">
	import Footer from '@components/footer.svelte';
	import Header from '@components/header.svelte';

	import '@styles/app.css';
</script>

<div class="h-full w-full flex flex-col justify-between">
	<Header />
	<main class="mt-[120px]">
		<slot />
	</main>
	<Footer />
</div>
