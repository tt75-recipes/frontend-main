import React, { useState } from "react";
import { axiosWithAuth } from "../axiosWithAuth.js";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

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
    <SignSection>
      <SignH1> Sign Up </SignH1>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <SignForm onSubmit={onSubmit}>
        <SignLabel>
          Username
          <br></br>
          <SignInput
            name="username"
            type="text"
            value={info.username}
            onChange={onChange}
            placeholder="Username..."
          />
        </SignLabel>

        <SignLabel>
          Password
          <br></br>
          <SignInput
            name="password"
            type="password"
            value={info.password}
            onChange={onChange}
            placeholder="Password..."
          />
        </SignLabel>
        <SignButton> Sign Up </SignButton>
      </SignForm>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <p>
        Already have an account? <a href="/login"> Login </a>
      </p>
    </SignSection>
  );
}

// Styled Components

const SignSection = styled.section`
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
const SignH1 = styled.h1`
  font-family: "Fredericka the Great", sans-serif;
  font-weight: 250;
  font-size: 3em;
`;
const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 400px;
  font-family: "Josefin Slab", serif;
`;

const SignLabel = styled.label`
  font-family: "Josefin Slab", serif;
  font-weight: 700;
`;

const SignInput = styled.input`
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

const SignButton = styled.button`
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
