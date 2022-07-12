import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { useNavigate, Link } from "react-router-dom"
function SignUp({ fullName, username, password }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.fullName);
  const handleLogin = () => {
    dispatch(authActions.login());
  };
  const changeUsername = (full) => {
    dispatch(authActions.inputFullName(full));
  };
  console.log(user);
  console.log(isLoggedIn);
  return (
    <div className="form-container">
      <div className="inputs">
        <h1 className="login-head">Sign Up</h1>
        <div className="input-container">
          {/* <label>Full Name:</label> */}
          <input
            type="text"
            onChange={(e) => {
              changeUsername(e.target.value);
            }}
            value={fullName}
            placeholder="Full Name"
          />
        </div>
        <div className="input-container">
          {/* <label>Username:</label> */}
          <input type="text" value={username} placeholder="Username"/>
        </div>
        <div className="input-container">
          {/* <label>Password</label> */}
          <input type="password" value={password} placeholder="Password"/>
        </div>
        <button className="form-btn" onClick={handleLogin}>
          LOGIN
        </button>
        <p className="main-link-text">Already have an account? <Link to="/" className="main-link">Login here</Link></p>
      </div>
    </div>
  );
}

export default SignUp;
