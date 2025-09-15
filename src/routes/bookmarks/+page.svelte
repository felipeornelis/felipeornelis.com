<script lang="ts">
	import { Header } from "$lib/components/ui/header";
	import { Skeleton } from "$lib/components/ui/skeleton";
	import { Bookmark } from "@lucide/svelte";
	import Loading from "./loading.svelte";
	import Bookmarks from "./bookmarks.svelte";

    interface Bookmark {
        category: string;
        title: string;
        link: string;
    }
    const mocked_bookmarks: Bookmark[] = [
        {
            category: 'Paper',
            title: 'Twin-stick movement and directional animations in 3D with vector math',
            link: '/'
        },
    ]

    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    async function fetchBookmarks(): Promise<Bookmark[]> {
        await sleep(0);
        //return mocked_bookmarks;
        return [];
    }

</script>

<Header
    icon={Bookmark}
    title="Marcadores"
    description="Culpa minim tempor aliqua culpa mollit. Eiusmod adipisicing nisi veniam qui laborum adipisicing veniam labore enim et eu nostrud elit"
/>

<section class="relative">
    <div class="max-w-default mx-auto flex flex-col">
        {#await fetchBookmarks()}
            <Loading />            
        {:then bookmarks}
            <Bookmarks data={bookmarks} emptyMessage="Não há itens nos marcadores."/>
        {/await}
    </div>
</section>