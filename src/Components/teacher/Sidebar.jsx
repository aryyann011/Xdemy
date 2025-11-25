import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoReorderThreeOutline } from "react-icons/io5";
import { useAuth } from '../../Context/Authcontext';
import { MdOutlineBallot } from "react-icons/md";

function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useAuth();
  const {user} = useAuth()
  const handleToggle = () => {
    toggleSidebar();
  };

  return (
    <div 
      className={`h-screen w-1/5 flex flex-col p-4 text-[#252525] border-r border-[#637083]
        ${isSidebarOpen ? 'w-64' : 'w-20'} 
        transition-all duration-100 ease-in-out`}
    >
      
      {/* <div className='flex justify-center gap-4 ml-1 absolute  hover:bg-gray-100'>
        <IoReorderThreeOutline 
          className={`text-2xl cursor-pointer ${isSidebarOpen ? '' : 'rotate-180'}`}
          onClick={handleToggle}
        />
        {isSidebarOpen && <Link to="/"><span>Home</span></Link>}
      </div> */}

      <nav className="flex flex-col gap-2">
        {[
          { to: '/', icon: <IoReorderThreeOutline className='text-2xl'/>, text: "Home" },
  { to: '/teacher/dashboard', icon: <img src="/image/home_icon.svg" className='h-5 w-5 left-5'/>, text: "Dashboard" },

  user?.user_metadata?.role === 'teacher'
    ? { to: '/teacher/mycourse', icon: <img src="/image/MyCourses.png" className='h-5 w-5'/>, text: "My Courses" }
    : { to: '/mylearning', icon: <img src="/image/person_tick_icon.png" className='h-5 w-5'/>, text : "Enrolled Courses" },

  { to: '/courses', icon: <MdOutlineBallot className='text-[25px]' />, text: "All Courses" }
        ].map((item) => (
          
          <Link key={item.to} onClick={item.to === '/' && handleToggle} to={item.to} className='flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100'>
            
            {item.icon}
            
            {isSidebarOpen && (
              <span className='text-[18px] whitespace-nowrap transition-opacity duration-150'>
                {item.text}
              </span>
            )}
          </Link>
          
        ))}
      </nav>
    </div>
  )
}

export default Sidebar