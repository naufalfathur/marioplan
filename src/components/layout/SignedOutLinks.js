import React from "react";
import { NavLink } from "react-router-dom";

const SignOutLinks = () => {
  return (
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Create an Account</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signin">Sign In</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignOutLinks;
