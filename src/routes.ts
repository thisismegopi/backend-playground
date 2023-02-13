import { getUser } from './controllers/user.controller';
import { RouteType } from './types/routeType';

const versionPath = `/api/v1.0`;
export const routes: RouteType[] = [
    {
        method: 'get',
        route: `${versionPath}/user`,
        main: getUser,
        authRole: ['admin'],
    },
];
