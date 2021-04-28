import React, { useState } from "react";
import { axiosWithAuth } from '../axiosWithAuth.js';
import { useHistory } from "react-router-dom";

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
    axiosWithAuth().post(`https://tt75-recipes.herokuapp.com/api/auth/register`, info)
      .then((res) => {
        axiosWithAuth().post(`https://tt75-recipes.herokuapp.com/api/auth/login`, info)
          .then((res) => {
            localStorage.setItem('token', JSON.stringify(res.data.token));
            history.push('/');
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="signup">
      <h1> Sign Up </h1>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <form onSubmit={onSubmit}>
        <label>
          Username
          <br></br>
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
          <br></br>
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
