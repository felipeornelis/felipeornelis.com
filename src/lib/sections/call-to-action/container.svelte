<section>
    <div>
        <slot />
    </div>
</section>

<style lang="scss">
    section {
        background: radial-gradient(171.63% 142.58% at -0.00% 100.00%, #9939F9 0%, #C084FC 33.33%, #A5B4FC 66.67%, #C2CBF7 100%);
        padding-top: 182px;
        padding-bottom:182px;
        padding-left: 1.125rem;
        padding-right: 1.125rem;

        & div {
            margin-left: auto;
            margin-right: auto;
            max-width: 578px;
            display: flex;
            flex-direction: column;
            align-items: center;
            row-gap: 52px;
        }
    }
</style>