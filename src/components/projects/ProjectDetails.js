import React from "react";
import { useParams, useNavigate } from "react-router";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Navigate } from "react-router-dom";
import ProjectCard from "./details/ProjectCard";
import ProjectComments from "./details/ProjectComments";

const ProjectDetails = (props) => {
  const params = useParams();
  const { project, auth } = props;
  if (!auth.uid) return <Navigate to="/signIn" />;
  if (project) {
    return (
      <div className="col-9">
        <ProjectCard project={project}/>
        <ProjectComments project={project}/>
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
    auth: state.firebase.auth,
  };
};

export default withRouter(
  compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "projects" }])
  )(ProjectDetails)
);
