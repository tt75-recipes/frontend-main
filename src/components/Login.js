import React, { useState } from 'react';
import axios from 'axios';

export default class Login extends React.Component {

  state = {
    credentials: {
      username: '',
      password: ''
    }
  }
  
  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  } 

  handleSubmit = e => {
    e.preventDefault();
    axios.post(`https://tt75-recipes.herokuapp.com/api/auth/login`, this.state.credentials)
      .then((res) => {
        console.log(res);
        window.localStorage.setItem('token', JSON.stringify(res.data.payload));
        // TODO: navigate to recipes
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return(
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <>
            <label>Username:</label>
            <input 
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
              spellCheck='false'
              autoComplete='off'
            />
          </>
          <>
            <label>Password:</label>
            <input 
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
          </>
          <button>Login</button>
        </form>
        <p>Don't have an account? <a href="#">Register</a></p>
      </div>
    );
  }
}