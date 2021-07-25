import React from 'react';
import '../App.css';
import { ButtonCus } from './ButtonCus';
import './BodyAppCus.css';

function BodyAppCustomer() {
  return (
    <div className='body-containerr'>
      <h1>Shopping Now</h1>
      <p>What are you waiting for?</p>
      <div className='body-btns'>
        <ButtonCus
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </ButtonCus>
      </div>
    </div>
  
  );
}

export default BodyAppCustomer;
