<script>
</script>

<h3>
    <slot />
</h3>

<style lang="scss">
    h3 {
        font-weight: var(--bold);
        font-size: 38px;
        text-align: center;
        letter-spacing: -0.075rem;

        @media screen and (min-width: 860px) {
            & {
                font-size: 48px;
                text-align: center;
                letter-spacing: -0.075rem;
            }
        }
    }
</style>