<script>
	import { Heading, PostCard } from "$lib/components";

    
    // const posts = Array(5).fill(
    //     {
    //         title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accusman tempus',
    //         href: '/articles/oie',        
    //     }
    // );

    /** @type {import('$lib/types/post').Article[]}*/
    export let articles;
</script>

<Heading
    title="Recent Posts"
    description="Whenever possible, I put my thoughts into texts. And these are the most recent of them."
/>

<div>
    {#each articles as { title, description, slug }}
        <PostCard {title} {description} href={`/articles/${slug}`} />
    {/each}

    {#if articles.length >= 5}
        <a href="/articles">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"></path></svg>

            Read More
        </a>
    {/if}
</div>

<style lang="scss">
    div {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: 2rem;
        margin-top: 2.75rem;

        @media screen and (min-width: 540px) {
            & {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }

        @media screen and (min-width: 860px) {
            & {
                grid-template-columns: repeat(3, minmax(0, 1fr));
            }
        }
    }

    a {
        border: 1px dashed #252525;
        border-radius: 0.5rem;
        overflow: hidden;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        row-gap: 8px;
        color: #52525B;
        font-size: 14px;
        transition: all 200ms ease-in-out;
        padding-top: 2rem;
        padding-bottom: 2rem;

        & svg {
            fill: #52525B;
            width: 24px;
            height: 24px;
            transition: inherit;
        }

        &:hover {
            box-shadow: 0 0 0 2px rgb(192, 132, 252);
            color: rgb(192, 132, 252);

            & svg {
                fill: rgb(192, 132, 252);
            }
        }

        @media screen and (min-width: 860px) {
            padding: 0;
        }
    }
</style>