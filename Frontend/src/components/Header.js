import React, { useContext, useEffect, useState } from "react";
import "../css/header.css";
import { MdSwapVert } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { FaCarAlt, FaBars } from "react-icons/fa";
import { GoCalendar } from "react-icons/go";
import axios from "axios";
import { GlobalContext } from "../context/GlobalState";
import SearchResults from "./SearchResults";
import TicketList from "./TicketList";

function Header() {
  const { towns, setTowns } = useContext(GlobalContext);
  const { url, path } = useRouteMatch();
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState({
    from: "",
    to: "",
  });
  const handleSelect = (e) => {
    e.preventDefault();
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
    console.log(search);
  };
  console.log(selectedDate);
  const handleSelectedDate = (date) => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setLoading(true);
    console.log(loading);
    axios
      .get("http://localhost:8000/api/towns/")
      .then((res) => setTowns({ data: res.data }))
      .catch((err) => console.log(err));
    return () => {
      setLoading(false);
      console.log(loading);
    };
  }, []);

  // const handleSelect = (id) => {
  //   console.log(id);
  //   axios
  //     .get(`api/possible%20routes/${id}`)
  //     .then((res) => setState({ ...state, to: res.data }))
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="header ">
      <form className="flex-column " onSubmit={handleSubmit}>
        <div className="flex-row justify-space-btn logo-container">
          <p>Good Morning</p>
          <div>
            <FaCarAlt />
            <span>Travel App</span>
          </div>
          {/* <FaBars /> */}
        </div>
        <div className="search-form flex-row justify-center align-center">
          <div>
            <div className="circle1"></div>
            <div className="vl"></div>
            <div className="circle2"></div>
          </div>
          <div className=" flex-column justify-center align-center">
            <label className="depart-from">
              <select name="form">
                <option value="">From</option>
                {towns.map((town) => (
                  <option
                    value={town.name}
                    key={town.id}
                    name="from"
                    onChange={() => handleSelect(town.id)}
                  >
                    {town.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="arrive-to">
              <select name="form">
                <option value="">To</option>
                {towns.map((town) => (
                  <option
                    value={town.name}
                    key={town.id}
                    name="to"
                    onSelect={() => handleSelect}
                  >
                    {town.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <button className="reverse-btn">
              <MdSwapVert size="25px" />
            </button>
          </div>
        </div>
        <div className="flex-row justify-space-btn date-picker-container">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            name="date"
            popperPlacement="top-start"
            dateFormat="dd/MM/yyyy"
            // customInput={<GoCalendar size="22px" />}
            minDate={new Date()}
            isClearable
          />
          <Link to={`${url}/${search.from}-${search.to} `} className="link">
            {search.to != "" && selectedDate != null ? (
              <button className="search-btn" disabled={true}>
                Search
              </button>
            ) : (
              <button className="search-btn" disabled={false}>
                Search
              </button>
            )}
          </Link>
        </div>
      </form>
      {/* <Switch>
        <Route path={`${path}/${search.from}-${search.to} `}>
          <TicketList />
        </Route>
      </Switch> */}
    </div>
  );
}

export default Header;
