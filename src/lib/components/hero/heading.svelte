<h1>
    <slot />
</h1>

<style lang="scss">
    h1 {
        font-size: 3rem;
        font-weight: var(--bold);
        color: #000;
        display: flex;
        flex-direction: column;
        align-items: center;
        letter-spacing: -0.125rem;
        text-align: center;

        & :global(span) {
            line-height: 59px;
        }

        @media screen and (min-width: 860px) {
            & {
                font-size: 5.5rem;
                letter-spacing: -0.225rem;

                & :global(span) {
                    line-height: 89px;
                }
            }
        }
    }
</style>