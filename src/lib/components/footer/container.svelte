<footer>
    <div>
        <slot />
    </div>
</footer>

<style lang="scss">
    footer {
        padding-top: 1.75rem;
        padding-bottom: 1.75rem;
        background: #000000;
        position: relative;
        padding-left: 1.125rem;
        padding-right: 1.125rem;
        bottom: 0;

        & div {
            margin-left: auto;
            margin-right: auto;
            max-width: var(--max-boundary);
            display: flex;
            flex-direction: column;
            row-gap: 2.175rem;
            font-size: 0.875rem;
            color: #52525B;

            @media screen and (min-width: 840px) {
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                font-size: 0.875rem;
                color: #52525B;
            }
        }
    }
</style>