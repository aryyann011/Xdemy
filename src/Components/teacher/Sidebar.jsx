import React from 'react'
import { Link } from 'react-router-dom'
import { IoReorderThreeOutline } from "react-icons/io5";

function Sidebar() {
  return (
    <div className='h-screen w-1/7 flex flex-col p-4 text-[#252525] border-r border-[#637083]'>
      <div className='flex justify-start'>
        <IoReorderThreeOutline />
      </div>
      <div className='flex flex-row gap-2 p-2'>
        <img src="/image/home_icon.svg" alt="" />
        <span>Dashboard</span>
      </div>
      <div className='flex flex-row gap-2 p-2'>
        <img src="/image/add_icon.svg" alt="" />
        <span>Add Courses</span>
      </div>
      <div className='flex flex-row gap-2 p-2'>
        <img src="/image/MyCourses.png" alt="" />
        <span>My Courses</span>
      </div>
      <div className='flex flex-row gap-2 p-2'>
        <img src="/image/person_tick_icon.png" alt="" className='h-6'/>
        <span>Students Enrolled</span>
      </div>
    </div>
  )
}

export default Sidebar
