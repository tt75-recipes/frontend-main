import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../axiosWithAuth.js";
// import styled from "styled-components";
import {
  Section,
  H1,
  Form,
  Label,
  Input,
  Button,
} from "./Styling";

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
    <Section>
      <H1>Login</H1>
      <Form onSubmit={handleSubmit}>
        <>
          <Label>Username:</Label>
          <Input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            spellCheck="false"
            autoComplete="off"
            placeholder="Username..."
          />
        </>
        <>
          <Label>Password:</Label>
          <Input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password..."
          />
        </>
        <Button>Login</Button>
      </Form>
      <p>
        Don't have an account? <a href="/signup">Signup</a>
      </p>
    </Section>
  );
}
