import React from 'react';
import { BrowserRouter as Router, Route, Link, HashRouter, Switch } from 'react-router-dom';
import { Auth } from '../auth/Auth';
import { routerConfig } from "./Routes";

// export default class AppRouter extends React.Component {
//     render() {
//         return (
//             <HashRouter>
//                 <Switch>
//                     <Auth config={routerConfig} />
//                 </Switch>
//             </HashRouter>
//         );
//     }
// }

export default class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Auth config={routerConfig} />
                </Switch>
            </Router>
        );
    }
}