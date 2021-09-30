import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import Sort from "./Sort";
import TicketList from "./TicketList";

function BusOperator() {
  return (
    <div className="bus-operator-route">
      <div className="back ">
        <div className="flex-row justify-space-btn">
          <FaChevronLeft fontSize="22px" />
          <p>Modern Coast Routes</p>
          {/* <FaSearch /> */}
          <div></div>
        </div>
      </div>
      <Sort />
      <TicketList />
    </div>
  );
}

export default BusOperator;
