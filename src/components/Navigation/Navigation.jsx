import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navigation;