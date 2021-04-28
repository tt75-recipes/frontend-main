import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../axiosWithAuth.js";
import styled from "styled-components";

export default function Login() {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`https://tt75-recipes.herokuapp.com/api/auth/login`, credentials)
      .then((res) => {
        window.localStorage.setItem("token", JSON.stringify(res.data.token));
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <LoginSection>
      <LoginH1>Login</LoginH1>
      <LoginForm onSubmit={handleSubmit}>
        <>
          <LoginLabel>Username:</LoginLabel>
          <LoginInput
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            spellCheck="false"
            autoComplete="off"
          />
        </>
        <>
          <LoginLabel>Password:</LoginLabel>
          <LoginInput
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </>
        <LoginButton>Login</LoginButton>
      </LoginForm>
      <p>
        Don't have an account? <a href="/signup">Signup</a>
      </p>
    </LoginSection>
  );
}

// Styled Components

const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: top;
  background-color: white;
  width: 40%;
  height: 100%;
  float: right;
  padding-top: 50px;
  padding-left: 25px;
  text-align: left;
  font-family: "Cormorant Garamond", serif;
  font-size: 1.2em;
  font-weight: 500;
`;
const LoginH1 = styled.h1`
  font-family: "Fredericka the Great", sans-serif;
  font-weight: 250;
  font-size: 3em;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 400px;
  font-family: "Josefin Slab", serif;
`;

const LoginLabel = styled.label`
  font-family: "Josefin Slab", serif;
  font-weight: 700;
`;

const LoginInput = styled.input`
  height: 70px;
  outline: 0;
  border-width: 0 0 2px;
  border-color: #bcc4cc;
  font-size: 2.5em;
  margin-bottom: 25px;
  color: #cacaca;
  font-family: garamond-premier-pro-caption, serif;
  font-weight: 400;
  font-style: normal;
  :focus {
    border-color: #747474;
  }
`;

const LoginButton = styled.button`
  background-color: #8383a3;
  color: white;
  height: 50px;
  width: 200px;
  border-radius: 25px;
  margin-top: 50px;
  margin-left: 25px;
  font-family: "Cormorant Garamond", serif;
  font-size: 1em;
  font-weight: 500;
  :hover {
    background-color: white;
    color: #8383a3;
  }
`;
