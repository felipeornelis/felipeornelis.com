<script>
    /** @type import('svelte').SvelteComponent */
    export let icon;
</script>

<span>
    <svelte:component this={icon} />
</span>

<style>
    span :global(svg) {
        width: 45px;
        height: 45pxx;
    }
</style>