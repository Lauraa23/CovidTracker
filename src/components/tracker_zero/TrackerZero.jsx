import "./trackerZero.css";
import GeneralInformation from "./GeneralInformation.jsx";
import TopCountries from "./TopCountries";

const TrackerZero = () => {
  return (
    <div
      className="w-full px-3 py-5 border-r border-solid border-strongGray z-1 h-screen 
      scrollBar overflow-hidden focus:overflow-y-scroll hover:overflow-y-scroll active:overflow-y-scroll scroll-smooth cursor-grab max-[1200px]:hidden"
    >
      <GeneralInformation />
      <TopCountries />
    </div>
  );
};

export default TrackerZero;
