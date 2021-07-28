import React from 'react';
import '../../App.css';
import BodyAppCustomer from '../BodyAppCustomer';
import Footer from '../Footer';
import NavbarCustomer from '../NavbarCustomer'
import ProductCard from '../../acustomer/ProductCard';
import Cart from './Cart';
import ResultCard from '../../acustomer/ResultCard';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import SignIn from '../SignIn';
import SignUp from './SignUp';

// import ProductCard from '../../customer/ProductCard';
function Home() {
  
  return (
    <>
      <NavbarCustomer/>
        <Router >
          <Switch>
            <Route path='/home/body' component={BodyAppCustomer}/>
            {/* <Route path='/' exact component={Home} /> */}
            <Route path='/home/card' component={ProductCard} />
            <Route path='/home/result' component={ResultCard} />
            <Route path='/cart' component={Cart} />
            {/* <Route path='/login' component={SignIn} />
            <Route path='/signup' component={SignUp} /> */}
            {/* <Route path='/detail/:id' component={Details} /> */}
          </Switch>
        </Router>
    </>
  );
}

export default Home;
