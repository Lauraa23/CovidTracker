import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import TrackerZero from "../components/tracker_zero/TrackerZero.jsx";

const Layout = () => {
  return (
    <div className="flex box-border m-0 p-0">
      <div>
        <Navbar />
        <TrackerZero />
      </div>
      <main className="w-[60vw] h-[100vh] justify-end ml-[500px]">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
