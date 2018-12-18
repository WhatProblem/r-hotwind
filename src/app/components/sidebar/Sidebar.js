import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './sidebar.scss';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tabBar">
                <ul className="tabBarList">
                    <li><Link className="sideLink" to="/main/home"><i className="hotwind icon-shouye"></i><span>系统首页</span></Link></li>
                    <li><Link to="/main/settings"><i className="hotwind icon-shezhi"></i><span>产品配置</span></Link></li>
                    <li><Link to="/main/productInfo"><i className="hotwind icon-chaxun"></i><span>产品查询</span></Link></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        );
    }
}