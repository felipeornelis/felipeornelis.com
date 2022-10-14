<script lang="ts">
	import Hero from '$components/hero.svelte';
	import Navigator from '$components/navigator.svelte';

	import '$styles/global.css';
</script>

<svelte:head>
	<title>Felipe Ornelis — Software Developer</title>
</svelte:head>

<Navigator />
<main class="max-w-screen-lg mx-auto">
	<Hero />
</main>
