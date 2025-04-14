import React, { useState } from "react";
import "../dashboard-style.css";
import { useNavigate, Link } from "react-router-dom";


export default function Employee(){
      
      const navigate = useNavigate();

    return <div className="dashboard-container">
    {/* Sidebar */}
    <div className="sidebar">
      <nav className="nav flex-column">
        <a className="nav-link"  onClick={() => navigate("/dashboard/employee")}>
          Employee
        </a>
        <a className="nav-link" href="#">
          Associate
        </a>
        <a className="nav-link" href="#">
          Athelete
        </a>
        <a className="nav-link" href="#">
          Reports
        </a>
      </nav>
    </div>

    {/* Main Content */}
    <div className="main-content">
      <a className="back" onClick={() => navigate("/dashboard")}><span><i class="bi bi-arrow-left-circle-fill"></i> </span> Back</a>
      
           
        
      <div className="row stats-container">
         <div className="row">
         <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
         </div>
        
      </div>
    </div>
  </div>
}