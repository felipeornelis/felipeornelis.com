<script>
    import Container from './container.svelte';
    import Heading from './heading.svelte';
    import Paragraph from './paragraph.svelte';


    /** @type {string} */
    export let title;

    /** @type {string} */
    export let content;

    /** @type {import('svelte').ComponentType}*/
    export let icon; 
</script>

<Container>
    <svelte:component this={icon} color="#52525B" size={32} />

    <Heading>{title}</Heading>
    <Paragraph>{content}</Paragraph>
</Container>