<script lang="ts">
	import type { Snippet } from 'svelte';

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

<header class="h-16 w-full bg-background/90 supports-[backdrop-blur]:bg-background/70 backdrop-blur-md border-b px-5">
    <div class="h-full w-full flex items-center justify-between space-x-1 max-w-default mx-auto">
        <div class="h-full flex-1 items-center gap-[12px] flex justify-between">              
            {@render children()}				
        </div>
    </div>
</header>