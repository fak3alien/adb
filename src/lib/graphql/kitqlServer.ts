import { type KitQLHandleGraphQL, useKitqlModules } from '@kitql/all-in';
import type { RequestEvent } from '@sveltejs/kit';

import { modules } from './$kitql/_appModules';

const plugins = [];
plugins.push(useKitqlModules(modules));

function getContext({ request }: RequestEvent) {
	console.log(request);
	return {};
}

export type IKitQLContext = ReturnType<typeof getContext>;

export const kitqlServer: KitQLHandleGraphQL<IKitQLContext, RequestEvent> = {
	plugins,
	context: getContext
};
