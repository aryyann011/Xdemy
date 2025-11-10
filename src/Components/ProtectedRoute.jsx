import React from 'react'
import { useAuth } from '../Context/Authcontext'
import { Outlet, useNavigate } from 'react-router-dom'

function ProtectedRoute() {

    const {user, isLoading} = useAuth()
    const Navigate = useNavigate()
    if(isLoading) return <h1>Loading....</h1>
  return (
    (user && user.user_metadata.role === 'teacher') 
      ? <Outlet />  
      : <Navigate to="/" replace /> 
  )
}

export default ProtectedRoute
