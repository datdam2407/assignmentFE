import React, { Component } from 'react';
import './AdminAction.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AdminCreateProduct extends Component {

    constructor(props) {
        super(props)
        this.onChangeproductName = this.onChangeproductName.bind(this);
        this.onChangeproductDiscription = this.onChangeproductDiscription.bind(this);
        this.onChangeproductPrice = this.onChangeproductPrice.bind(this);
        this.onChangeproductImage = this.onChangeproductImage.bind(this);
        this.onChangeproductQuantity = this.onChangeproductQuantity.bind(this);
        this.onChangecategoryID = this.onChangecategoryID.bind(this);
        this.createProduct = this.createProduct.bind(this);
        
        this.state = {
            category: [],
            productName: '',
            productDiscription: '',
            productPrice: '',
            productImage: '',
            productQuantity: 1,
            categoryID: '',
        }
        this.getCategories();

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
     onChangecategoryID(e) {
        this.setState({
            categoryID: e.target.value
        });
    }
     onChangeproductQuantity(e) {
        this.setState({
            productQuantity: e.target.value
        });
    }
    getCategories() {
        axios
            .get('http://localhost:8080/categories/', {})
            .then(res => {
                if(res.data.length > 0 ){
                    this.setState({
                        category: res.data,
                        categoryID : res.data[0].categoryID
                    });
                }
                
            })
    }

    async createProduct() {
        var product = {
            productName: this.state.productName,
            productDiscription: this.state.productDiscription,
            productPrice: this.state.productPrice,
            productImage: this.state.productImage,
            productQuantity: this.state.productQuantity,
            categoryID: this.state.categoryID
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('auth')
        };
        await axios.post(`http://localhost:8080/products?categoryid=${this.state.categoryID}`, product,
            { headers }
        )
           
    }

    render() {
        return (
            <div className="containerr">
                <div className="row">

                    <div className="col-25">
                        <label htmlFor="fname">Product Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname"
                            name="productName"
                            placeholder="Product name.."
                            value={this.state.productName}
                            onChange={this.onChangeproductName} />
                    </div>
                    <div className="col-25">
                        <label htmlFor="fname">Product Image</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname" 
                        name="productImage" placeholder="This is link of image.." 
                        value={this.state.productImage}
                        onChange={this.onChangeproductImage} />
                    </div>
                    <div className="col-25">
                        <label htmlFor="fname">Discription</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname" 
                        name="productDiscription" placeholder="This is Discription.." 
                        value={this.state.productDiscription}
                        onChange={this.onChangeproductDiscription} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="lname">Price</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="productPrice" placeholder="Price.."
                        value={this.state.productPrice}
                        onChange={this.onChangeproductPrice} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="categoryID">category</label>
                    </div>
                    <div className="col-75">
                        <select value={this.state.categoryID} id="categoryID" 
                            name="categoryID"  
                            onChange={this.onChangecategoryID}>                                {
                            this.state.category.map((item) => (
                                <option key={item.categoryID} value={item.categoryID}>
                                {/* {item.categoryID} */}
                                {item.categoryName}
                                </option>
                            ))
                        }
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="Quantity">Quantity</label>
                    </div>
                    <div className="col-75">
                        <input type="number" min="1" id="quantity"
                            name="productQuantity" placeholder="quantity"
                            value={this.state.productQuantity}
                            onChange={this.onChangeproductQuantity}/>
                    </div>
                </div>
                <Link to={"/products/"}>
                    <button onClick={this.createProduct}>Create</button>
                </Link>

            </div>
        )
    }
}