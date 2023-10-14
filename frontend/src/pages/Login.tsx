import React from "react";
import './styles/LoginStyles.scss'
import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className='container'>
      <div className='leftDecoration'>
        <span className='welcome'>W.e.l.c.o.m.e!</span>
      </div>
      <div className='authentication'>
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
          <span>
            Don't you have an account?
            <Link to='/register'>Register</Link>
          </span>
        </form>
      </div>
    </div>
  );
}