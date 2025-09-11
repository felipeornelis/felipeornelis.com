<script>
    import { Skeleton } from "$lib/components/ui/skeleton";
</script>

<div class="w-full grid grid-cols-3 gap-7">
    {#each {length:6}}
                <div class="h-32 w-full border rounded gap-3 relative items-center flex p-6">
                    <div class="size-12 relative shrink-0 flex items-center justify-center">
                        <Skeleton class="size-full rounded-full" />
                    </div>

                    <div class="flex flex-col gap-0.5 w-full">
                        <Skeleton class="w-[120px]" />

                        <Skeleton class="w-full" />
                        <Skeleton class="w-full" />
                    </div>
                </div>
            {/each}
</div>