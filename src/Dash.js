import React from 'react';
import './Dash.css';

const Dash = () => {
  return (
    <div className="dash-container">
      <nav className="dash-nav">
        <div className="dash-navbar">
          <div className="dash-logo">
            <h1>jobs</h1>
          </div>
          <ul className="dash-ul">
            <li className="dash-li">
              <a href="#" className="dash-nav-item">
                <i className="fas fa-user"></i>
                <span className="nav-item">Dashboard</span>
              </a>
            </li>
            <li className="dash-li">
              <a href="#" className="dash-nav-item">
                <i className="fas fa-chart-bar"></i>
                <span className="nav-item">Inventory Tracking</span>
              </a>
            </li>
            <li className="dash-li">
              <a href="#" className="dash-nav-item">
                <i className="fas fa-tasks"></i>
                <span className="nav-item">Alerts and Notifications</span>
              </a>
            </li>
            <li className="dash-li">
              <a href="#" className="dash-nav-item">
                <i className="fab fa-dochub"></i>
                <span className="nav-item">Product Information</span>
              </a>
            </li>
            <li className="dash-li">
              <a href="#" className="dash-nav-item">
                <i className="fas fa-cog"></i>
                <span className="nav-item">Setting</span>
              </a>
            </li>
            <li className="dash-li">
              <a href="#" className="dash-nav-item">
                <i className="fas fa-question-circle"></i>
                <span className="nav-item">Help</span>
              </a>
            </li>
            <li className="dash-li">
              <a href="#" className="logout">
                <i className="fas fa-sign-out-alt"></i>
                <span className="nav-item">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="dash-main">
        <div className="dash-main-top">
          <p>Summary</p>
        </div>
        <div className="dash-main-body">
          <h1>Welcome to Stock Management System</h1>
        
          <div className="dash-search-bar">
            <input type="search" placeholder="Search here..." />
            <select name="" id="">
              <option>Category</option>
              <option>Add Stock</option>
              <option>Delete Stock</option>
              <option>Update Stock</option>
            </select>
            <select className="filter">
              <option>Filter</option>
            </select>
          </div>
          <div className="dash-job-card">
            <div className="dash-job-details">
              <div className="dash-img">
                <i className="fab fa-google-drive"></i>
              </div>
              <div className="dash-text">
                <h2>Sales Record</h2>
              </div>
            </div>
            <div className="dash-job-salary">
             
            </div>
          </div>
          
          <div className="dash-job-card">
            <div className="dash-job-details">
              <div className="dash-img">
                <i className="fab fa-google"></i>
              </div>
              <div className="dash-text">
                <h2>Items</h2>
              </div>
            </div>
            <div className="dash-job-salary">
             
            </div>
          </div>

          <div className="dash-job-card">
            <div className="dash-job-details">
              <div className="dash-img">
                <i className="fab fa-facebook"></i>
              </div>
              <div className="dash-text">
                <h2>Alerts</h2>
              </div>
            </div>
            <div className="dash-job-salary">
              
            </div>
          </div>

          <div className="dash-job-card">
            <div className="dash-job-details">
              <div className="dash-img">
                <i className="fab fa-git-alt"></i>
              </div>
              <div className="dash-text">
                <h2>Suppliers</h2>
              </div>
            </div>
            <div className="dash-job-salary">
             
            </div>
          </div>

          <div className="dash-job-card">
            <div className="dash-job-details">
              <div className="dash-img">
                <i className="fab fa-youtube"></i>
              </div>
              <div className="dash-text">
                <h2>Users</h2>
              </div>
            </div>
            <div className="dash-job-salary">
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dash;
