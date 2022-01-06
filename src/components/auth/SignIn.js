import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Navigate } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Navigate to="/" />;
    return (
      <div className="card col-8 shadow-lg bg-body rounded">
        <form onSubmit={this.handleSubmit}>
          <div className="row ">
            <div class="col-md-4">
              <img
                className="img-fluid rounded-start"
                style={{height: '100%', 'object-fit': 'cover'}}
                src="https://images.unsplash.com/photo-1612404459571-ccef4b6588e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                alt="Girl in a jacket"
              />
            </div>
            <div className="card-body col-7 me-5">
              <h5 className="card-title ">Sign in</h5>
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
                  className="form-control"
                  type="password"
                  id="password"
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <button className="btn  btn-danger">Login</button>
                <div className="text-red center">
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
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
