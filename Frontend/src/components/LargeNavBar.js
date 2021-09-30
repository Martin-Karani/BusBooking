import React from "react";
import {
  BsPersonFill,
  BsHouseDoorFill,
  BsChatDotsFill,
  BsSearch,
} from "react-icons/bs";
import { FaBus, FaMapMarkerAlt } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const iconStyles = {
  fontSize: "22px",
  fontWeight: 400,
  color: "#514b4b",
  marginRight: "12px",
};

function LargeNavBar() {
  return (
    <div>
      <ul className="large-nav-bar">
        <li>logo</li>
        <li>Good Morning...... </li>
        <NavLink to="/" className="link">
          <li className="flex-row align-center">
            <BsHouseDoorFill style={iconStyles} />
            Home
          </li>
        </NavLink>
        {/* <li>
          <NavLink to="/towns" className="link">
            <p>Towns</p>
          </NavLink>
        </li> */}
        <NavLink to="busoperators" className="link">
          <li className="flex-row align-center">
            <FaBus size="17px" style={iconStyles} />
            Bus Operators
          </li>
        </NavLink>
        <NavLink to="/account" className="link">
          <li className="flex-row align-center">
            <BsPersonFill style={iconStyles} />
            Account
          </li>
        </NavLink>
        <NavLink to="/messages" className="link">
          <li className="flex-row align-center">
            <BsChatDotsFill style={iconStyles} />
            Notifications
          </li>
        </NavLink>
        <NavLink to="/map" className="link">
          <li className="flex-row align-center">
            <FaMapMarkerAlt style={iconStyles} /> Map
          </li>
        </NavLink>
        <NavLink to="/promotions" className="link">
          <li className="flex-row align-center">
            <GrMoney style={iconStyles} />
            Promotions
          </li>
        </NavLink>

        <NavLink to="messages" className="link">
          <li className="flex-row align-center">
            <IoSettingsOutline style={iconStyles} />
            Settings
          </li>
        </NavLink>
        <NavLink to="messages" className="link">
          <li className="flex-row align-center">
            <IoIosHelpCircleOutline style={iconStyles} />
            Help
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default LargeNavBar;
