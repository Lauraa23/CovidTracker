import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section
        id="header"
        className="text-white flex flex-col relative bg-center"
        style={{
          background:
            "linear-gradient(to right, #1e0c9db3, #06cdecb3), url('/assets/images/3626307.jpg') center center / cover no-repeat local",
        }}
      >
        <nav
          id="navbarHome"
          className="w-full flex justify-between items-center justify-evenly bg-transparent px-5 py-2.5"
        >
          <img
            className="logoNavbar h-4"
            src="assets/images/logo-white.png"
            alt="coronavirus"
          />
          <div className="navLinks">
            <ul className="navbarItems list-none flex gap-5 items-center text-[0.8rem]">
              <li className="cursor-pointer text-white">Home</li>
              <li className="cursor-pointer text-white">Prevention</li>
              <li className="cursor-pointer text-white">Quarantine</li>
              <li className="cursor-pointer text-white">Pages</li>
              <li className="cursor-pointer text-white">About</li>
              <li className="cursor-pointer text-white">Help</li>
              <li>
                <NavLink
                  to="trackers/"
                  className="bg-[#2d2f91] text-white no-underline text-center px-2.5 py-2 rounded-[20px] hover:bg-[#1565c0]"
                >
                  Trackers
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="bannerContainer flex flex-row items-center justify-around">
          <div className="messageSection flex flex-col items-center h-[90vh] w-[35%] justify-start">
            <h3 className="text-[1.8rem] text-start font-bold">
              Stay Home, And Prayer For Victim Of Corona Virus
            </h3>
            <p className="text-[0.6rem] text-start">
              Los coronavirus humanos son comunes y típicamente están asociados
              con enfermedades leves, similares al resfriado común. El
              coronavirus COVID-19 está afectando a 210 países y territorios
              alrededor del mundo y 2 embarcaciones internacionales.
            </p>
          </div>
          <div className="imageSection">
            <img
              className="bannerRightImage w-[30vw]"
              src="/assets/images/banner-right-image1.png"
              alt="bannerRight"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
