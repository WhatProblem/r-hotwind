import React from 'react';
import { NavLink } from "react-router-dom";

import './sidebar.scss';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="navLists">
                <NavLink to="/main/home" className="nav" activeClassName="selected">home</NavLink>
                <NavLink to="/main/setting" className="nav" activeClassName="selected">setting</NavLink>
            </div>
        )
    }
}