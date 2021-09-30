import axios from "axios";
import React, { useContext, useState } from "react";
import axiosInstance from "./axios";
import { GlobalContext } from "./context/GlobalState";

const initialState = Object.freeze({
  userName: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const useForm = (validate) => {
  const { setIsLoggedIn } = useContext(GlobalContext);

  const [input, setInput] = useState({});
  console.log(input);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value.trim(),
    });
  };

  const handleLoginChange = (e) => {};
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`user/create/`, {
        first_name: input.first_name,
        last_name: input.last_name,
        email: input.email,
        phone_no: input.phoneNo,
        password: input.password,
      })
      .then((res) => {
        // history.push("/login");
        console.log(res);
        console.log(res.data);
      });
    // setErrors(validate(input));
    // console.log(errors);
    // setIsLoggedIn();
    // axios
    //   .post("/api/user/", {
    //     user_name: input.userName,
    //     email: input.email,
    //     phone_no: input.phoneNo,
    //     password: input.password,
    //   })
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    axiosInstance
      .post(`token/`, {
        email: input.email,
        password: input.password,
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        axiosInstance.defaults.headers["Authorization"] =
          "JWT " + localStorage.getItem("access_token");
      });

    // setErrors(validate(in))
  };

  return {
    handleChange,
    handleSubmit: handleSignUpSubmit,
    handleLoginSubmit,
    errors,
    input,
  };
};

export default useForm;
