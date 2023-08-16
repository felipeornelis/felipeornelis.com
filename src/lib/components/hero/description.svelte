<p>
    <slot />
</p>

<style>
    p {
        max-width: var(--max-lg);
        text-align: center;
        font-size: var(--font-normal);
        font-weight: var(--medium);
        color: #ffffff;
        mix-blend-mode: color-dodge;

        @media screen and (min-width: 860px) {
            & {
                font-size: var(--font-large);
            }
        }
    }
</style>