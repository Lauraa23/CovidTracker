import React from "react";

import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-24 h-full bg-light flex-shrink-0">
      <div className="pl-0 pr-0 w-full border-r border-solid border-strongGray">
        <ul className="flex flex-col p-0 m-0 h-screen list-none">
          <li className="text-center box-border mx-1 my-5 p-0">
            <NavLink
              to="/"
              className="leading-100 text-center inline-block mb-5 cursor-pointer content-center h-full"
            >
              <div className="animate-spinner">
                <img
                  className="w-12 relative align-middle border-none m-auto"
                  src="../assets/images/coronavirus.png"
                  alt="logo covid"
                />
              </div>
            </NavLink>
          </li>
          <li className="group mx-1 my-5 p-0 text-center">
            <NavLink
              to="/trackers/1"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <span className="block w-2 h-2 rounded-lg absolute top-1 right-1 bg-warning"></span>
              <i className="ti-pie-chart group-hover:text-white text-primary text-2xl relative top-1"></i>
            </NavLink>
          </li>
          <li className="group mx-1 my-5 p-0 text-center">
            <NavLink
              to="/trackers/2"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <span className="block w-2 h-2 rounded-lg absolute top-1 right-1 bg-warning"></span>
              <i className="ti-view-list group-hover:text-white text-primary text-2xl relative top-1"></i>
            </NavLink>
          </li>
          <li className="group mx-1 my-5 p-0 text-center">
            <NavLink
              to="/trackers/3"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <i className="ti-view-grid group-hover:text-white text-primary text-2xl relative top-1"></i>
            </NavLink>
          </li>
          <li className="group mx-1 my-5 p-0 text-center">
            <NavLink
              to="/trackers/4"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <i className="ti-layout-tab group-hover:text-white text-primary text-2xl relative top-1"></i>
            </NavLink>
          </li>
          {/* links inhabilitados */}
          <li className="group mx-1 my-5 p-0 text-center">
            <div
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <i className="ti-layers-alt group-hover:text-white text-primary text-2xl relative top-1"></i>
            </div>
          </li>
          <li className="group mx-1 my-5 p-0 text-center">
            <div
              to="/"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <i className="ti-stats-up group-hover:text-white text-primary text-2xl relative top-1"></i>
            </div>
          </li>
          <li className="group mx-1 my-5 p-0 text-center">
            <div
              to="/"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <i className="ti-world group-hover:text-white text-primary text-2xl relative top-1"></i>
            </div>
          </li>
          <li className="group flex-auto mx-1 my-5 p-0 text-center">
            <div
              to="/"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <i className="ti-comment group-hover:text-white text-primary text-2xl relative top-1"></i>
            </div>
          </li>
          <li className="group mx-1 my-5 p-0 text-center">
            <div
              to="/"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <i className="ti-flickr-alt group-hover:text-white text-primary text-2xl relative top-1"></i>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
