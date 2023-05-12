import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

function Index() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <h5>Test Task</h5>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Index;
