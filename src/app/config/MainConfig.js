import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class MainConfig extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        // console.log(this.props)
        const route = this.props;
        const { location } = this.props;
        const { pathname } = location;

        return <Route path={route.path} render={props => <route.component {...props} routes={route.routes} />} />
    }
}