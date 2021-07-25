import React from 'react';
import Home from './components/pages/Home';
import Admin from './components/pages/Admin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import productlistCard from './customer/ProductCard';
// import Products from './components/pages/Products';

// Customer
import ProductCard from './acustomer/ProductCard';
import Cart from './components/pages/Cart';

//Login and Register
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';

//Admin
import AdminProductList from './admin/AdminProductList';
import AdminCategory from './admin/AdminCategory';
import AdminCreateProduct from './admin/AdminCreateProduct';
import AdminCreateCategory from './admin/AdminCreateCategory';
import AdminUpdateCategory from './admin/AdminUpdateCategory';
import AdminUpdateproduct from './admin/AdminUpdateProduct';
import './App.css';
function App() {
  return (
    <>
      <Router >
        <Switch>  
          <Route path='/' exact component={Home}/>
          <Route path='/products/'exact component={AdminProductList} />
          {/* <Route path='/card/'exact component={CustomerProductList} /> */}
          <Route path='/Admin'exact component={Admin}/>
          <Route path='/card/' component={ProductCard} />
          <Route path='/categories/' component={AdminCategory} />
          <Route path='/login' component={LogIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create/' component={AdminCreateProduct} />
          <Route path='/updateCategory/:id' component={AdminUpdateCategory} />
          <Route path='/updateProduct/:id' component={AdminUpdateproduct} />
          <Route path='/createCategory' component={AdminCreateCategory} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
