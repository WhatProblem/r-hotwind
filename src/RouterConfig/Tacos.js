import React from 'react';
import { BrowserRouter as Rotuer, Route, Link } from "react-router-dom";

export default class Tacos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let routes = this.props.routes;
        console.log(routes)
        return (
            <div>
                <h2>Tacos</h2>
                <ul>
                    <li>
                        <Link to="/tacos/bus">Bus</Link>
                    </li>
                    <li>
                        <Link to="/tacos/cart">Cart</Link>
                    </li>
                </ul>
                {
                    routes.map((route, i) => <Route key={i} path={route.path} render={props => (
                        <route.component {...props} routes={route.routes} />
                    )} />)
                }
            </div>
        );
    }
}