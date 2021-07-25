import React from 'react';
import '../App.css';
import { Button } from './Button';
import './BodyApp.css';

function BodyApp() {
  return (
    <div className='body-container'>
      <h1>Admin Page</h1>
      <p>HI Have a nice day!</p>
      <div className='body-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          MANAGEMENT
        </Button>
      </div>
    </div>
  
  );
}

export default BodyApp;
