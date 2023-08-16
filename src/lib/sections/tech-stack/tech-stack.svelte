<script>
    import Container from "./container.svelte";
    import stack from '$lib/config/tech';

    /** @type {<T>(arr: Array<T>) => Array<T>} */
    function shuffle(arr) {
        const shuffledArray = arr.slice();

        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
        }

        return shuffledArray;
    }
</script>

<Container>
    {#each shuffle(stack).slice(0, 6) as { icon, name }}
        <svelte:component
            this={icon}
            color="#c084fc"
            size={65}
            title={name}
            aria-label="{name} icon"
        />
    {/each}
</Container>