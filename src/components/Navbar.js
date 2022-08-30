import React from "react";
import LogoReact from "../logo.svg";
import { Link } from "react-router-dom";

const Navbar = ({ nama, umur }) => {
  return (
    <header
      data-testid="header-nav"
      className="flex items-center h-auto p-4 w-full bg-gray-700 gap-x-6"
    >
      <figure className="flex items-center justify-start">
        <img width={40} src={LogoReact} alt="Logo" />
        <figcaption>React</figcaption>
      </figure>
      <nav className="flex justify-between w-full items-center">
        <section className="flex gap-x-4 text-white">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </section>
        <section className="flex gap-x-4 text-white" data-testid="auth">
          <span>Login</span>
          <span>Register</span>
          <section className="flex items-center justify-center">
            {nama + " " + umur}
          </section>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
