const Tracker2 = () => {
  return (
    <div
      className="flex-1 flex flex-col m-auto p-7 bg-light" /* chat-content active */
      id="table"
      // tabindex="3"
      // className="overflow: hidden; outline: none;"
    >
      <div
        /* widget-area */ className="bg-white rounded shadow-[0_15px_30px_0_rgba(20,50,90,0.05)] mb-[30px]; px-5 py-[15px] border-b-[rgba(0,0,0,0.12)] border-b border-solid;"
      >
        <div
          /* widget-head */ className=" px-5 py-[15px] border-b-[rgba(0,0,0,0.12)] border-b border-solid;
}"
        >
          <h1
            /* dez-title */ className="font-semibold text-[22px] mb-0 text-[#121158]"
          >
            Ajax Data Table - Covid-19 Country Wise State
          </h1>
        </div>
        <div /* widget-body */ className="px-5 py-[15px]">
          <div
            id="CountryStatsDataTable_wrapper" /* dataTables_wrapper no-footer */
            className="scroll relative clear-both;
  zoom: 1;"
          >
            <div /* dataTables_length */
              className="float-left;"
              id="CountryStatsDataTable_length"
            >
              <label>
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
              </label>
            </div>
            <div
              id="CountryStatsDataTable_filter"
              className="dataTables_filter"
            >
              <label>
                Search:
                <input
                  type="search"
                  className=""
                  placeholder=""
                  aria-controls="CountryStatsDataTable"
                />
              </label>
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
                    // className="sorting"
                    tabindex="0"
                    aria-controls="CountryStatsDataTable"
                    rowspan="1"
                    colspan="1"
                    aria-label="Flag: activate to sort column ascending"
                    className="width: 44px;"
                  >
                    Flag
                  </th>
                  <th
                    // className="sorting"
                    tabindex="0"
                    aria-controls="CountryStatsDataTable"
                    rowspan="1"
                    colspan="1"
                    aria-label="Country: activate to sort column ascending"
                    className="width: 102px;"
                  >
                    Country
                  </th>
                  <th
                    // className="sorting_desc"
                    tabindex="0"
                    aria-controls="CountryStatsDataTable"
                    rowspan="1"
                    colspan="1"
                    aria-sort="descending"
                    aria-label="Cases: activate to sort column ascending"
                    className="width: 71px;"
                  >
                    Cases
                  </th>
                  <th
                    // className="sorting"
                    tabindex="0"
                    aria-controls="CountryStatsDataTable"
                    rowspan="1"
                    colspan="1"
                    aria-label="New Cases: activate to sort column ascending"
                    className="width: 112px;"
                  >
                    New Cases
                  </th>
                  <th
                    // className="sorting"
                    tabindex="0"
                    aria-controls="CountryStatsDataTable"
                    rowspan="1"
                    colspan="1"
                    aria-label="Deaths: activate to sort column ascending"
                    className="width: 73px;"
                  >
                    Deaths
                  </th>
                  <th
                    // className="sorting"
                    tabindex="0"
                    aria-controls="CountryStatsDataTable"
                    rowspan="1"
                    colspan="1"
                    aria-label="New Deaths: activate to sort column ascending"
                    className="width: 121px;"
                  >
                    New Deaths
                  </th>
                  <th
                    // className="sorting"
                    tabindex="0"
                    aria-controls="CountryStatsDataTable"
                    rowspan="1"
                    colspan="1"
                    aria-label="Recoverd: activate to sort column ascending"
                    className="width: 96px;"
                  >
                    Recoverd
                  </th>
                  <th
                    // className="sorting"
                    tabindex="0"
                    aria-controls="CountryStatsDataTable"
                    rowspan="1"
                    colspan="1"
                    aria-label="Active: activate to sort column ascending"
                    className="width: 64px;"
                  >
                    Active
                  </th>
                  <th
                    // className="sorting"
                    tabindex="0"
                    aria-controls="CountryStatsDataTable"
                    rowspan="1"
                    colspan="1"
                    aria-label="Critical: activate to sort column ascending"
                    className="width: 74px;"
                  >
                    Critical
                  </th>
                  <th
                    // className="sorting"
                    tabindex="0"
                    aria-controls="CountryStatsDataTable"
                    rowspan="1"
                    colspan="1"
                    aria-label="Tested: activate to sort column ascending"
                    className="width: 95px;"
                  >
                    Tested
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr role="row" className="odd">
                  <td>
                    <img
                      src="https://disease.sh/assets/img/flags/us.png"
                      width="30"
                    />
                  </td>
                  <td>USA</td>
                  <td className="sorting_1">86503057</td>
                  <td>0</td>
                  <td>1033571</td>
                  <td>0</td>
                  <td>82527789</td>
                  <td>2941697</td>
                  <td>2756</td>
                  <td>1033745991</td>
                </tr>
                <tr role="row" className="even">
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
                <tr role="row" className="odd">
                  <td>
                    <img
                      src="https://disease.sh/assets/img/flags/br.png"
                      width="30"
                    />
                  </td>
                  <td>Brazil</td>
                  <td className="sorting_1">31153069</td>
                  <td>0</td>
                  <td>667044</td>
                  <td>0</td>
                  <td>30063682</td>
                  <td>422343</td>
                  <td>8318</td>
                  <td>63776166</td>
                </tr>
                <tr role="row" className="even">
                  <td>
                    <img
                      src="https://disease.sh/assets/img/flags/fr.png"
                      width="30"
                    />
                  </td>
                  <td>France</td>
                  <td className="sorting_1">29621064</td>
                  <td>0</td>
                  <td>148464</td>
                  <td>0</td>
                  <td>29035182</td>
                  <td>437418</td>
                  <td>1173</td>
                  <td>271490188</td>
                </tr>
                <tr role="row" className="odd">
                  <td>
                    <img
                      src="https://disease.sh/assets/img/flags/de.png"
                      width="30"
                    />
                  </td>
                  <td>Germany</td>
                  <td className="sorting_1">26539842</td>
                  <td>0</td>
                  <td>139744</td>
                  <td>0</td>
                  <td>25540200</td>
                  <td>859898</td>
                  <td>656</td>
                  <td>122332384</td>
                </tr>
                <tr role="row" className="even">
                  <td>
                    <img
                      src="https://disease.sh/assets/img/flags/gb.png"
                      width="30"
                    />
                  </td>
                  <td>UK</td>
                  <td className="sorting_1">22305893</td>
                  <td>0</td>
                  <td>178749</td>
                  <td>0</td>
                  <td>21970696</td>
                  <td>156448</td>
                  <td>188</td>
                  <td>522526476</td>
                </tr>
                <tr role="row" className="odd">
                  <td>
                    <img
                      src="https://disease.sh/assets/img/flags/ru.png"
                      width="30"
                    />
                  </td>
                  <td>Russia</td>
                  <td className="sorting_1">18348065</td>
                  <td>0</td>
                  <td>379445</td>
                  <td>0</td>
                  <td>17760326</td>
                  <td>208294</td>
                  <td>2300</td>
                  <td>273400000</td>
                </tr>
                <tr role="row" className="even">
                  <td>
                    <img
                      src="https://disease.sh/assets/img/flags/kr.png"
                      width="30"
                    />
                  </td>
                  <td>S. Korea</td>
                  <td className="sorting_1">18163686</td>
                  <td>9835</td>
                  <td>24258</td>
                  <td>20</td>
                  <td>17837506</td>
                  <td>301922</td>
                  <td>136</td>
                  <td>15804065</td>
                </tr>
                <tr role="row" className="odd">
                  <td>
                    <img
                      src="https://disease.sh/assets/img/flags/it.png"
                      width="30"
                    />
                  </td>
                  <td>Italy</td>
                  <td className="sorting_1">17490451</td>
                  <td>0</td>
                  <td>166922</td>
                  <td>0</td>
                  <td>16681659</td>
                  <td>641870</td>
                  <td>218</td>
                  <td>221741088</td>
                </tr>
                <tr role="row" className="even">
                  <td>
                    <img
                      src="https://disease.sh/assets/img/flags/tr.png"
                      width="30"
                    />
                  </td>
                  <td>Turkey</td>
                  <td className="sorting_1">15072747</td>
                  <td>0</td>
                  <td>98965</td>
                  <td>0</td>
                  <td>14971256</td>
                  <td>2526</td>
                  <td>975</td>
                  <td>162743369</td>
                </tr>
              </tbody>
            </table>
            <div
              className="dataTables_info"
              id="CountryStatsDataTable_info"
              role="status"
              aria-live="polite"
            >
              Showing 1 to 10 of 230 entries
            </div>
            <div
              className="dataTables_paginate paging_simple_numbers"
              id="CountryStatsDataTable_paginate"
            >
              <a
                className="paginate_button previous disabled"
                aria-controls="CountryStatsDataTable"
                data-dt-idx="0"
                tabindex="-1"
                id="CountryStatsDataTable_previous"
              >
                Previous
              </a>
              <span>
                <a
                  className="paginate_button current"
                  aria-controls="CountryStatsDataTable"
                  data-dt-idx="1"
                  tabindex="0"
                >
                  1
                </a>
                <a
                  className="paginate_button "
                  aria-controls="CountryStatsDataTable"
                  data-dt-idx="2"
                  tabindex="0"
                >
                  2
                </a>
                <a
                  className="paginate_button "
                  aria-controls="CountryStatsDataTable"
                  data-dt-idx="3"
                  tabindex="0"
                >
                  3
                </a>
                <a
                  className="paginate_button "
                  aria-controls="CountryStatsDataTable"
                  data-dt-idx="4"
                  tabindex="0"
                >
                  4
                </a>
                <a
                  className="paginate_button "
                  aria-controls="CountryStatsDataTable"
                  data-dt-idx="5"
                  tabindex="0"
                >
                  5
                </a>
                <span className="ellipsis">…</span>
                <a
                  className="paginate_button "
                  aria-controls="CountryStatsDataTable"
                  data-dt-idx="6"
                  tabindex="0"
                >
                  23
                </a>
              </span>
              <a
                className="paginate_button next"
                aria-controls="CountryStatsDataTable"
                data-dt-idx="7"
                tabindex="0"
                id="CountryStatsDataTable_next"
              >
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker2;
