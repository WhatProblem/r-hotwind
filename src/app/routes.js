import Main from './view/main/Main';
import NotFound from './view/notfound/NotFound';
import Home from './view/home/Home';
import Setting from './view/setting/Setting';

const routes = [
    {
        path: '/main',
        component: Main,
        routes: [
            {
                path: '/main/home',
                component: Home
            },
            {
                path: '/main/setting',
                component: Setting
            }
        ]
    },
    {
        path: '/404',
        component: NotFound
    }
];

export default routes;