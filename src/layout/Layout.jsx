import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import TrackerZero from "../components/tracker_zero/TrackerZero.jsx";

const Layout = () => {
  return (
    <div className="flex justify-between w-full direction-column">
      <div className="w-[20%]">
        <Navbar className='w-24'/>
        <TrackerZero />
      </div>
      <main className="w-[70%]">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
