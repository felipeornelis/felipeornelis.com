import { writable } from 'svelte/store';

export const ARTICLES = writable([]);

/** @type {import('$lib/types/post').GetArticles} */
export async function getArticles(limit) {
    const articleFiles = import.meta.glob('../../../routes/articles/*/+page.md');
    const articles = Object.entries(articleFiles);
    const quantity = limit || articles.length;

    const allArticles = await Promise.all(
        articles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const slug = path.split('articles/')?.pop()?.split('/+page.md')[0] || '';
            const article = {
                ...metadata,
                slug
            };

            return article;
        })
    );

    const sortedArticles = allArticles
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, quantity);

    return {
        articles: sortedArticles
    }
}

export { default as RecentPostsSection } from './recent-posts.svelte';