import React from 'react'
import { useAuth } from '../Context/Authcontext'
import { Outlet, Navigate } from 'react-router-dom'
import StudentSidebar from '../Components/Student/StudenSidebar'
import Navbar from '@/Components/Navbar1'
import Footer from '@/Components/Footer'


const StudentLayout = () => {

    const {user, isLoading} = useAuth()

    if(isLoading) return <div className='min-h-screen'>Loading...</div>
    console.log("Full User Data:", user);
console.log("Role found:", user?.user_metadata?.role);
  return (
    <div>
        {(user?.user_metadata?.role === 'student') 
        ? (<div className="flex h-screen w-full overflow-hidden">
        <StudentSidebar/>
        <div className="flex-1 overflow-y-auto hide-scrollbar">
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
        </div>  )
        : (<Navigate to="/home" replace /> )}
    </div>
  )
}

export default StudentLayout
