import React, { Component } from 'react';
import './AdminAction.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class AdminUpdateproduct extends Component {

    constructor(props) {
        super(props);
        this.onChangeproductName = this.onChangeproductName.bind(this);
        this.onChangeproductDiscription = this.onChangeproductDiscription.bind(this);
        this.onChangeproductPrice = this.onChangeproductPrice.bind(this);
        this.onChangeproductImage = this.onChangeproductImage.bind(this);
        this.onChangeproductQuantity = this.onChangeproductQuantity.bind(this);
        this.onChangecategoryID = this.onChangecategoryID.bind(this);
        this.onChangeproductStatus = this.onChangeproductStatus.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.state = {
            category: [],
            productName: '',
            productDiscription: '',
            productPrice: '',
            productImage: '',
            productQuantity: '',
            categoryDetail:{
                categoryID:'',
                categoryName:'',
                categoryDescription:'',
            },
            productID: null,
            productStatus:'',

        }
        this.getCategories();
    }
    componentDidMount() {
        this.getproduct(this.props.match.params.id);
    }
    getCategories() {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('auth')
          };
        axios
            .get('http://localhost:8080/categories/', {headers})
            .then(res => {
                this.setState({
                    category: res.data,
                });
            })
    }

    getproduct(ID) {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('auth')
          };
        axios
            .get(`http://localhost:8080/products/admin/${ID}` ,{headers})
            .then(res => {
                this.setState({
                    productID: res.data.productID,
                    productName: res.data.productName,
                    productDiscription: res.data.productDiscription,
                    productPrice: res.data.productPrice,
                    productImage: res.data.productImage,
                    productQuantity: res.data.productQuantity,
                    productStatus: res.data.productStatus,
                    categoryDetail:{
                        categoryID: res.data.category.categoryID,
                        categoryName: res.data.category.categoryName,
                        categoryDescription: res.data.category.categoryDescription,
                    }
                    
                })
            });
    }
  
    updateProduct() {
        console.log(this.state.categoryDetail   )
        var data = {
            productName: this.state.productName,
            productDiscription: this.state.productDiscription,
            productPrice: this.state.productPrice,
            productImage: this.state.productImage,
            productQuantity: this.state.productQuantity,
            productStatus: this.state.productStatus,
            category : {
                categoryID:this.state.categoryDetail.categoryID,
                categoryName:this.state.categoryDetail.categoryName,
                categoryDescription: this.state.categoryDetail.categoryDescription
            } 
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('auth')
        };
        axios.put(`http://localhost:8080/products/admin/${this.state.productID}`,
            data, { headers }).
            then(() => {
                alert("Update Suscessfully");
                this.props.history.push('/products/')
            }).catch((error) => {
                console.log(error)
            })
    }
    onChangeproductName(e) {
        this.setState({
            productName: e.target.value
        });
    }
    onChangeproductPrice(e) {
        this.setState({
            productPrice: e.target.value
        });
    }
    onChangeproductDiscription(e) {
        this.setState({
            productDiscription: e.target.value
        });
    }
    onChangeproductImage(e) {
        this.setState({
            productImage: e.target.value
        });
    }
    onChangeproductStatus(e) {
        this.setState({
            productStatus: e.target.value
        });
    }
    onChangecategoryID(e) {
        let category = this.state.category.find((i)=> {
            return i.categoryID === Number(e.target.value)
        })
        this.setState({
            categoryDetail: {
                ...category
            },
        });
    }
    onChangeproductQuantity(e) {
        this.setState({
            productQuantity: e.target.value
        });
    }


    render() {
        return (
            <div class="containerr">
                <div class="row">
                    <div class="col-25">
                        <label for="fname">product Name</label>
                    </div>
                    <div class="col-75">
                        <input
                            type="text"
                            id="fname"
                            name="productName"
                            placeholder="productName.."
                            value={this.state.productName}
                            onChange={this.onChangeproductName}
                        />
                    </div>
                </div>
                <div class="row">

                    <div class="row">
                        <div class="col-25">
                            <label for="Quantity">Quantity</label>
                        </div>
                        <div class="col-75">
                            <input type="number"
                                id="quantity"
                                name="quantity" placeholder="quantity"
                                value={this.state.productQuantity}
                                onChange={this.onChangeproductQuantity} required />
                        </div>

                    </div>
                    <div class="col-25">
                        <label for="fname">Product Image</label>
                    </div>
                    <div class="col-75">
                        <input type="text"
                            id="fname" name="productImage"
                            placeholder="This is link of image.."
                            value={this.state.productImage}
                            onChange={this.onChangeproductImage} required />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="lname">Price</label>
                    </div>
                    <div class="col-75">
                        <input type="text"
                            id="lname" name="productPrice"
                            placeholder="Price.."
                            value={this.state.productPrice}
                            onChange={this.onChangeproductPrice} required />
                    </div>
                    <div className="row">
                    <div className="col-25">
                        <label htmlFor="categoryID">category</label>
                    </div>
                    <div className="col-75">
                        <select id="categoryID" 
                            name="categoryID"  
                            onChange={this.onChangecategoryID}>                                {
                            this.state.category.map((item) => (
                                <option key={item.categoryID} selected={item.categoryID === this.state.categoryDetail.categoryID}
                                value={item.categoryID}>                       
                                {item.categoryName}
                                </option>
                            ))
                        }
                        </select>
                    </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="Description">Description</label>
                        </div>
                        <div className="col-75">
                            <input type="text"
                                id="Description"
                                name="productDiscription" 
                                placeholder="Description..."
                                value={this.state.productDiscription}
                                onChange={this.onChangeproductDiscription} required />
                        </div>

                    </div>
                    <div className="row">
                    <div className="col-25">
                        <label htmlFor="ProductStatus">Status</label>
                    </div>
                    <div className="col-75">
                        <select  value={this.state.productStatus}
                            onChange={this.onChangeproductStatus}>
                            <option>ACTIVE</option>
                            <option>INACTIVE</option>
                            ))
                        </select>
                    </div>
                    </div>
                    

                    

                </div>
                <Link to='/products/'>
          <button type="button" >Cancel</button>
        </Link>
                <div class="row">
                        <button onClick={this.updateProduct} >Update</button>
                </div>
            </div>
        )
    }
}
