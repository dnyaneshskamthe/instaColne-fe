import React, { useState, useRef } from 'react';
import { useNavigate , Link } from 'react-router-dom';

const Login = () => {
    const [isUser, setIsUser] = useState(false);
    const userRef = useRef();
    const passRef = useRef();
    const navigate = useNavigate()
    const checkSignIn = (e) => {
        e.preventDefault();
        const username = userRef.current.value;
        const password = passRef.current.value;
        if(username === 'dnyanesh@123.com' && password === 'Dnyanesh45'){
            navigate('../Postview')
        }
        else{
            alert('Wrong credentials!')
        }
        
    }
  return (
    <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            ref = {userRef}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            ref = {passRef}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label  ms-2" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-flex flex-center">
          <button className="btn btn-lg btn-success" onClick={checkSignIn}>
            SignIn
          </button>
        </div>
        <p className="forgot-password text-right mt-2">
          Forgot <a href="#">password?</a>
        </p>
        <p className="mt-3">
            New user? <Link to="/register">Register here</Link>
        </p>      
        <h5>
          <marquee>email: dnyanesh@123.com and pw: Dnyanesh45</marquee>
        </h5></form>
  )
}

export default Login