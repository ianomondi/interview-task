import React, { useState } from "react";
import Search2Icon from "../../Assets/Icons/Search2Icon";
import DownIcon from "../../Assets/Icons/DownIcon";
import ThrieDot from "../../Assets/Icons/ThrieDot";
import ArrowLeft from "../../Assets/Icons/ArrowLeft";
import ArrowRight from "../../Assets/Icons/ArrowRight";
import DropdownIcon from "../../Assets/Icons/DropdownIcon";

const Requests = () => {
  // State to track the selected values for each dropdown
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const [selectedStatus, setSelectedStatus] = useState("Status");
  const [selectedLocation, setSelectedLocation] = useState("Location");
  const [selectedPerPage, setSelectedPerPage] = useState("5");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  const handlePerClick = (per) => {
    setSelectedPerPage(per);
  };

  return (
    <div className="request-con">
      <div className="request-title d-flex align-items-center justify-content-between">
        <div className="fs-20 fw-bold">Requests</div>
        <form action="">
          <button type="submit">
            <Search2Icon />
          </button>
          <input type="search" name="search" placeholder="Search" />
        </form>
      </div>
      <div className="category-tag">
        <div className="dropdown select-dropdown">
          <button className="select-title" data-bs-toggle="dropdown">
            <span className="fs-14 d-flex align-items-center gap-2">
              {selectedCategory} <DownIcon />
            </span>
          </button>
          <ul className="dropdown-menu select-menu">
            <li onClick={() => handleCategoryClick("Category")}>Category</li>
            <li onClick={() => handleCategoryClick("Category2")}>Category2</li>
          </ul>
        </div>
        <div className="dropdown select-dropdown">
          <button className="select-title" data-bs-toggle="dropdown">
            <span className="fs-14 d-flex align-items-center gap-2">
              {selectedStatus} <DownIcon />
            </span>
          </button>
          <ul className="dropdown-menu select-menu">
            <li onClick={() => handleStatusClick("Status")}>Status</li>
            <li onClick={() => handleStatusClick("Status2")}>Status2</li>
          </ul>
        </div>
        <div className="dropdown select-dropdown">
          <button className="select-title" data-bs-toggle="dropdown">
            <span className="fs-14 d-flex align-items-center gap-2">
              {selectedLocation} <DownIcon />
            </span>
          </button>
          <ul className="dropdown-menu select-menu">
            <li onClick={() => handleLocationClick("Location")}>Location</li>
            <li onClick={() => handleLocationClick("Location2")}>Location2</li>
          </ul>
        </div>
      </div>
      <div className="table-responsive request-table">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Reference</th>
              <th scope="col">Status</th>
              <th scope="col">Priority</th>
              <th scope="col">Location</th>
              <th scope="col">Submitted By</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr key={data.id}>
                <td>
                  <span>{data.reference[0]?.code}</span>
                  <span>{data.reference[1]?.title}</span>
                </td>
                <td>{data.status}</td>
                <td>{data.priority}</td>
                <td>{data.location}</td>
                <td>{data.submitted}</td>
                <td>
                  <button>
                    <ThrieDot />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-pagination">
        <div className="pagination-row">
          Rows per page:
          <div className="dropdown select-dropdown">
            <button className="select-title" data-bs-toggle="dropdown">
              <span className="fs-14 d-flex align-items-center gap-2">
                {selectedPerPage} <DropdownIcon />
              </span>
            </button>
            <ul className="dropdown-menu select-menu">
              <li onClick={() => handlePerClick("5")}>5</li>
              <li onClick={() => handlePerClick("10")}>10</li>
              <li onClick={() => handlePerClick("15")}>15</li>
              <li onClick={() => handlePerClick("20")}>20</li>
            </ul>
          </div>
        </div>
        <div className="pagination-number">
          <div className="fs-14">1-3 of 6</div>
          <div className="arrow-btn">
            <button>
              <ArrowLeft />
            </button>
            <button>
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requests;

const tableData = [
  {
    id: 0,
    reference: [{ code: "ACJ3123" }, { title: "Leaking Pipes" }],
    status: "Pending",
    priority: "",
    location: "Gigiri",
    submitted: "Mr Thomas",
  },
  {
    id: 1,
    reference: [{ code: "ACJ3123" }, { title: "Leaking Pipes" }],
    status: "Pending",
    priority: "",
    location: "Gigiri",
    submitted: "Mr Thomas",
  },
  {
    id: 2,
    reference: [{ code: "ACJ3123" }, { title: "Leaking Pipes" }],
    status: "Pending",
    priority: "",
    location: "Gigiri",
    submitted: "Mr Thomas",
  },
];
