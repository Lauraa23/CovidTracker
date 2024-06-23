import { useEffect } from "react";
import $ from "jquery";
import "datatables.net";

const Tracker2 = () => {
  useEffect(() => {
    const tableId = "#CountryStatsDataTable";

    // Destruir la tabla si ya ha sido inicializada
    if ($.fn.DataTable.isDataTable(tableId)) {
      $(tableId).DataTable().destroy();
    }

    // Inicializar la tabla con paginación
    $(tableId).DataTable({
      paging: true, // Activar paginación
      pageLength: 10, // Número de registros por página
      language: {
        lengthMenu: "Show _MENU_ entries",
        info: "",
        paginate: {
          first: "Previous",
          last: "Next",
        },
      },
      infoCallback: function (settings, start, end, max, total, pre) {
        return `Showing ${start} to ${end} of ${total} entries`;
      },
    });
  }, []); // Dependencias vacías para que se ejecute solo una vez

  return (
    <div
      className="flex-1 flex flex-col m-auto p-7 bg-light"
      /* chat-content active */
      id="table"
      // tabIndex="3"
      // className="overflow: hidden; outline: none;"
    >
      <div
        /* widget-area */
        className="bg-white rounded shadow-[0_15px_30px_0_rgba(20,50,90,0.05)] mb-[30px]; px-5 py-[15px] border-b-[rgba(0,0,0,0.12)] border-b border-solid;"
      >
        <div
          /* widget-head */
          className=" px-5 py-[15px] border-b-[rgba(0,0,0,0.12)] border-b border-solid;
}"
        >
          <h1
            /* dez-title */
            className="font-semibold text-[22px] mb-0 text-[#121158]"
          >
            Ajax Data Table - Covid-19 Country Wise State
          </h1>
        </div>
        <div /* widget-body */ className="px-5 py-[15px]">
          <div
            id="CountryStatsDataTable_wrapper" /* dataTables_wrapper no-footer */
            className=" relative clear-both overflow-scroll
zoom: 1;"
          >
            <div /* dataTables_length */
              className="float-left "
              id="CountryStatsDataTable_length"
            >
              {/* <label>
                Show{" "}
                <select
                  name="CountryStatsDataTable_length"
                  aria-controls="CountryStatsDataTable"
                  className="border h-10 mx-2.5 my-0 px-[15px] py-[5px] border-solid border-[#ccc]"
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                entries
              </label> */}
            </div>
            <div
              id="CountryStatsDataTable_filter"
              className="dataTables_filter"
            >
              {/* <label>
                Search:
                <input
                  type="search"
                  className=""
                  placeholder=""
                  aria-controls="CountryStatsDataTable"
                />
              </label> */}
            </div>
            <table
              id="CountryStatsDataTable"
              // className="display dataTable no-footer"
              width="100%"
              role="grid"
              aria-describedby="CountryStatsDataTable_info"
              className="width: 100%;"
            >
              <thead>
                <tr role="row">
                  <th
                    className="sorting w-[44px]"
                    tabIndex="0"
                    aria-controls="CountryStatsDataTable"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Flag: activate to sort column ascending"
                  >
                    Flag
                  </th>
                  <th
                    className="sorting w-[102px]"
                    tabIndex="0"
                    aria-controls="CountryStatsDataTable"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Country: activate to sort column ascending"
                  >
                    Country
                  </th>
                  <th
                    className="sorting_desc w-[71px]"
                    tabIndex="0"
                    aria-controls="CountryStatsDataTable"
                    rowSpan="1"
                    colSpan="1"
                    aria-sort="descending"
                    aria-label="Cases: activate to sort column ascending"
                  >
                    Cases
                  </th>
                  <th
                    className="sorting w-[112px]"
                    tabIndex="0"
                    aria-controls="CountryStatsDataTable"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="New Cases: activate to sort column ascending"
                  >
                    New Cases
                  </th>
                  <th
                    className="sorting w-[73px]"
                    tabIndex="0"
                    aria-controls="CountryStatsDataTable"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Deaths: activate to sort column ascending"
                  >
                    Deaths
                  </th>
                  <th
                    className="sorting w-[121px]"
                    tabIndex="0"
                    aria-controls="CountryStatsDataTable"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="New Deaths: activate to sort column ascending"
                  >
                    New Deaths
                  </th>
                  <th
                    className="sorting w-[96px]"
                    tabIndex="0"
                    aria-controls="CountryStatsDataTable"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Recoverd: activate to sort column ascending"
                  >
                    Recoverd
                  </th>
                  <th
                    className="sorting w-[64px]"
                    tabIndex="0"
                    aria-controls="CountryStatsDataTable"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Active: activate to sort column ascending"
                  >
                    Active
                  </th>
                  <th
                    className="sorting w-[74px]"
                    tabIndex="0"
                    aria-controls="CountryStatsDataTable"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Critical: activate to sort column ascending"
                  >
                    Critical
                  </th>
                  <th
                    className="sorting w-[95px]"
                    tabIndex="0"
                    aria-controls="CountryStatsDataTable"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Tested: activate to sort column ascending"
                  >
                    Tested
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr role="row" className="bg-flag">
                  <td className="bg-odd">
                    <img
                      src="https://disease.sh/assets/img/flags/us.png"
                      width="30"
                    />
                  </td>
                  <td className="bg-odd">USA</td>
                  <td className="bg-odd">86503057</td>
                  <td className="bg-odd">0</td>
                  <td className="bg-odd">1033571</td>
                  <td className="bg-odd">0</td>
                  <td className="bg-odd">82527789</td>
                  <td className="bg-odd">2941697</td>
                  <td className="bg-odd">2756</td>
                  <td className="bg-odd">1033745991</td>
                </tr>
                <tr role="row" className="bg-flag">
                  <td>
                    <img
                      src="https://disease.sh/assets/img/flags/in.png"
                      width="30"
                    />
                  </td>
                  <td>India</td>
                  <td className="sorting_1">43178080</td>
                  <td>0</td>
                  <td>524651</td>
                  <td>0</td>
                  <td>42622757</td>
                  <td>30672</td>
                  <td>698</td>
                  <td>851338595</td>
                </tr>
                <tr role="row" className="bg-flag">
                  <td className="bg-odd">
                    <img
                      src="https://disease.sh/assets/img/flags/br.png"
                      width="30"
                    />
                  </td>
                  <td className="bg-odd">Brazil</td>
                  <td className="bg-odd">31153069</td>
                  <td className="bg-odd">0</td>
                  <td className="bg-odd">667044</td>
                  <td className="bg-odd">0</td>
                  <td className="bg-odd">30063682</td>
                  <td className="bg-odd">422343</td>
                  <td className="bg-odd">8318</td>
                  <td className="bg-odd">63776166</td>
                </tr>
                <tr role="row" className="even">
                  <td>
                    <img
                      src="https://disease.sh/assets/img/flags/fr.png"
                      width="30"
                    />
                  </td>
                  <td>France</td>
                  <td className="sorting_1">29095086</td>
                  <td>0</td>
                  <td>147715</td>
                  <td>0</td>
                  <td>28863994</td>
                  <td>346377</td>
                  <td>745</td>
                  <td>246065792</td>
                </tr>
                <tr role="row" className="bg-flag">
                  <td className="bg-odd">
                    <img
                      src="https://disease.sh/assets/img/flags/de.png"
                      width="30"
                    />
                  </td>
                  <td className="bg-odd">Germany</td>
                  <td className="bg-odd">26971653</td>
                  <td className="bg-odd">0</td>
                  <td className="bg-odd">140616</td>
                  <td className="bg-odd">0</td>
                  <td className="bg-odd">26412300</td>
                  <td className="bg-odd">195737</td>
                  <td className="bg-odd">1377</td>
                  <td className="bg-odd">122031736</td>
                </tr>
                <tr role="row" className="bg-flag">
                  <td>
                    <img
                      src="https://disease.sh/assets/img/flags/uk.png"
                      width="30"
                    />
                  </td>
                  <td>UK</td>
                  <td className="sorting_1">21930034</td>
                  <td>0</td>
                  <td>177977</td>
                  <td>0</td>
                  <td>246977</td>
                  <td>37126</td>
                  <td>293</td>
                  <td>522007436</td>
                </tr>
                <tr role="row" className="bg-flag">
                  <td className="bg-odd">
                    <img
                      src="https://disease.sh/assets/img/flags/ru.png"
                      width="30"
                    />
                  </td>
                  <td className="bg-odd">Russia</td>
                  <td className="bg-odd">18450929</td>
                  <td className="bg-odd">0</td>
                  <td className="bg-odd">381112</td>
                  <td className="bg-odd">0</td>
                  <td className="bg-odd">17919756</td>
                  <td className="bg-odd">350061</td>
                  <td className="bg-odd">0</td>
                  <td className="bg-odd">269400000</td>
                </tr>
                <tr role="row" className="bg-flag">
                  <td>
                    <img
                      src="https://disease.sh/assets/img/flags/kr.png"
                      width="30"
                    />
                  </td>
                  <td>South Korea</td>
                  <td className="sorting_1">18248344</td>
                  <td>0</td>
                  <td>24279</td>
                  <td>0</td>
                  <td>15887763</td>
                  <td>2354302</td>
                  <td>117</td>
                  <td>118321617</td>
                </tr>
                <tr role="row">
                  <td className="bg-odd">
                    <img
                      className="bg-flag"
                      src="https://disease.sh/assets/img/flags/it.png"
                      width="30"
                    />
                  </td>
                  <td className="bg-odd">Italy</td>
                  <td className="bg-odd">17619411</td>
                  <td className="bg-odd">0</td>
                  <td className="bg-odd">167780</td>
                  <td className="bg-odd">0</td>
                  <td className="bg-odd">17110612</td>
                  <td className="bg-odd">381019</td>
                  <td className="bg-odd">78</td>
                  <td className="bg-odd">232152381</td>
                </tr>
                <tr role="row" className="even">
                  <td>
                    <img
                      className="bg-flag"
                      src="https://disease.sh/assets/img/flags/tr.png"
                      width="30"
                    />
                  </td>
                  <td>Turkey</td>
                  <td className="sorting_1">15074174</td>
                  <td>0</td>
                  <td>989996</td>
                  <td>0</td>
                  <td>14548230</td>
                  <td>518948</td>
                  <td>0</td>
                  <td>162743369</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker2;
