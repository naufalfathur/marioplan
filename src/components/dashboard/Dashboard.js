import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Navigate } from "react-router-dom";
import Sidemenu from "../layout/Sidemenu";
class Dashboard extends Component {
  render() {
    //console.log(this.props)
    const { projects, auth } = this.props;
    if (!auth.uid) return <Navigate to="/signIn" />;
    if (projects) {
      return (
        <div className="dashboard">
          <div className="row">
            <div className="col-8 ">
              <ProjectList projects={projects} />
            </div>
            <div className="col-3 ms-auto">
              <Notification />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class="d-flex align-items-center">
          <strong>Loading...</strong>
          <div
            class="spinner-border ms-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(Dashboard);
