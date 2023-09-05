// eslint-disable-next-line @typescript-eslint/no-var-requires
const kitqlConfig = require('@kitql/all-in/cjs.cjs');

/** @type {import('@kitql/all-in').KitQLProjects} */
const config = {
	projects: {
		adb: kitqlConfig({})
	}
};

module.exports = config;
