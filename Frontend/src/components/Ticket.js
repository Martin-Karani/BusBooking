import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const Ticket = ({ value }) => {
  // const { url } = useRouteMatch();

  return (
    <Link to="/ticketbook" className="link">
      <div className="route-container">
        <div className="route-card  ">
          <div className="bus-type flex-row justify-space-btn">
            <p>{value.bus_operator}</p>
            {/* <p>Ac seater </p> */}
            <p>{value.total_seats - value.seats_booked} seats left</p>
          </div>
          <div className="flex-row justify-space-btn align-center">
            <div className="flex-row">
              <div className="time-container">
                <p className="margin-bottom">{value.depart_at}</p>
                <p>{value.arrive_at}</p>
              </div>
              <div className="flex-column">
                <div className="circle1"></div>
                <div className="vl vl-2"></div>
                <div className="circle2"></div>
              </div>
              <div className="pick-container">
                <p className="margin-bottom">{value.depart_from}</p>
                <p>{value.arrive_to}</p>
              </div>
            </div>
            <div className="route-price">
              <p>KSH{value.fare}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Ticket;
