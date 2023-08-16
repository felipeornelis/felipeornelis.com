import { getArticles } from "$lib/sections";

/** @type {import('./$types').PageServerLoad} */
export const load = async () => getArticles(5);