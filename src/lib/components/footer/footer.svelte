<script>
    import Container from "./container.svelte";
	import Links from "./links.svelte";
</script>

<Container>
    <span>Copyright &copy; 2023 Felipe Ornelis. All rights reserved.</span>

    <Links />
</Container>

<style lang="scss">
    span {
        text-align: center;

        @media screen and (min-width: 840px) {
            text-align: left;
        }
    }
</style>