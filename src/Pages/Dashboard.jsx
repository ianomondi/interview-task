import React from "react";
import "../Components/Dashboard/Dashboard.scss";
import Corrective from "../Components/Dashboard/Corrective";
import Preventive from "../Components/Dashboard/Preventive";
import CostStats from "../Components/Dashboard/CostStats";
import Requests from "../Components/Dashboard/Requests";
import Reminders from "../Components/Dashboard/Reminders";

const Dashboard = () => {
  return (
    <div className="dashboard-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="fs-15 text-white dashboard-title">
              Welcome back, <span className="fw-semibold">Peter</span>
            </div>
          </div>
        </div>
        <div className="row justify-content-center row-gap">
          <div className="col-lg-4 col-md-6">
            <Corrective />
          </div>
          <div className="col-lg-4 col-md-6">
            <Preventive />
          </div>
          <div className="col-lg-4 col-md-6">
            <CostStats />
          </div>
        </div>
        <div className="row row-gap">
          <div className="col-lg-12">
            <div className="request-content">
              <div className="request-item">
                <Requests />
              </div>
              <div className="reminders-item">
                <Reminders />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
