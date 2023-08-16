<article>
    <div>
        <slot />
    </div>
</article>

<style>
    article {
        background-color: #0C0C0C;
        border: 1px solid #252525;
        border-radius: 8px;
        padding: 32px 40px 32px 40px;

        & div {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            row-gap: 1rem;
        }
    }
</style>