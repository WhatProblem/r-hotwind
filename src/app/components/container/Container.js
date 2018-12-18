import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { routerConfig } from '../../router/Routes';

import './container.scss';

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        console.log('初始加载');
    }
    render() {
        console.log(this.props)
        const route = routerConfig[1];
        return (
            // <Route path={route.path} component={route.component}/>
            <div className="container">
                展示区域
            </div>
        );
    }
}