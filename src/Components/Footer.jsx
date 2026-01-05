import React from "react";
import Edemy from "./Edemy";

function Footer() {
  return (
    <div className="h-48 w-full bg-[#111820] flex flex-row items-end bottom-0 justify-around text-[#FFFFFFCC] mt-20 text-sm font-inter">
      <div className="h-full w-1/4 flex flex-col ml-15">
        <div className="h-1/4 relative">
          <Edemy />
        </div>
        <p className="h-3/4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
      </div>
      <div className="flex flex-col gap-3 m-5 ml-20">
        <h2 className="font-semibold">Company</h2>
        <ul className="">
          <li>Home</li>
          <li>Contact</li>
          <li>About us</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="h-full w-1/2 flex flex-row justify-end">
        <div className="h-full w-3/5 flex flex-col relative gap-5 m-5">
          <h2 className="font-semibold mb-1">Subscribe to our newsletter</h2>
          <p>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="h-1/6 w-full flex flex-row gap-2">
            <input
              type="text"
              placeholder="Enter your Email"
              className="h-full w-1/2 bg-[#6B72804D] border-none p-3 left-2"
            />
            <button className="h-full w-1/5 bg-[#2563EB]">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
