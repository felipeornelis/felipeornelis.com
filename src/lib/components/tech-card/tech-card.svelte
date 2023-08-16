<script>    
    import Container from './container.svelte';
    import Icon from './icon.svelte';

    /** @type import('svelte').SvelteComponent */
    export let icon;
</script>

<Container>
    <Icon {icon} />
</Container>