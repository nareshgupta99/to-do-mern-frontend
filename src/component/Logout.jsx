import React, { useEffect } from 'react'

function Logout() {
  
    useEffect(()=>{
        localStorage.setItem("token","");
        
    })
  
  
}

export default Logout