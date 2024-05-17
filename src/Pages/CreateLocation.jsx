import React from "react";
import "../Components/Locations/Locations.scss";
import { Link, NavLink, Outlet } from "react-router-dom";

const CreateLocation = () => {
  return (
    <div className="work-orders-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="work-header">
              <div className="fs-20">Create Location</div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="other-nav">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/locations">Locations</Link>
                </li>
                <li>
                  <Link>Create Location</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="order-details-area ">
              <div className="order-nav-content">
                <div className="fs-19 fw-bold">CREATE LOCATION</div>
                <div className="order-nav-lists">
                  <NavLink to="/locations/new-location" end>
                    Location Details
                  </NavLink>
                  <NavLink to="/locations/new-location/summary">
                    Summary
                  </NavLink>
                </div>
              </div>
              <div className="work-order-contents">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateLocation;
