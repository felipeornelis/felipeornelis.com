<script lang="ts">
	import { page } from "$app/state";
	import { ContentCard } from "$lib/components/ui/content-card";
	import { Header, type HeaderProps } from "$lib/components/ui/header";
	import { Book, Bookmark, Podcast, Projector, Search } from "@lucide/svelte";
	import type { Component } from "svelte";

    const query = page.url.searchParams.get('q');

    let header: HeaderProps = {
        title: 'Buscar',
        description: `Resultados da pesquisa por "${query}".`,
        icon: Search
    }

    const results: {
        type: 'post' | 'bookmark' | 'project' | 'book';
        title: string;
        url: string;
    }[] = [
        {
            title: 'Exercitation culpa magna velit aliquip.',
            type: 'post',
            url: 'http://localhost:5175'
        },
        {
            title: 'Exercitation culpa magna velit aliquip.',
            type: 'bookmark',
            url: 'http://localhost:5175'
        },
    ];

    const icons: {
        [k in 'post' | 'bookmark' | 'project' | 'book']: Component
    } = {
        book: Book,
        bookmark: Bookmark,
        project: Projector,
        post: Podcast
    }

</script>

<Header {...header}/>

<section class="relative">
    <div class="max-w-default mx-auto flex flex-col space-y-5">
        {#each results as { title, type, url }, i}
            <ContentCard
                {url}
                icon={icons[type]}
                heading={type}
                {title}
            />
        {/each}
    </div>
</section>