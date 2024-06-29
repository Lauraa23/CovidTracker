import { useEffect } from "react";
import $ from "jquery";
import "datatables.net";
import { API_BASE_URL } from "../../config/urls";
import useApi from "../../services/useApi";
import TopCases from "./TopCases";

const Tracker3 = () => {
  const data = useApi(`${API_BASE_URL}/countries`);
  console.log(data);

  useEffect(() => {
    if (data && data.length > 0) {
      const tableId = "#CountriesDataTable";

      if ($.fn.DataTable.isDataTable(tableId)) {
        $(tableId).DataTable().destroy();
      }
    }
  });

  if (!data) {
    return <p>Cargando ...</p>;
  }
  return (
    <div>
      <div className="font-poppins text-[#2b2a69] text-2xl font-bold text-left mb-[10px] pb-[20px] pl-[15px] mt-[20px]">
        <h1>Top 10 Country wise Covid-19 Updates - Tiles</h1>
      </div>
      <hr className="text-gray" />
      <br />
      <table className="font-poppins w-[100%]" id="CountriesDataTable">
        <thead>
          <tr>
            <th className="font-poppins text-[#2b2a69] text-lg font-bold text-left pb-[20px] pl-[46px] mt-[15px] mb-[15px]">
              <h4>Top Cases</h4>
            </th>
            <th className="font-poppins text-[#2b2a69] text-lg font-bold text-left pb-[20px] pl-[46px] mt-[15px] mb-[15px]">
              <h4>Today Cases</h4>
            </th>
            <th className="font-poppins text-[#2b2a69] text-lg font-bold text-left pb-[20px] pl-[46px] mt-[15px] mb-[15px]">
              <h4>Top Deaths</h4>
            </th>
            <th className="font-poppins text-[#2b2a69] text-lg font-bold text-left pb-[20px] pl-[46px] mt-[15px] mb-[15px]">
              <h4>Today Deaths</h4>
            </th>
            <th className="font-poppins text-[#2b2a69] text-lg font-bold text-left mb-[10px] pb-[20px] pl-[46px] mt-[15px]">
              <h4>Top Active</h4>
            </th>
            <th className="font-poppins text-[#2b2a69] text-lg font-bold text-left mb-[10px] pb-[20px] pl-[46px] mt-[15px]">
              <h4>Top Recover</h4>
            </th>
          </tr>
        </thead>
        <tbody className="text-textBlue">
          {data.slice(0, 10).map((country) => (
            <tr key={country.country} className="">
              <td className="pl-12 pb-3">
                <div className="w-32 h-12 transform transition-transform hover:scale-125 flex flex-row justify-around p-1 shadow-lg rounded bg-white ">
                  <div className="self-center">
                    {country.countryInfo && country.countryInfo.iso2 ? (
                      <img
                        src={`https://disease.sh/assets/img/flags/${country.countryInfo.iso2.toLowerCase()}.png`}
                        className="w-[40px] h-[40px] rounded-full "
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col items-left text-left">
                    <div className="font-poppins font-medium text-[12px] text-[#2b2a69] overflow-ellipsis">
                      {country.country}
                    </div>
                    <div className="font-roboto font-bold text-[18px] text-[#2b2a69]">
                      {country.cases}
                    </div>
                  </div>
                </div>
              </td>

              <td className="pl-12 pb-3">
                <div className="w-32 h-12 transform transition-transform hover:scale-125 flex flex-row justify-around p-1 shadow-lg rounded bg-white ">
                  <div className="self-center">
                    {country.countryInfo && country.countryInfo.iso2 ? (
                      <img
                        src={`https://disease.sh/assets/img/flags/${country.countryInfo.iso2.toLowerCase()}.png`}
                        className="w-[40px] h-[40px] rounded-full "
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col items-left text-left">
                    <div className="font-poppins font-medium text-[12px] text-[#2b2a69] overflow-ellipsis">
                      {country.country}
                    </div>
                    <div className="font-roboto font-bold text-[18px] text-[#2b2a69]">
                      {country.cases}
                    </div>
                  </div>
                </div>
              </td>
              <td className="pl-12 pb-3">
                <div className="w-32 h-12 transform transition-transform hover:scale-125 flex flex-row justify-around p-1 shadow-lg rounded bg-white ">
                  <div className="self-center">
                    {country.countryInfo && country.countryInfo.iso2 ? (
                      <img
                        src={`https://disease.sh/assets/img/flags/${country.countryInfo.iso2.toLowerCase()}.png`}
                        className="w-[40px] h-[40px] rounded-full "
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col items-left text-left">
                    <div className="font-poppins font-medium text-[12px] text-[#2b2a69] overflow-ellipsis">
                      {country.country}
                    </div>
                    <div className="font-roboto font-bold text-[18px] text-[#2b2a69]">
                      {country.cases}
                    </div>
                  </div>
                </div>
              </td>
              <td className="pl-12 pb-3">
                <div className="w-32 h-12 transform transition-transform hover:scale-125 flex flex-row justify-around p-1 shadow-lg rounded bg-white ">
                  <div className="self-center">
                    {country.countryInfo && country.countryInfo.iso2 ? (
                      <img
                        src={`https://disease.sh/assets/img/flags/${country.countryInfo.iso2.toLowerCase()}.png`}
                        className="w-[40px] h-[40px] rounded-full "
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col items-left text-left">
                    <div className="font-poppins font-medium text-[12px] text-[#2b2a69] overflow-ellipsis">
                      {country.country}
                    </div>
                    <div className="font-roboto font-bold text-[18px] text-[#2b2a69]">
                      {country.cases}
                    </div>
                  </div>
                </div>
              </td>
              <td className="pl-12 pb-3">
                <div className="w-32 h-12 transform transition-transform hover:scale-125 flex flex-row justify-around p-1 shadow-lg rounded bg-white ">
                  <div className="self-center">
                    {country.countryInfo && country.countryInfo.iso2 ? (
                      <img
                        src={`https://disease.sh/assets/img/flags/${country.countryInfo.iso2.toLowerCase()}.png`}
                        className="w-[40px] h-[40px] rounded-full "
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col items-left text-left">
                    <div className="font-poppins font-medium text-[12px] text-[#2b2a69] overflow-ellipsis">
                      {country.country}
                    </div>
                    <div className="font-roboto font-bold text-[18px] text-[#2b2a69]">
                      {country.cases}
                    </div>
                  </div>
                </div>
              </td>
              <td className="pl-12 pb-3">
                <div className="w-32 h-12 transform transition-transform hover:scale-125 flex flex-row justify-around p-1 shadow-lg rounded bg-white ">
                  <div className="self-center">
                    {country.countryInfo && country.countryInfo.iso2 ? (
                      <img
                        src={`https://disease.sh/assets/img/flags/${country.countryInfo.iso2.toLowerCase()}.png`}
                        className="w-[40px] h-[40px] rounded-full "
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col items-left text-left">
                    <div className="font-poppins font-medium text-[12px] text-[#2b2a69] overflow-ellipsis">
                      {country.country}
                    </div>
                    <div className="font-roboto font-bold text-[18px] text-[#2b2a69]">
                      {country.cases}
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tracker3;
