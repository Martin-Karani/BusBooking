import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

import "../css/bus-operators.css";

const initialState = [
  {
    name: "Modern Coast",
    towns: 20,
    bookings: 100,
  },
  {
    name: "Imani",
    towns: 20,
    bookings: 100,
  },
  {
    name: "Cool",
    towns: 20,
    bookings: 100,
  },
  {
    name: "Oxygen",
    towns: 20,
    bookings: 100,
  },
  {
    name: "Executive",
    towns: 20,
    bookings: 100,
  },
  {
    name: "Mash Poa",
    towns: 20,
    bookings: 100,
  },
  {
    name: "Bus Car",
    towns: 20,
    bookings: 100,
  },
];
const BusOperators = () => {
  const [busOperators, setBusOperators] = useState([]);
  console.log(busOperators.length);
  useEffect(() => {
    setBusOperators(initialState);
  }, []);
  console.log(busOperators);
  return (
    <div className="bus-operators">
      <div className="back ">
        <div className="flex-row justify-space-btn">
          <FaChevronLeft fontSize="22px" />
          <p>Bus Operators</p>
          {/* <FaSearch /> */}
          <div></div>
        </div>
      </div>
      <div className="flex-row bus-operator">
        <ul className="bus-operator-name">
          {busOperators.length > 0 &&
            busOperators.map((operator) => (
              <>
                <Link to="/busoperator" className="link">
                  <li className="flex-row">
                    <div className="bus-operator-logo"></div>
                    <div className="flex-column ">
                      <p>{operator.name}</p>
                      <div className="flex-row align-center bus-operator-counts">
                        <p>{operator.towns} towns</p>
                        <p>{operator.bookings} bookings</p>
                      </div>
                    </div>
                  </li>
                </Link>
                <hr />
              </>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default BusOperators;
