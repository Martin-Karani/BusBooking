import React, { useState } from "react";
import { ReactComponent as Mpesa } from "../images/mpesa.svg";
import airtelMoney from "../images/airtel money.jpeg";
import { ReactComponent as Paypal } from "../images/paypal.svg";
import { ReactComponent as Visa } from "../images/visa.svg";

import "../css/payment.css";
import Back from "./Back";
import { FaCcVisa, FaChevronLeft, FaCcPaypal } from "react-icons/fa";
// import {  } from "react-icons/fa";

const initialState = {
  busOperator: "Modern Coast",
  departTime: "13:00am",
  arrivalTime: "5:00pm",
  from: "Nairobi",
  to: "Mombasa",
  seatNo: 4,
  bookedDate: "12 Nov 2021",
  phoneNo: "0701855316",
  name: "Martin Karani",
  ticketID: 12345678,
  price: 123,
};
function Payment() {
  const [state, setstate] = useState(initialState);

  return (
    <div className="payment">
      {/* <Back value="Ticket Summary" /> */}
      <div className="back ">
        <div className="flex-row justify-space-btn">
          <FaChevronLeft fontSize="22px" />
          <p>{state.busOperator}</p>
          {/* <FaSearch /> */}
          <div></div>
        </div>
        <div className="date">
          {/* <p>Mon 24 March 2021</p> */}

          <p className="bus-type-ticket">Ticket Summary</p>
        </div>
      </div>
      <div className="payment-card">
        <div className="bookings">
          {/* <h4 className="text-center">Ticket Summary</h4> */}

          <div className="flex-row justify-space-btn">
            <label>From:</label>
            <label>To</label>
          </div>
          <div className="flex-row justify-space-btn ticket-info">
            <p className="bold ticket-from">{state.from}</p>
            <p className="bold ticket-to">{state.to}</p>
          </div>
          <div className="flex-row justify-space-btn">
            <p className="circle1"></p>
            <hr className="hr" />
            <p className="circle2"></p>
          </div>

          <div className="flex-row justify-space-btn">
            <label>Departure:</label>
            <label>Arrival:</label>
          </div>
          <div className="flex-row justify-space-btn ticket-info">
            <p className="bold">{state.departTime}</p>
            <p className="bold">{state.arrivalTime}</p>
          </div>

          <div className="flex-row justify-space-btn">
            <label>Date:</label>
            <label>Seat:</label>
          </div>
          <div className="flex-row justify-space-btn ticket-info">
            <p className="bold">{state.bookedDate}</p>
            <p className="booking-no bold">Seat {state.seatNo}</p>
          </div>

          <div className="flex-row justify-space-btn">
            <label>Passenger:</label>
            <label>Phone:</label>
          </div>
          <div className="flex-row justify-space-btn ticket-info">
            <p className="bold">{state.name}</p>

            <p className="bold">{state.phoneNo}</p>
          </div>

          <div className="flex-row justify-space-btn">
            <label>Ticket ID:</label>

            <label>Price:</label>
          </div>
          <div className="flex-row justify-space-btn ticket-info">
            <p className="bold">{state.ticketID}</p>

            <p className="bold">KSH {state.price}</p>
          </div>
        </div>
        <div className="pay-methods">
          <p>Payment Method</p>
          <ul className="flex-column justify-space-btn">
            <li>
              <label>
                <FaCcPaypal size="30px" className="pay-icon" />
                {/* <Mpesa alt="paypal" width="50px" height="auto" /> */}
                Mpesa
              </label>

              <input type="radio" name="" id="" />
            </li>
            <li>
              <label>
                <FaCcVisa size="30px" className="pay-icon" />
                {/* <img src={airtelMoney} alt="airtel money logo" width="80px" /> */}
                Airtel Money
              </label>
              <input type="radio" name="" id="" />
            </li>
            <li>
              <label>
                <FaCcVisa size="30px" className="pay-icon" />
                Visa
              </label>
              <input type="radio" name="" id="" />
            </li>
            <li>
              <label>
                <FaCcPaypal size="30px" className="pay-icon" /> PayPal
              </label>
              <input type="radio" name="" id="" />
            </li>
          </ul>
          {/* <div className="flex-column justify-center">
            <label>Mobile Number</label>
            <input type="number" name="" id="" className="phone-input " />
          </div> */}
          <div className="flex-row justify-center">
            <button className="primary-btn">Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
