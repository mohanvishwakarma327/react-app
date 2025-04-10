import { useState } from 'react';
import './Navbar.css';

// Navbar Component
const Navbar = () => {
  const [dropdown, setDropdown] = useState("");

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? "" : menu);
  };

  return (
    <nav className="navbar">
      <header className="header">
        <h1>Admin Panel</h1> 
      </header>

      <ul className="navbar-menu">
        {/* Customer Dropdown */}
        <li className="navbar-item" onMouseEnter={() => toggleDropdown('customer')} onMouseLeave={() => toggleDropdown('')}>
          Customer
          {dropdown === 'customer' && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">Add Client</li>
              <li className="dropdown-item">Add Location</li>
            </ul>
          )}
        </li>

        {/* Manage User Dropdown */}
        <li className="navbar-item" onMouseEnter={() => toggleDropdown('manageUser')} onMouseLeave={() => toggleDropdown('')}>
          Manage User
          {dropdown === 'manageUser' && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">Add User</li>
              <li className="dropdown-item">Delete User</li>
              <li className="dropdown-item">Reset User</li>
            </ul>
          )}
        </li>

        {/* Report Dropdown */}
        <li className="navbar-item" onMouseEnter={() => toggleDropdown('report')} onMouseLeave={() => toggleDropdown('')}>
          Report
          {dropdown === 'report' && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">Daily Report</li>
              <li className="dropdown-item">Client Report</li>
            </ul>
          )}
        </li>

        {/* My Account */}
        <li className="navbar-item">My Account</li>
      </ul>
    </nav>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="app-container">
      <Navbar />

      {/* Main Content */}
      <div className="main-content">
        <h2>Welcome to the Admin Panel</h2>
        <p>Here you can manage users, generate reports, and handle customer data.</p>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Admin Panel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
