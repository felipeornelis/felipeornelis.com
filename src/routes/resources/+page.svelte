<script lang="ts">
	import { Head, type HeadProps } from "$lib/components/head";

    //import { } from "$lib/components/ui";

    let { children } = $props();

    let metadata: HeadProps = {
        title: 'Recursos',
        description: 'Recursos e ferramentas que podem úteis para o dia-a-dia.'
    }
</script>

<Head {...metadata} />

<header class="flex gap-3">
    <h1 class="text-2xl font-semibold lg:text-3xl">
        Recursos e ferramentas
    </h1>
</header>