import React, { Component } from 'react';
import './AdminAction.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import  Validator from './Validator';
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
            productQuantity: 0,
            categoryID: '',
            categoryName:'',
            errors: {},
        }
        const requiredWith = (value, field, state) => (!state[field] && !value) || !!value;
        const rules = [
            {
                field: 'productName',
                method: 'isEmpty',
                validWhen: false,
                message: 'This field is required.',
            },
            {
                field: 'productImage',
                method: 'isEmpty',
                validWhen: false,
                message: 'This Image must be required.',
            },
            {
                field: 'productQuantity',
                method: 'isEmpty',
                validWhen: false,
                message: 'This Quantity must be required.',
            },
            {
                field: 'productQuantity',
                method: 'isInt',
                args: [{ min: 1 }],
                validWhen: true,
                message: 'Quantity must be positive number!!',
            },
            {
                field: 'productPrice',
                method: 'isEmpty',
                validWhen: false,
                message: 'Price must be required.',
            },
            {
                field: 'productPrice',
                method: 'isFloat',
                args: [{ min: 100000 }],
                validWhen: true,
                message: 'Invalid money amount!!',
            },
            {
                field: 'productDiscription',
                method: 'isEmpty',
                validWhen: false,
                message: 'Discription must be required.',
            },
           
        ];
        this.validator = new Validator(rules);
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
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('auth')
        };
        axios
            .get('http://localhost:8080/categories/admin', { headers })
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        category: res.data,
                        categoryID: res.data[0].categoryID
                    });
                }

            })
    }

    async createProduct(e) {
        e.preventDefault();

        this.setState({
            errors: this.validator.validate(this.state),
        });
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
        await axios.post(`http://localhost:8080/products?categoryid=${this.state.categoryID}`,
            product,
            { headers }
        ).then(() => {
            alert("Create Successfully")
            this.props.history.push('/admin/products/')
        }).catch(err => {
            // if (err.response) {

            //     if (err.response.data.productName === "Name of product must be filled!!") {
            //         alert("Name is empty");
            //     }
            //     else if (err.response.data.productDiscription === "Discription must be filled must be filled....") {
            //         alert("Description is empty");
            //     }
                // else if (err.response.data.productImage === "Should be inputed link image !!!") {
                //     alert("Should be inputed link image !!!");
                // }
                // else if(this.sproductQuantity <= 0){
                //     alert("Quantity of product more than 0");
                // }
                // else if(this.state.productPrice <= 0){
                //     alert("Price of product more than 0");
                // }
            // }
            // else {
            //     alert("Fail to Create Product!");
            // }
        })
    }

    render() {
        const { errors } = this.state;
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
                    </div>
                    {errors.productName && <div className="validation" style={{ display: 'block', color: "red" }}>{errors.productName}</div>}
                    <div className="row">

                    <div className="col-25">
                        <label htmlFor="fname">Product Image</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname"
                            name="productImage" placeholder="This is link of image.."
                            value={this.state.productImage}
                            onChange={this.onChangeproductImage} />
                    </div>
                    </div>
                    {errors.productImage && <div className="validation" style={{ display: 'block', color: "red" }}>{errors.productImage}</div>}
                    <div className="row">

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
                    {errors.productDiscription && <div className="validation" style={{ display: 'block', color: "red" }}>{errors.productDiscription}</div>}

               

                <div className="row">
                    <div className="col-25">
                        <label htmlFor="lname">Price</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="productPrice" placeholder="Price.."
                            value={this.state.productPrice}
                            onChange={this.onChangeproductPrice} />
                    </div>
                    {errors.productPrice && <div className="validation" style={{ display: 'block', color: "red" }}>{errors.productPrice}</div>}

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
                    {/* {errors.categoryName && <div className="validation" style={{ display: 'block', color: "red" }}>{errors.categoryName}</div>} */}

                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="Quantity">Quantity</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="quantity"
                            name="productQuantity" placeholder="quantity"
                            value={this.state.productQuantity}
                            onChange={this.onChangeproductQuantity} />
                    </div>
                {errors.productQuantity && <div className="validation" style={{ display: 'block', color: "red" }}>{errors.productQuantity}</div>}

                </div>
                <Link to='/admin/products/'>
                    <button type="button" >Cancel</button>
                </Link>
                <button onClick={this.createProduct}>Create</button>

            </div>
        )
    }
}