import React from 'react';
import './SignIn.css';

function Register() {
  return (
    <div class="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required />

    <label for="email"><b>Username</b></label>
    <input type="text" placeholder="Username" name="username" required />

    <label for="email"><b>Phone</b></label>
    <input type="text" placeholder="Enter Phone number" name="phone" required />

    <label for="email"><b>address</b></label>
    <input type="text" placeholder="Address" name="address" required />

    <label for="email"><b>Fullname</b></label>
    <input type="text" placeholder="Your fullname" name="fullname" required />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />

    <div class="clearfix">
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="signupbtn">Sign Up</button>
    </div>
    </div>
);
}

export default Register;
