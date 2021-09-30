import React, { useState } from "react";
import { FaCarSide, FaChevronLeft, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Back from "./Back";

import "../css/search-results.css";
import TicketList from "./TicketList";

const initialState = [];
const SearchResults = () => {
  const [currentRoute, setCurrentRoute] = useState(initialState);
  return (
    <div className="search-results-container">
      <div className="back ">
        <div className="flex-row justify-space-btn">
          <FaChevronLeft fontSize="22px" />
          <p>Search Results</p>
          {/* <FaSearch /> */}
          <div></div>
        </div>
        <div className="flex-row justify-space-btn search-route">
          <h3>Nairobi</h3>
          <div className="flex-row justify-space-btn">
            <FaCarSide size="25px" />
          </div>

          <h3>Mombasa</h3>
        </div>
      </div>
      <div className="search-results">
        <div className="flex-row justify-space-around">
          <div className="sort">
            <div>
              <select>
                <option>Sort By</option>
                <option>Price:Lowest to Highest</option>
                <option>Price:Highest to Lowest</option>
              </select>
            </div>
          </div>

          <div className="sort">
            <div>
              <select>
                <option>Filters</option>
                <option>Price:Lowest to Highest</option>
                <option>Price:Highest to Lowest</option>
              </select>
            </div>
          </div>
        </div>

        <form className="flex-row">
          <div>
            <input type="checkbox" value="modern coast" />
            Modern Coast
          </div>
          <div>
            <input type="checkbox" value="imani" />
            Imani
          </div>
          <div>
            <input type="checkbox" value="Mash Poa" />
            Mash Poa
          </div>
          <div>
            <input type="checkbox" value="Oxygen" />
            Oxygen
          </div>
          <div>
            <input type="checkbox" value="Executive" />
            Executive
          </div>
          <div>
            <input type="checkbox" value="cool" />
            Cool
          </div>
          <div>
            <input type="checkbox" value="Executive" />
            Executive
          </div>
          <div>
            <input type="checkbox" value="cool" />
            Cool
          </div>
        </form>
        <TicketList />
      </div>
    </div>
  );
};

export default SearchResults;
