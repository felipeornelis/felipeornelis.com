<header>
    <slot />
</header>

<style>
    header {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 1rem;

        @media screen and (min-width: 680px) {
            & {
                row-gap: 24px;
            }
        }
    }
</style>