import React from "react";
import Navigation from "../Navigation/Navigation";

function Header({ toggleTheme, dark }) {
  return (
    <header className="header">
      <h2>MyBusiness</h2>
      <Navigation />

      <button onClick={toggleTheme} className="theme-btn">
        {dark ? "☀️" : "🌙"}
      </button>
    </header>
  );
}

export default Header;