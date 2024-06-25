import { useState } from "react";
import Card, { CardTitle, CardData, CardImage } from "../card/Card";
import { TotalCases } from "./TotalCases";
import { TotalDeaths } from "./TotalDeaths";
// import "./trackerOne.css";
import { NewCases } from "./NewCases";
import { NewDeaths } from "./NewDeaths";
import { TotalRecovered } from "./TotalRecovered";
import { TotalActive } from "./TotalActive";
import Map from "../map/Map";
const TrackerOne = () => {
  const [data, setData] = useState({
    totalCases: 31415926,
    totalDeaths: 31415927,
  });

  return (
    <div
      id="rigthContent"
      className="overflow-hidden block absolute w-3/5 bg-[#f7f8fc] left-[500px]
    outline-none"
    >
      <div
        id="containerSelector"
        className="items-center justify-between flex mb-[30px] pb-[15px] border-b border-solid border-[rgba(0,0,0,0.1)]"
      >
        <div
          className="countrySelectBox flex items-center text-left relative select-none whitespace-nowrap"
          style={{
            fontSize: "16px",
            borderRadius: "0 !important",
            height: "50px",
            padding: "8px 25px",
            color: "#000",
            fontWeight: 500,
            width: "300px",
            boxShadow: "0 15px 30px 0 rgba(20, 50, 90, 0.05)",
            border: 0,
            borderRadius: "4px !important",
            lineHeight: "40px",
            outline: "none",
          }}
        >
          <select>
            <option value="AL">Albania</option>
            <option value="AL">Albania</option>
          </select>
          <div className="countryPicker"></div>
        </div>
        <div id="updapteOn" className="text-black font-medium text-base">
          Updated: June 5, 2022
        </div>
      </div>
      <div id="row" className="flex flex-wrap mr-[-15px] ml-[-15px]">
        <div
          id="rightInfo"
          className="flex flex-wrap mr-[-15px] ml-[-15px] px-[15px]"
        >
          <TotalCases>{data.totalCases}</TotalCases>
          <TotalDeaths>{data.totalDeaths}</TotalDeaths>
          <TotalRecovered>{data.totalRecovered}</TotalRecovered>
          <TotalActive>{data.totalActive}</TotalActive>
          <NewCases>{data.newCases}</NewCases>
          <NewDeaths>{data.NewDeaths}</NewDeaths>
        </div>
        <div className="Mapa">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default TrackerOne;
