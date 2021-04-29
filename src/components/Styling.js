import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Signup and Login
export const Section = styled.section`
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
export const H1 = styled.h1`
  font-family: "Fredericka the Great", sans-serif;
  font-weight: 250;
  font-size: 3em;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 400px;
  font-family: "Josefin Slab", serif;
`;

export const Label = styled.label`
  font-family: "Josefin Slab", serif;
  font-weight: 700;
`;

export const Input = styled.input`
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

export const Button = styled.button`
  background-color: #8383a3;
  color: white;
  height: 50px;
  width: 200px;
  border-radius: 25px;
  margin-top: 40px;
  margin-left: 25px;
  font-family: "Cormorant Garamond", serif;
  font-size: 1em;
  font-weight: 500;
  :hover {
    background-color: white;
    color: #8383a3;
  }
`;

// NavBar

export const NavSection = styled.section`
  background-color: white;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Courier New", monospace;
  font-weight: 700;
  text-decoration: bold;
`;

export const NavA = styled.NavLink`
  display: flex;
  flex-direction: row;
  color: #8586a5;
  justify-content: space-evenly;
  width: 150px;
  padding: 5px;
  margin: 15px;
  /* border: 1px solid black; */
  :hover {
    text-decoration: none;
  }
`;

export const LogoutSection = styled.section`
  display: flex;
  align-items: center;
  padding-right: 30px;
`;

export const LogoutA = styled.NavLink`
  background-color: #8586a5;
  color: white;
  height: 30px;
  height: 30%;
  border-radius: 25px;
  padding: 5px 0;
  text-align: center;
  :hover {
    background-color: white;
    color: #8586a5;
  }
`;
