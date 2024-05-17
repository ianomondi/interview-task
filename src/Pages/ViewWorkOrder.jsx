import React from "react";
import { Link, Outlet } from "react-router-dom";
import ViewWorkSide from "../Components/WorkOrders/ViewWorkOrder/ViewWorkSide"; 
import ViewHeader from "../Components/WorkOrders/ViewWorkOrder/ViewHeader";

const ViewWorkOrder = () => {
  return (
    <div className="work-orders-area f3washroom-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ViewHeader />
          </div>
          <div className="col-lg-12">
            <div className="other-nav">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/work-orders">Work Orders</Link>
                </li>
                <li>
                  <Link> View Work Order</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="order-request-area view-order-content">
              <ViewWorkSide />
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewWorkOrder;
