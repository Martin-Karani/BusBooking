import React from "react";
import { Line } from "react-chartjs-2";
import { NavLink } from "react-router-dom";

function DashBoardIncome() {
  const data = {
    datasets: [
      {
        data: [100, 200, 300, 150, 250],
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#cc65fe",
          "#ffce56",
          "#ffce35",
        ],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Jan", "Feb", "March", "April", "June"],
  };
  return (
    <div className="dashboard  ">
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
      <div className="flex-row justify-space-btn">
        <select name="" id="">
          <option value="All">2021</option>
        </select>
        <select name="" id="">
          <option value="All">All</option>
          <option value="Nairobi - Mombasa">Nairobi - Mombasa</option>
          <option value="Kisumu - Nairobi">Kisumu - Nairobi</option>
        </select>
      </div>
      <div>
        <Line
          data={data}
          options={{
            // maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  stacked: true,
                },
              ],
            },
          }}
        />
      </div>
      <div className="flex-row justify-space-btn">
        <div className="dashboard-card">Total Bookings</div>
        <div className="dashboard-card">Total Income Ksh 1000</div>
        <div className="dashboard-card">-5%</div>
      </div>
    </div>
  );
}

export default DashBoardIncome;
