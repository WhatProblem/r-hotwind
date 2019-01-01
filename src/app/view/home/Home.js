import React from 'react';
import axios from 'axios';
import http from '../../http/http';
import dealTime from '../../../utils/dateTime';

import Myselect from '../../components/Myselect/Myselect';

import './home.scss';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allSorts: [],
            allProduct: [],
            productValue: '',
            sortItem: {}, // 分类
            productItem: {}, // 商品分类
            productName: '', // 商品名称
            productPrice: '', // 商品价格
            productUnit: '', // 商品单位
            productColor: '', // 商品颜色
            productSize: '', // 商品尺寸
            productTotals: '', // 商品入库数量
            putStockTime: '', // 商品入库时间
            productDiscount: 'false', // 商品是否折扣
            discountStart: '', // 折扣开始时间
            discountEnd: '', // 折扣结束时间
        }
        this.handleChange = this.handleChange.bind(this);
        this.changeProduct = this.changeProduct.bind(this);
        this.changeDiscount = this.changeDiscount.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value)
        switch (e.target.name) {
            case 'productName':
                this.setState({ productName: e.target.value });
                break;
            case 'productPrice':
                this.setState({ productPrice: e.target.value });
                break;
            case 'productUnit':
                this.setState({ productUnit: e.target.value });
                break;
            case 'productColor':
                this.setState({ productColor: e.target.value });
                break;
            case 'productSize':
                this.setState({ productSize: e.target.value });
                break;
            case 'productTotals':
                this.setState({ productTotals: e.target.value });
                break;
            case 'putStockTime':
                this.setState({ putStockTime: e.target.value });
                break;
            case 'discountStart':
                this.setState({ discountStart: e.target.value });
                break;
            case 'discountEnd':
                this.setState({ discountEnd: e.target.value });
                break;
            default:
                break;
        }
    }

    submit() {
        let params = {
            category_type: this.state.sortItem.category_type,
            category_name: this.state.sortItem.category_name,
            product_type: this.state.productItem.product_type,
            product_type_name: this.state.productItem.product_type_name,
            product_name: this.state.productName,
            product_price: this.state.productPrice,
            product_unit: this.state.productUnit,
            product_color: this.state.productColor,
            product_size: this.state.productSize,
            product_totals: this.state.productTotals,
            put_stock_time: dealTime.translateLocal(this.state.putStockTime),
            product_stock: this.state.productTotals,
            product_discount: 'false'
        }
        http.post('/addProduct', params).then((res) => {
            console.log(res);
        })
    }

    componentDidMount() {
        console.log('组件挂载');
        let self = this;
        http.get('/getCategory').then((res) => {
            console.log(res);
            if (res.data.status == 200) {
                self.setState({
                    allSorts: res.data.data,
                    allProduct: res.data.data[0]['product'],
                    sortItem: res.data.data[0],
                    productItem: res.data.data[0]['product'][0]
                })
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    componentWillUnmount() {
        // console.log('组件卸载')
    }

    componentWillUpdate() {
        // console.log('组件更新');
    }

    selectOption(data) {
        // console.log(data);
        this.setState({
            sortItem: data
        })
        this.state.allSorts.forEach((items, index) => {
            if (data.category_type === items.category_type) {
                this.setState({
                    allProduct: items['product'],
                    productItem: items['product'][0]
                });
                return;
            }
        })
    }

    changeDiscount(e) {
        this.setState({
            productDiscount: e.target.value
        });
    }

    changeProduct(e) {
        // console.log(e.target.value);
        this.setState({
            productValue: e.target.value
        });
        this.state.allProduct.forEach((item, i) => {
            if (item.product_type === e.target.value) {
                this.setState({
                    productItem: item
                });
                return;
            }
        })
    }

    render() {
        return (
            <div className="home">
                <h5 className="homeTitle">商品新增</h5>
                <div className="addForms">
                    <div className="labelOption">
                        <div className="labelTitle">商品类别：</div>
                        <Myselect allSort={this.state.allSorts} changeselect={this.selectOption.bind(this)} />
                    </div>
                    <div className="labelOption">
                        <div className="labelTitle">商品款式：</div>
                        <div className="productsort">
                            <div className="downArrow hotwind icon-30jiantouxiangxiafill"></div>
                            <select className="productOption" value={this.state.productValue} onChange={this.changeProduct}>
                                {
                                    this.state.allProduct.map((item, i) => <option key={i} value={item.product_type}>{item.product_type_name}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <div className="labelOption">
                        <div className="labelTitle">商品名称：</div>
                        <input className="inputForm" type="text" name="productName" value={this.state.productName} onChange={this.handleChange} />
                    </div>
                    <div className="labelOption">
                        <div className="labelTitle">商品单价：</div>
                        <input className="inputForm" type="text" name="productPrice" value={this.state.productPrice} onChange={this.handleChange} />
                    </div>
                    <div className="labelOption">
                        <div className="labelTitle">商品单位：</div>
                        <input className="inputForm" type="text" name="productUnit" value={this.state.productUnit} onChange={this.handleChange} />
                    </div>
                    <div className="labelOption">
                        <div className="labelTitle">商品颜色：</div>
                        <input className="inputForm" type="text" name="productColor" value={this.state.productColor} onChange={this.handleChange} />
                    </div>
                    <div className="labelOption">
                        <div className="labelTitle">商品尺寸：</div>
                        <input className="inputForm" type="text" name="productSize" value={this.state.productSize} onChange={this.handleChange} />
                    </div>
                    <div className="labelOption">
                        <div className="labelTitle">入库数量：</div>
                        <input className="inputForm" type="text" name="productTotals" value={this.state.productTotals} onChange={this.handleChange} />
                    </div>
                    <div className="labelOption">
                        <div className="labelTitle">入库时间：</div>
                        <input className="inputForm" type="datetime-local" name="putStockTime" value={this.state.putStockTime} onChange={this.handleChange} />
                    </div>
                    <div className="labelOption">
                        <div className="labelTitle">打折优惠：</div>
                        <select className="inputForm" value={this.state.productDiscount} onChange={this.changeDiscount} >
                            <option value="false">无打折优惠</option>
                            <option value="true">优惠打折</option>
                        </select>
                    </div>
                    <div className="labelOption">
                        <div className="labelTitle">折扣开始：</div>
                        <input className="inputForm" disabled={this.state.productDiscount == 'true' ? false : true} type="datetime-local" name="discountStart" value={this.state.discountStart} onChange={this.handleChange} />
                    </div>
                    <div className="labelOption">
                        <div className="labelTitle">折扣终止：</div>
                        <input className="inputForm" disabled={this.state.productDiscount == 'true' ? false : true} type="datetime-local" name="discountEnd" value={this.state.discountEnd} onChange={this.handleChange} />
                    </div>
                </div>
                <button className="subBtn" onClick={this.submit}>提交</button>
            </div>
        )
    }
}