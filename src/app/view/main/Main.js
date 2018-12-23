import React from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import ChildConfig from '../../config/ChildConfig';
import NotFound from '../notfound/NotFound';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        console.log(this.props);
        const { routes } = this.props;
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/main/home">home</Link>
                    </li>
                    <li>
                        <Link to="/main/setting">setting</Link>
                    </li>
                </ul>
                <Switch>
                    {routes.map((route, i) => <ChildConfig key={i} {...route} />)}
                    {/* <Redirect from="/main" to="/main/home" /> */}
                    <Route component={NotFound} />
                </Switch>
            </div>
        )
    }
}