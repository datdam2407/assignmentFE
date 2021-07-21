import React, { Component } from 'react';
import './AdminAction.css';
import axios from 'axios';

export default class AdminCreateProduct extends Component {
    
    constructor(props) {
        super(props)
    
    this.state = {
        category :[],
        productName: '',
        productDiscription: '',
        productPrice:'',
        productImage:'',
        productQuantity:'',
        categoryid:'',
      }
    }
    componentDidMount() {
        axios
              .get('http://localhost:8080/categories/')
              .then(res => {
                this.setState({
                    category: res.data
                })
                console.log(res.data);
                })
            }
    //   getCategories() {
    //     // localStorage.getItem("auth")
    //     axios
    //       .get('http://localhost:8080/categories/')
    //       .then(res => {
    //         console.log(res.data)
    //     }
    // }
      handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value });
      }
      
      handleSubmit = event => {
        event.preventDefault();
        const product = {
          productName: this.state.productName,
          productDiscription: this.state.productDiscription,
          productPrice: this.state.productPrice,
          productImage: this.state.productImage,
          productQuantity: this.state.productQuantity,
          categoryid :  this.state.categoryid,
        };
        axios.post('https://localhost:8080/products', { product } , {
            params:{
                categoryid :  this.state.categoryid,
                
            }})
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
        onclick = (e) =>{
            var name = e.target;
        }
    // function category() {
        
    // }
    render() {
        
        return (
            <div class="containerr">
                <form onSubmit={this.handleSubmit}>
                <div class="row">

                    <div class="col-25">
                        <label for="fname">Product Name</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="fname" name="productname" placeholder="Product name.." onChange={this.handleChange}/>
                    </div>
                    <div class="col-25">
                        <label for="fname">Product Image</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="fname" name="image" placeholder="This is link of image.." onChange={this.handleChange}/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="lname">Price</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="lname" name="price" placeholder="Price.." onChange={this.handleChange}/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="country">category</label>
                    </div>
                    <div class="col-75">
                        
                        <select id="country" name="categoryid" select="this.state.categoryid">
                            <option value="Laptop">Laptop</option>
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
                <div class="row">
                    <button  type="submit" value="Submit">Create</button>
                </div>
                </form>
            </div>
        )
    }
}
