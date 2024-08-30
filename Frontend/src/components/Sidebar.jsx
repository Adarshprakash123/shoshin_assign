import React from 'react';
import { FaHome, FaUserTie, FaCalendarAlt, FaUsers, FaCog, FaHeadset } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src="https://i.postimg.cc/FzpDsyV7/image.png" alt="Vasitum Logo" className='ok' />
        <span className='ok1'>Vasitum</span>
      </div>
      <ul className="sidebar__menu">
        <li className="sidebar__item">
          <FaHome className="sidebar__icon" />
          <span>Dashboard</span>
        </li>
        <li className="sidebar__item">
          <FaUserTie className="sidebar__icon" />
          <span>Recruitment</span>
        </li>
        <li className="sidebar__item">
          <FaCalendarAlt className="sidebar__icon" />
          <span>Schedule</span>
        </li>
        <li className="sidebar__item">
          <FaUsers className="sidebar__icon" />
          <span>Employee</span>
        </li>
        <li className="sidebar__item">
          <FaCog className="sidebar__icon" />
          <span>Department</span>
        </li>
        <li className="sidebar__item">
          <FaHeadset className="sidebar__icon" />
          <span>Support</span>
        </li>
        <li className="sidebar__item">
          <FaCog className="sidebar__icon" />
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
