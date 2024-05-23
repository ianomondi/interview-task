import React from "react";
import "../Components/WorkOrders/WorkOrders.scss";
import WorkHeader from "../Components/WorkOrders/AddWorkOrder/WorkHeader";
import "react-datepicker/dist/react-datepicker.css";
import { Link, NavLink, Outlet } from "react-router-dom";

const WorkOrders = () => {
  return (
    <div className="work-orders-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <WorkHeader workTable={workOrders} />
          </div>
          <div className="col-lg-12">
            <div className="other-nav">
              <ul>
                <li>
                  <Link to="/">Homes</Link>
                </li>
                <li>
                  <Link to="">Work Orders</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="inspection-cate">
              <div className="work-table-nav">
                <NavLink to="/work-orders" end>
                  New Work
                </NavLink>
                <NavLink to="/work-orders/ongoing-work">Ongoing Work</NavLink>
                <NavLink to="/work-orders/pending-closure">
                  Pending Closure
                </NavLink>
                <NavLink to="/work-orders/closed-work">Closed Work</NavLink>
                <NavLink to="/work-orders/upcoming-work">Upcoming Work</NavLink>
              </div>
              <div className="work-table-tables">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOrders;

const workOrders = [
  {
    ref: "CM1000001",
    asset: "A Mavoko Pump 1 - 1005",
    location: "Mavoko Stations",
    title: "Pump overdispensing",
    order: "CM10005",
    priority: "Medium",
    assignTo: "James Kungu",
    submitDate: "01/20/2024",
    rejected: "Rejected",
  },
  {
    ref: "CM1000002",
    asset: "Z Mavoko Pump 1 - 1006",
    location: "Mavoko Station",
    title: "Faulty screen",
    order: "NA",
    priority: "High",
    assignTo: "Abel Mutua",
    submitDate: "01/20/2024",
  },
  {
    ref: "CM1000003",
    asset: "C Mavoko Pump 1 - 1007",
    location: "Mavoko Station",
    title: "Pump leakage",
    order: "NA",
    priority: "Medium",
    assignTo: "James Kungu",
    submitDate: "01/01/2024",
  },
  {
    ref: "CM1000004",
    asset: "Mavoko Pump 1 - 1008",
    location: "Kisaju Station",
    title: "Pump leakage",
    order: "NA",
    priority: "High",
    assignTo: "James Kungu",
    submitDate: "01/02/2024",
  },
  {
    ref: "CM1000005",
    asset: "D Mavoko Pump 1 - 1009",
    location: "Kisaju Station",
    title: "Pump leakage",
    order: "CM10010",
    priority: "High",
    assignTo: "James Kungu",
    submitDate: "01/11/2024",
  },
  {
    ref: "CM1000006",
    asset: "M Mavoko Pump 1 - 1010",
    location: "Kisaju Station",
    title: "Faulty manual meter",
    order: "CM10011",
    priority: "Medium",
    assignTo: "James Kungu",
    submitDate: "01/11/2024",
    rejected: "Rejected",
  },
  {
    ref: "CM1000007",
    asset: "L Mavoko Pump 1 - 1011",
    location: "Kisaju Station",
    title: "Faulty submersible",
    order: "NA",
    priority: "Medium",
    assignTo: "James Kungu",
    submitDate: "01/05/2024",
    rejected: "Rejected",
  },
  {
    ref: "CM1000008",
    asset: "Mavoko Pump 1 - 1012",
    location: "Mavoko Station",
    title: "Calibration overdue",
    order: "NA",
    priority: "Low",
    assignTo: "James Kungu",
    submitDate: "01/13/2024",
  },
  {
    ref: "CM1000009",
    asset: "A Mavoko Pump 1 - 1013",
    location: "Kisaju Station",
    title: "Calibration overdue",
    order: "NA",
    priority: "Low",
    assignTo: "James Kungu",
    submitDate: "01/11/2024",
  },
];
