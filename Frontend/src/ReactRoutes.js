import React, { useContext } from "react";

import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import TicketBook from "./components/TicketBook";
import App from "./App";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
// import TicketBook from "./components/TicketBook";
import Account from "./components/Account";
import Messages from "./components/Messages";
import Payment from "./components/Payment";
import Towns from "./components/Towns";
import BusOperators from "./components/BusOperators";
import SearchResults from "./components/SearchResults";
import BusOperator from "./components/BusOperator";
import Bookings from "./components/Bookings";
import DashBoard from "./components/Dashboard/DashBoard";
import DashBoardRoutes from "./components/Dashboard/DashBoardRoutes";
import { GlobalContext, GlobalContextProvider } from "./context/GlobalState";
import DashBoardIncome from "./components/Dashboard/DashBoardIncome";
import AddRoute from "./components/Dashboard/AddRoute";
import TicketList from "./components/TicketList";

const ReactRoutes = () => {
  const { isLoggedIn } = useContext(GlobalContext);
  // let { path, url } = useRouteMatch();

  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/ticketbook">
            <TicketBook />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/createaccount">
            <SignUp />
          </Route>

          <Route path="/account">
            <Account />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/ticketlist">
            <SearchResults />
          </Route>
          <Route path="/payment">
            {isLoggedIn ? <Payment /> : <Redirect to="/login" />}
          </Route>
          <Route path="/towns">
            <Towns />
          </Route>
          <Route path="/busoperators">
            <BusOperators />
          </Route>
          <Route path="/busoperator">
            <BusOperator />
          </Route>
          <Route path="/bookings">
            <Bookings />
          </Route>

          <Route path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="/dashboardIncome">
            <DashBoardIncome />
          </Route>
          <Route path="/addRoute">
            <AddRoute />
          </Route>
        </Switch>
      </BrowserRouter>
    </GlobalContextProvider>
  );
};

export default ReactRoutes;
