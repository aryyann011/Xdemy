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
        <nav className="min-h-25 sm:min-h-12 w-full flex flex-row items-center justify-around ">
            {user ? <div className="text-2xl cursor-pointer" onClick={() => toggleSidebar()}>
                <IoReorderThreeOutline/>
            </div> : ""}
            <Link to="/" className="flex items-center">
               <Edemy />
            </Link>

            {user ? (<div className="h-8 w-1/4 absolute flex flex-row items-center justify-center gap-3 right-4">
                {user.user_metadata?.role === 'teacher' ? <Link to="/teacher/addCourse"><span>Add Course</span></Link>
                : ""}
                {/* <span><Link to="/login">Login</Link></span> */}
                <button onClick={logoutUser} className="h-full w-1/3 rounded-2xl bg-[#2563EB] text-[#FFFFFF] text-sm bottom-1.5 object-contain">
                        Logout
                    </button>
            </div>) :
            (<div className="h-8 w-1/4 absolute flex flex-row justify-center gap-3 right-4">
                <span className="cursor-pointer" onClick={OpenloginModal}>Login</span>
                    <button onClick={OpenSignupModal} className="h-full w-1/3 rounded-2xl bg-[#2563EB] text-[#FFFFFF] text-sm bottom-1.5 object-contain">
                        Create Account
                    </button>
            </div>
            )}
        </nav>
        <hr className="border-none h-0.5 bg-gray-300 w-full" />
        </>
    )
}

export default Navbar