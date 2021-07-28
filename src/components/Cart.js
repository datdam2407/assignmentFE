// import NavbarCustomer from './NavbarCustomer';
// import Main from './components/Main';
// import Basket from './Basket';
// import ProductCard from '../acustomer/ProductCard';
// import { useState } from 'react';
// // import axios from 'axios';

// function Cart() {

//   const { products } = ProductCard;
//   const [cartItems, setCartItems] = useState([]);
//   const onAdd = (product) => {
//     const exist = cartItems.find((x) => x.productID === product.productID);
//     if (exist) {
//       setCartItems(
//         cartItems.map((x) =>
//           x.productID === product.productID ? { ...exist, qty: exist.qty + 1 } : x
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...product, qty: 1 }]);
//     }
//   };
//   const onRemove = (product) => {
//     const exist = cartItems.find((x) => x.productID === product.productID);
//     if (exist.qty === 1) {
//       setCartItems(cartItems.filter((x) => x.productID !== product.productID));
//     } else {
//       setCartItems(
//         cartItems.map((x) =>
//           x.productID === product.productID ? { ...exist, qty: exist.qty - 1 } : x
//         )
//       );
//     }
//   };
//   return (
//     <div className="App">
//       <NavbarCustomer countCartItems={cartItems.length}></NavbarCustomer>
//       <div className="row">
//         <Main products={products} onAdd={onAdd}></Main>
//         <Basket
//           cartItems={cartItems}
//           onAdd={onAdd}
//           onRemove={onRemove}
//         ></Basket>
//       </div>
//     </div>
//   );
// }

// export default Cart;