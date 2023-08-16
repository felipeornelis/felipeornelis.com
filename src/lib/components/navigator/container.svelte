<header>
    <div>
        <slot />
    </div>
</header>

<style>
    header {
        height: var(--navigator-height);
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 50;
        background: rgba(0, 0, 0, 0.15);
        backdrop-filter: blur(15px);
        border-bottom: 1px solid rgba(111, 111, 111, 0.35);
        padding-left: 1.125rem;
        padding-right: 1.125rem;

        & div {
            height: 100%;
            max-width: var(--max-boundary);
            margin-left: auto;
            margin-right: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>