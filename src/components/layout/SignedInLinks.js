import React, { Profiler } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignInLinks = (props) => {
  return (
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"><NavLink className="nav-link" to='/create'>New Project</NavLink></li>
        <li className="nav-item"><a className="nav-link" onClick={props.signOut} href="">Log Out</a></li>
        <strong className="nav-link ">{props.profile.firstName} {props.profile.lastName}</strong>
        <li className="nav-item"><NavLink className="nav-link" to='/' className='btn btn-circle'>{props.profile.initials}</NavLink></li>
    </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  };
};


export default connect(null ,mapDispatchToProps)(SignInLinks);
