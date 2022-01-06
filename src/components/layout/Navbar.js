import React from "react";
import { Link } from "react-router-dom";
import SignInLinks from "./SignedInLinks";
import SignOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import logo from "../../img/Logo.png";

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignInLinks profile={profile} /> : <SignOutLinks />;
  return (
    <nav className="navbar sticky-top navbar-expand navbar-light white-bg ">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} />
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
