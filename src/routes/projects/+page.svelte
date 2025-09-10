<script lang="ts">
	import { Header } from "$lib/components/ui/header";
	import { Skeleton } from "$lib/components/ui/skeleton";
	import { FlaskConical } from "@lucide/svelte";
	import ProjectsSkeleton from "./_components/projects-skeleton.svelte";
	import ProjectsGrid from "./_components/projects-grid.svelte";
	import { cva, type VariantProps } from "class-variance-authority";

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
        await new Promise((resolve) => setTimeout(resolve, 1_000));

        return [];
    }

    const content = cva('w-full', {
        variants: {
            format: {
                grid: 'grid grid-cols-3 gap-7',
                flex: 'flex flex-col items-center space-y-5'
            }
        } 
    });

    type ContentFormat = VariantProps<typeof content>;

    let loaded = $state<undefined | any>(undefined);
    let contentFormat = $derived.by(() => {
        if (loaded === undefined) {
            return 'grid'
        }

        if (Array.isArray(loaded) && loaded.length > 0) {
            return 'grid'
        }

        return 'flex';
    }) as unknown as  ContentFormat

    $effect(() => {
        fetchProjects().then(r => loaded = r)
    })
</script>

<Header
    icon={FlaskConical}
    title="Acervo"
    description="Culpa minim tempor aliqua culpa mollit. Eiusmod adipisicing nisi veniam qui laborum adipisicing veniam labore enim et eu nostrud elit"
/>

<section class="relative">
    <div class="max-w-default mx-auto flex flex-col">
        <div class={content({ format:  contentFormat })}>
            {#await fetchProjects()}
                <ProjectsSkeleton />
            {:then projects}
                <ProjectsGrid data={projects} emptyMessage="Não há projetos publicados no acervo."/>
            {/await}    
        </div>
    </div>
</section>


<!-- <section class="relative">
    <div class="max-w-default mx-auto flex flex-col">
        <div class={content({ format: })}>
            {#await fetchProjects()}
                <ProjectsSkeleton />
            {:then projects}
                <ProjectsGrid data={projects} emptyMessage="Não há projetos publicados no acervo."/>
            {/await}    
        </div>
    </div>
</section> -->
