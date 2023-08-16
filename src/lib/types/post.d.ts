export interface Article {
	title: string;
	description: string;
	slug: string;
	date: string;
}

export type ArticleFile = {
	default: Record<string, unknown>;
	metadata: Article;
};

export type GetArticles = {
	(quantity?: number): { articles: any };
};
