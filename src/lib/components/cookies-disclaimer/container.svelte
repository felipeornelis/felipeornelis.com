<div>
    <slot />
</div>

<style lang="scss">
    div {
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        padding: 32px 40px 32px 40px;
        background: rgba(0, 0, 0, .80);
        backdrop-filter: blur(15px);
        display: flex;
        flex-direction: column;
        align-items: center;
        border-top: 1px solid #252525;
        row-gap: 1.875rem;

        @media screen and (min-width: 840px) {
            flex-direction: row;
            justify-content: space-between;
        }
    }
</style>