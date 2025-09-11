<script lang="ts">
	import { HeartCrack } from "@lucide/svelte";

    interface ProjectProps {
        category: string; name: string; description: string, link: string;
    }

    interface Props {
        data: ProjectProps[];
        emptyMessage?: string;
    }

    let { data, emptyMessage }: Props = $props();
</script>

{#each data as { category, name, description, link }, i}
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
{:else}
        <div>
            <HeartCrack size={69} strokeWidth={1} />
        </div>
        
        <span>{emptyMessage ?? 'Nada por aqui.'}</span>
{/each}