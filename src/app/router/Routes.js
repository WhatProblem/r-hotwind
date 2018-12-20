import Main from '../view/main/Main';
import NotFound from '../view/notfound/NotFound';
import Home from '../view/home/Home';

const routes = [
    {
        path: '/',
        component: Main,
        auth: true
    },
    {
        path: '/main',
        component: Main,
        auth: true,
        routes: [
            {
                path: '/main/home',
                component: Home
            },
            {
                path: '/main/settings',
                component: Home
            }
        ]
    },
    {
        path: '/404',
        component: NotFound
    },
];

export default routes;