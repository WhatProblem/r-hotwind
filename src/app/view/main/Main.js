import React from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import ChildConfig from '../../config/ChildConfig';
import NotFound from '../notfound/NotFound';
import Sidebar from '../../components/Sidebar/Siderbar';

import './main.scss';

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
            <div className="main">
                <div className="navbar"></div>
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="content">
                    <Switch>
                        {routes.map((route, i) => <ChildConfig key={i} {...route} />)}
                        {/* <Redirect from="/main" to="/main/home" /> */}
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        )
    }
}