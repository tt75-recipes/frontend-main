import React, { useState } from "react";
import { axiosWithAuth } from "../axiosWithAuth.js";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Section, H1, Form, Label, Input, Button } from "./Styling";

const initialState = {
  username: "",
  password: "",
};

export default function Signup() {
  const history = useHistory();
  const [info, setInfo] = useState(initialState);

  const onChange = (evt) => {
    setInfo({ ...info, [evt.target.name]: evt.target.value });
    console.log(info);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    axiosWithAuth()
      .post(`https://tt75-recipes.herokuapp.com/api/auth/register`, info)
      .then((res) => {
        axiosWithAuth()
          .post(`https://tt75-recipes.herokuapp.com/api/auth/login`, info)
          .then((res) => {
            localStorage.setItem("token", JSON.stringify(res.data.token));
            history.push("/");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <Section>
      <H1> Sign Up </H1>

      <br></br>

      <Form onSubmit={onSubmit}>
        <Label>Username</Label>
        <Input
          name="username"
          type="text"
          value={info.username}
          onChange={onChange}
          placeholder="Username..."
        />

        <Label>Password</Label>
        <Input
          name="password"
          type="password"
          value={info.password}
          onChange={onChange}
          placeholder="Password..."
        />

        <Button> Sign Up </Button>
      </Form>

      <br></br>

      <p>
        Already have an account? <NavLink to="/login"> Login </NavLink>
      </p>
    </Section>
  );
}
