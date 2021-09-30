import React from "react";

import "../css/navbar.css";

import {
  BsPersonFill,
  BsHouseDoorFill,
  BsChatDotsFill,
  BsSearch,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";

import { FaBus, FaMapMarkerAlt } from "react-icons/fa";
const iconStyles = {
  fontSize: "22px",
  color: "#514b4b",
};

function SmallNavBar() {
  return (
    <div>
      <ul className="nav-bar">
        <li>
          <NavLink to="/" className="link">
            <BsHouseDoorFill style={iconStyles} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/busoperators" className="link">
            <FaBus style={iconStyles} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/messages" className="link">
            <BsChatDotsFill style={iconStyles} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/map" className="link">
            <FaMapMarkerAlt style={iconStyles} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/account" className="link">
            <BsPersonFill style={iconStyles} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SmallNavBar;
