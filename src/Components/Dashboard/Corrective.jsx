import React, { useState } from "react";
import DownIcon from "../../Assets/Icons/DownIcon";

const Corrective = () => {
  // State to track the selected period
  const [selectedPeriod, setSelectedPeriod] = useState("Today");
  const handlePeriodClick = (period) => {
    setSelectedPeriod(period);
  };

  return (
    <div className="corrective-content">
      <div className="fs-19 fw-bold title gray-c">Corrective Maintenance</div>
      <div className="d-flex justify-content-between">
        <div className="fs-32 fw-bold">60</div>
        <div className="dropdown select-dropdown">
          <button className="select-title" data-bs-toggle="dropdown">
            <span className="fs-13 ">Period: </span>
            <span className="fs-14 d-flex align-items-center gap-2">
              {selectedPeriod} <DownIcon />
            </span>
          </button>
          <ul className="dropdown-menu select-menu">
            <li onClick={() => handlePeriodClick("Today")}>Today</li>
            <li onClick={() => handlePeriodClick("Yesterday")}>Yesterday</li>
            <li onClick={() => handlePeriodClick("Last 7 days")}>
              Last 7 days
            </li>
          </ul>
        </div>
      </div>
      <div className="progress-pointe">
        <li>
          <div className="fs-12">New</div>
          <div className="fs-14 fw-bold">12</div>
        </li>
        <li>
          <div className="fs-12">In Progress</div>
          <div className="fs-14 fw-bold">29</div>
        </li>
        <li>
          <div className="fs-12">Closed</div>
          <div className="fs-14 fw-bold">40</div>
        </li>
      </div>
    </div>
  );
};

export default Corrective;
