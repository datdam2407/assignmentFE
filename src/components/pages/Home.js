import React from 'react';
import '../../App.css';
import BodyAppCustomer from '../BodyAppCustomer';
import Footer from '../Footer';
import NavbarCustomer from '../NavbarCustomer'
// import ProductCard from '../../customer/ProductCard';
function Home() {
  return (
    <>
      <NavbarCustomer/>
      <BodyAppCustomer/>      
      <Footer />
    </>
  );
}

export default Home;
