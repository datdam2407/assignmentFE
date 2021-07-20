// import React, { Component } from 'react';
// import './AdminAction.css';
// import axios from 'axios';

// export default class AdminCreateProduct extends Component {

    
//     createData() {
//             axios
//               .post('http://localhost:8080/products/')
//               .then(res => {
//                 var tdata = res.data;
//                 console.log('data-->' + JSON.stringify(tdata))
//                 var slice = tdata.slice(this.state.offset,
//                   this.state.offset + this.state.perPage)
//                 this.setState({
//                   pageCount: Math.ceil(tdata.length / this.state.perPage),
//                   orgtableData: tdata,
//                   tableData: slice
//                 })
//               });
//           }
    
    
//     render() {
//         return (
//             <div class="containerr">
//                 <div class="row">

//                     <div class="col-25">
//                         <label for="fname">Product Name</label>
//                     </div>
//                     <div class="col-75">
//                         <input type="text" id="fname" name="productname" placeholder="Product name.." />
//                     </div>
//                     <div class="col-25">
//                         <label for="fname">Product Image</label>
//                     </div>
//                     <div class="col-75">
//                         <input type="text" id="fname" name="image" placeholder="This is link of image.." />
//                     </div>
//                 </div>
//                 <div class="row">
//                     <div class="col-25">
//                         <label for="lname">Price</label>
//                     </div>
//                     <div class="col-75">
//                         <input type="text" id="lname" name="price" placeholder="Price.." />
//                     </div>
//                 </div>
//                 <div class="row">
//                     <div class="col-25">
//                         <label for="country">category</label>
//                     </div>
//                     <div class="col-75">
//                         <select id="country" name="category">
//                             <option value="Laptop">Laptop</option>
//                             <option value="PC">PC</option>
//                             <option value="Iphone">Iphone</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div class="row">
//                     <div class="col-25">
//                         <label for="Quantity">Quantity</label>
//                     </div>
//                     <div class="col-75">
//                         <input type="number" id="quantity" name="quantity" placeholder="quantity"></input>
//                     </div>
//                 </div>
//                 <div class="row">
//                     <input type="submit" value="Submit" />
//                 </div>
//             </div>
//         )
//     }
// }
