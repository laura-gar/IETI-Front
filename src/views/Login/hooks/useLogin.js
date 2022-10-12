import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jwt, setJwt] = useState("");
  const navigate = useNavigate();

  function sendLoginRequest() {
    try {
      fetch("https://ieti-users.herokuapp.com/api/v1/auth", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify({ email, password }),
      })
        .then((response) => Promise.all([response.json(), response.header]))
        .then(([body, headers]) => {
          console.log(body.token);
          localStorage.setItem("USER", JSON.stringify(body)); 
          console.log("USER", localStorage.getItem("USER")); 
          setJwt(body.token);
          navigate("/home");
        });
    } catch (error) {
      if (error.response.status === 500) {
        console.log("ERROR");
      }
    }
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    jwt,
    setJwt,
    sendLoginRequest,
  };
};

export default useLogin;
