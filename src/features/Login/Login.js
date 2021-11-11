import React from 'react';
export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <div>
        <div>Username:</div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div>
        <div>Password:</div>
        <div>
          <input type="password" />
        </div>
      </div>
      <div>
        <div>
          <br />
          <button type="button" className="btn btn-primary">
            Sign In
          </button>
          <button type="button" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
