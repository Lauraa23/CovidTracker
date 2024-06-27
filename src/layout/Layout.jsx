import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import TrackerZero from "../components/tracker_zero/TrackerZero.jsx";

const Layout = () => {
  return (
    <div className="flex box-border m-0 p-0">
      <div className="flex w-[35vw]">
        <Navbar />
        <TrackerZero />
      </div>
      <main className="w-[65vw] h-[100vh] justify-end">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
