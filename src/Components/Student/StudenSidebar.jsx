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
    fixed inset-y-0 left-0 z-50 w-72 bg-white border-r
    transform transition-transform duration-300 ease-in-out
    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
  `}>
          <div className="h-full flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 pb-10">
            
            <div className="flex justify-between items-center p-4 border-b">
                <h1 className="font-bold text-xl">Dashboard</h1>
                
                <button 
                    type="button"
                    onClick={() => toggleSidebar()}
                    className="p-2 hover:bg-gray-100 rounded-full"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>            
            <div className="p-4">

              {[
     { to: '/mylearning', icon: <img src="/image/person_tick_icon.png" className='w-5'/>, 
        text : "Enrolled Courses" },
  { to: '/courses', icon: <MdOutlineBallot className='text-[25px]' />, text: "All Courses" }
        ].map((element) => (
                <Link key={element.text} to={element.to} className="w-65 mt-4 flex justify-start items-center">
                   <h1 className="text-gray-400 font-bold text-[18px] mb-3">
                     {element.text}
                   </h1>    
                   <div className='fixed right-'>
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