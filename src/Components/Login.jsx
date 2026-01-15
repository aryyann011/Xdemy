import React from "react";
import { data, Link, replace, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/Authcontext";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { toast } from "react-toastify";

function Login(){

    const [error, setError] = useState("")
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}, reset, setValue} = useForm()
    const {login, loginWithGoogle, closeloginModal, OpenSignupModal} = useAuth()
    
    const loginUser = async (data) => {
        setError("")
        try{
            const session = await login(data)
            if(session){
                closeloginModal()
                navigate('/home', { replace: true })
            }
        }
        catch (error){
            setError(error.message)
        }
    }

    const handleGoogleLogin = async () => {
        try {
            await loginWithGoogle();
        } catch (error) {
            console.log(error);
            toast.error("Google Login Failed");
        }
    };

    const handleDemoLogin = (role) => {
        if (role === 'teacher') {
            setValue("email", "demo.teacher@yourapp.com"); 
            setValue("password", "demoPassword123!");      
        } else {
            setValue("email", "demo.student@yourapp.com"); 
            setValue("password", "demoPassword123!");       
        }
    }

    return (
        <div className="h-full w-full fixed flex flex-row justify-center inset-0 items-center z-50 bg-black/20 backdrop-blur-sm p-4">
            
            <form action="" onSubmit={handleSubmit(loginUser)} className="w-full sm:w-[450px] h-auto max-h-[90vh] overflow-y-auto flex flex-col gap-6 items-center bg-[#FFFFFF] p-6 rounded-2xl shadow-xl scrollbar-hide">
                
                
                <div className="w-full flex flex-col items-center gap-1">
                    
                    
                    <div className="w-full relative flex justify-center items-center">
                        <h1 className="text-[#212126] font-bold text-xl">Sign in to LMS</h1>
                        
                        
                        <MdCancel 
                            onClick={closeloginModal} 
                            className="absolute right-0 text-3xl cursor-pointer hover:text-red-500 transition-colors"
                        />
                    </div>

                    <p className="text-[#6B7280] text-[14px]">Welcome back! Please sign in to continue</p>
                </div>

                <button onClick={handleGoogleLogin} className="h-10 w-full border rounded-lg cursor-pointer flex flex-row justify-center items-center gap-3 hover:bg-gray-50 transition">
                    <img src="/image/images.png" className="h-5" alt="" />
                    <p className="font-medium text-sm text-gray-600">Continue with Google</p>
                </button>

                <div className="flex flex-row w-full items-center gap-3">
                    <hr className="border-none h-0.5 bg-gray-300 w-1/2" />
                    <span className="text-gray-400 text-sm">or</span>
                    <hr className="border-none h-0.5 bg-gray-300 w-1/2" />
                </div>

                <div className="w-full flex flex-col gap-1 justify-center">
                    <label htmlFor="emailid" className="text-sm font-semibold mb-1">Email Address</label>
                    <input type="text" 
                    id="emailid"
                    className="w-full h-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your Email Address"
                    {...register("email", {
                        required : true, 
                        validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }
                    })}
                    />
                </div>

                <div className="w-full flex flex-col gap-1 justify-center">
                    <label htmlFor="pass" className="text-sm font-semibold mb-1">Password</label>
                    <input type="password" 
                    id="pass"
                    className="w-full h-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                    {...register("password", {
                        required : true,
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters",
                        },
                        pattern: {
                            value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/,
                            message:
                            "Password must contain at least one uppercase letter, one number, and one special character",
                        },
                    })}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                    )}
                </div>

                <button type="submit" className="w-full h-10 bg-[#111820] text-amber-50 rounded-lg hover:bg-gray-800 transition font-medium">Continue</button>
                
                <div className="w-full flex flex-col sm:flex-row gap-3 mb-2">
                    <button 
                        type="button"
                        onClick={() => handleDemoLogin('teacher')}
                        className="flex-1 flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-blue-100 transition font-semibold text-sm"
                    >
                        <FaChalkboardTeacher /> Demo Teacher
                    </button>
                    <button 
                        type="button"
                        onClick={() => handleDemoLogin('student')}
                        className="flex-1 flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-green-100 transition font-semibold text-sm"
                    >
                        <FaUserGraduate /> Demo Student
                    </button>
                </div>
                
                {error && <p className="text-red-600 text-center text-sm">{error}</p>}

                <div className="w-full gap-1 flex flex-col items-center">
                    <hr className="border-none h-0.5 bg-gray-300 w-full mb-2" />
                    <p className="text-sm text-gray-600">Don't have an account? 
                        <span onClick = {() => {
                            closeloginModal();
                            OpenSignupModal();
                        }}
                        className="font-bold text-[#111820] cursor-pointer ml-1 hover:underline">
                                Sign Up
                        </span>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login