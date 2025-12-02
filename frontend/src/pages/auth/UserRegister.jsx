import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/auth.css';

const UserRegister = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Create an account</h1>
          <p>Sign up as a User to explore and order your favorite food.</p>
          <div className="role-switch">
            <Link aria-current="true" aria-label="current role user" className="role-link active" to="/user/register">User</Link>
            <Link aria-label="goto partner" className="role-link" to="/food-partner/register">Partner</Link>
          </div>
        </div>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" className="auth-field" placeholder="John Doe" />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="auth-field" placeholder="you@example.com" />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" className="auth-field" placeholder="Your password" />

          <div className="auth-actions">
            <button type="button" className="ghost-btn">Cancel</button>
            <button type="submit" className="primary-btn">Create Account</button>
          </div>

          <div className="auth-footer">
            Already have an account? <Link className="auth-link" to="/user/login">Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
