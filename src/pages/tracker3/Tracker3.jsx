import { useEffect } from "react";
import $ from "jquery";
import "datatables.net";
import { API_BASE_URL } from "../../config/urls";
import useApi from "../../services/useApi";

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
      <table className="" id="CountriesDataTable">
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
                    <div>{country.cases}</div>
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
                    <div>{country.todayCases}</div>
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
