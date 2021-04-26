import React, { useState } from "react";
// import axios from "axios";

const initialState = {
  name: "",
  phone: "",
  username: "",
  password: "",
};

const initialData = [];

export default function Signup() {
  const [info, setInfo] = useState(initialState);

  const onChange = (evt) => {
    setInfo({ ...info, [evt.target.name]: evt.target.value });
    console.log(info);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    // axios post here
  };

  return (
    <div>
      <h2> Sign Up </h2>
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
      <p>
        Already have an account? <a href="#"> Login </a>
      </p>
    </div>
  );
}
