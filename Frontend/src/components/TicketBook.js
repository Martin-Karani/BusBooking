import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../css/ticket-book.css";
// import car from "../../static/images/car.png";
import profile from "../images/profile.jpg";
import { MdFiberManualRecord } from "react-icons/md";
import { FaChevronLeft, FaPeace } from "react-icons/fa";
import Canvas from "./Canvas";

const TicketBook = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    setState([5, 5, 5, 5, 5, 5, 5, 5, 5, 6]);
  }, []);
  console.log(state);
  return (
    <div className="ticketbook">
      <div className="back ">
        <div className="flex-row justify-space-btn">
          <FaChevronLeft fontSize="22px" />
          <p>Choose a Seat</p>
          {/* <FaSearch /> */}
          <div></div>
        </div>
        <div className="date">
          <p>Nairobi - Mombasa Modern Coast</p>
          <p>Mon 24 March 2021</p>
        </div>
      </div>
      <div className="ticketbook-card">
        <div className="seats-card">
          {/* <p className="text-align">Select your seat</p> */}
          <div>
            {/* -------------------- seats ------------------------------ */}

            <Canvas />
          </div>
          <div className="flex-row  images-container">
            <div className="img-container">
              {/* <img src={car} alt="car" width="50px" /> */}
            </div>
            <div className="img-container">
              {/* <img src={car} alt="car" width="50px" /> */}
            </div>
            <div className="img-container">
              {/* <img src={car} alt="car" width="50px" /> */}
            </div>
            <div className="img-container">
              {/* <img src={car} alt="car" width="50px" /> */}
            </div>
          </div>
        </div>
        <div className="ticket-book-right">
          <div className="flex-row justify-space-around ticket-bar">
            <p>Available</p>
            <p>Booked</p>
            <p>Selected</p>
          </div>
          {/* <div className="policy flex-row">
            <input type="checkbox" id="" />
            <p>Booking policy</p>
          </div> */}
          <div className="flex-row justify-space-around">
            <select>
              <option>PickUp Point</option>
              <option>Moi Avenue</option>
              <option>Chuka Stadium</option>
            </select>
            <p>To</p>
            <select>
              <option>Drop Point</option>
              <option>Moi Avenue</option>
              <option>Chuka Stadium</option>
            </select>
          </div>
          <div className="seats-selected flex-row">
            <p> Selected: </p>
            <p>Regular No: 4 x Ksh 1200 </p>
            {/* <p> seat 4</p> <p> seat 4</p> */}
          </div>
          <div className="flex-row justify-space-btn align-center book-bar">
            <p>Total Seats 4</p>
            <p>Ksh 4800</p>
            <Link to="/payment" className="link">
              <button>Book Now</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="review-container">
        <h4>Reviews</h4>
        <div className="reviews">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, obcaecati asperiores est maiores beatae sapiente, eum
            necessitatibus.
          </p>
          <div className="review-profile italic">
            <p> Martoh Karash</p>
            <span>
              <img src={profile} alt="martoh profile image" />
            </span>
          </div>
        </div>
        <div className="reviews">
          <p>est maiores beatae sapiente, eum necessitatibus.</p>
          <div className="review-profile italic">
            <p> Martoh Karash</p>
            <span>
              <img src={profile} alt="martoh profile image" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketBook;
