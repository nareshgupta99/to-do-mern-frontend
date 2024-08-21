import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router'

function PrivateRoutes() { 
  const isAuthenticated = !!localStorage.getItem("token"); // Check if token exists

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />;
}

export default PrivateRoutes