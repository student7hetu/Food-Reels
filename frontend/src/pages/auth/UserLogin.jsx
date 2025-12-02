import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/auth.css';

const UserLogin = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Welcome back</h1>
          <p>Sign in to continue exploring and ordering food.</p>
          <div className="role-switch">
            <Link aria-current="true" aria-label="current role user login" className="role-link active" to="/user/login">User</Link>
            <Link aria-label="goto partner" className="role-link" to="/food-partner/login">Partner</Link>
          </div>
        </div>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="auth-field" placeholder="you@example.com" />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" className="auth-field" placeholder="Your password" />

          <div className="auth-actions">
            <button type="button" className="ghost-btn">Forgot?</button>
            <button type="submit" className="primary-btn">Sign in</button>
          </div>

          <div className="auth-footer">
            Don’t have an account? <Link className="auth-link" to="/user/register">Create one</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
