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
      <table className="font-poppins" id="CountriesDataTable">
        <thead>
          <tr>
            <th>Top Cases</th>
            <th>Today Cases</th>
            <th>Top Deaths</th>
            <th>Today Deaths</th>
            <th>Top Active</th>
            <th>Top Recover</th>
          </tr>
        </thead>
        <tbody className="text-textBlue">
          {data.map((country) => (
            <tr key={country.country}>
              <td className="bg-[#fffefe]">
                <div className="flex flex-row m-10 justify-around p-3 border-2 border-sky-500 w-200">
                  <div className="self-center">
                    {" "}
                    {country.countryInfo && country.countryInfo.iso2 ? (
                      <img
                        src={`https://disease.sh/assets/img/flags/${country.countryInfo.iso2.toLowerCase()}.png`}
                        className="w-[50px] h-[50px] object-cover rounded-full"
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
                <div className="flex flex-row">
                  <div>
                    {" "}
                    {country.countryInfo && country.countryInfo.iso2 ? (
                      <img
                        src={`https://disease.sh/assets/img/flags/${country.countryInfo.iso2.toLowerCase()}.png`}
                        className="w-[30px]"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col">
                    <div>{country.country}</div>
                    <div className="font-roboto">{country.todayCases}</div>
                  </div>
                </div>
              </td>

              <td className="bg-[#fffefe]">
                <div className="flex flex-row">
                  <div>
                    {" "}
                    {country.countryInfo && country.countryInfo.iso2 ? (
                      <img
                        src={`https://disease.sh/assets/img/flags/${country.countryInfo.iso2.toLowerCase()}.png`}
                        className="w-[30px]"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col">
                    <div>{country.country}</div>
                    <div className="font-roboto">{country.cases}</div>
                  </div>
                </div>
              </td>

              <td className="bg-[#fffefe]">
                <div className="flex flex-row">
                  <div>
                    {" "}
                    {country.countryInfo && country.countryInfo.iso2 ? (
                      <img
                        src={`https://disease.sh/assets/img/flags/${country.countryInfo.iso2.toLowerCase()}.png`}
                        className="w-[30px]"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col">
                    <div>{country.country}</div>
                    <div className="font-roboto">{country.cases}</div>
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
