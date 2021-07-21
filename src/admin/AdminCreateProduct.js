import React, { Component } from 'react';
import './AdminAction.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AdminCreateProduct extends Component {

    constructor(props) {
        super(props)
        this.state = {
            category: [],
            productName: '',
            productDiscription: '',
            productPrice: '',
            productImage: '',
            productQuantity: '',
            categoryid: '',
        }
    }
    componentDidMount() {
        this.getCategories();
    }

    getCategories(){
        axios
        .get('http://localhost:8080/categories/', {})
        .then(res => {
            this.setState({
                category: res.data
            });
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    getData() {
        axios
            .get('http://localhost:8080/categories/')
            .then(res => {
                var tdata = res.data;
                console.log('data-->' + JSON.stringify(tdata))
                var slice = tdata.slice(this.state.offset,
                    this.state.offset + this.state.perPage)
                this.setState({
                    pageCount: Math.ceil(tdata.length / this.state.perPage),
                    orgtableData: tdata,
                    tableData: slice
                })
            });
    }
    async createProduct(){
        const product = {
            productName: this.state.productName,
            productDescription: this.state.productDescription,
            productPrice: this.state.productPrice,
            productImage: this.state.productImage,
            productQuantity: this.state.productQuantity,
            categoryid: this.state.categoryid,
        };
        const headers = {
            'Authorization': 'auth',
        }
            
        await axios.post('https://localhost:8080/products',  product , { headers,
            params: {
                categoryid: this.state.categoryid,

            }
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
    
    render() {
        return (
            <div class="containerr">
                    <div class="row">

                        <div class="col-25">
                            <label for="fname">Product Name</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="fname" name="productname" placeholder="Product name.." onChange={this.handleChange} />
                        </div>
                        <div class="col-25">
                            <label for="fname">Product Image</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="fname" name="image" placeholder="This is link of image.." onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="lname">Price</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="lname" name="price" placeholder="Price.." onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="categoryid">category</label>
                        </div>
                        <div class="col-75">
                            <select id="categoryid" name="categoryid" >                                {
                                    this.state.category.map((item) => (
                                        <option key={item.categoryid} 
                                        value={item.categoryid}>
                                            {item.categoryName}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="Quantity">Quantity</label>
                        </div>
                        <div class="col-75">
                            <input type="number" id="quantity" name="quantity" placeholder="quantity" onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <Link to={"/categories/"}>
                        <button onClick={this.createProduct}>Create</button>
                    </Link>

            </div>
        )
    }
}
