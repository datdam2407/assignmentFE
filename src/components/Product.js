import React from 'react';
import './Product.css';
import ProductItem from './ProductItem';

function Product() {
  return (
    
    <div className='products'>
      <div className='products__container'>
        <div className='products__wrapper'>
          <ul className='products__items'>
            <ProductItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/cart'
            />
            <ProductItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/cart'
            />
          </ul>

          <ul className='products__items'>
            <ProductItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/cart'
            />
            <ProductItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/cart'
            />
            <ProductItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/cart'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Product;
