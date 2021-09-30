import React from "react";
import { NavLink } from "react-router-dom";
import DashBoardRoutes from "./DashBoardRoutes";
import "../../css/dashboard.css";
import AddRoute from "./AddRoute";
import DashBoardIncome from "./DashBoardIncome";

function DashBoard() {
  return (
    <div className="dashboard  ">
      <header>
        <div className="flex-row justify-space-btn align-center">
          <h1>Modern Coast</h1>
          <div>Bal: Ksh 12000</div>
          <div className="dashboard-logo"></div>
        </div>
        <nav className="flex-row clear">
          <NavLink to="/dashboard" className="link">
            <h3>Routes</h3>
          </NavLink>
          <NavLink to="/dashboardIncome" className="link">
            <h3>Income</h3>
          </NavLink>
        </nav>
      </header>
      <DashBoardRoutes />
      {/* <AddRoute /> */}
    </div>
  );
}

export default DashBoard;
