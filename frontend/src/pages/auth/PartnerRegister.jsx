import React from 'react';
import '../../assets/styles/auth.css';
import { Link } from 'react-router-dom';

const PartnerRegister = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Create a partner account</h1>
          <p>Sign up as a Food Partner to start listing and managing your menu.</p>
          <div className="role-switch">
            <Link aria-label="goto partner login" className="role-link active" to="/food-partner/register">Partner</Link>
            <Link aria-label="goto user register" className="role-link" to="/user/register">User</Link>
          </div>
        </div>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="contactName">Contact name</label>
          <input id="contactName" name="contactName" className="auth-field" placeholder="John Doe" />

          <label htmlFor="businessName">Business name</label>
          <input id="businessName" name="businessName" className="auth-field" placeholder="My Tasty Kitchen" />

          <label htmlFor="phone">Phone number</label>
          <input id="phone" name="phone" type="tel" className="auth-field" placeholder="+1 (555) 987-6543" />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="auth-field" placeholder="you@example.com" />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" className="auth-field" placeholder="Your password" />

          <label htmlFor="address">Business address</label>
          <input id="address" name="address" className="auth-field" placeholder="Street, City, ZIP" />

          <div className="auth-actions">
            <button type="button" className="ghost-btn">Cancel</button>
            <button type="submit" className="primary-btn">Create Account</button>
          </div>

          <div className="auth-footer">
            Already have a partner account? <Link className="auth-link" to="/food-partner/login">Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PartnerRegister;
