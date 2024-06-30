import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Tracker4 from "./Tracker4";
import "@testing-library/jest-dom/extend-expect";
import { API_BASE_URL } from "../../config/urls";


const mockCountriesData = [
  {
    country: "Country1",
    countryInfo: { iso2: "C1", flag: "url_to_flag1" },
    cases: 1000,
    deaths: 50,
    recovered: 900,
    active: 50,
    todayCases: 10,
    todayDeaths: 1,
  },
  {
    country: "Country2",
    countryInfo: { iso2: "C2", flag: "url_to_flag2" },
    cases: 2000,
    deaths: 100,
    recovered: 1800,
    active: 100,
    todayCases: 20,
    todayDeaths: 2,
  },
];

const mockAllCountryData = {
  cases: 500000,
  deaths: 10000,
  recovered: 450000,
  active: 40000,
  todayCases: 1000,
  todayDeaths: 50,
};


global.fetch = jest.fn((url) => {
  if (url === `${API_BASE_URL}/countries`) {
    return Promise.resolve({
      json: () => Promise.resolve(mockCountriesData),
    });
  } else if (url === `${API_BASE_URL}/all`) {
    return Promise.resolve({
      json: () => Promise.resolve(mockAllCountryData),
    });
  }
  return Promise.reject(new Error("not found"));
});

describe("Tracker4 Component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("renders loading message initially", () => {
    render(<Tracker4 />);
    expect(screen.getByText(/Cargando.../i)).toBeInTheDocument();
  });

  test("renders country buttons after data load", async () => {
    render(<Tracker4 />);

    await waitFor(() => screen.getByText("Country1"));

    expect(screen.getByText("Country1")).toBeInTheDocument();
    expect(screen.getByText("Country2")).toBeInTheDocument();
  });

  test("displays country data when a country button is clicked", async () => {
    render(<Tracker4 />);

    await waitFor(() => screen.getByText("Country1"));

    fireEvent.click(screen.getByText("Country1"));

    await waitFor(() =>
      screen.getByText(mockCountriesData[0].cases.toString())
    );
    expect(
      screen.getByText(mockCountriesData[0].cases.toString())
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockCountriesData[0].deaths.toString())
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockCountriesData[0].recovered.toString())
    ).toBeInTheDocument();
  });

  test("displays global data initially", async () => {
    render(<Tracker4 />);

    await waitFor(() => screen.getByText(mockAllCountryData.cases.toString()));

    expect(
      screen.getByText(mockAllCountryData.cases.toString())
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockAllCountryData.deaths.toString())
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockAllCountryData.recovered.toString())
    ).toBeInTheDocument();
  });
});
