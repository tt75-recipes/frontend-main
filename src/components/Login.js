import React from 'react';

export default function Login() {

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitted');
  }

  return(
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <>
          <label>Username:</label>
          <input type="text"></input>
        </>
        <>
          <label>Password:</label>
          <input type="password"></input>
        </>

        <button>Login</button>

      </form>
      <p>Don't have an account? <a href="#">Register</a></p>
    </div>
  );
}