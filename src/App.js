import React , {useEffect, useState}from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import productlistCard from './customer/ProductCard';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';
import Cart from './components/pages/Cart';

import AdminProductList from './admin/AdminProductList';
import AdminCategory from './admin/AdminCategory';
import AdminCreateProduct from './admin/AdminCreateProduct';
import AdminCreateCategory from './admin/AdminCreateCategory';
import AdminUpdateCategory from './admin/AdminUpdateCategory';
import ProductCard from './customer/ProductCard';

function App() {
  return (
    <>
      <Router>
        <Navbar />        
        <Switch>  
          <Route path='/' exact component={Home}/>
          <Route path='/products/' component={AdminProductList} />
          <Route path='/card/' component={ProductCard} />
          <Route path='/categories/' component={AdminCategory} />
          <Route path='/login' component={LogIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={AdminCreateProduct} />
          <Route path='/updateCategory/:id' component={AdminUpdateCategory} />
          <Route path='/createCategory' component={AdminCreateCategory} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
