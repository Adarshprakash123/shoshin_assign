import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard__main">
        <div className="dashboard__left">
          <div className="dashboard__widgets">
            <div className="widget available-positions">
              <h2>Available Positions</h2>
              <p>24</p>
              <span>4 Urgently needed</span>
            </div>
            <div className="widget job-open">
              <h2>Job Open</h2>
              <p>10</p>
              <span>4 Active hiring</span>
            </div>
            <div className="widget new-employees">
              <h2>New Employees</h2>
              <p>24</p>
              <span>4 Department</span>
            </div>
            <div className="widget total-employees with-graph">
              <h2>Total Employees</h2>
              <p>216</p>
              <div className="graph">
                <div className="graph-line"></div>
                <span>+2% Past month</span>
              </div>
            </div>
            <div className="widget talent-request with-graph">
              <h2>Talent Request</h2>
              <p>16</p>
              <div className="graph">
                <div className="graph-line"></div>
                <span>+5% Past month</span>
              </div>
            </div>
          </div>
          <div className="dashboard__announcements">
            <h2>Announcements</h2>
            <p>Outing schedule for every department</p>
            <p>Meeting HR Department</p>
            <p>IT Department needs two more talents for UX/UI Designer position</p>
            <button>See All Announcements</button>
          </div>
        </div>
        <div className="dashboard__right">
          <div className="dashboard__activity">
            <h2>Recently Activity</h2>
            <p>You Posted a New Job</p>
            <span>Today you made 12 Activities</span>
            <button>See All Activity</button>
          </div>
          <div className="dashboard__schedule">
            <h2>Upcoming Schedule</h2>
            <p>Review candidate applications</p>
            <p>Interview with candidates</p>
            <p>Short meeting with product designer from IT Department</p>
            <button>Create a New Schedule</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
