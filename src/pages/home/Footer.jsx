import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1b2a4e] flex flex-wrap items-center justify-center content-center flex-col">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <img className="w-20" src="/assets/images/logo-white.png" />
            <p className="text-sm text-[0.55rem] text-[#fff] mb-4 font-[0.5rem]">
              These droplets can land on objects and surfaces around the person
              such as tables, doorknobs and handrails.
            </p>
            <ul className="flex mt-4 sm:justify-start md:mt-0 space-x-1 rtl:space-x-reverse list-none">
              <li>
                <i className="ti-facebook bg-[#293f73] text-[#fff] p-[3px] rounded-[10px]"></i>
              </li>
              <li>
                <i className="ti-twitter-alt bg-[#293f73] text-[#fff] p-[3.5px] rounded-[10px]"></i>
              </li>
              <li>
                <i className="ti-linkedin bg-[#293f73] text-[#fff] p-[3.5px] rounded-[10px]"></i>
              </li>
              <li>
                <i className="ti-youtube bg-[#293f73] text-[#fff] p-[3.5px] rounded-[10px]"></i>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="mb-6 text-sm font-semibold text-gray-900 text-[0.65rem] dark:text-white hover:underline">
              Quick Links
            </h4>
            <p className="text-[0.55rem] text-[#fff]">Prevention</p>
            <p className="text-[0.55rem] text-[#fff]">Qurantine</p>
            <p className="text-[0.55rem] text-[#fff]">About</p>
            <p className="text-[0.55rem] text-[#fff]">Help</p>
          </div>
          <div>
            <h4 class="mb-6 text-sm font-semibold text-gray-900 text-[0.65rem] dark:text-white">
              About
            </h4>
            <p className="text-[0.55rem] text-[#fff]">Hand Wash</p>
            <p className="text-[0.55rem] text-[#fff]">Social Distance</p>
            <p className="text-[0.55rem] text-[#fff]">Isolate</p>
            <p className="text-[0.55rem] text-[#fff]">Difference</p>
          </div>
          <div>
            <h4 class="mb-6 text-sm font-semibold text-gray-900 text-[0.65rem] dark:text-white">
              Help
            </h4>
            <p className="text-[0.55rem] text-[#fff]">Hand Wash</p>
            <p className="text-[0.55rem] text-[#fff]">Social Distance</p>
            <p className="text-[0.55rem] text-[#fff]">Isolate</p>
            <p className="text-[0.55rem] text-[#fff]">Difference</p>
          </div>
        </div>
        <div className="lowerFooter w-full flex flex-row justify-around px-0 py-[5px] border-t-[#223461] border-t border-solid bg-[#1b2a4e]">
          <p className="text-[0.4rem] text-white">
            © Copyright 2020. All Rights Reserved
          </p>
          <p className="text-[0.4rem] text-white">Design by COVIDongas</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
