<p>
    <slot/>
</p>

<style lang="scss">
    p {
        text-align: center;
        font-size: var(--font-small);

        @media screen and (min-width: 840px) {
            font-size: var(--font-normal);
            text-align: left;
        }

        & :global(a) {
            --anchor-color: #fff;
            --anchor-underscore-height: 1px;
            color: var(--anchor-color);
        }
    }
</style>