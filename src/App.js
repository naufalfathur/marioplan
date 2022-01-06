import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import Sidemenu from "./components/layout/Sidemenu";

class App extends Component {
  render() {
   
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="page-body container">
            <div className="row">
              <div className="col-3">
              <Sidemenu/>
              </div>
              <div className="col-9 ms-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/create" element={<CreateProject />} />
                <Route path="/project/:id" element={<ProjectDetails />} />
              </Routes>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
