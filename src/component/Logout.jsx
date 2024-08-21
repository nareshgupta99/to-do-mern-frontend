import React, { useEffect } from 'react'
import { Navigate } from 'react-router';

function Logout() {
  
    useEffect(()=>{
        localStorage.setItem("token","");
        
    })
  
  
}

export default Logout