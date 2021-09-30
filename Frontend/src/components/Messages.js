import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../css/messages.css";
function Messages() {
  return (
    <>
      <div className="back ">
        <div className="flex-row justify-space-btn">
          <FaChevronLeft fontSize="22px" />
          <p>Messages</p>
          {/* <FaSearch /> */}
          <div></div>
        </div>
        <nav>
          <ul className="flex-row messages-nav">
            <li>Bookings</li>
            <li>Promotions</li>
          </ul>
        </nav>
        {/* <div className="date"><p>Mon 24 March 2021</p></div> */}
      </div>

      <ul className="messages-list">
        <li className="flex-row justify-space-btn align-center">
          <div className="flex-row ">
            <p className="profile-image2 "></p>
            <div>
              <p>Booking Store</p>
              <span className="italic preview">Booking Confirmed</span>
            </div>
          </div>

          <p>12 Feb</p>
        </li>
        <li className="flex-row justify-space-btn align-center">
          <div className="flex-row ">
            <p className="profile-image2 "></p>
            <div>
              <p>Booking Store</p>
              <span className="italic preview">Booking Confirmed</span>
            </div>
          </div>

          <p>12 Feb</p>
        </li>
        <li className="flex-row justify-space-btn align-center">
          <div className="flex-row ">
            <p className="profile-image2 "></p>
            <div>
              <p>Booking Store</p>
              <span className="italic preview">Booking Confirmed</span>
            </div>
          </div>

          <p>12 Feb</p>
        </li>
      </ul>
    </>
  );
}

export default Messages;
