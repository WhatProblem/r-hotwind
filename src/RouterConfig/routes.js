import Sandwiches from './Sandwiches';
import Tacos from './Tacos';

const routes = [
    {
        path: "/sandwiches",
        component: Sandwiches
    },
    {
        path: "/tacos",
        component: Tacos,
        routes: [
            {
                path: "/tacos/bus",
                component: Sandwiches
            },
            {
                path: "/tacos/cart",
                component: Sandwiches
            }
        ]
    }
]

export default routes;