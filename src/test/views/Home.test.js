import { render, screen } from "@testing-library/react";
import Home from "../../views/Home";
import { RecoilRoot } from "recoil";
import Navbar from "../../components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

describe("Test Views Home", () => {
  test("Home harus ada Test id home dan harus ada di tengah dan berwarna merah", () => {
    render(
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    );
    const home = screen.getByTestId("home");
    expect(home).toHaveClass(
      "flex items-center justify-center h-screen w-full bg-red-700"
    );
  });
});

describe("Test Render Navbar Username", () => {
  test("Home harus ada 'Punny' di Navbar home", () => {
    render(
      <RecoilRoot>
        <Router>
          <Navbar nama={"Punny"} umur={19} />
        </Router>
      </RecoilRoot>
    );
    const nama = screen.getByText(/Punny/i);
    const umur = screen.getByText(/19/i);
    expect(nama).toBeInTheDocument();
    expect(umur).toBeInTheDocument();
  });
});
