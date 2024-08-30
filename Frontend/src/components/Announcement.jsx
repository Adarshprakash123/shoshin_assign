import React from 'react';
import './Announcement.css';

const Announcement = () => {
  return (
    <div className="announcement">
      <h2>Announcement</h2>
      <ul>
        <li>Outing schedule for every department</li>
        <li>Meeting HR Department</li>
        <li>IT Department needs more talents for UX/UI Designer position</li>
      </ul>
      <a href="/">See All Announcement</a>
    </div>
  );
};

export default Announcement;
