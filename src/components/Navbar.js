import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navigation">
      <NavLink to="/" activeclassname="active">
        Home
      </NavLink>
      {/* <NavLink to="/news" activeclassname="active">
        News
      </NavLink> */}
    </div>
  );
}

export default Navbar;
