<script>
    /** @type {string | undefined} */
    export let title = undefined;

    /** @type {string | undefined} */
    export let description = undefined;

    /** @type {string | undefined} */
    export let keywords = undefined;

    /** @type {import('$lib/types/post').Post | undefined}*/
    export let article = undefined;


    $: documentTitle = (title === '' || title === undefined) 
                        ? 'Felipe Ornelis — Software Engineer' 
                        : `${title} / Felipe Ornelis`
</script>

<svelte:head>
    <title>{documentTitle}</title>
    <meta name="description" content={description}>
    <meta name="keywords" content={keywords}>
    <meta name="robots" content="index,follow">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta property="og:title" content={title}>
    <meta property="og:description" content={description}>
    <meta property="og:type" content="website">
    <meta property="og:url" content="">
    <meta property="og:image" content="">
    <meta property="og:image:alt" content="">

    {#if article}
        <meta property="article:author" content="Felipe Ornelis <hello@felipeornelis.com>">
        <meta property="article:published_time" content={article.publishedAt.toString()}>
        <meta property="article:tag" content={article.tags}>

        {#if article.updatedAt}
            <meta property="article:modified_time" content={article.updatedAt.toString()}>
        {/if}
    {/if}

    <meta property="twitter:card" content="summary">
    <meta property="twitter:site" content="@felipeornelis">
    <meta property="twitter:creator" content="@felipeornelis">
    <meta property="twitter:description" content={description}>
</svelte:head>