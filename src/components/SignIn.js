import React, { useState } from 'react';
import './SignIn.css';
import { Link , useHistory} from 'react-router-dom';
import axios from 'axios';
import NavbarCustomer from './NavbarCustomer';
import validator from 'validator'


export default function SignIn() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState("");
  const history = useHistory();

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
    return response;
  }
  const validateAll = () =>{
    const msg ={}
    if(validator.isEmpty(username) ){
      msg.username= "Please input your username!!!"
    }
    if(username.length < 6){
      msg.username= "Your username have at least 6 characters!!!"
    }
    if(validator.isEmpty(password)){
      msg.password= "Please input your password!!!"
    }
    if(password.length < 6){
      msg.password= "Your password is so weeek"
    }
    setValidation(msg)
    if(Object.keys(msg).length > 0 ) return false;
    return true;
  }
  async function handleSubmit(event) {
    
    event.preventDefault();
    const isValid = validateAll();
    try {
        const authortication = await access();
        console.log(authortication.data);

        if (authortication.data.roles[0] === "ROLE_MANAGER") {
          sessionStorage.setItem("login" , authortication.data.roles[0]);
          history.push("/admin/body");
        }
        else {
            history.push("/");
        }
        console.log(authortication.data);
    } catch (e) {
        alert("opps wrong passwword or username");
    }
}
  return (
    <>
    <NavbarCustomer/>
    
    <div className="containerrr">
      
      <hr/>

      <label htmlFor="email"><b>Username</b></label>
      <input min="6" type="text" placeholder="Enter Email" name="username" required 
      onChange={(e) => setUsername(e.target.value)} />
      <div style={{color : "red"}}>{validation.username}</div>
      <label htmlFor="password"><b>Password</b></label>
      <input min="6" type="password" placeholder="Enter Password" name="password" required 
      onChange={(e) => setPassword(e.target.value)} />
      <div style={{color : "red"}}>{validation.password}</div>

      <div className="clearfix">
          <button onClick={(e) => { handleSubmit(e) }} className="signupbtn">Login</button>
        <Link to='/signup' className='btn-mobile'>
          <button type="submit" className="registerbtn">  Do you have an account!</button>
        </Link>
      </div>
    </div>
    </>
  );

}

