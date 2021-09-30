import React from "react";
import Header from "./components/Header";
import "./css/app.css";
import TicketList from "./components/TicketList";
import NavBar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalState";
import ReactRoutes from "./ReactRoutes";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <TicketList />
    </div>
  );
}

export default App;
