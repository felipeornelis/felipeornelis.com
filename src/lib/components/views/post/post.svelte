<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        children: Snippet;
        author: string;
        role?: string;
    };

    let {
        children,
        author,
        role = 'Desenvolvedor de Software'
    }: Props = $props();
</script>

<div class="mx-auto w-full max-w-2xl shrink-0 flex-col flex gap-6 md:gap-12 mt-14 md:mt-24 px-5 md:px-0">
    {@render children()}

    <div class="mx-auto flex flex-col items-center gap-0.5 [&>p]:text-center text-sm md:text-base">
        <p class="font-medium text-foreground">{author}</p>
        <p class="text-muted-foreground">{role}</p>
    </div>
</div>
