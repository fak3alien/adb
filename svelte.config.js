import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$houdini: './$houdini',
			$graphql: './src/lib/graphql',
			$modules: './src/lib/modules'
		}
	}
};

export default config;
