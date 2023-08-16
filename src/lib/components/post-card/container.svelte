<article>
    <div class="border"></div>
    <div>
        <slot />
    </div>
</article>

<style lang="scss">
    article {
        --border-width: 2px;
        position: relative;
        display: inline-block;
        border-radius: 0.5rem;
        padding: var(--border-width);
        overflow: hidden;
        cursor: pointer;

        & div {
            position: relative;
            border-radius: inherit;
            padding: 32px 40px 32px 40px;
            box-shadow: inset 0 0 0 1px #252525;
            min-width: 100%;
            min-height: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 8px;
        }

        & .border {
            position: absolute;
            inset: 0;
            padding: var(--border-width);
            -webkit-mask: linear-gradient(rgb(165, 180, 252) 0 0) content-box, linear-gradient(rgb(165, 180, 252) 0 0);
            mask: linear-gradient(rgb(165, 180, 252) 0 0) content-box, linear-gradient(rgb(165, 180, 252) 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            border-radius: inherit;
            opacity: 0;
            transition: opacity .25 ease-in-out;

            &::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                min-width: 200%;
                min-height: 200%;
                aspect-ratio: 1/1;
                background: conic-gradient(from 0deg, rgb(194, 203, 247), rgb(165, 180, 252), rgb(192, 132, 252), rgb(0, 0, 0));
                transform: translate(-50%, -50%) rotate(0deg);
                animation: rotate 5s linear infinite;

            }
        }

        &:hover .border {
            opacity: 1;
        }
    }

    @keyframes rotate {
        to {
            transform: translate(-50%, -50%) rotate(-360deg);
        }
    }
</style>