import React from 'react'
import { Navigate, Outlet } from 'react-router'

function PrivateRoutes() { 
  const isAuthenticated = !!localStorage.getItem("token"); // Check if token exists

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />;
}

export default PrivateRoutes