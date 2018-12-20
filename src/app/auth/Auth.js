import React from 'react';
import { Route, Redirect } from "react-router-dom";
import NotFound from '../view/notfound/NotFound';

export default class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        // console.log(this.props);
        const { location, routes } = this.props;
        const { pathname } = location;
        const isLogin = localStorage.getItem('myToken');
        // console.log(pathname)
        // console.log(routes)
        const targetRotuerConfig = routes.find(v => v.path === pathname);
        // console.log(targetRotuerConfig);
        if (targetRotuerConfig && targetRotuerConfig.auth && isLogin) {
            const { component } = targetRotuerConfig;
            // return <Route exact path={pathname} component={component} />
            return <Route exact path={pathname} render={props=><targetRotuerConfig.component {...targetRotuerConfig} />} />
        }
        if (isLogin) {
            if (pathname === '/login') {
                return <Redirect to="/" />
            }
        } else {
            if (targetRotuerConfig&&targetRotuerConfig.auth) {
                return <Redirect to="/login" />
            } else {
                return <Redirect to="/404" />
            }
        }
    }
}