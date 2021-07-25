import React, { Component , useState } from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import validator from 'validator'


export default class Register extends Component {
  
  
  
  constructor(props) {
    super(props)
    this.onChangepassword = this.onChangepassword.bind(this);
    this.onChangeaddress = this.onChangeaddress.bind(this);
    this.onChangephone = this.onChangephone.bind(this);
    this.onChangefullName = this.onChangefullName.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangeusername = this.onChangeusername.bind(this);
    this.createAccount = this.createAccount.bind(this);
    
    this.state = {
      password: '',
      address: '',
      phone: '',
      fullName: '',
      email: '',
      username: '',
    }
  }
  
  onChangeusername(e) {
    this.setState({
      username: e.target.value,
 
    });
  }
  onChangeemail(e) {
    this.setState({
      email: e.target.value,
 
    });
  }
  onChangephone(e) {
    this.setState({
      phone: e.target.value,
 
    });
  }
  onChangefullName(e) {
    this.setState({
      fullName: e.target.value,
 
    });
  }
  onChangepassword(e) {
    this.setState({
      password: e.target.value,
 
    });
  }
  onChangeaddress(e) {
    this.setState({
       address: e.target.value,
 
    });
  }

  createAccount() {
    var Account = {
      password: this.state.password,
      address: this.state.address,
      phone: this.state.phone,
      fullName: this.state.fullName,
      email: this.state.email,
      username: this.state.username,
    };
    console.log(Account);
    axios.post('http://localhost:8080/public/register', Account)
  }
  render() {
    return (
      <div class="containerrr">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />

        <label htmlFor="email"><b>Email</b></label>
        <input type="text"
          placeholder="Enter Email"
          name="email"
          value={this.state.email}
          onChange={this.onChangeemail}
          required />

        <label htmlFor="email"><b>Username</b></label>
        <input type="text"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.onChangeusername}
          required />

        <label htmlFor="email"><b>Phone</b></label>
        <input type="text"
          placeholder="Enter Phone number"
          name="phone"
          value={this.state.phone}
          onChange={this.onChangephone}
          required />

        <label htmlFor="email"><b>address</b></label>
        <input type="text"
          placeholder="Address"
          name="address"
          value={this.state.address}
          onChange={this.onChangeaddress} required />

        <label htmlFor="email"><b>Fullname</b></label>
        <input type="text"
          placeholder="Your fullname"
          name="fullName"
          value={this.state.fullName}
          onChange={this.onChangefullName} required />

        <label htmlFor="password"><b>Password</b></label>
        <input type="password"
          placeholder="Enter Password"
          name="password"
          value={this.state.password}
          onChange={this.onChangepassword}
          required />

        <div class="clearfix">
          <Link to='/login'>
            <button type="button" class="cancelbtn">Cancel</button>
          </Link>
          <Link to='/login'>
            <button onClick={this.createAccount} class="signupbtn">Sign Up</button>
          </Link>
        </div>
      </div>
    );
  }
}
