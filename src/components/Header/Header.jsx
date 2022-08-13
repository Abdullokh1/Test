import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="bg-light p-2">
      <div className="container">
        <Link className="logo" to="/">
          <h3>Test</h3>
        </Link>
      </div>
    </header>
  );
}

export default Header;
