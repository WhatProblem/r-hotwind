import React from 'react';

import './navbar.scss';
// import avatar from '../../../../assets/img/avatar.jpg';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInfo: false
        }
    }

    getInfo() {
        this.setState({
            showInfo: this.state.showInfo ? false : true
        })
    }

    render() {
        return (
            <div className="navbar">
                <div className="title">
                    <div className="sortIcon"><i className="hotwind icon-fenlei01"></i></div>
                    <div className="sortTitle">后台管理系统</div>
                </div>
                <div className="singleInfo">
                    <div className="fullScreen"><i className="hotwind icon-quanping"></i></div>
                    <div className="remind"><i className="hotwind icon-lingdang-xianxing"></i></div>
                    <div className="avatar">< img src={require('../../../../assets/img/avatar.jpg')} alt="" /></div>
                    <div className="profile">
                        <h5 onClick={this.getInfo.bind(this)}>个人信息<i className={this.state.showInfo ? 'hotwind icon-30jiantouxiangshangfill' : 'hotwind icon-30jiantouxiangxiafill'}></i></h5>
                        {this.state.showInfo ? (<ul>
                            <i className="hotwind icon-30jiantouxiangshangfill"></i>
                            <li>关于作者</li>
                            <li>项目仓库</li>
                            <li>退出登录</li>
                        </ul>) : ''}
                    </div>
                </div>
            </div>
        );
    }
}