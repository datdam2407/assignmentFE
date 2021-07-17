import React from 'react';
import './SignIn.css';

function SignIn() {
  return (
    <div class="container">
    <h1>Login</h1>
    <hr/>

    <label for="email"><b>Username</b></label>
    <input type="text" placeholder="Enter Email" name="email" required />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />

    <div class="clearfix">
      <button type="submit" class="signupbtn">Login</button>
      <button type="submit" class="signupbtn">Do you have an account!</button> 
    </div>
    </div>
);
}

export default SignIn;
