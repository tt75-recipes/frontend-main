import React from 'react';

export default function Login() {

  const handleSubmit = e => {
    console.log('submitted');
  }

  return(
    <div className="login">
      <h1>Login</h1>
      <form>
        <label>Username:</label>
        <input type="text"></input>
        <label>Password:</label>
        <input type="password"></input>
        <button>Login</button>
      </form>
      Don't have an account? Register
    </div>
  );
}