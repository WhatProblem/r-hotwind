import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        // console.log(this.props)
        const { routes } = this.props;
        console.log(routes)
        return (
            <div>
                <li><Link to="/main/home">home</Link></li>
                <li><Link to="/main/settings">产品配置</Link></li>
                {/* <Router>
                    {
                        routes.map((route, i) => <Route key={i} path={route.path} component={route.component} />)
                    }
                </Router> */}
            </div>
        )
    }
}