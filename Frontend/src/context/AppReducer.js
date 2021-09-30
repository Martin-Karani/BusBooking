const AppReducer = (state, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
        // isLoggedIn: !state.isLoggedIn,
        // userName: action.payload.userName,
        // email: action.payload.email,
        // phone_no: action.payload.phoneNo,
      };
    case "TOWNS":
      return {
        ...state,
        towns: action.payload,
      };
    // case "IS_LOADING":
    //   return {
    //     ...state,
    //     isLoading: !isLoggedIn,
    //   };
  }
};

export default AppReducer;
