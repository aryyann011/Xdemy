import React from "react";
import Edemy from "./Edemy";

function Footer() {
  return (
    <div className="w-full py-10 mt-20 bg-[#111820] flex flex-col md:flex-row items-start justify-around gap-8 md:gap-0 px-6 md:px-0 text-[#FFFFFFCC] text-sm font-inter">
      
      <div className="w-full md:w-1/4 flex flex-col gap-4">
        <div className="relative">
          <Edemy />
        </div>
        <p className="leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
      </div>

      <div className="w-full md:w-auto flex flex-col gap-3">
        <h2 className="font-semibold text-white text-base">Company</h2>
        <ul className="flex flex-col gap-2">
          <li className="hover:text-white cursor-pointer transition-colors">Home</li>
          <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
          <li className="hover:text-white cursor-pointer transition-colors">About us</li>
          <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
        </ul>
      </div>

      <div className="w-full md:w-1/3 flex flex-col justify-start">
        <div className="w-full flex flex-col gap-4">
          <div>
            <h2 className="font-semibold mb-1 text-white text-base">Subscribe to our newsletter</h2>
            <p className="text-xs md:text-sm">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
          </div>
          
          <div className="w-full flex flex-row gap-2">
            <input
              type="text"
              placeholder="Enter your Email"
              className="flex-1 bg-[#6B72804D] border-none p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-white"
            />
            <button className="px-4 py-2 bg-[#2563EB] text-white rounded-md hover:bg-blue-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Footer;