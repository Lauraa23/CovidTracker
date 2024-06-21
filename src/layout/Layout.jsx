import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import TrackerZero from "../components/tracker_zero/TrackerZero.jsx";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <TrackerZero />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
