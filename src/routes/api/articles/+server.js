import { getArticles } from '$lib/server/articles'
import { json } from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export function GET({ params }) {
    const articles = getArticles();

    return json({
        articles
    })
}