import React from 'react';
import '../../assets/styles/auth.css';
import { Link } from 'react-router-dom';

const AuthChoice = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Get started</h1>
          <p>Choose how you want to join Food-Reels.</p>
        </div>
        <div className="choice-grid">
          <div className="choice-card">
            <h3>Register as a User</h3>
            <p>Browse menus, order food and enjoy delivery to your door.</p>
            <div className="choice-actions">
              <Link className="choice-btn" to="/user/register">Register</Link>
              <Link className="choice-btn choice-secondary" to="/user/login">Sign in</Link>
            </div>
          </div>
          <div className="choice-card">
            <h3>Register as Food Partner</h3>
            <p>List your business, manage menu items and receive orders.</p>
            <div className="choice-actions">
              <Link className="choice-btn" to="/food-partner/register">Register</Link>
              <Link className="choice-btn choice-secondary" to="/food-partner/login">Sign in</Link>
            </div>
          </div>
        </div>
        <div className="auth-footer" style={{marginTop: '1rem'}}>
          Already started? <Link className="auth-link" to="/user/login">Sign in as User</Link> or <Link className="auth-link" to="/food-partner/login">Partner</Link>
        </div>
      </div>
    </div>
  );
};

export default AuthChoice;
