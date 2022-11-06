import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			'@components/*': 'src/ui/components/*',
			'@compositions': 'src/ui/compositions/*',
			'@icons/*': 'src/ui/icons/*',
			'@mocks/*': 'src/mocks/*',
			'@resources': 'src/resources/*',
			'@styles/*': 'src/styles/*',
			'@types/*': 'src/types/*',
		}
	}
};

export default config;
