import React from 'react';
import '../../App.css';
import BodyApp from '../BodyApp';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


//Admin
import AdminProductList from '../../admin/AdminProductList';
import AdminCategory from '../../admin/AdminCategory';
import AdminCreateProduct from '../../admin/AdminCreateProduct';
import AdminCreateCategory from '../../admin/AdminCreateCategory';
import AdminUpdateCategory from '../../admin/AdminUpdateCategory';
import AdminUpdateproduct from '../../admin/AdminUpdateProduct';
import AdminResultSearch from '../../admin/AdminResultSearch'

// import ProductCard from '../../customer/ProductCard';
function Admin() {
  let role = sessionStorage.getItem("login");
  if (role === "ROLE_MANAGER") {
    return (
      <>
        <Navbar />
        <Router >
          <Switch>
            <Route path='/admin/body' component={BodyApp} />
            <Route path='/admin/products/' component={AdminProductList} />
            {/* <Route path='/admin' exact component={Admin} /> */}
            <Route path='/admin/categories/' component={AdminCategory} />
            <Route path='/admin/create/' component={AdminCreateProduct} />
            <Route path='/admin/updateCategory/:id' component={AdminUpdateCategory} />
            <Route path='/admin/updateProduct/:id' component={AdminUpdateproduct} />
            <Route path='/admin/createCategory' component={AdminCreateCategory} />
            <Route path='/admin/home' component={AdminResultSearch} />
          </Switch>
        </Router>
        <Footer />
      </>
    );
  }else{
    return(
    <Redirect to="/" />
    )
  }
}

export default Admin;
