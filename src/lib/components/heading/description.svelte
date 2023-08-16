<p>
    <slot />
</p>

<style lang="scss">
    p {
        font-size: 14px;
        color: #52525B;
        text-align: center;
        max-width: 430px;

        @media screen and (min-width: 860px) {
            & {
                font-size: 16px;
            }
        }
    }
</style>