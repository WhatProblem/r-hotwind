import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import MainConfig from './config/MainConfig';
import routes from './routes';
import NotFound from './view/notfound/NotFound';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        {routes.map((route, i) => <MainConfig key={i} {...route} />)}
                        <Redirect from="/" to="/main" />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}