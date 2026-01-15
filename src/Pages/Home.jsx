import Footer from "@/Components/Footer";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-auto w-full flex flex-col items-center px-4 md:px-0">
      
      <div className="w-full max-w-5xl flex flex-col justify-center items-center text-center gap-6 mt-10 md:mt-20 py-10">
        <h1 className="md:w-3/4 w-3/4 font-bold text-3xl md:text-5xl leading-tight">
          Empower your future with the courses designed to{" "}
          <span className="text-[#2563EB]">fit your choice</span>
        </h1>
        
        <p className="md:w-3/4 w-3/4 text-[#565656] text-sm md:text-base">
          We bring together world-class instructors, interactive content, and a
          supportive community to help you achieve your personal and
          professional goals.
        </p>

        <div className="w-full md:w-2/3 relative flex flex-row items-center mt-4">
          <img
            src="/image/search_icon.svg"
            className="absolute pl-3 left-1 w-8"
            alt=""
          />
          <input
            type="text"
            placeholder="Search for Courses"
            className="h-12 w-full pl-12 pr-24 border border-[#6B728033] bg-[#FFFFFF] rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute w-24 h-9 bg-[#2563EB] right-1.5 text-[#FFFFFF] rounded-sm text-sm hover:bg-blue-700 transition-colors">
            Search
          </button>
        </div>
      </div>

      <div className="w-full max-w-4xl mt-6 flex flex-col items-center justify-center gap-6 py-8">
        <p className="text-sm">Trusted by learners from</p>
        <ul className="w-full flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 transition-all hover:grayscale-0">
          <li><img src="/image/microsoft_logo.svg" alt="Microsoft" className="h-6 md:h-8" /></li>
          <li><img src="/image/walmart_logo.svg" alt="Walmart" className="h-6 md:h-8" /></li>
          <li><img src="/image/accenture_logo.svg" alt="Accenture" className="h-6 md:h-8" /></li>
          <li><img src="/image/adobe_logo.svg" alt="Adobe" className="h-6 md:h-8" /></li>
          <li><img src="/image/paypal_logo.svg" alt="Paypal" className="h-6 md:h-8" /></li>
        </ul>
      </div>

      <div className="w-full max-w-7xl flex mt-16 flex-col justify-center items-center gap-10 font-medium text-[#565656]">
        <div className="text-center px-4">
          <h1 className="text-[#0E0E0E] text-2xl md:text-3xl mb-4">Learn from the best</h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base">
            Discover our top-rated courses across various categories. From coding
            and design to business and wellness, our courses are crafted to
            deliver results.
          </p>
        </div>

        <ul className="w-full px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <li className="border border-[#E1E1E1] rounded-lg overflow-hidden flex flex-col pb-4 hover:shadow-lg transition-shadow">
            <img className="h-48 w-full object-cover" src="/image/img2.png" alt="" />
            <div className="px-4 flex flex-col gap-2 mt-3 flex-grow">
              <h1 className="text-[#0E0E0E] text-lg font-bold leading-snug line-clamp-2">Build Text to image SaaS App in React JS</h1>
              <span className="text-sm text-gray-500">Richard James</span>
              <div className="flex flex-row gap-2 items-center text-sm">
                <span className="font-bold text-amber-500">4.5</span>
                <div className="flex">
                   {[1,2,3,4].map(i => <img key={i} src="/image/star_icon.png" className="w-4 h-4" alt="" />)}
                   <img src="/image/star_dull_icon.svg" className="w-4 h-4" alt="" />
                </div>
                <span className="text-gray-400">(122)</span>
              </div>
              <h1 className="mt-auto font-bold text-xl">$10.99</h1>
            </div>
          </li>

           <li className="border border-[#E1E1E1] rounded-lg overflow-hidden flex flex-col pb-4 hover:shadow-lg transition-shadow">
            <img className="h-48 w-full object-cover" src="/image/img3.png" alt="" />
            <div className="px-4 flex flex-col gap-2 mt-3 flex-grow">
              <h1 className="text-[#0E0E0E] text-lg font-bold leading-snug line-clamp-2">Build AI BG Removal SaaS App</h1>
              <span className="text-sm text-gray-500">Richard James</span>
              <div className="flex flex-row gap-2 items-center text-sm">
                <span className="font-bold text-amber-500">4.5</span>
                <div className="flex">
                   {[1,2,3,4].map(i => <img key={i} src="/image/star_icon.png" className="w-4 h-4" alt="" />)}
                   <img src="/image/star_dull_icon.svg" className="w-4 h-4" alt="" />
                </div>
                <span className="text-gray-400">(122)</span>
              </div>
              <h1 className="mt-auto font-bold text-xl">$10.99</h1>
            </div>
          </li>


          <li className="border border-[#E1E1E1] rounded-lg overflow-hidden flex flex-col pb-4 hover:shadow-lg transition-shadow">
            <img className="h-48 w-full object-cover" src="/image/img1.png" alt="" />
            <div className="px-4 flex flex-col gap-2 mt-3 flex-grow">
              <h1 className="text-[#0E0E0E] text-lg font-bold leading-snug line-clamp-2">React Router Complete Course</h1>
              <span className="text-sm text-gray-500">Richard James</span>
              <div className="flex flex-row gap-2 items-center text-sm">
                <span className="font-bold text-amber-500">4.5</span>
                <div className="flex">
                   {[1,2,3,4].map(i => <img key={i} src="/image/star_icon.png" className="w-4 h-4" alt="" />)}
                   <img src="/image/star_dull_icon.svg" className="w-4 h-4" alt="" />
                </div>
                <span className="text-gray-400">(122)</span>
              </div>
              <h1 className="mt-auto font-bold text-xl">$10.99</h1>
            </div>
          </li>

          
          <li className="border border-[#E1E1E1] rounded-lg overflow-hidden flex flex-col pb-4 hover:shadow-lg transition-shadow">
            <img className="h-48 w-full object-cover" src="/image/img4.png" alt="" />
            <div className="px-4 flex flex-col gap-2 mt-3 flex-grow">
              <h1 className="text-[#0E0E0E] text-lg font-bold leading-snug line-clamp-2">Build Full Stack E-Commerce App</h1>
              <span className="text-sm text-gray-500">Richard James</span>
              <div className="flex flex-row gap-2 items-center text-sm">
                <span className="font-bold text-amber-500">4.5</span>
                <div className="flex">
                   {[1,2,3,4].map(i => <img key={i} src="/image/star_icon.png" className="w-4 h-4" alt="" />)}
                   <img src="/image/star_dull_icon.svg" className="w-4 h-4" alt="" />
                </div>
                <span className="text-gray-400">(122)</span>
              </div>
              <h1 className="mt-auto font-bold text-xl">$10.99</h1>
            </div>
          </li>
        </ul>

        <Link to="/courses">
          <button className="h-[50px] px-8 rounded-md flex cursor-pointer justify-center items-center text-[16px] text-[#8A8C8F] border border-[#6B728080] hover:bg-gray-50 transition-colors">
            Show all courses
          </button>
        </Link>
      </div>

     
      <div className="w-full max-w-7xl mt-20 flex flex-col justify-center items-center gap-10 font-medium text-[#565656] px-4">
        <div className="text-center">
            <h1 className="text-[#0E0E0E] text-3xl mb-4">Testimonials</h1>
            <p className="max-w-2xl mx-auto">
            Hear from our learners as they share their journeys of transformation, success, and how our platform has made a difference in their lives.
            </p>
        </div>

        <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <li className="border border-[#E1E1E1] rounded-lg flex flex-col overflow-hidden">
            <div className="flex flex-row gap-4 items-center p-4 bg-[#F3F3F3]">
              <img src="/image/profile_img_2.png" className="h-12 w-12 rounded-full object-cover" alt="" />
              <div className="flex flex-col">
                <span className="font-bold text-[#4B445A]">Donald Jackman</span>
                <span className="text-sm">SWE 1 @ Amazon</span>
              </div>
            </div>
            <div className="flex flex-col p-6 gap-4 h-full">
              <div className="flex gap-1">
                 {[1,2,3,4,5].map(i => <img key={i} src="/image/star_icon.png" className="w-4 h-4" alt="" />)}
              </div>
              <p className="text-[#6B7280] text-sm flex-grow">
                I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly.
              </p>
              <span className="text-[#1C70FF] underline cursor-pointer text-sm">Read More</span>
            </div>
          </li>
          
          <li className="border border-[#E1E1E1] rounded-lg flex flex-col overflow-hidden">
            <div className="flex flex-row gap-4 items-center p-4 bg-[#F3F3F3]">
              <img src="/image/profile_img_3.png" className="h-12 w-12 rounded-full object-cover" alt="" />
              <div className="flex flex-col">
                <span className="font-bold text-[#4B445A]">James Washington</span>
                <span className="text-sm">SWE 1 @ Google</span>
              </div>
            </div>
            <div className="flex flex-col p-6 gap-4 h-full">
              <div className="flex gap-1">
                 {[1,2,3,4,5].map(i => <img key={i} src="/image/star_icon.png" className="w-4 h-4" alt="" />)}
              </div>
              <p className="text-[#6B7280] text-sm flex-grow">
                I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly.
              </p>
              <span className="text-[#1C70FF] underline cursor-pointer text-sm">Read More</span>
            </div>
          </li>

          <li className="border border-[#E1E1E1] rounded-lg flex flex-col overflow-hidden">
            <div className="flex flex-row gap-4 items-center p-4 bg-[#F3F3F3]">
              <img src="/image/profile_img_1.png" className="h-12 w-12 rounded-full object-cover" alt="" />
              <div className="flex flex-col">
                <span className="font-bold text-[#4B445A]">Richard Nelson</span>
                <span className="text-sm">SWE 1 @ Samsung</span>
              </div>
            </div>
            <div className="flex flex-col p-6 gap-4 h-full">
              <div className="flex gap-1">
                 {[1,2,3,4,5].map(i => <img key={i} src="/image/star_icon.png" className="w-4 h-4" alt="" />)}
              </div>
              <p className="text-[#6B7280] text-sm flex-grow">
                I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly.
              </p>
              <span className="text-[#1C70FF] underline cursor-pointer text-sm">Read More</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="w-full max-w-4xl mt-20 flex flex-col justify-center items-center gap-6 font-medium text-[#565656] px-4">
        <h1 className="text-[#1F2937] text-2xl md:text-3xl w-full text-center font-semibold">Learn anything, anytime, anywhere</h1>
        <p className="text-center max-w-xl">
          Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.
        </p>
        
        <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-40 h-10 bg-[#0260FFE5] text-[#FFFFFF] rounded-md hover:bg-blue-600 transition-colors">
            Get Started
          </button>
          <div className="flex flex-row gap-2 items-center cursor-pointer hover:opacity-80">
            <button>Learn more </button>
            <img src="/image/arrow_icon.svg" className="w-4 mt-0.5" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;