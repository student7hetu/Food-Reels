import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/styles/auth.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const UserRegister = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await axios.post('/api/auth/user/register', {
        fullName,
        email,
        password,
      }, {
        withCredentials: true
      });
      console.log('Success:', res.data);
      toast.success('Account created successfully');
      sessionStorage.setItem('homeSeen', 'true');
      navigate('/');
    } catch (err) {
      const status = err.response?.status;
      const message = err.response?.data?.message || err.message;
      if (status === 409 || /already exists/i.test(message)) {
        toast.error('An account with that email already exists');
      } else {
        toast.error('Registration failed. Please try again.');
      }
      console.log('Error:', err.response?.data || err.message);
    }
  };

  return (
    <div className='auth-container'>
      <div className='auth-card'>
        <div className='auth-header'>
          <h1>Create an account</h1>
          <p>Sign up as a User to explore and order your favorite food.</p>
          <div className='role-switch'>
            <Link
              aria-current='true'
              aria-label='current role user'
              className='role-link active'
              to='/user/register'
            >
              User
            </Link>
            <Link
              aria-label='goto partner'
              className='role-link'
              to='/food-partner/register'
            >
              Partner
            </Link>
          </div>
        </div>
        <form className='auth-form' onSubmit={handleSubmit}>
          <label htmlFor='fullName'>Full name</label>
          <input
            id='fullName'
            name='fullName'
            className='auth-field'
            placeholder='John Doe'
          />

          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='email'
            className='auth-field'
            placeholder='you@example.com'
          />

          <label htmlFor='password'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            className='auth-field'
            placeholder='Your password'
          />

          <div className='auth-actions'>
            <button type='button' className='ghost-btn'>
              Cancel
            </button>
            <button type='submit' className='primary-btn'>
              Create Account
            </button>
          </div>

          <div className='auth-footer'>
            Already have an account?{' '}
            <Link className='auth-link' to='/user/login'>
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
