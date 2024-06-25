import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1b2a4e] flex flex-wrap items-center justify-center content-center flex-col">
        <div className="footerElementsContainer flex flex-wrap justify-around items-center text-white text-[0.6rem]">
          <div className="covimapLogo flex flex-col items-start w-1/5">
            <img
              src="/assets/images/logo-white.png"
              alt="coronavirusWhite"
              className="w-24"
            />
            <p>
              These droplets can land on objects and surfaces around the person
              such as tables, doorknobs and handrails.
            </p>
            <ul className="flex flex-row justify-evenly content-start items-start list-none">
              <li>i</li>
              <li>i</li>
              <li>i</li>
              <li>i</li>
            </ul>
          </div>
          <div className="quicLinks">
            <h4>Quic Links</h4>
            <p>Prevention</p>
            <p>Qurantine</p>
            <p>About</p>
            <p>Help</p>
          </div>
          <div className="about">
            <h4>About</h4>
            <p>Hand wash</p>
            <p>Social Distance</p>
            <p>Isolate</p>
            <p>Difference</p>
          </div>
          <div className="help">
            <h4>Help</h4>
            <p>Hand wash</p>
            <p>Social Distance</p>
            <p>Isolate</p>
            <p>Difference</p>
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