<script lang="ts">
	import { HeartCrack } from "@lucide/svelte";


    interface BookmarkProps {
        category: string;
        title: string;
        link: string;
    }

    interface Props {
        data: BookmarkProps[];
        emptyMessage?: string;
    }

    let { data, emptyMessage }: Props = $props();


</script>

{#if data.length > 0}
    <div class="w-full grid grid-cols-3 gap-7">
        {#each data as bookmark, i}
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
    </div>
{:else}
    <div class="w-full flex flex-col items-center space-y-5">
        <div>
            <HeartCrack size={69} strokeWidth={1} />
        </div>

        <span>{emptyMessage ?? 'Nada por aqui.'}</span>
    </div>
{/if}