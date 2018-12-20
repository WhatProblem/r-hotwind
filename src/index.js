import React from 'react';
import ReactDOM from 'react-dom';

import './myIcon.css';
import './style.scss';
import AppRouter from './app/router/AppRouter';

// import RouteConfigExample from './RouterConfig/RouterConfig';

import RouteExample from './RouterConfig/RouteExample';

ReactDOM.render(
    <AppRouter />,
    // <RouteConfigExample/>,
    // <RouteExample/>,
    document.getElementById('root')
)

// http://blog.gdfengshuo.com/example/work/#/drag