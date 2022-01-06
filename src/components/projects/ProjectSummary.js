import React from "react";
import moment from "moment";
import icon from "../../img/icon.png";

export default function ProjectSummary({ project }) {
  return (
    <div className="card project-summary ">
      <div className="card-body">
        <h5 className="card-title">
          <img src={icon} className="icon" alt="" />
          {project.title}
        </h5>
        <p className="text-muted">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
          dolore perferendis minus est dicta praesentium natus debitis, maiores
          nam tenetur. Tempore sapiente nemo a! Eius aperiam saepe sapiente
          error totam?
        </p>
        <hr className="solid" />
        <div className="d-flex justify-content-between">
          <p className="card-subtitle">
            <strong>
              Posted by {project.authorFirstName} {project.authorLastName}
            </strong>
            &nbsp; on {moment(project.createdAt.toDate()).calendar()}
          </p>
          <p>
            <i className="fas fa-arrow-up"></i>
            &nbsp;0&nbsp;&nbsp;&nbsp;
            <i className="far fa-comment"></i>
            &nbsp;0
          </p>
        </div>
      </div>
    </div>
  );
}
