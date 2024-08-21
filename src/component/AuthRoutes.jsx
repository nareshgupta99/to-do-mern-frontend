import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router'

function AuthRoutes() {
    const isAuthenticated = !!localStorage.getItem("token"); // Check if token exists

    return isAuthenticated ? <Navigate to="/user/task" />:<Outlet />  ;
}

export default AuthRoutes