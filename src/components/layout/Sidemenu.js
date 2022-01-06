import React, { Profiler } from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";

const Sidemenu = (props) => {
  const { auth } = props;
  if(auth.uid){
    return (
      <div className="d-flex flex-column flex-shrink-0 p-3 sidenav">
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <i class="fas fa-home side-icon"></i>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/create">
              <i class="fas fa-plus side-icon"></i>
              Create Post
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/profile/posts">
              <i class="fas fa-file side-icon"></i>
              Your Post
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/profile/">
              <i class="fas fa-user side-icon"></i>
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/about">
              About
            </NavLink>
          </li>
        </ul>
        <NavLink className="nav-link " to="/about">
          About
        </NavLink>
        <hr></hr>
        <div className="dropdown">
          
        </div>
      </div>
    );
  }else{
    return null
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};


export default connect(mapStateToProps)(Sidemenu);
