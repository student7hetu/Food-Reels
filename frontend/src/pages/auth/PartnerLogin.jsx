import React from 'react';
import '../../assets/styles/auth.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const PartnerLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const res = await axios.post('/api/auth/food-partner/login', { email, password }, { withCredentials: true });
      console.log('Partner login success', res.data);
      toast.success('Logged in successfully');
      sessionStorage.setItem('homeSeen', 'true');
      navigate('/create-food');
    } catch (err) {
      const status = err.response?.status;
      const message = err.response?.data?.message || err.message;
      if (status === 401 || status === 404 || /not found/i.test(message)) {
        toast.error('Invalid credentials or partner not found');
      } else {
        toast.error('Login failed. Please try again.');
      }
      console.error('Partner login failed', err?.response?.data || err.message);
    }
  };

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
        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="auth-field" placeholder="you@kitchen.com" />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" className="auth-field" placeholder="Your password" />

          <div className="auth-actions">
            <label className="remember">
              <input type="checkbox" name="remember" aria-label="Remember me" />
              Remember me
            </label>
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
