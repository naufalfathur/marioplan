import React from "react";
import { useParams, useNavigate } from "react-router";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Navigate } from "react-router-dom";
import moment from 'moment'
const ProjectDetails = (props) => {
  const params = useParams();
  const id = params.id;
  const { project, auth } = props;
    if(!auth.uid) return <Navigate to="/signIn" />;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title + id}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading Project....</p>
      </div>
    );
  }
};

const withRouter = (Child) => {
  return (props) => {
    const params = useParams();
    return <Child {...props} params={params} />;
  };
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default withRouter(
  compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "projects" }])
  )(ProjectDetails)
);
