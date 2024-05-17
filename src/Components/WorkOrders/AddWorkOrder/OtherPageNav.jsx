import React from "react";
import { Link } from "react-router-dom";

const OtherPageNav = () => {
  return (
    <div className="other-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/work-orders">Work Orders</Link>
        </li>
        <li>
          <Link>Create Work Order</Link>
        </li>
      </ul>
    </div>
  );
};

export default OtherPageNav;
