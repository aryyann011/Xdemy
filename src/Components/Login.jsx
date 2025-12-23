import React from "react";
import { data, Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/Authcontext";
import { useState } from "react";
import { GiCancel } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";

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

                const role = session.user?.user_metadata?.role

                if (role === 'student') {
                    navigate('/student'); // Leading slash is better here
                } else {
                    navigate('/teacher/dashboard');
                }
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
            setValue("email", "aryan456.rehla@gmail.com"); 
            setValue("password", "Ar@180905");      
        } else {
            setValue("email", "aryan007.vns@gmail.com"); 
            setValue("password", "Ar@180905");       
        }
    }
    return (
        <div className="h-full w-full fixed flex flex-row justify-center inset-0 items-center z-50">
            <form action="" onSubmit={handleSubmit(loginUser)} className="h-8/10 w-3/10 flex flex-col gap-6 items-center bg-[#FFFFFF] p-5 rounded-2xl">
                <div className="h-1/8 w-full flex flex-col items-center gap-1">
                <div className="w-full flex justify-end gap-30">
                    <h1 className="text-[#212126] font-bold right-6">Sign in to LMS</h1>
                    <MdCancel onClick={closeloginModal} className="text-3xl cursor-pointer"/>
                </div>
                    <p className="text-[#6B7280] text-[14px]">Welcome back! Please sign in to continue</p>
                </div>
                <button onClick={handleGoogleLogin} className="h-8 w-9/10 border cursor-pointer flex flex-row justify-center items-center gap-3">
                    <img src="/image/images.png" className="h-3/4" alt="" />
                    <p>Continue with google</p>
                </button>

                <div className="flex flex-row w-9/10 items-center gap-3">
                    <hr className="border-none h-0.5 bg-gray-300 w-1/2" />
                    <span className="line">or</span>
                    <hr className="border-none h-0.5 bg-gray-300 w-1/2" />
                </div>
                <div className="h-1/7 w-9/10 flex flex-col gap-1 justify-center">
                    <label htmlFor="emailid" className="h-3 w-full self-start mb-4">Email Address</label>
                    <input type="text" 
                    id="emailid"
                    className="w-full h-8 p-4 border"
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
                <div className="h-1/7 w-9/10 flex flex-col gap-1 justify-center">
                    <label htmlFor="pass" className="h-3 w-full self-start mb-4">Password</label>
                    <input type="password" 
                    id="pass"
                    className="w-full h-8 p-4 border"
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
                        <p className="text-red-500 text-sm">{errors.password.message}</p>
                    )}
                </div>

                <button type="submit" className="w-9/10 h-8 bg-[#111820] text-amber-50">Continue</button>
                <div className="w-full flex gap-3 mb-2">
                    <button 
                        type="button"
                        onClick={() => handleDemoLogin('teacher')}
                        className="flex-1 flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-blue-200 transition font-semibold text-sm"
                    >
                        <FaChalkboardTeacher /> Demo Teacher
                    </button>
                    <button 
                        type="button"
                        onClick={() => handleDemoLogin('student')}
                        className="flex-1 flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-green-200 transition font-semibold text-sm"
                    >
                        <FaUserGraduate /> Demo Student
                    </button>
                </div>
                {error && <p className="text-red-600 text-center">{error}</p>}

                <div className="w-full gap-1 flex flex-col items-center">
                    <hr className="border-none h-0.5 bg-gray-300 w-full" />
                    <p>Don't have an account? 
                        <span onClick = {() => {
                            closeloginModal();
                            OpenSignupModal();
                        }}
                        className="font-semibold cursor-pointer">
                                Sign Up
                        </span>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login