import React from 'react';
import '../../assets/styles/auth.css';
import { Link } from 'react-router-dom';

const PartnerLogin = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Welcome back, Partner</h1>
          <p>Sign in to manage your food listings and orders.</p>
          <div className="role-switch">
            <Link aria-current="true" aria-label="current role partner" className="role-link active" to="/food-partner/login">Partner</Link>
            <Link aria-label="goto user login" className="role-link" to="/user/login">User</Link>
          </div>
        </div>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="auth-field" placeholder="you@kitchen.com" />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" className="auth-field" placeholder="Your password" />

          <div className="auth-actions">
            <button type="button" className="ghost-btn">Forgot?</button>
            <button type="submit" className="primary-btn">Sign in</button>
          </div>

          <div className="auth-footer">
            Don’t have a partner account? <Link className="auth-link" to="/food-partner/register">Create one</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PartnerLogin;
