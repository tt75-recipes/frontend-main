import React, { useState } from "react";
import axios from "axios";

const initialState = {
  name: "",
  phone: "",
  username: "",
  password: "",
};

export default function Signup() {
  const [info, setInfo] = useState(initialState);

  const onChange = (evt) => {
    setInfo({ ...info, [evt.target.name]: evt.target.value });
    console.log(info);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    axios.post(`https://tt75-recipes.herokuapp.com/api/auth/signup`, info)
    .then((res) => {
        console.log(res);
        //TODO: actually send something
        // TODO: navigate to recipes
      })
      .catch((err) => {
        console.log(err);
      }) };

  return (
    <section className="signup">
      <h1> Sign Up </h1>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <form onSubmit={onSubmit}>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={info.email}
            onChange={onChange}
            placeholder="Email..."
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="text"
            value={info.phone}
            onChange={onChange}
            placeholder="Phone..."
          />
        </label>

        <label>
          Username
          <input
            name="username"
            type="text"
            value={info.username}
            onChange={onChange}
            placeholder="Username..."
          />
        </label>

        <label>
          Password
          <input
            name="password"
            type="password"
            value={info.password}
            onChange={onChange}
            placeholder="Password..."
          />
        </label>
        <button> Sign Up </button>
      </form>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <p>
        Already have an account? <a href="/login"> Login </a>
      </p>
    </section>
  );
}
