import React, { useState } from "react";

import "../css/bookings.css";

const initialState = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];
function Bookings() {
  const [state, setState] = useState(initialState);
  return (
    <>
      {state.map((value) => (
        <div>
          <div className="bookings">
            <p className="bus-type-ticket">{value.busOperator}</p>
            <div className="flex-row justify-space-btn">
              <p className="bold">{value.departTime}</p>
              <p className="bold">{value.arrivalTime}</p>
            </div>
            <div className="flex-row justify-space-btn">
              <p className="circle1"></p>
              <hr className="hr" />
              <p className="circle2"></p>
            </div>
            <div className="flex-row justify-space-btn">
              <p className="bold">{value.from}</p>
              <p className="bold">{value.to}</p>
            </div>
            <label>Date:</label>
            <div className="flex-row justify-space-btn">
              <p className="bold">{value.bookedDate}</p>
              {/* <label>Date:</label> */}

              <p className="booking-no">Seat {value.seatNo}</p>
            </div>
            <label>Passenger:</label>
            <div className="flex-row justify-space-btn">
              <p className="bold">{value.name}</p>
              <p>{value.phoneNo}</p>
            </div>
            <label>Ticket ID:</label>
            <div className="flex-row justify-space-btn">
              <p className="bold">{value.ticketID}</p>
              <p>KSH {value.price}</p>
            </div>
            <div className="flex-row justify-space-btn align-center">
              <p className="">1hr 00min</p>
              <button>Cancel Ticket</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Bookings;
