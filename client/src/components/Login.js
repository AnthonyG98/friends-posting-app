import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login({ fullName, username }) {
  let history = useNavigate();
  let url = `http://localhost:3001`
  const dispatch = useDispatch();
  const userUsername = useSelector((state) => state.auth.username);
  const userPassword = useSelector((state) => state.auth.password);
  const changeFullName = (fullName) => {
    dispatch(authActions.inputFullName(fullName));
  };
  const changeUsername = (username) => {
    dispatch(authActions.inputUsername(username));
  };
  const changePassword = (password) => {
    dispatch(authActions.inputPassword(password));
  };
 
  const onLogin = () =>{
    const loginErrText  = document.getElementById("login-err");
    const loginData = {
      username: userUsername,
      password: userPassword
    }
    axios.post(`${url}/users/login`, loginData).then(response =>{
      if(response.data.error){
        loginErrText.innerText = response.data.error;
      } else {
        history("/dashboard");
      }
    })
  }
  return (
    <div className="form-container">
      <div className="inputs">
        <h1 className="login-head">LOGIN</h1>
        <p id="login-err"></p>
        <div className="input-container">
          {/* <label>Username:</label> */}
          <input type="text" placeholder="Username"
            onChange={(e) => {
              changeUsername(e.target.value);
            }}
          />
        </div>
        <div className="input-container">
          {/* <label>Password</label> */}
          <input type="password" placeholder="Password"
          onChange={(e) => {
            changePassword(e.target.value);
          }}
          />
        </div>
        <button className="form-btn" onClick={onLogin}>
          LOGIN
        </button>
        <p className="main-link-text">New user? <Link to="/signup" className="main-link">Sign up here</Link></p>
      </div>
    </div>
  );
}

export default Login;
