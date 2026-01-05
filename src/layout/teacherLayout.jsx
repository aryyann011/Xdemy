import React from 'react';
import Sidebar from '../Components/teacher/Sidebar';
import { useAuth } from '../Context/Authcontext'
import { Outlet, Navigate } from 'react-router-dom'
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar1';

function TeacherLayout() {

    const {user, isLoading, isSidebarOpen} = useAuth()
    // const Navigate = useNavigate()
    if(isLoading) return <div className='min-h-screen'>Loading....</div>
  return (
    (user?.user_metadata?.role === 'teacher') 
      ? (<div className="flex h-screen w-full overflow-hidden">
      <Sidebar/>
      <div
        className={`
          flex-1 w-full overflow-y-auto overflow-x-hidden
          transition-all duration-300 hide-scrollbar
          ${isSidebarOpen ? 'md:ml-64' : 'md:ml-0'}
        `}
      >
        <Navbar />
        <Outlet />
        {/* <Footer/> */}
      </div>
    </div> ) 
      : (<Navigate to="/home" replace /> )
  )
}

export default TeacherLayout