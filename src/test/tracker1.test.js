import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TrackerOne from "./TrackerOne";
import useApi from "../../services/useApi";

// Mock the useApi hook
jest.mock("../../services/useApi");

const mockAllData = {
  cases: 1000,
  deaths: 50,
  recovered: 900,
  active: 50,
  todayCases: 10,
  todayDeaths: 1,
};

const mockCountriesData = [
  {
    country: "Country A",
    countryInfo: { iso2: "CA" },
    cases: 500,
    deaths: 25,
    recovered: 450,
    active: 25,
    todayCases: 5,
    todayDeaths: 0,
  },
  {
    country: "Country B",
    countryInfo: { iso2: "CB" },
    cases: 500,
    deaths: 25,
    recovered: 450,
    active: 25,
    todayCases: 5,
    todayDeaths: 0,
  },
];

useApi.mockImplementation((url) => {
  if (url.includes("/all")) {
    return mockAllData;
  } else if (url.includes("/countries")) {
    return mockCountriesData;
  } else {
    return null;
  }
});

describe("TrackerOne", () => {
  test("renders loading state initially", () => {
    useApi.mockImplementationOnce(() => null);
    render(<TrackerOne />);
    expect(screen.getByText("Cargando...")).toBeInTheDocument();
  });

  test("renders data correctly", () => {
    render(<TrackerOne />);

    const selectElement = screen.getByLabelText("Select country");
    expect(selectElement).toBeInTheDocument();
    expect(screen.getByText("Country A")).toBeInTheDocument();
    expect(screen.getByText("Country B")).toBeInTheDocument();

    expect(screen.getByText("1000")).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();
    expect(screen.getByText("900")).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("updates country data on select change", () => {
    render(<TrackerOne />);

    fireEvent.change(screen.getByLabelText("Select country"), {
      target: { value: "CA" },
    });

    expect(screen.getByText("500")).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();
    expect(screen.getByText("450")).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
