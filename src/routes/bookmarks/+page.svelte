<script lang="ts">
	import { SectionHeader } from "$lib/components/section-header";
	import { Skeleton } from "$lib/components/ui/skeleton";
	import { Bookmark } from "@lucide/svelte";

    const mocked_bookmarks: { category: string; title: string; link: string; }[] = [
        {
            category: 'Paper',
            title: 'Twin-stick movement and directional animations in 3D with vector math',
            link: '/'
        },
    ]

    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    async function fetchBookmarks() {
        await sleep(1_000);
        return mocked_bookmarks;
    }

</script>

<SectionHeader
    icon={Bookmark}
    title="Marcadores"
    description="Culpa minim tempor aliqua culpa mollit. Eiusmod adipisicing nisi veniam qui laborum adipisicing veniam labore enim et eu nostrud elit"
/>

<section class="relative">
    <div class="max-w-default mx-auto flex flex-col">
        
        <div class="w-full grid grid-cols-3 gap-7">
            {#await fetchBookmarks()}

            {#each {length:6}}
                <div class="h-32 w-full border rounded gap-3 relative items-center flex p-6">
                    <div class="size-12 relative shrink-0 flex items-center justify-center">
                        <Skeleton class="size-full rounded-full" />
                    </div>

                    <div class="flex flex-col gap-0.5 w-full">
                        <Skeleton class="w-[120px]" />

                        <Skeleton class="w-full" />
                        <Skeleton class="w-full" />
                    </div>
                </div>
            {/each}
            
            {:then bookmarks}
            {#each bookmarks as bookmark, i}

            <a 
                class="ease-linear hover:before:bg-primary/5  hover:before:border-primary relative flex items-center gap-3 rounded border p-6 transition-all before:absolute before:top-0 before:left-0 before:-z-10 before:size-full before:rounded before:border before:border-transparent before:transition-all hover:-translate-y-1.5"
                href={bookmark.link}
            >
               <div class="size-12 relative shrink-0 flex items-center justify-center">
                   <img alt="" class="size-inherit object-fill" src="https://doce.sh/img/icons/rust.svg">
               </div>

                <hgroup class="flex flex-col gap-0.5">
                    <p class="text-primary flex items-center gap-1.5 text-xs font-semibold uppercase">
                        {bookmark.category}
                    </p>
                    <h3 class="leading-5 text-sm">
                        {bookmark.title}
                    </h3>
                </hgroup>
            </a>
            {/each}

            {/await}
        </div>

    </div>
</section>