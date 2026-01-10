import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../Context/Authcontext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MdCancel } from "react-icons/md";
import { toast } from "react-toastify"; // Added toast import to match usage

function Signup(){

    const [error, setError] = useState("")
    const {register, handleSubmit, formState : {errors}} = useForm()
    const {signup, loginWithGoogle, closeSignupModal, OpenloginModal} = useAuth()
    const navigate = useNavigate()
    
    const Signupuser = async(data) => {
        setError("")
        try{
            const session = await signup(data)
            if(session){
                closeSignupModal()
                navigate('/')
            }
        }
        catch(error){
            setError(error.message)
        }
    }

    const handleGoogleSignup = async () => {
        try {
            await loginWithGoogle();
            closeSignupModal(); 
        } catch (error) {
            toast.error("Could not reach Google server.");
        }
    };

    return (
        // 1. Added padding (p-4) and backdrop (bg-black/20) for better focus
        <div className="h-full w-full fixed flex flex-row justify-center inset-0 items-center z-50 bg-black/20 backdrop-blur-sm p-4">
            
            {/* 2. Changed dimensions to be responsive (w-full on mobile, fixed on desktop) and auto-height */}
            <form action="" onSubmit={handleSubmit(Signupuser)} className="w-full sm:w-[450px] h-auto max-h-[90vh] overflow-y-auto flex flex-col gap-5 items-center bg-[#FFFFFF] p-6 rounded-2xl shadow-xl border-none scrollbar-hide">
                    
                {/* 3. Header: Relative container to center title, Absolute icon to pin right */}
                <div className="w-full relative flex justify-center items-center mb-2">
                    <h1 className="text-[#212126] font-bold text-xl">Create your Account</h1>
                    <MdCancel 
                        onClick={closeSignupModal} 
                        className="absolute right-0 text-3xl cursor-pointer hover:text-red-500 transition-colors"
                    />
                </div>
                
                <p className="text-[#6B7280] text-[14px] text-center -mt-2">Welcome! Please fill in the details to get started.</p>
                
                {/* 4. Google Button: w-full for full width */}
                <button onClick={handleGoogleSignup} className="h-10 w-full cursor-pointer border rounded-lg flex flex-row justify-center items-center gap-3 hover:bg-gray-50 transition">
                    <img src="/image/images.png" className="h-5" alt="" />
                    <p className="font-medium text-sm text-gray-600">Continue with Google</p>
                </button>

                {/* 5. Divider: w-full */}
                <div className="flex flex-row w-full items-center gap-3">
                    <hr className="border-none h-0.5 bg-gray-300 w-1/2" />
                    <span className="text-gray-400 text-sm">or</span>
                    <hr className="border-none h-0.5 bg-gray-300 w-1/2" />
                </div>

                {/* 6. Email Input: Removed fixed height container (h-1/7), used flex-col */}
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
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                </div>

                {/* 7. Password Input: Fixed type to 'password' (was 'text') for security, removed fixed height */}
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

                {/* 8. Continue Button: w-full, improved hover state */}
                <button type="submit" className="w-full h-10 bg-[#111820] text-amber-50 rounded-lg hover:bg-gray-800 transition font-medium">Continue</button>
                
                {error && <p className="text-red-600 text-center text-sm">{error}</p>}
                
                <hr className="border-none h-0.5 bg-gray-300 w-full" />
                
                <p className="text-sm text-gray-600">Already have an account?
                    <span onClick={() => {
                        closeSignupModal();
                        OpenloginModal();
                    }} className="font-bold text-[#111820] cursor-pointer ml-1 hover:underline">
                        Sign In
                    </span>
                </p>
            </form>
        </div>
    )
}

export default Signup