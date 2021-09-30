import axios from "axios";
import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  isLoggedIn: true,
  isLoading: false,
  towns: [],
};
export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setIsLoggedIn = (props) => {
    console.log(props);
    dispatch({
      type: "LOGGED_IN",
      // payload: props.data,
    });
  };
  const setTowns = (props) => {
    dispatch({
      type: "TOWNS",
      payload: props.data,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        setIsLoggedIn,
        setTowns,
        // setLoading,
        towns: state.towns,
        // isLoading: state.isLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
