<span>
    <slot />
</span>

<style>
    span {
        text-align: center;
        font-size: 50px;
        font-weight: var(--bold);
        color: #000000;
        letter-spacing: -0.125rem;

        @media screen and (min-width: 640px) {
            & {
                font-size: 60px;
            }
        }
    }
</style>
