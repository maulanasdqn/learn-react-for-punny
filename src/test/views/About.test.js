import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import About from "../../views/About";
import Navbar from "../../components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

describe("Test Views About", () => {
  test("About harus ada Test id about dan harus ada di tengah dan berwarna hijau", () => {
    render(
      <RecoilRoot>
        <About />
      </RecoilRoot>
    );
    const about = screen.getByTestId("about");
    expect(about).toHaveClass(
      "flex items-center justify-center h-screen w-full bg-green-400"
    );
  });
});

describe("Test Render Navbar Username", () => {
  test("Home harus ada 'Maulani' di Navbar About", () => {
    render(
      <RecoilRoot>
        <Router>
          <Navbar nama={"Maulani"} umur={21} />
        </Router>
      </RecoilRoot>
    );
    const nama = screen.getByText(/Maulani/i);
    const umur = screen.getByText(/21/i);
    expect(nama).toBeInTheDocument();
    expect(umur).toBeInTheDocument();
  });
});
