import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router";
import { Editor } from '@tinymce/tinymce-react'; 

class CreateProject extends Component {
  state = {
    title: "",
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.navigate("/");
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Navigate to="/signIn" />;
    return (
      <div className="card col-8 p-3">
        <form onSubmit={this.handleSubmit}>
          <div className="card-body">
            <h5 className="card-title">Create Post</h5>
            <div className="mb-3">
              <label className="form-label" htmlFor="title">Title</label>
              <input
                className="form-control"
                type="text"
                id="title"
                onChange={this.handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="form-label">Project Content</label>
              <textarea
                id="content"
                className="form-control"
                rows="10"
                onChange={this.handleChange}
              ></textarea>
            </div>
            <div className="">
              <button className="btn  btn-danger">Create</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const withRouter = (Child) => {
  return (props) => {
    const navigate = useNavigate();
    return <Child {...props} navigate={navigate} />;
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CreateProject)
);
