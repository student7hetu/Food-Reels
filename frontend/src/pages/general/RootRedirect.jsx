import React from 'react';
import { Navigate } from 'react-router-dom';
import Home from './Home';

const RootRedirect = () => {
  const showHome = sessionStorage.getItem('homeSeen') === 'true';

  if (!showHome) {
    return <Navigate to="/user/register" replace />;
  }

  return <Home />;
};

export default RootRedirect;
