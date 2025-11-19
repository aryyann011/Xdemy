import React from 'react'
import { Link } from 'react-router-dom'
import { IoReorderThreeOutline } from "react-icons/io5";

function Sidebar() {
  return (
    <div className='h-screen w-1/7 flex flex-col p-4 text-[#252525] border-r border-[#637083]'>
      <div className='flex justify-start mb-2'>
        <IoReorderThreeOutline className='text-2xl' />
      </div>
      <div className='flex flex-row gap-2 p-2'>
        <Link to='/teacher/dashboard' className='hover:underline cursor-pointer'>
          <img src="/image/home_icon.svg" alt="" />
          <span>Dashboard</span>
        </Link>
      </div>
      <div className='flex flex-row gap-2 p-2'>
        <Link to='/teacher/addCourse' className='hover:underline cursor-pointer'>
          <img src="/image/add_icon.svg" alt="" />
          <span>Add Courses</span>       
        </Link>
      </div>
      <div className='flex flex-row gap-2 p-2'>
        <Link to='/teacher/mycourse' className='hover:underline cursor-pointer'>
          <img src="/image/MyCourses.png" alt="" />
          <span>My Courses</span>
        </Link>
      </div>
      <div className='flex flex-row gap-2 p-2'>
        <Link to='/' className='hover:underline cursor-pointer'>
          <img src="/image/person_tick_icon.png" alt="" className='h-6'/>
          <span>Students Enrolled</span>        
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
