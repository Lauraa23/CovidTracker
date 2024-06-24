import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import TrackerZero from "../components/tracker_zero/TrackerZero.jsx";

const Layout = () => {
  return (
    <div className="flex direction-column">
      <div className="w-[500px]">
        <Navbar className='w-[100px]'/>
        <TrackerZero className='w-[400px]'/>
      </div>
      <main className="w-[75%] position-right justify-end">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
