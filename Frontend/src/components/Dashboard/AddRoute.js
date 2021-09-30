import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/add-route.css";

function AddRoute() {
  return (
    <form className="add-route-form dashboard">
      <header>
        <div className="flex-row align-center">
          <h1>Modern Coast</h1>
          <div className="bal">Bal: Ksh 12000</div>
          <div className="dashboard-logo"></div>
        </div>
        <nav className="flex-row">
          <NavLink to="/dashboard" className="link">
            <h3>Routes</h3>
          </NavLink>
          <NavLink to="/dashboardIncome" className="link">
            <h3>Income</h3>
          </NavLink>
        </nav>
      </header>
      <div className="form-div">
        <input type="text" name="" className="form-input" id="" />
        <label className="form-label">Depart From</label>
      </div>
      <div className="form-div">
        <input type="text" name="" className="form-input" id="" />
        <label className="form-label">Arrive To</label>
      </div>
      <div className="form-div">
        <input type="text" name="" className="form-input" id="" />

        <label className="form-label">Pickup Point</label>
      </div>
      <div className="form-div">
        <input type="text" name="" className="form-input" id="" />

        <label className="form-label">Drop Point</label>
      </div>
      <div className="form-div">
        <input type="time" name="" className="form-input" id="" />
        <label className="form-label">Depart Time</label>
      </div>
      <div className="form-div">
        <input type="time" name="" className="form-input" id="" />
        <label className="form-label">Arrival Time</label>
      </div>
      <div className="form-div">
        <input type="number" name="" className="form-input" id="" />

        <label className="form-label">Fare</label>
      </div>
      <div className="form-div">
        <input type="number" name="" className="form-input" id="" />
        <label className="form-label">Number of seats</label>
      </div>

      <label>Description </label>
      <textarea name="" id="" cols="30" rows="10"></textarea>

      <button type="submit" className="primary-btn">
        Submit
      </button>
    </form>
  );
}

export default AddRoute;
