import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../Context/Authcontext';
import { MdOutlineBallot } from "react-icons/md";
import { X } from "lucide-react"; 

function StudentSidebar() {
  const { isSidebarOpen, toggleSidebar } = useAuth();
  const {user} = useAuth()
  const handleToggle = () => {
    toggleSidebar();
  };

  return (
    <div className={`
            fixed inset-y-0 left-0 z-50 bg-white border-r transition-all duration-500
            ${isSidebarOpen ? 'w-72' : 'w-0'} 
            md:static 
            ${!isSidebarOpen && 'md:hidden'}
        `}>
          <div className="h-full flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 pb-10">
            
            <div className="flex justify-between items-center p-4 border-b">
                <h1 className="font-bold text-xl">Dashboard</h1>
                
                <button 
                    type="button"
                    onClick={() => toggleSidebar()}
                    className="p-2 hover:bg-gray-100 rounded-full md:hidden"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>
    
            <div className="p-4">
              {[
        //   { to: '/', icon: <IoReorderThreeOutline className='text-2xl'/>, text: "Home" },

     { to: '/mylearning', icon: <img src="/image/person_tick_icon.png" className='w-5'/>, 
        text : "Enrolled Courses" },

  { to: '/courses', icon: <MdOutlineBallot className='text-[25px]' />, text: "All Courses" }
        ].map((element) => (
                <Link key={element.text} to={element.to} className="w-65 mt-4 flex items-center">
                   <h1 className="text-gray-400 font-bold text-sm mb-3">
                     {element.text}
                   </h1>
                   <div>
                    {element.icon}
                   </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
  )
}

export default StudentSidebar