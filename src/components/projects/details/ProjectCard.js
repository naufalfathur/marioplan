import React from "react";
import moment from "moment";
import icon from "../../../img/icon.png";

export default function ProjectCard({ project }) {
  return (
    <div className="card project-details">
        <div className="card-body">
          <div className="row">
            <SideVote />
            <CardContent project={project} />
          </div>
        </div>
      </div>
  );
}

function SideVote() {
  return (
    <div className="col-1">
      <div className="row">
        <center class="fas fa-long-arrow-alt-up upvote"></center>
      </div>
      <div className="row mt-2 mb-2">
        <center>330</center>
      </div>
      <div className="row">
        <center class="fas fa-long-arrow-alt-down downvote"></center>
      </div>
    </div>
  );
}

function CardContent({ project }) {
  return (
    <div className="col-11 ms-auto">
      <h5 className="card-title">
        <img src={icon} className="icon" alt="" />
        {project.title}
      </h5>
      <p className="mb-4 mt-4">{project.content}</p>
      <hr className="solid" />
      <div className="d-flex justify-content-between">
        <p className="card-subtitle">
          <strong>
            Posted by {project.authorFirstName} {project.authorLastName}
          </strong>
          &nbsp; on {moment(project.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
}
