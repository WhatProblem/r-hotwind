import Main from '../view/main/Main';
import Login from '../view/login/Login';
import NotFound from '../view/notFound/NotFound';
import Home from '../view/home/Home';
import Settings from '../view/Settings/Settings';
import ProductInfo from '../view/productInfo/ProductInfo';

export const routerConfig = [
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
                component: Settings
            },
            {
                path: '/main/productInfo',
                component: ProductInfo
            }
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/404',
        component: NotFound
    }
]

