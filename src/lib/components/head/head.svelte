<script lang="ts">
	import type { Snippet } from "svelte";
	import { format_title } from "./format-title";
	import { page } from "$app/state";

    export interface Props {
        title: string;
        description?: string;
        children?: Snippet;
        thumbnail?: string;
    }
    
    let {
        title,
        description = 'Meu espaço pessoal na internet',
        children,
        thumbnail = 'https://github.com/felipeornelis.png',
    }: Props = $props();


    const base_url = `${page.url.protocol}//${page.url.hostname}`;
</script>

<svelte:head>
    <title>{format_title(title)}</title>
    <meta name="description" content="{description}" />

    <meta property="og:type" content="website" />
	<meta property="og:url" content={base_url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="{base_url}{thumbnail}" />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={base_url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content="{base_url}{thumbnail}" />

    {@render children?.()}
</svelte:head>