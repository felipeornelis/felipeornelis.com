<script>
    /** @type {string} */
    export let name;

    /** @type {string} */
    export let description;

    /** @type {string} */
    export let href;
</script>

<div>
    <h5>{name}</h5>    
    <p>{description}</p>
    <a {href} class="axj3s">Learn more</a>
</div>

<style lang="scss">
    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 1.25rem;

       & h5 {
            font-size: 38px;
            font-weight: var(--bold);
            letter-spacing: -0.125rem;
            color: #FFFFFF;

            @media screen and (min-width: 860px) {
                & {
                    font-size: 42px;
                }
            }

        }

        & p, & a {
            font-size: 16px;
            color: #52525B;
            line-height: 22px;
            text-align: left; 
        }

        & a {
            --anchor-color: rgb(192, 132, 252);
            --anchor-underscore-height: 2px;
            color: var(--anchor-color);
        }

        @media screen and (min-width: 860px) {
            & p,
            & a {
                font-size: 18px;
            }
        }
    }
</style>