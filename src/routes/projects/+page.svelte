<script lang="ts">
	import { Header } from "$lib/components/ui/header";
	import { Skeleton } from "$lib/components/ui/skeleton";
	import { FlaskConical } from "@lucide/svelte";

    const mocked_projects: { category: string; name: string; description: string, link: string }[] = [
        {
            category: 'Website',
            name: '1CLNGIP',
            description: 'Exercitation deserunt magna proident veniam esse labore.',
            link: '/',
        },
        {
            category: 'CLI',
            name: 'NextGo',
            description: 'Ferramenta CLI para atualizar automaticamente a versão do compilador do Go',
            link: '/',
        }
    ]

    async function fetchProjects() {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return mocked_projects
    }
</script>

<Header
    icon={FlaskConical}
    title="Acervo"
    description="Culpa minim tempor aliqua culpa mollit. Eiusmod adipisicing nisi veniam qui laborum adipisicing veniam labore enim et eu nostrud elit"
/>

<section class="relative">
    <div class="max-w-default mx-auto flex flex-col">
        
        <div class="w-full grid grid-cols-3 gap-7">
            {#await fetchProjects()}
                {#each {length:6}}

                 <div class="w-full border rounded relative p-6">
    <div class="w-full flex flex-col">
        <div class="flex flex-col items-center gap-1.5">
            <Skeleton class="w-[70px]"/>
            <Skeleton class="w-[150px]"/>
            
            <div class="w-full flex gap-1 justify-center flex-wrap mt-5">
                <Skeleton class="w-[70px]"/>
                <Skeleton class="w-[60px]"/>
                <Skeleton class="w-[60px]"/>
                <Skeleton class="w-[135px]"/>
                <Skeleton class="w-[135px]"/>
            </div>
        </div>
    </div>
</div>
                    
                {/each}

            {:then projects }
            {#each projects as { category, name, description, link }, i}
                <a 
                class="ease-linear hover:before:bg-primary/5  hover:before:border-primary relative flex items-center gap-3 rounded border p-6 transition-all before:absolute before:top-0 before:left-0 before:-z-10 before:size-full before:rounded before:border before:border-transparent before:transition-all hover:-translate-y-1.5"
                href={link}
            >
                    <div class="w-full flex flex-col">
                        <hgroup class="flex flex-col items-center gap-0.5">
                            <p class="text-primary flex items-center gap-1.5 text-xs font-semibold uppercase">
                                {category}
                            </p>
                            <h3 class="mb-1.5 text-2xl">{name}</h3>
                            <p class="text-muted-foreground leading-5 text-center text-sm">
                                {description}
                            </p>
                        </hgroup>
                    </div>
                </a>
            {/each}
            {/await}    
        </div>

    </div>
</section>
