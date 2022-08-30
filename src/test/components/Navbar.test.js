import { render, screen } from "@testing-library/react";
import Navbar from "../../components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

test("Navbar harus Merender Logo Text", () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );
  const logoText = screen.getByText(/React/i);
  expect(logoText).toBeInTheDocument();
});

test("Navbar harus Merender Navlink", () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );
  const home = screen.getByText(/Home/i);
  const about = screen.getByText(/About/i);
  expect(home).toBeInTheDocument();
  expect(about).toBeInTheDocument();
});

describe("Test Navbar Logo", () => {
  test('Logo harus punya src dan harus berukuran 40 = "/logo.svg" dan alt = "Logo"', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src", "logo.svg");
    expect(logo).toHaveAttribute("alt", "Logo");
    expect(logo).toHaveAttribute("width", "40");
  });
});

describe("Test Navbar Text nya harus White", () => {
  test("Navbar harus punya text berwarna Putih", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const text = screen.getAllByTestId("auth");
    expect(text[0]).toHaveClass("text-white");
  });
});

describe("Test Navbar harus punya Login dan Register", () => {
  test("Jika Navbar punya Login dan Register maka Navbar nya Benar", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const loginText = screen.getByText("Login");
    const registerText = screen.getByText("Register");
    expect(loginText).toBeInTheDocument();
    expect(registerText).toBeInTheDocument();
  });
});
