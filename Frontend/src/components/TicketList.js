import React, { useEffect, useState } from "react";
import Ticket from "./Ticket";
import axios from "axios";

import "../css/ticket-list.css";

const TicketList = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/route%20card/")
      .then((res) => setState(res.data))
      // Catch errors
      .catch((err) => console.log("Request Failed", err));
  }, []);

  return (
    <div className="ticket-list">
      {state.length > 0 &&
        state.map((ticket) => <Ticket key={ticket.id} value={ticket} />)}
    </div>
  );
};

export default TicketList;
