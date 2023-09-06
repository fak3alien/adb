// eslint-disable-next-line @typescript-eslint/no-var-requires
const kitqlConfig = require('@kitql/all-in/cjs.cjs');

const scalars = {
	CountryCode: {
		type: 'String'
	}
};

/** @type {import('@kitql/all-in').KitQLProjects} */
const config = {
	projects: {
		adb: kitqlConfig({
			scalars
		})
	}
};

module.exports = config;
