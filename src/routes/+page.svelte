<script lang="ts">
	import { Head } from "$lib/components/head";
	import Link from "$lib/components/link/link.svelte";
	import { AudioCard } from "$lib/components/ui/audio-card";
    import * as WindowPlayer from '$lib/components/ui/window-player'

    let metadata = {
        title: 'Oieeeeee',
    }

</script>

<Head {...metadata} />

<h1>Welcome to SvelteKit</h1>
<p>Visit <Link href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</Link> to read the documentation</p>

<div class="flex w-full justify-center gap-2">
    
</div>