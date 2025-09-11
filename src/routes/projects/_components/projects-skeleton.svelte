<script>
	import { Skeleton } from "$lib/components/ui/skeleton";

</script>


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