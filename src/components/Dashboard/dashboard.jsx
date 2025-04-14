import React, { useState } from "react";
import "./dashboard-style.css";
import { useNavigate, Link } from "react-router-dom";


export default function Dashboard(){

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
      <h1 className="admin-title">Hi Admin</h1>

      <div className="row stats-container">
        {/* Employee Card */}
        <div className="col-md-3">
          <div className="stat-card">
            <h2>Employee</h2>
            <p className="stat-number">48</p>
          </div>
        </div>

        {/* Associate Card */}
        <div className="col-md-3">
          <div className="stat-card">
            <h2>Associate</h2>
            <p className="stat-number">100</p>
          </div>
        </div>

        {/* Athelete Card */}
        <div className="col-md-3">
          <div className="stat-card">
            <h2>Athelite</h2>
            <p className="stat-number">1800</p>
          </div>
        </div>

        
      </div>
    </div>
  </div>
}