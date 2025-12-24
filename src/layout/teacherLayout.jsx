import React from 'react';
import Sidebar from '../Components/teacher/Sidebar';
import { useAuth } from '../Context/Authcontext'
import { Outlet, Navigate } from 'react-router-dom'

function TeacherLayout() {

    const {user, isLoading} = useAuth()
    // const Navigate = useNavigate()
    if(isLoading) return <h1>Loading....</h1>
  return (
    (user?.user_metadata?.role === 'teacher') 
      ? (<div className='flex '>
      <Sidebar/>
      <div className="flex-1 p-10 transition-all duration-300">
        <Outlet />
      </div>
    </div> ) 
      : (<Navigate to="/" replace /> )
  )
}

export default TeacherLayout