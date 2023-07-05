<script lang="ts">
    import { metadata } from '$lib/configs/metadata'

    export let title: string = '';
    export let description: string = metadata.description;
    export let keywords: Array<string> = metadata.keywords;

    $: documentTitle = title === '' ? 'Felipe Ornelis' : `${title} // Felipe Ornelis`
</script>

<svelte:head>
    <title>{documentTitle}</title>

    <meta name="description" content="{description}" />
    <meta name="keywords" content="{keywords.join(",")}" />
</svelte:head>