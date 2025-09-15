<script lang="ts">
    //import { } from "$lib/components/ui";

    let { children } = $props();
</script>

<div class="h-full flex-1 bg-red-900 relative" data-id="reference">
    <div class="size-full max-w-default mx-auto flex">
        <div class="w-[250px] min-h-full relative shrink-0">
            xau
        </div>
        <div class="flex-1 h-full">
            {@render children()}
        </div>
    </div>
</div>