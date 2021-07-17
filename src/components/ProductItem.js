import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';


function ProductItem(props) {
  return (
    <>
      <li className='products__item'>
        <Link className='products__item__link' to={props.path}>
          <figure className='products__item__pic-wrap' data-category={props.label}>
            <img
              className='products__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='products__item__info'>
            <h5 className='products__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ProductItem;
