import React from "react";
import { MdMoreVert } from "react-icons/md";
import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";

function DashBoardRoutes() {
  const data = {
    datasets: [
      {
        data: [10, 20, 30, 15, 25],
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#cc65fe",
          "#ffce56",
          "#ffce56",
        ],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      "Mombasa - Nairobi",
      "Nairobi - Kisumu",
      "Nairobi - Naivasha",
      "Machakos - Mombasa",
      "Voi - Mombasa",
    ],
  };
  return (
    <div>
      <div>
        <Link to="/addRoute" className="link">
          <h4 className="add-route">Add Route</h4>
        </Link>
      </div>
      <Doughnut
        data={data}
        width={50}
        height={25}
        options={{ maintainAspectRatio: false }}
      />
      ;
      <ul>
        <li>
          <h3>Mombasa - Nairobi</h3>
          <div className="cards-list">
            <div>
              <div className="route-card">
                <div className="more">
                  <MdMoreVert />
                </div>
                <div className="dashboard-route flex-row">
                  <p>Mombasa - Nairobi</p>
                  <p>51 Seats Booked</p>
                </div>
                <div className="flex-row align-center">
                  <div className="time-container">
                    <p className="margin-bottom">8:00AM</p>
                    <p>10:00Am</p>
                  </div>
                  <div className="flex-column">
                    <div className="circle1"></div>
                    <div className="vl vl-2"></div>
                    <div className="circle2"></div>
                  </div>
                  <div className="pick-container">
                    <p className="margin-bottom">Pickup point</p>
                    <p>Drop point</p>
                  </div>
                  <div className="route-price">
                    <p>Ksh 1200</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default DashBoardRoutes;
