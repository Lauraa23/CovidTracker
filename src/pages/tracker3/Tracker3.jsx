import { useEffect } from "react";
import $ from "jquery";
import "datatables.net";
import { API_BASE_URL } from "../../config/urls";
import useApi from "../../services/useApi";
// import "./tracker3.css";

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
      <div className="font-poppins text-[#2b2a69] text-2xl font-bold text-left mb-[30px] pb-[10px] pl-[50px] mt-[30px]">
        <h1>Top 10 Country wise Covid-19 Updates - Tiles</h1>
      </div>

      <table className="font-poppins" id="CountriesDataTable">
        <thead>
          <tr>
            <th className="font-poppins text-[#2b2a69] text-lg font-bold text-left mb-[30px] pb-[10px] pl-[50px] mt-[30px] mb-[20px]">
              <h4>Top Cases</h4>
            </th>
            <th className="font-poppins text-[#2b2a69] text-lg font-bold text-left mb-[30px] pb-[10px] pl-[50px] mt-[30px] mb-[15px]">
              <h4>Today Cases</h4>
            </th>
            <th className="font-poppins text-[#2b2a69] text-lg font-bold text-left mb-[30px] pb-[10px] pl-[50px] mt-[30px] mb-[15px]">
              <h4>Top Deaths</h4>
            </th>
            <th className="font-poppins text-[#2b2a69] text-lg font-bold text-left mb-[30px] pb-[10px] pl-[50px] mt-[30px] mb-[15px]">
              <h4>Today Deaths</h4>
            </th>
            <th className="font-poppins text-[#2b2a69] text-lg font-bold text-left mb-[30px] pb-[10px] pl-[50px] mt-[30px] mb-[15px]">
              <h4>Top Active</h4>
            </th>
            <th className="font-poppins text-[#2b2a69] text-lg font-bold text-left mb-[30px] pb-[10px] pl-[50px] mt-[30px] mb-[15px]">
              <h4>Top Recover</h4>
            </th>
          </tr>
        </thead>
        <tbody className="text-textBlue">
          {data.map((country) => (
            <tr key={country.country}>
              <td>
                <div className="ml-[2.75rem] mr-[0.75rem] mb-[0.75rem] transform transition-transform hover:scale-125 flex flex-row justify-around p-1 w-200 shadow-lg rounded bg-white w-[200px]">
                  <div className="self-center">
                    {" "}
                    {country.countryInfo && country.countryInfo.iso2 ? (
                      <img
                        src={`https://disease.sh/assets/img/flags/${country.countryInfo.iso2.toLowerCase()}.png`}
                        className="w-[1.9vw] h-[1.9vw] rounded-full mr-2 mb-[5px]"
                      />
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="flex flex-col items-left text-left">
                    <div className="font-poppins font-medium text-xs text-[#2b2a69]">
                      {country.country}
                    </div>
                    <div className="font-roboto font-bold text-lg text-[#2b2a69]">
                      {country.cases}
                    </div>
                  </div>
                </div>
              </td>

              <td>
                <div className="ml-[2.75rem] mr-[0.75rem] hover:scale-150 flex flex-row justify-around p-3 w-200 shadow-lg rounded bg-white">
                  <div className="self-center p-[10px]">
                    {" "}
                    {country.countryInfo && country.countryInfo.iso2 ? (
                      <img
                        src={`https://disease.sh/assets/img/flags/${country.countryInfo.iso2.toLowerCase()}.png`}
                        className="w-[1.9vw] h-[1.9vw] rounded-full mr-2 mb-[5px]"
                      />
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="flex flex-col items-left pl-3">
                    <div className="font-poppins font-medium text-xs text-[#2b2a69]">
                      {country.country}
                    </div>
                    <div className="font-roboto font-bold text-lg text-[#2b2a69]">
                      {country.cases}
                    </div>
                  </div>
                </div>
              </td>

              <td>
                <div className="ml-[2.75rem] mr-[0.75rem] hover:scale-150 flex flex-row justify-around p-3 w-200 shadow-lg rounded bg-white">
                  <div className="self-center p-[10px]">
                    {" "}
                    {country.countryInfo && country.countryInfo.iso2 ? (
                      <img
                        src={`https://disease.sh/assets/img/flags/${country.countryInfo.iso2.toLowerCase()}.png`}
                        className="w-[1.9vw] h-[1.9vw] rounded-full mr-2 mb-[5px]"
                      />
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="flex flex-col items-left pl-3">
                    <div className="font-poppins font-medium text-xs text-[#2b2a69]">
                      {country.country}
                    </div>
                    <div className="font-roboto font-bold text-lg text-[#2b2a69]">
                      {country.cases}
                    </div>
                  </div>
                </div>
              </td>

              <td>
                <div className="ml-[2.75rem] mr-[0.75rem] hover:scale-150 flex flex-row justify-around p-3 w-200 shadow-lg rounded bg-white">
                  <div className="self-center p-[10px]">
                    {" "}
                    {country.countryInfo && country.countryInfo.iso2 ? (
                      <img
                        src={`https://disease.sh/assets/img/flags/${country.countryInfo.iso2.toLowerCase()}.png`}
                        className="w-[1.9vw] h-[1.9vw] rounded-full mr-2 mb-[5px]"
                      />
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="flex flex-col items-left pl-3">
                    <div className="font-poppins font-medium text-xs text-[#2b2a69]">
                      {country.country}
                    </div>
                    <div className="font-roboto font-bold text-lg text-[#2b2a69]">
                      {country.cases}
                    </div>
                  </div>
                </div>
              </td>

              <td>
                <div className="ml-[2.75rem] mr-[0.75rem] hover:scale-150 flex flex-row justify-around p-3 w-200 shadow-lg rounded bg-white">
                  <div className="self-center p-[10px]">
                    {" "}
                    {country.countryInfo && country.countryInfo.iso2 ? (
                      <img
                        src={`https://disease.sh/assets/img/flags/${country.countryInfo.iso2.toLowerCase()}.png`}
                        className="w-[1.9vw] h-[1.9vw] rounded-full mr-2 mb-[5px]"
                      />
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="flex flex-col items-left pl-3">
                    <div className="font-poppins font-medium text-xs text-[#2b2a69]">
                      {country.country}
                    </div>
                    <div className="font-roboto font-bold text-lg text-[#2b2a69]">
                      {country.cases}
                    </div>
                  </div>
                </div>
              </td>

              <td>
                <div className="ml-[2.75rem] mr-[0.75rem] hover:scale-150 flex flex-row justify-around p-3 w-200 shadow-lg rounded bg-white">
                  <div className="self-center p-[10px]">
                    {" "}
                    {country.countryInfo && country.countryInfo.iso2 ? (
                      <img
                        src={`https://disease.sh/assets/img/flags/${country.countryInfo.iso2.toLowerCase()}.png`}
                        className="w-[1.9vw] h-[1.9vw] rounded-full mr-2 mb-[5px]"
                      />
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="flex flex-col items-left pl-3">
                    <div className="font-poppins font-medium text-xs text-[#2b2a69]">
                      {country.country}
                    </div>
                    <div className="font-roboto font-bold text-lg text-[#2b2a69]">
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
