<script>
    import { TechCard } from "$lib/components";
    import { Go } from "$lib/icons/tech";
</script>

<div>
    {#each { length: 9 } as _}
        <TechCard icon={Go}/>
    {/each}
</div>

<style>
    div {
        width: 100%;
        height: 200px;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 2.75rem;
    }
</style>

