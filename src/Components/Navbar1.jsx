import React from "react";
import Edemy from "./Edemy";
import { Link } from "react-router-dom";
import { Authprovider, useAuth } from "../Context/Authcontext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";

function Navbar(){

    const [islogged, setIslogged] = useState(false)
    const {user, logout, OpenloginModal, OpenSignupModal, toggleSidebar} = useAuth()
    const navigate = useNavigate()

    const logoutUser = () => {
        logout()
        navigate('/')
    }

    // const checkUser = () => {
    //     user?.user_metadata?.role === 'student' ? toggleSidebar() : "";
    // }
    return (
        <>
        <nav className="fixed bg-stone-50 top-0 left-0 w-full h-14 border-b flex items-center justify-between px-6">
        
        <div className="flex items-center gap-3">
          {user && (
            <button
              onClick={() => toggleSidebar()}
              className="text-2xl cursor-pointer"
            >
              <IoReorderThreeOutline />
            </button>
          )}

          <Link to="" className="flex items-center">
            <Edemy />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              {user.user_metadata?.role === "teacher" && (
                <Link to="teacher/addCourse" className="font-medium">
                  Add Course
                </Link>
              )}

              <button
                onClick={logoutUser}
                className="px-4 py-1.5 rounded-2xl bg-blue-600 text-white text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <span
                className="cursor-pointer font-medium"
                onClick={OpenloginModal}
              >
                Login
              </span>

              <button
                onClick={OpenSignupModal}
                className="px-4 py-1.5 rounded-2xl bg-blue-600 text-white text-sm"
              >
                Create Account
              </button>
            </>
          )}
        </div>
      </nav>

      <div className="h-14" />
    </>
    )
}

export default Navbar