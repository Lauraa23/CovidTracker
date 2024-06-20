import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 h-full bg-white">
      <div className="pl-0 pr-0 w-full border-r border-solid border-strongGray">
        <ul className="flex flex-col p-0 m-0 h-screen list-none">
          <li className="box-border mx-1 my-5 p-0">
            <NavLink
              className="leading-100 w-28 text-center inline-block mb-5 cursor-pointer content-center h-full"
              to="/"
            >
              <img
                className="w-12 relative align-middle border-none m-auto"
                src="../public/assets/images/coronavirus.png"
                alt="logo covid"
              />
            </NavLink>
          </li>

          <li className="mx-1 my-5 p-0 text-center">
            <a
              href="#"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <span className="block w-2 h-2 rounded-lg absolute top-3 right-3 bg-warning"></span>
              <i className="ti-pie-chart hover:text-white text-primary text-2xl relative top-1"></i>
            </a>
          </li>

          <li className="mx-1 my-5 p-0 text-center">
            <a
              href="#"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <span className="block w-2 h-2 rounded-lg absolute top-3 right-3 bg-warning"></span>
              <i className="ti-view-list hover:text-white text-primary text-2xl relative top-1"></i>
            </a>
          </li>

          <li className="mx-1 my-5 p-0 text-center">
            <a
              href="#"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <span className="block w-2 h-2 rounded-lg absolute top-3 right-3 bg-warning"></span>
              <i className="ti-view-grid hover:text-white text-primary text-2xl relative top-1"></i>
            </a>
          </li>

          <li className="mx-1 my-5 p-0 text-center">
            <a
              href="#"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <span className="block w-2 h-2 rounded-lg absolute top-3 right-3 bg-warning"></span>
              <i className="ti-layout-tab hover:text-white text-primary text-2xl relative top-1"></i>
            </a>
          </li>

          <li className="mx-1 my-5 p-0 text-center">
            <a
              href="#"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <span className="block w-2 h-2 rounded-lg absolute top-3 right-3 bg-warning"></span>
              <i className="ti-layers-alt hover:text-white text-primary text-2xl relative top-1"></i>
            </a>
          </li>

          <li className="mx-1 my-5 p-0 text-center">
            <a
              href="#"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <span className="block w-2 h-2 rounded-lg absolute top-3 right-3 bg-warning"></span>
              <i className="ti-stats-up hover:text-white text-primary text-2xl relative top-1"></i>
            </a>
          </li>

          <li className="mx-1 my-5 p-0 text-center">
            <a
              href="#"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <span className="block w-2 h-2 rounded-lg absolute top-3 right-3 bg-warning"></span>
              <i className="ti-world hover:text-white text-primary text-2xl relative top-1"></i>
            </a>
          </li>

          <li className="mx-1 my-5 p-0 text-center">
            <a
              href="#"
              className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <span className="block w-2 h-2 rounded-lg absolute top-3 right-3 bg-warning"></span>
              <i className="ti-comment hover:text-white text-primary text-2xl relative top-1"></i>
            </a>

            <li className="mx-1 my-5 p-0 text-center">
              <a
                href="#"
                className="hover:bg-primary rounded-lg text-center px-4 py-3 outline-none relative"
                data-tab="chats"
              >
                <span className="block w-2 h-2 rounded-lg absolute top-3 right-3 bg-warning"></span>
                <i className="ti-flickr-alt hover:text-white text-primary text-2xl relative top-1"></i>
              </a>
            </li>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
