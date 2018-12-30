import React from 'react';
import './Myselect.scss';

export default class Myselect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sorts: [],
            selectedValue: 'BOY_CLOTHE', // 选中当前值
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

    }

    handleChange(e) {
        this.setState({
            selectedValue: e.target.value
        });
        let selectItem = this.selectItem(e.target.value, this.props.allSort);
        this.props.changeselect(selectItem);
    }

    selectItem(val, arr) {
        let selected = null;
        arr.forEach((item, i) => {
            if (val === item.category_type) {
                return selected = item;
            }
        });
        return selected;
    }

    render() {
        return (
            <div className="select">
                <div className="downArrow hotwind icon-30jiantouxiangxiafill"></div>
                <select className="myselect" value={this.state.selectedValue} onChange={this.handleChange}>
                    {
                        this.props.allSort.map((item, i) => <option key={i} value={item.category_type}>{item.category_name}</option>)
                    }
                </select>
            </div>
        );

    }
}