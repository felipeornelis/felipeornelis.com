<script>
	import { Metadata } from "$lib/components";

    /** @type {string}*/
    export let title;

    /** @type {string}*/
    export let description;

    /** @type {string}*/
    export let date;
</script>

<Metadata {title} {description}/>

<section>
    <header>
        <h1>{title}</h1>
        <time datetime="2023-08-07">Published in {date}</time>
    </header> 

    <div>
        <slot />
    </div>
</section>


<style lang="scss">
    section {
        margin-bottom: 5.75rem;
        max-width: var(--max-content-width);
        margin-left: auto;
        margin-right: auto;
        padding-top: calc(var(--navigator-height) + 3rem);
        padding-left: 1.25rem;
        padding-right: 1.25rem;

        & header {
            & h1 {
                text-align: center;
                font-size: 2.25rem;
                font-weight: var(--semibold);
                letter-spacing: -0.075rem;                
            }

            & time {
                text-align: center;
                display: block;
                font-size: 1.125rem;
                font-weight: var(--medium);
                color: #52525B;
                margin-top: 2.75rem;
                margin-bottom: 2.75rem;
            }
        }

        & div {

            & :global(p) {
                font-size: 18px;
                text-align: justify;
                line-height: 24px;
            }

            & :global(p > code) {
                background-color: #ffffff1a;
                border-radius: 8px;
                font-size: 1rem;
                display: inline-block;
                padding: 0.125rem 0.725rem;
            }

            & :global(pre) {
                position: relative;
                text-align: left;
                white-space: pre;
                word-spacing: normal;
                word-break: normal;
                word-wrap: normal;
                tab-size: 4;
                hyphens: none;
                margin-top: 2.125rem;
                margin-bottom: 2.125rem;
                background-color: #ffffff1a;
                border-radius: 8px;
                padding: 1rem;
            }

            & :global(pre > code) {
                overflow-x: auto;
                display: block;
            }

            & :global(pre > code > span) {
                font-size: 1rem;
            }

            & :global(ul) {
                display: block;
                margin-top: 2.125rem;
                margin-bottom: 2.125rem;
                margin-left: 2rem;

                & :global(li) {
                    list-style: disc;
                    line-height: 1.625rem;
                    font-size: 18px;
                }

                & :global(li + li) {
                    margin-top: 1rem;
                }
            }

            & :global(h2) {
                text-align: left;
                font-size: 1.575rem;
                font-weight: var(--semibold);
                margin-top: 2.125rem;
                margin-bottom: 2.125rem;
                letter-spacing: -0.075rem; 
            }

            & :global(img) {
                width: 100%;
            }
        }
    }
</style>