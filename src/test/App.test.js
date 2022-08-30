import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import App from "../App";

test("Mengecek apakah Navbar ada di App", () => {
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
  const logoReact = screen.getByText(/React/i);
  expect(logoReact).toBeInTheDocument();
});

test("Mengecek apakah Home ada di App", () => {
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
  const home = screen.getByTestId("home-counter");
  expect(home).toBeTruthy();
});
