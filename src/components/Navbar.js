import React, { useState, useEffect } from 'react';
import { Link ,useHistory} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);


  let userLogin = sessionStorage.getItem("name");
  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const history = useHistory();
  const token = localStorage.getItem("auth");
  let check;
  if (token === null) {
      check = "NOT_LOGGED_IN";
  } else {
      check = "LOGGED_IN";
  }

  function Logout(event) {
    event.preventDefault();

    try {
        localStorage.clear();
        sessionStorage.clear();
        history.push("/");
    } catch (e) {
        alert(e.message);
    }
}
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a href="/admin/body" className='navbar-logo' >
            Assignment
            <i className='fab fa-typo3' />
          </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
            <li className='nav-item'>
              <a href="/admin/products/"
                className='nav-links'
              >
                Products </a>
            </li>
         
            <li className='nav-item'>
              <a
                href="/admin/categories/"
                className='nav-links'
              >
                Category
              </a>

            </li>
            <li className='nav-item'>
              <a href="#"
                className='nav-links'
              >
                 Welcome {userLogin}</a>
            </li>
            {check == "NOT_LOGGED_IN" ?
            <li>
              <Link
                to='/login'
                className='nav-links-mobile'
              >
                Login
              </Link>
            
           </li>:              
            <li nav-item>
            <Link to ='/' onClick={(e) => {Logout(e)}} data-item='Logout'          
                   className='nav-links'
            >Logout</Link>
            </li>
              }
          </ul>
          {/* {button && <Button buttonStyle='btn--outline' buttonPath='/login'>Login</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
