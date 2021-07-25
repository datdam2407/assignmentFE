import React, { useState } from 'react';
import './SignIn.css';
import { Link , useHistory} from 'react-router-dom';
import axios from 'axios';
import NavbarCustomer from './NavbarCustomer';
import validator ,{ isEmpty} from 'validator'


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
    if(validator.isEmpty(username)){
      msg.username= "Please input your username!!!"
    }
    if(validator.isEmpty(password)){
      msg.username= "Please input your password!!!"
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
          history.push("/Admin");
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
      <input type="text" placeholder="Enter Email" name="username" required 
      onChange={(e) => setUsername(e.target.value)} />
      <p color = "red">{validation.username}</p>
      <label htmlFor="password"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="password" required 
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

