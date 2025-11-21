import { useState } from 'react'
import Navbar from './Components/NavBar'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Components/Login'
import { useAuth } from './Context/Authcontext'
import Signup from './Components/Signup'
import Browse from './Pages/browse'
import AddCourse from './Pages/AddCourse'
import {ToastContainer} from 'react-toastify'
import Dropdown from './Components/Dropdown'
import Sidebar from './Components/teacher/Sidebar'
import EditCourse from './Pages/teacher/EditCourse'
import "@fortawesome/fontawesome-free/css/all.css";

function App() {

  const {isloginModalOpen, isSignupModalOpen, user} = useAuth()
  return (
    <div className='min-h-screen min-w-screen'>
      <div
  className={`h-full w-full bg-linear-to-b from-[#E6FFFF] to-[#FFFFFF] overflow-y-hidden overflow-x-auto scrollbar-none ${
    isloginModalOpen || isSignupModalOpen ? "blur-sm" : ""
  }`}
>
        <Navbar />
        <main className='flex flex-row'>
          {user?.user_metadata?.role === 'teacher' ? <Sidebar/>
                : ""}
          <Outlet/>
        </main>
        <Footer />
        <ToastContainer
        position="bottom-right" // You can change the position
        autoClose={3000} // Hide after 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      </div>
        {isloginModalOpen && <Login/>}
        {isSignupModalOpen && <Signup/>}
    </div>
  )
}

export default App
