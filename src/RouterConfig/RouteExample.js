import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from './routes';

export default class RouteExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Router>
                <div>
                    {
                        routes.map((route, i) => <Route
                            key={i}
                            path={route.path}
                            render={props => (<route.component {...props} routes={route.routes} />)} />)
                    }
                </div>
            </Router>
        );
    }
}