import React from "react";
import DownIcon from "../../../Assets/Icons/DownIcon";
import { Link } from "react-router-dom";
import AddIcon from "../../../Assets/Icons/AddIcon";
import exportToExcel from "../../../utls/exportToExcel";

const WorkHeader = ({ workTable }) => {
  return (
    <div className="work-header">
      <div className="fs-20"> Work Orders</div>
      <div className="dropdown select-dropdown">
        <button className="select-title" data-bs-toggle="dropdown">
          <span className="fs-15 d-flex align-items-center gap-2">
            Actions <DownIcon />
          </span>
        </button>
        <ul className="dropdown-menu dropdown-menu-end select-menu">
          <li>
            <Link to="/work-orders/add-work-order">
              <AddIcon /> New Work Order
            </Link>
          </li>
          <li onClick={() => exportToExcel(workTable, "work-orders")}>
            <Link to="#">
              <AddIcon /> Export to Excel
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkHeader;
