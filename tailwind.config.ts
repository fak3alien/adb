import type { Config } from 'tailwindcss';

const gridTemplates = {
	'auto/1fr': 'auto 1fr',
	'1fr/auto': '1fr auto',
	'auto/1fr/auto': 'auto 1fr auto'
};

const config: Config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			gridTemplateColumns: gridTemplates,
			gridTemplateRows: gridTemplates
		}
	},
	plugins: []
};

export default config;
