import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="h-auto w-full flex flex-col items-center">
      <div className="h-[400px] w-11/20 flex flex-col justify-center items-center text-center gap-10 mt-20">
        <h1 className="font-bold text-5xl">
          Empower your future with the courses designed to{" "}
          <span className="text-[#2563EB]">fit your choice</span>
        </h1>
        <p className="w-9/10 text-[#565656]">
          We bring together world-class instructors, interactive content, and a
          supportive community to help you achieve your personal and
          professional goals.
        </p>
        <div className="w-7/10 relative flex flex-row items-center justify-end">
          <img
            src="/image/search_icon.svg"
            className="absolute pl-2 left-1"
            alt=""
          />
          <input
            type="text"
            placeholder="Search for Courses"
            className="h-10 w-full p-6 pl-10 border border-[#6B728033] bg-[#FFFFFF]"
          />
          <button className="absolute w-1/5 h-9 bg-[#2563EB] right-1 text-[#FFFFFF] rounded-sm">
            Search
          </button>
        </div>
      </div>

      <div className="h-[200px] w-11/20 mt-10 flex flex-col items-center justify-center gap-6">
        <p>Trusted by learners from</p>
        <ul className="h-1/3 w-full flex flex-row justify-around items-center">
          <li>
            <img src="/image/microsoft_logo.svg" alt="" />
          </li>
          <li>
            <img src="/image/walmart_logo.svg" alt="" />
          </li>
          <li>
            <img src="/image/accenture_logo.svg" alt="" />
          </li>
          <li>
            <img src="/image/adobe_logo.svg" alt="" />
          </li>
          <li>
            <img src="/image/paypal_logo.svg" alt="" />
          </li>
        </ul>
      </div>

      <div className="h-auto w-8/10 flex mt-20 flex-col justify-center items-center gap-10 font-medium text-[#565656]">
        <h1 className="text-[#0E0E0E] text-3xl w-full text-center">Learn from the best</h1>
        <p className="text-center">
          Discover our top-rated courses across various categories. From coding
          and design to business and wellness, our courses are crafted to
          deliver results.
        </p>
        <ul className="h-300px w-full flex flex-row justify-center items-center gap-4 [&>li]:h-full [&>li]:border [&>li]:border-[#E1E1E1] [&>li]:rounded-lg [&>li]:w-1/4 [&>li]:flex [&>li]:flex-col">
          <li>
              <img className="h-1/2 w-full" src="/image/img2.png" alt="" />
              <div className="h-1/2 w-4/5 ml-3 flex flex-col gap-1 mt-3">
              <h1 className="text-[#0E0E0E] text-1xl font-bold">Build Text to image SaaS App in React JS</h1>
              <span>Richard James</span>
              <div className="flex flex-row gap-2">
                <span>4.5</span>
                <ul className="flex flex-row items-center">
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_dull_icon.svg" className="h-4.5 w-4.5" alt="" />
                  </li>
                </ul>
                <span>(122)</span>
              </div>
              <h1>$10.99</h1>
              </div>
          </li>
          <li>
              <img className="h-1/2 w-full" src="/image/img3.png" alt="" />
              <div className="h-1/2 w-4/5 ml-3 flex flex-col gap-1 mt-3">
              <h1 className="text-[#0E0E0E] text-1xl font-bold">Build AI BG Removal SaaS App in React JS</h1>
              <span>Richard James</span>
              <div className="flex flex-row gap-2">
                <span>4.5</span>
                <ul className="flex flex-row items-center">
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_dull_icon.svg" className="h-4.5 w-4.5" alt="" />
                  </li>
                </ul>
                <span>(122)</span>
              </div>
              <h1>$10.99</h1>
              </div>
          </li>
          <li>
              <img className="h-1/2 w-full" src="/image/img1.png" alt="" />
              <div className="h-1/2 w-4/5 ml-3 flex flex-col gap-1 mt-3">
              <h1 className="text-[#0E0E0E] text-1xl font-bold">React Router Complete Course in One Video</h1>
              <span>Richard James</span>
              <div className="flex flex-row gap-2">
                <span>4.5</span>
                <ul className="flex flex-row items-center">
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_dull_icon.svg" className="h-4.5 w-4.5" alt="" />
                  </li>
                </ul>
                <span>(122)</span>
              </div>
              <h1>$10.99</h1>
              </div>
          </li>
          <li>
              <img className="h-1/2 w-full" src="/image/img4.png" alt="" />
              <div className="h-1/2 w-4/5 ml-3 flex flex-col gap-1 mt-3">
              <h1 className="text-[#0E0E0E] text-1xl font-bold">Build Full Stack E-Commerce App in React JS</h1>
              <span>Richard James</span>
              <div className="flex flex-row gap-2">
                <span>4.5</span>
                <ul className="flex flex-row items-center">
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_dull_icon.svg" className="h-4.5 w-4.5" alt="" />
                  </li>
                </ul>
                <span>(122)</span>
              </div>
              <h1>$10.99</h1>
              </div>
          </li>
        </ul>

        <Link to="/courses">
          <button className="h-[50px] w-50 flex justify-center items-center text-[16px] text-[#8A8C8F] border border-[#6B728080]">Show all courses</button>
        </Link>
      </div>

      <div className="h-auto w-6/10 mt-20 flex flex-col justify-center items-center gap-10 font-medium text-[#565656]">
        <h1 className="text-[#0E0E0E] text-3xl w-full text-center">Testimonials</h1>
        <p className="text-center">
          Hear from our learners as they share their journeys of transformation, success, and how our platform has made a difference in their lives.
        </p>
        <ul className="h-[280px] w-full flex flex-row justify-center items-center gap-8 [&>li]:h-full [&>li]:border [&>li]:border-[#E1E1E1] [&>li]:rounded-lg [&>li]:w-1/3 [&>li]:flex [&>li]:flex-col">
          <li className="gap-3">
              <div className="h-1/4 w-full flex flex-row gap-6 items-center p-4 bg-[#F3F3F3]">
                <img src="/image/profile_img_2.png" className="h-11 w-12" alt="" />
                <div className="flex flex-col">
                    <span className="font-bold text-[#4B445A]">Donald Jackman</span>
                    <span>SWE 1 @ Amazon</span>
                </div>
              </div>
              <div className="h-3/4 w-full flex flex-col p-4 gap-3">
                <ul className="h-8 flex flex-row">
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                </ul>
                <p className="text-[#6B7280] text-[14px]">
                    I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.
                </p>
                <span className="text-[#1C70FF] underline">Read More</span>
              </div>
          </li>
           <li className="gap-3">
              <div className="h-1/4 w-full flex flex-row gap-6 items-center p-4 bg-[#F3F3F3]">
                <img src="/image/profile_img_3.png" className="h-11 w-12" alt="" />
                <div className="flex flex-col">
                    <span className="font-bold text-[#4B445A]">James Washington</span>
                    <span>SWE 1 @ Google</span>
                </div>
              </div>
              <div className="h-3/4 w-full flex flex-col p-4 gap-3">
                <ul className="h-8 flex flex-row [&>img]:h-full">
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                </ul>
                <p className="text-[#6B7280] text-[14px]">
                    I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.
                </p>
                <span className="text-[#1C70FF] underline">Read More</span>
              </div>
          </li>
           <li className="gap-3">
              <div className="h-1/4 w-full flex flex-row gap-6 items-center p-4 bg-[#F3F3F3]">
                <img src="/image/profile_img_1.png" className="h-11 w-12" alt="" />
                <div className="flex flex-col">
                    <span className="font-bold text-[#4B445A]">Richard Nelson</span>
                    <span>SWE 1 @ Samsung</span>
                </div>
              </div>
              <div className="h-3/4 w-full flex flex-col p-4 gap-3">
                <ul className="h-8 flex flex-row [&>img]:h-full">
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                  <li>
                    <img src="/image/star_icon.png" alt="" />
                  </li>
                </ul>
                <p className="text-[#6B7280] text-[14px]">
                    I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.
                </p>
                <span className="text-[#1C70FF] underline">Read More</span>
              </div>
          </li>
        </ul>
      </div>

      <div className="h-auto w-6/10 mt-30 flex flex-col justify-center items-center gap-6 font-medium text-[#565656]">
        <h1 className="text-[#1F2937] text-3xl w-full text-center font-semibold">Learn anything, anytime, anywhere</h1>
        <p className="text-center">
          Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.
        </p>
        <div className="h-50px w-1/3 flex flex-row gap-3 justify-center items-center">
          <button className="w-1/2 h-9 bg-[#0260FFE5] right-1 text-[#FFFFFF] rounded-sm">
            Get Started
          </button>
          <div className="flex flex-row gap-2 items-center">
            <button>Learn more </button>
            <img src="/image/arrow_icon.svg" className="w-4 mt-0.5" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
