import React from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { IoReorderThreeOutline } from "react-icons/io5";
import { useAuth } from '../../Context/Authcontext';
import { MdOutlineBallot } from "react-icons/md";
import { X } from "lucide-react";
import { sidebarLinks } from '../../data/dummy';

function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useAuth();
  const {user} = useAuth()
  const handleToggle = () => {
    toggleSidebar();
  };

  return (
    <div className={`
      fixed inset-y-0 left-0 z-50 w-64 bg-white border-r
      transform transition-transform duration-300 ease-in-out
      ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
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
              {sidebarLinks.map((element) => (
                <div key={element.title} className="mt-4">
                   <h1 className="text-gray-400 uppercase font-bold text-sm mb-3">
                     {element.title}
                   </h1>
                   {element.links.map((link) => (
                     <NavLink 
                       key={link.name}
                       to={`/${link.path}`}
                       onClick={() => toggleSidebar()} 
                       className={({ isActive }) => 
                         `flex items-center gap-4 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 
                         ${isActive ? "bg-[#ADEED9] text-black" : "text-gray-700 hover:bg-gray-100"}`
                       }
                     >
                       <div>
                        {link.icon}
                       </div>
                       <span className="capitalize">{link.name}</span>
                     </NavLink>
                   ))}
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}

export default Sidebar