<div>
    <slot />
</div>

<style lang="scss">
    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        overflow-x: auto;
        gap: 3.125rem;

        & :global(svg) {
            flex-shrink: 0;
            width: 55px;
            height: 55px;
        }
    }
</style>