<script lang="ts">
    import type { Component } from "svelte";

    export interface Props {
        icon: Component;
        title: string;
        description: string;
    }

    let { icon: Icon, title, description }: Props = $props();
</script>

<section class="max-w-[35rem] flex flex-col items-center justify-center gap-10 mx-auto pt-20 mb-24">
    <div class="size-24 border bg-background rounded-md drop-shadow-foreground shadow-2xl cursor-pointer flex items-center justify-center hover:border-accent hover:shadow-accent transition-all duration-200 [&>svg]:size-[37px] hover:[&>svg]:stroke-accent">
        <Icon class="stroke-foreground stroke-2" />
    </div>

    <hgroup class="w-full flex flex-col items-center gap-6">
        <h1 class="text-[3.5rem] font-semibold -tracking-wider text-foreground text-center">
            {title}
        </h1>

        <p class="text-muted-foreground font-medium text-center">
            {description}
        </p>
    </hgroup>
</section>