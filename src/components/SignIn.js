import React, { useState } from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';
import LogIn from './pages/LogIn';
import axios from 'axios';
export default function SignIn() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  async function access() {
    const body = {
      'username': username,
      'password': password,
    }
    const headers = {
      'Content-Type': 'application/json',
    };

    let response = await axios.post('http://localhost:8080/public/login', body, { headers })
    localStorage.setItem("auth", response.data.type+ " " +response.data.token)
  }
  return (
    <div class="container">
      <h1>Login</h1>
      <hr />

      <label for="email"><b>Username</b></label>
      <input type="text" placeholder="Enter Email" name="username" required onChange={(e) => setUsername(e.target.value)} />

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="password" required onChange={(e) => setPassword(e.target.value)} />

      <div class="clearfix">
        <Link to='/products/' className='btn-mobile'>
          <button onClick={access} class="signupbtn">Login</button>

        </Link>
        <Link to='/signup' className='btn-mobile'>
          <button type="submit" class="registerbtn">  Do you have an account!</button>
        </Link>
      </div>
    </div>
  );

}

