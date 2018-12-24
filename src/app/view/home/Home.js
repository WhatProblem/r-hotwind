import React from 'react';

import './home.scss';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: '',
            value2: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value)
        switch (e.target.name) {
            case 'clotheName':
                this.setState({ value1: e.target.value });
                break;
            case 'clotheColor':
                this.setState({ value2: e.target.value });
            default:
                break;
        }
    }

    submit() {
        console.log(this.state);
    }

    render() {
        return (
            <div className="home">
                <h5 className="homeTitle">商品新增</h5>
                <div className="addForms">
                    <input className="inputForm" type="text" name="clotheName" value={this.state.value1} onChange={this.handleChange} />
                    <input className="inputForm" type="text" name="clotheColor" value={this.state.value2} onChange={this.handleChange} />
                    <button className="subBtn" onClick={this.submit}>提交</button>
                </div>
            </div>
        )
    }
}