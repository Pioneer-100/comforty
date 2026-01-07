import React from 'react'
import {Navigate, useLocation} from 'react-router'

const AuthCheck = ({children}) => {
  
  const isAuthenticate=false; //TODO: change authentication logic
  const location=useLocation();

  if(isAuthenticate){
    return <Navigate to="/auth/login" state={{from:location}} />
  }
  return children;
  

}

export default AuthCheck