import React from 'react';
import '../../App.css';
import BodyApp from '../BodyApp';
import Footer from '../Footer';
import Navbar from '../Navbar';
// import ProductCard from '../../customer/ProductCard';
function Home() {
  return (
    <>
      <Navbar/>
      <BodyApp/>      
      <Footer />
    </>
  );
}

export default Home;
