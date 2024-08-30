import React from 'react';
import './TopBar.css';
import { FaSearch, FaBell, FaEnvelope } from 'react-icons/fa';

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__search">
        <FaSearch />
        <input type="text" placeholder="Search" />
      </div>
      <div className="topbar__icons">
        <FaBell className="topbar__icon" />
        <FaEnvelope className="topbar__icon" />
        <div className="topbar__profile">
          <img src="https://e7.pngegg.com/pngimages/348/800/png-clipart-man-wearing-blue-shirt-illustration-computer-icons-avatar-user-login-avatar-blue-child.png" alt="Profile" className="topbar__profile-img" />
          <span>Admirra John</span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
