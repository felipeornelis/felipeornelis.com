<script>
    import Container from './container.svelte';
    import Title from './title.svelte';
    import Description from './description.svelte';

    /** @type {string} */
    export let title;

    /** @type {string} */
    export let description = '';
</script>

<Container>
    <Title>{title}</Title>
    {#if description !== ''}
        <Description>{description}</Description>
    {/if}
</Container>