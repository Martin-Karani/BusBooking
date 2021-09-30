import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { BsBookmarks } from "react-icons/bs";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { GrMoney } from "react-icons/gr";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";

import "../css/account.css";

const iconStyles = {
  fontSize: "22px",
  // backgroundColor: "#514b4b",
  marginRight: "10px",
};
function Account() {
  return (
    <div className="account">
      <div className="back ">
        <div className="flex-row justify-space-btn">
          <FaChevronLeft fontSize="22px" />
          <p>Your Account</p>
          {/* <FaSearch /> */}
          <div></div>
        </div>
        <div className="account-profile">
          <div className="flex-row align-center">
            <div className="profile-image"></div>
            <div className="profile-detail">
              <div className="profile-name">Martin karani</div>
              <div className="profile-email">martinkaranie@gmail.com</div>
              <div className="location">Nairobi Kenya</div>
            </div>
          </div>
        </div>
      </div>

      <ul className="flex-column justify-space-btn ">
        <Link to="bookings" className="link">
          <li className="flex-row align-center">
            <BsBookmarks style={iconStyles} />
            Bookings
          </li>
        </Link>
        <Link to="pendingReviews" className="link">
          <li className="flex-row align-center">
            <FcRating style={iconStyles} />
            Pending Reviews
          </li>
        </Link>
        <Link to="messages" className="link">
          <li className="flex-row align-center">
            <IoNotificationsOutline style={iconStyles} />
            Notifications
          </li>
        </Link>
        <Link to="messages" className="link">
          <li className="flex-row align-center">
            <GrMoney style={iconStyles} color="#ffffff" />
            Promotions
          </li>
        </Link>
        <hr />
        <Link to="messages" className="link">
          <li className="flex-row align-center">
            <IoSettingsOutline style={iconStyles} />
            Settings
          </li>
        </Link>
        <Link to="messages" className="link">
          <li className="flex-row align-center">
            <IoIosHelpCircleOutline style={iconStyles} />
            Help
          </li>
        </Link>
      </ul>

      {/* <Bookings /> */}
    </div>
  );
}

export default Account;
