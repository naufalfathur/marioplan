import React from "react";
import moment from "moment";

export default function ProjectComments({ project }) {
  return (
    <div className="card mt-4 ms-auto col-11 project-details">
      <div class="card-body">
        <center>0 Comments</center>
        <hr />
        <AddComments/>
      </div>
    </div>
  );
}

function AddComments() {
  return (
    <div class="">
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Add Comments ..."
      />
    </div>
  </div>
  );
}
