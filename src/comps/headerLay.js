import React from "react";
import { Link } from "react-router-dom";
import "./header_footer.css";

export default function HeaderLay() {
  return (
    <header className="container-fluid bg-warning">
      <nav className="container">
        <ul className="nav p-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shipping">shipping</Link>
          </li>
          <li>
            <Link to="/graph">Graph</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}