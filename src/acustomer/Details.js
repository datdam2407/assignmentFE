// import React, { Component } from 'react'
// import { DataContext } from './Context'
// import {Link} from 'react-router-dom'
// // import '../css/Details.css'
// import axios from 'axios';



// export class Details extends Component {
//     static contextType = DataContext;
    
//     state = {
//         product: [],
//         category: [],
//         categoryDetail:{
//             categoryID:'',
//             categoryName:'',
//             categoryDescription:'',
//         },
//     }
    
//       componentDidMount() {
//         this.getproduct(this.props.match.params.id);
//     }
//     getCategories() {
//         const headers = {
//             'Content-Type': 'application/json',
//             'Authorization': localStorage.getItem('auth')
//           };
//         axios
//             .get('http://localhost:8080/categories/admin', {headers})
//             .then(res => {
//                 this.setState({
//                     category: res.data,
//                 });
//             })
//     }
//       getproduct(ID) {
//         const headers = {
//             'Content-Type': 'application/json',
//             'Authorization': localStorage.getItem('auth')
//           };
//         axios
//             .get(`http://localhost:8080/products/admin/${ID}` ,{headers})
//             .then(res => {
//                 this.setState({
//                     productID: res.data.productID,
//                     productName: res.data.productName,
//                     productDiscription: res.data.productDiscription,
//                     productPrice: res.data.productPrice,
//                     productImage: res.data.productImage,
//                     productQuantity: res.data.productQuantity,
//                     productStatus: res.data.productStatus,
//                     categoryDetail:{
//                         categoryID: res.data.category.categoryID,
//                         categoryName: res.data.category.categoryName,
//                         categoryDescription: res.data.category.categoryDescription,
//                     }       
//                 })
//             })
//     }
     



//     addCart = (id) =>{
//         const {products, cart} = this.state;
//         const check = cart.every(item =>{
//             return item._id !== id
//         })
//         if(check){
//             const data = products.filter(product =>{
//                 return product._id === id
//             })
//             this.setState({cart: [...cart,...data]})
//         }else{
//             alert("The product has been added to cart.")
//         }
//     };
//     render() {
//         const {product} = this.state;
//         console.log(product)
//         const {addCart} = this.addCart;
//         return (
//             <>
//                 {
//                     product.map(item =>(
//                         <div className="details" key={item.productID}>
//                             <img src={item.src} alt=""/>
//                             <div className="box">
//                                 <div className="row">
//                                 <img id="product-img" src={item.productImage} alt="product" />
//                                     <h2>{item.productName}</h2>
//                                     <span>${item.productPrice}</span>
//                                 </div>
//                                 <p>{item.productDiscription}</p>
//                                 <Link to="/cart" className="cart"
//                                 onClick={()=> addCart(item.productID)}>
//                                     Add to cart
//                                 </Link>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </>
//         )
//     }
// }

// export default Details