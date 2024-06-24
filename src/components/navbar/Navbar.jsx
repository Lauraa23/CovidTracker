import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-24 left-0 top-0 h-full bg-white">
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
                  src="../public/assets/images/coronavirus.png"
                  alt="logo covid"
                />
              </div>
            </NavLink>
          </li>

          <li className="group mx-1 my-5 p-0 text-center">
            <NavLink
              to="/tracker1"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <span className="block w-2 h-2 rounded-lg absolute top-1 right-1 bg-warning"></span>
              <i className="ti-pie-chart group-hover:text-white text-primary text-2xl relative top-1"></i>
            </NavLink>
          </li>

          <li className="group mx-1 my-5 p-0 text-center">
            <NavLink
              to="/tracker2"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <span className="block w-2 h-2 rounded-lg absolute top-1 right-1 bg-warning"></span>
              <i className="ti-view-list group-hover:text-white text-primary text-2xl relative top-1"></i>
            </NavLink>
          </li>

          <li className="group mx-1 my-5 p-0 text-center">
            <NavLink
              to="/tracker3"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <i className="ti-view-grid group-hover:text-white text-primary text-2xl relative top-1"></i>
            </NavLink>
          </li>

          <li className="group mx-1 my-5 p-0 text-center">
            <NavLink
              to="/tracker4"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <i className="ti-layout-tab group-hover:text-white text-primary text-2xl relative top-1"></i>
            </NavLink>
          </li>

          <li className="group mx-1 my-5 p-0 text-center">
            <NavLink
              to="/"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <i className="ti-layers-alt group-hover:text-white text-primary text-2xl relative top-1"></i>
            </NavLink>
          </li>

          <li className="group mx-1 my-5 p-0 text-center">
            <NavLink
              to="/"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <i className="ti-stats-up group-hover:text-white text-primary text-2xl relative top-1"></i>
            </NavLink>
          </li>

          <li className="group mx-1 my-5 p-0 text-center">
            <NavLink
              to="/"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <i className="ti-world group-hover:text-white text-primary text-2xl relative top-1"></i>
            </NavLink>
          </li>

          <li className="flex-auto mx-1 my-5 p-0 text-center">
            <NavLink
              to="/"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <i className="ti-comment hover:text-white text-primary text-2xl relative top-1"></i>
            </NavLink>
          </li>
          <li className="group mx-1 my-5 p-0 text-center">
            <NavLink
              to="/"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <i className="ti-flickr-alt group-hover:text-white text-primary text-2xl relative top-1"></i>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
