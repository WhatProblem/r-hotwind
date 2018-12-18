import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Container from '../../components/container/Container';
import { routerConfig } from '../../router/Routes';

import './main.scss';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div className="main">
                    <div className="navbar">
                        <Navbar />
                    </div>
                    <div className="content">
                        <div className="sidebar">
                            <Sidebar />
                        </div>
                        <div className="container">
                            {
                                routerConfig.map((route, i) => {
                                    <Container key={i} {...route} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}