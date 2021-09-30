import React from "react";

import "../css/sign-up.css";
import { Link } from "react-router-dom";
import useForm from "../useForm";
// import validate from "../validate";

function Login() {
  const { errors, input, handleChange, handleLoginSubmit } = useForm();
  // console.log(input);
  return (
    <div className="login">
      <form className="form" onSubmit={handleLoginSubmit}>
        <h2 className="logo flex-row justify-center align-center">
          Travel App
        </h2>
        <div className="form-div">
          <input
            type="text"
            name="userName"
            className="form-input"
            placeholder=" "
            onChange={handleChange}
            value={input.userName}
          />
          <label className="form-label">Email or Mobile No</label>
        </div>
        <div className="form-div">
          <input
            type="password"
            name="password"
            placeholder=" "
            className="form-input"
            onChange={handleChange}
            value={input.password}
          />
          <label className="form-label">Password</label>
        </div>

        <button className="primary-btn">Login</button>

        <div className="or">
          <hr />
          <span>OR</span>
          <hr />
        </div>

        <p className="flex-row justify-center">Not have an Account? </p>

        <div>
          <Link to="createaccount" className="link">
            <button className="secordary-btn">Create An Account</button>
          </Link>
        </div>
      </form>
      <div className="form-image"></div>
    </div>
  );
}

export default Login;
