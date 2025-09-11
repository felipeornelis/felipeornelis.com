<script lang="ts">
	import type { Component } from "svelte";

    interface Props {
        url: string;
        icon: Component;
        heading: string;
        title: string;
    }

    let { url, icon, heading, title }: Props = $props();

    const IconComponent = icon;
</script>

<a 
    class="ease-linear hover:before:bg-primary/5 hover:before:border-primary relative flex items-center gap-3 rounded border p-6 transition-all before:absolute before:top-0 before:left-0 before:-z-10 before:size-full before:rounded before:border before:border-transparent before:transition-all hover:-translate-y-1.5"
    href={url}
>
    <div class="size-12 relative shrink-0 flex items-center justify-center [&>svg]:size-12 [&>svg]:stroke-1">
        <!-- <img alt="" class="size-inherit object-fill" src="https://doce.sh/img/icons/rust.svg"> -->
         <IconComponent />
    </div>

    <hgroup class="flex flex-col gap-0.5">
        <p class="text-primary flex items-center gap-1.5 text-xs font-semibold uppercase">
            {heading}
        </p>
        <h3 class="leading-5 text-sm">
            {title}
        </h3>
    </hgroup>
</a>