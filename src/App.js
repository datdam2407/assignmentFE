import React from 'react';
import Home from './components/pages/Home';
import Admin from './components/pages/Admin';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Customer


//Login and Register
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';
import Details from './acustomer/Details';

import './App.css';
import SignIn from './components/SignIn';
function App() {
    return (
      <>
        <Router >
          
          <Switch>
          <Route exact path="/">
              <Redirect to="/home/card" />
            </Route>
            <Route path='/home'  component={Home} />
            <Route path='/admin' component={Admin} />
            {/* <Route path='/' component={ResultCard} /> */}
            {/* <Route path='/cart' component={Cart} /> */}
            <Route path='/login' component={LogIn} />
            <Route path='/signup' component={SignUp} />

            {/* <Route path='/detail/:id' component={Details} /> */}
          </Switch>
        </Router>

      </>
    );
  }
export default App;
