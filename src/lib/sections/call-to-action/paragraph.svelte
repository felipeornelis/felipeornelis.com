<p>
    <slot />
</p>

<style>
    p {
        text-align: center;
        font-size: 16px;
        letter-spacing: -0.025rem;
        line-height: 21px;
        color: #ffffff;
        mix-blend-mode: color-dodge;
        font-weight: var(--medium);

        @media screen and (min-width: 640px) {
            & {
                font-size: 18px;
            }
        }
    }
</style>