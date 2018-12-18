import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import './login.scss';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'admin',
            password: '123456',
            errTips: false
        }
    }

    getUserName(eve) {
        this.setState({
            username: eve.target.value
        })
    }

    getPwd(eve) {
        this.setState({
            password: eve.target.value
        })
    }

    login() {
        if (this.state.username && this.state.password) {
            localStorage.setItem('myToken', 'adaferewrijowefjowifjiowjeoifjewio123123123');
            this.props.history.push('/main');
        } else {
            this.setState({
                errTips: true
            })
        }
    }

    render() {
        return (
            <div className="login">
                <div className="cover"></div>
                <div className="loginForm">
                    <div className="username">
                        <input type="text" placeholder="请输入用户名" value={this.state.username} onChange={this.getUserName.bind(this)} />
                        <i className="userIcon hotwind icon-yonghu"></i>
                    </div>
                    <div className="pwd">
                        <input type="password" placeholder="请输入登录密码" value={this.state.password} onChange={this.getPwd.bind(this)} />
                        <i className="pwdIcon hotwind icon-suo"></i>
                    </div>
                    <button className="loginBtn" onClick={this.login.bind(this)}>登录</button>
                    <div className="errTips">
                        <div className="tips">{this.state.errTips ? '请正确输入账号密码!' : ''}</div>
                    </div>
                </div>
            </div>
        );
    }
}