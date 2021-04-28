import styled from "styled-components";


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

