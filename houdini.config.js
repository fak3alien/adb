/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	watchSchema: {
		url: 'https://graphql.anilist.co'
	},
	plugins: {
		'houdini-svelte': {}
	},
	scalars: {
		CountryCode: {
			type: 'String'
		}
	}
};

export default config;
