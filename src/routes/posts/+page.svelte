<script lang="ts">
	import { SectionHeader } from "$lib/components/section-header";
	import { Newspaper } from "@lucide/svelte";

   //let posts = $state([]);

   async function fetchPosts() {
    const response = await fetch('/api/v1/posts');
    const data = await response.json();

    return data.posts;
   }

</script>

<SectionHeader
    icon={Newspaper}
    title="Publicações"
    description="Culpa minim tempor aliqua culpa mollit. Eiusmod adipisicing nisi veniam qui laborum adipisicing veniam labore enim et eu nostrud elit. In aute commodo nulla elit cupidatat enim. Sunt ullamco minim ea cupidatat et exercitation mollit id cillum nostrud."
/>

<section class="max-w-default mx-auto flex flex-col mt-32">
    <div class="w-full grid grid-cols-3 gap-7">

        {#await fetchPosts()}

            {#each {length:6}}
            
        <article class="w-full max-w-80" draggable="false">
            <div class="w-full flex flex-col relative space-y-2">
                <div class="w-full bg-muted-foreground animate-pulse rounded-md h-48 relative overflow-hidden">
                </div>

                <div class="cu">
                    <div class="bg-muted-foreground animate-pulse rounded-md h-4 w-[202px]" data-slot="skeleton"></div>
                </div>

                <div class="w-full">
                    <div class="bg-muted-foreground animate-pulse rounded-md h-4 w-[306px]" data-slot="skeleton"></div>
                </div>
            </div>
        </article>
        {/each}

        {:then posts}
            {#each posts as { image, title, chapeu, link}, i}

        <article class="w-full max-w-80 group" draggable="false">
            <div class="w-full flex flex-col relative space-y-2">
                <div class="w-full bg-gray-400 rounded-md h-48 transition-all duration-200 group-hover:ring-accent ring-4 ring-transparent relative overflow-hidden">
                    <a href={link} draggable="false" tabindex="0" class="inset-0 absolute" aria-label="c"></a>
                    <img src={image} alt="lin" class="object-cover w-full h-full" draggable="false" tabindex="-1" />"
                </div>

                <div class="relative">
                    <span class="text-sm text-muted-foreground transition-all duration-200 group-hover:text-accent/60">
                        {chapeu}
                    </span>
                </div>

                <div class="w-full">
                    <a class="font-semibold text-foreground transition-all duration-200 group-hover:text-accent" href="/" draggable="false" tabindex="0">
                        {title}
                    </a>
                </div>
            </div>
        </article>

        {/each}
    {/await}
    </div>
</section>