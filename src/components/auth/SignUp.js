import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Navigate to="/" />;
    return (
      <div className="card col-8 shadow-lg bg-body rounded">
        <form className="" onSubmit={this.handleSubmit}>
          <div className="row">
            <div class="col-md-4">
              <img
                className="img-fluid rounded-start"
                style={{height: '100%', 'object-fit': 'cover'}}
                src="https://images.unsplash.com/photo-1624811072711-3e3481f355fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2103&q=80"
                alt="Girl in a jacket"
              />
            </div>
            <div className="col-7 me-5">
              <h5 className="card-title">Create New Account</h5>
              <hr />
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="firstName"
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="lastName"
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <button className="btn  btn-danger">Sign Up</button>
                <div className="red-text center">
                  {authError ? <p>{authError}</p> : null}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
