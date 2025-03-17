import React, { useEffect } from 'react'
import "./Styles/login.css"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock,faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
const Login = ({onLogin}) => {
    const [username, setUsername] = useState("admin");
    const [password, setPassword] = useState("1234");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add validation here
       if (username ==="admin" && password ==="1234" && username && password) {
          onLogin();
        } else {
          alert("Please enter both username and password");
        }
      };
 
  return (
    <div className='login_body'>
        <div className='login_container'>
        <div className='login_box'>
                         


            <form className='form-login' onSubmit = {handleSubmit}>
            <h2>Login</h2>
            <p>Welcome Back! Please Login to you account</p>
                    <div className='form-group'>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='' required />
                        <label>Username:</label>
                        <FontAwesomeIcon icon={faUser} className='icon_inputs' />

                    </div>
                    <div className='form-group'>
                    <input type={ showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='' required />
                    <label>Password:</label>
                    <FontAwesomeIcon icon={showPassword ? faLockOpen : faLock} className='icon_inputs lock'  onClick={()=>{setShowPassword(!showPassword)}}/>

                    </div>
                    <button type="submit" className="btn-primary">Login</button>
            </form> 
        </div>


             <div className='login_background'>
             </div> 

        </div>
    </div>
  )
}

export default Login