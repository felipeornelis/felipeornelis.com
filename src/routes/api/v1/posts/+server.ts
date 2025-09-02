import { json, type RequestHandler } from '@sveltejs/kit';

interface ArticleProps {
	image: string;
	title: string;
	chapeu: string;
	link: string;
}

const posts: ArticleProps[] = [
	{
		image:
			'https://dkrn4sk0rn31v.cloudfront.net/uploads/2022/10/o-que-e-e-como-comecar-com-golang.jpg',
		title: 'O que é e como começar com Golang',
		chapeu: 'Linguagem de programação',
		link: '/'
	},
	{
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnQ1JNUSVPQbyzgX8yFW_ppele0zgL6KtRw&s',
		title: 'Introdução ao Zig',
		chapeu: 'Mais uma linguagem de programação',
		link: '/'
	},
	{
		image:
			'https://swansoftwaresolutions.com/wp-content/uploads/2020/02/08.20.20-What-is-Dart-and-how-is-it-used-1.jpg',
		title: 'Os diferentes tipos de construtores de classe em Dart',
		chapeu: 'Facilitadores',
		link: '/'
	}
];

export const GET: RequestHandler = async ({ params }) => {
	await sleep(10_000);

	return json({ posts });
};

function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
