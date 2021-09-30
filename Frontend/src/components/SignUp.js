import React from "react";

import "../css/sign-up.css";
import useForm from "../useForm";
// import validate from "../validate";
import { Link } from "react-router-dom";
// import { GlobalContext } from "../context/GlobalState";

function SignUp() {
  const { errors, input, handleChange, handleSubmit } = useForm();
  console.log(input);
  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="logo flex-row justify-center align-center">
          Travel App
        </h2>
        <div className="flex-row first-last-name">
          <div className="form-div">
            <input
              type="text"
              name="userName"
              value={input.userName}
              onChange={handleChange}
              placeholder=" "
              className="form-input"
              autoComplete="off"
            />
            <label className="form-label">First Name</label>

            {errors.userName && (
              <div className="error-text">{errors.userName}</div>
            )}
          </div>
          <div className="form-div">
            <input
              type="text"
              name="userName"
              value={input.userName}
              onChange={handleChange}
              placeholder=" "
              className="form-input"
              autoComplete="off"
            />
            <label className="form-label">Last Name</label>

            {errors.userName && (
              <div className="error-text">{errors.userName}</div>
            )}
          </div>
        </div>

        <div className="form-div">
          <input
            type="number"
            name="phone"
            id=""
            placeholder=" "
            value={input.phoneNo}
            onChange={handleChange}
            className="form-input"
            autoComplete="off"
          />
          <label className="form-label">Phone</label>

          {errors.phone && <div className="error-text">{errors.phoneNo}</div>}
        </div>

        <div className="form-div">
          <input
            className="form-input"
            autoComplete={false}
            onChange={handleChange}
            type="email"
            autoComplete="off"
            name="email"
            placeholder=" "
            value={input.email}
          />
          <label className="form-label">Email</label>

          {errors.email && <div className="error-text">{errors.email}</div>}
        </div>
        <div className="form-div">
          <input
            className="form-input"
            onChange={handleChange}
            type="password"
            name="password"
            placeholder=" "
            autoComplete="off"
            value={input.password}
          />
          <label className="form-label">Password</label>

          {errors.password && (
            <div className="error-text">{errors.password}</div>
          )}
        </div>

        <div className="form-div">
          <input
            className="form-input"
            autoComplete={false}
            onChange={handleChange}
            autoComplete="off"
            type="password"
            name="confirmPassword"
            placeholder=" "
            value={input.confirmPassword}
          />
          <label className="form-label">Confirm Password</label>
          {errors.confirmPassword && (
            <div className="error-text">{errors.confirmPassword}</div>
          )}
        </div>

        <button className="primary-btn">Create An Account</button>

        <div className="or">
          <hr />
          <span>OR</span>
          <hr />
        </div>

        <p className="flex-row justify-center">Already have an Account? </p>

        <Link to="/login" className="link">
          <button className="secordary-btn">Login</button>
        </Link>
      </form>
      <div className="form-image"></div>
    </div>
  );
}

export default SignUp;
