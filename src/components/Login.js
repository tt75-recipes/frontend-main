import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from '../axiosWithAuth.js';

export default function Login() {
  const history = useHistory();
  const [credentials, setCredentials] = useState({ username: '', password: '' })

  const handleChange = e => setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth().post(`https://tt75-recipes.herokuapp.com/api/auth/login`, credentials)
      .then((res) => {
        window.localStorage.setItem('token', JSON.stringify(res.data.token));
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return(
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <>
          <label>Username:</label>
          <input 
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            spellCheck='false'
            autoComplete='off'
          />
        </>
        <>
          <label>Password:</label>
          <input 
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </>
        <button>Login</button>
      </form>
      <p>Don't have an account? <a href="/register">Register</a></p>
    </div>
  );
}