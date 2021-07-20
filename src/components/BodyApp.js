import React from 'react';
import '../App.css';
import { Button } from './Button';
import './BodyApp.css';

function BodyApp() {
  return (
    <div className='body-container'>
      <h1>Shopping Now</h1>
      <p>What are you waiting for?</p>
      <div className='body-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  
  );
}

export default BodyApp;
