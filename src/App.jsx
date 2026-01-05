import { useState } from 'react'
import Navbar from './Components/Navbar1'
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
import StudentSidebar from './Components/Student/StudenSidebar'
import Cart from './Components/Cart'
import Chat from './Components/Chat'
import Profile from './Components/Profile'
import Notifications from './Components/Notifications'

function App() {

  const {isloginModalOpen, isSignupModalOpen, isSidebarOpen, user, isClicked, handleClick} = useAuth()
  
  return (
    <div className="w-full">
      <div
  className={`w-full bg-linear-to-b from-slate-50 to-[#FFFFFF] ${
    isloginModalOpen || isSignupModalOpen ? "blur-sm" : ""
  }`}
>

        {user && (
          <>
            {/* {isClicked.cart && (
              <div
                className="fixed inset-0 bg-black/40 z-40"
                onClick={() => handleClick("cart")}
              />
            )} */}

            {isClicked.cart && (user?.user_metadata?.role === 'student') ? <Cart /> : ""}
            {isClicked.chat && (user?.user_metadata?.role === 'teacher') ? <Chat /> : ""}
            {isClicked.notifications && (user?.user_metadata?.role === 'teacher') ? <Notifications /> : ""}
            {isClicked.profile && <Profile />}
          </>
        )}

        <main>
          {/* {isSidebarOpen && user && user.metadata === 'teacher' ? <Sidebar/> : ""} */}
          {/* {user?.user_metadata?.role === "student" && <StudentSidebar />} */}
          <Outlet/>
        </main>
        <ToastContainer
        position="bottom-right"
        autoClose={3000} 
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
