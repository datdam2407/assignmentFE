import React, { useState } from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import NavbarCustomer from './NavbarCustomer';
import validator from 'validator'


export default function Register() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [validation, setValidation] = useState("");


  async function register() {

    const body = {
      'username': username,
      'password': password,
      'address': address,
      'phone': phone,
      'fullname': fullName,
      'email': email,
    }
    let response = await axios.post('http://localhost:8080/public/register', body)
    return response;
  }
  const validateAll = () => {
    const msg = {}
    if (validator.isEmpty(email)) {
      msg.email = "Please input your email!!!"
    }
    if (validator.isEmpty(username)) {
      msg.username = "Please input your username!!!"
    }
    if (validator.isEmpty(phone)) {
      msg.phone = "Please input your phone!!!"
    }
    if (validator.isEmpty(address)) {
      msg.address = "Please input your address!!!"
    }
    if (validator.isEmpty(fullName)) {
      msg.fullName = "Please input your fullname!!!"
    }
    if (validator.isEmpty(password)) {
      msg.password = "Please input your password!!!"
    }

    setValidation(msg)
    if (Object.keys(msg).length > 0) return false;
    return true;
  }
  async function handleSubmit(event) {

    event.preventDefault();
    const isValid = validateAll();
      const authortication = await register();
      console.log(authortication.data);
  

  }
  return (
    <div class="containerrr">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />

      <label htmlFor="email"><b>Email</b></label>
      <input type="text"
        placeholder="Enter Email"
        name="email" required
        onChange={(e) => setEmail(e.target.value)} />
      <div style={{ color: "red" }}>{validation.email}</div>

      <label htmlFor="username"><b>Username</b></label>
      <input type="text"
        placeholder="Username"
        name="username"

        required
        onChange={(e) => setUsername(e.target.value)} />
      <div style={{ color: "red" }}>{validation.username}</div>

      <label htmlFor="phone"><b>Phone</b></label>

      <input type="text"
        placeholder="Enter Phone number"
        name="phone"
        required
        onChange={(e) => setPhone(e.target.value)} />
      <div style={{ color: "red" }}>{validation.phone}</div>


      <label htmlFor="address"><b>address</b></label>
      <input type="text"
        placeholder="Address"
        name="address"
        required
        onChange={(e) => setAddress(e.target.value)} />
      <div style={{ color: "red" }}>{validation.address}</div>


      <label htmlFor="fullName"><b>Fullname</b></label>
      <input type="text"
        placeholder="Your fullname"
        name="fullName"
        required
        onChange={(e) => setFullName(e.target.value)} />
      <div style={{ color: "red" }}>{validation.fullName}</div>

      <label htmlFor="password"><b>Password</b></label>
      <input type="password"
        placeholder="Enter Password"
        name="password"
        required
        onChange={(e) => setPassword(e.target.value)} />
      <div style={{ color: "red" }}>{validation.password}</div>

      <div class="clearfix">
        <Link to='/login'>
          <button type="button" class="cancelbtn">Cancel</button>
        </Link>
        <Link to='/login'>
          <button onClick={(e) => { handleSubmit(e) }} className="signupbtn">Register</button>
        </Link>
      </div>
    </div>
  );
}


