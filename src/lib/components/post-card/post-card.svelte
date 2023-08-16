<script>
    import Container from './container.svelte';
    import Heading from './heading.svelte';
    import Description from './description.svelte';

    /** @type {string} */
    export let title;

    /** @type {string} */
    export let description;
    
    /** @type {string} */
    export let href = '';
</script>

<Container>
    <Heading>{title}</Heading>
    <Description>{description}</Description>
    <a {href}>{title}</a>
</Container>

<style>
    a {
        position: absolute;
        inset: 0;
        text-indent: -9999px;
    }
</style>