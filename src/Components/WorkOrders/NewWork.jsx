/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import DownIcon from "../../Assets/Icons/DownIcon";
import SearchIcon from "../../Assets/Icons/SearchIcon";
import { HiDotsVertical } from "react-icons/hi";
import ViewIcon2 from "../../Assets/Icons/ViewIcon2";
import EditIcon2 from "../../Assets/Icons/EditIcon2";
import DelateIcon2 from "../../Assets/Icons/DelateIcon2";
import ArrowLeft from "../../Assets/Icons/ArrowLeft";
import ArrowRight from "../../Assets/Icons/ArrowRight";
import DropdownIcon from "../../Assets/Icons/DropdownIcon";
import getUniqueProperty from "../../utls/getUniqueProprty";
import filterViaProperty from "../../utls/filterViaProperty";
import searchAllProperty from "../../utls/searchAllProperty";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import DeleteModal from "./Modal/DeleteModal";

const NewWork = () => {
  const [assetCategory, setAssetCategories] = useState(""); //Asset Select
  const [selectedLocation, setSelectedLocation] = useState(""); //Location Select
  const [selectedPriority, setSelectedPriority] = useState(""); //Priority Select
  const [type, setType] = useState(""); //Type Select
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1); //for pagination
  const [RequestsPerPage, setRequestsPerPage] = useState(10); //for pagination
  const [search, setSearch] = useState(""); //for search
  const [RequestsShow, setRequestsShow] = useState(false); //for modal

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const ExampleCustomInput = ({ value, onClick }) => (
    <button className="example-custom-input" onClick={onClick}>
      {value ? value : ""} <DownIcon />
    </button>
  );

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder((prevSortOrder) =>
        prevSortOrder === "asc" ? "desc" : "asc"
      );
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const sortedRequestsData = RequestsData.sort((a, b) => {
    if (sortBy) {
      const valueA = a[sortBy];
      const valueB = b[sortBy];
      return sortOrder === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }
    return 0;
  });

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };
  const handlePriorityClick = (priority) => {
    setSelectedPriority(priority);
  };
  const handleTypeClick = (type) => {
    setType(type);
  };

  const handleAssetCategoryClick = (asset) => {
    setAssetCategories(asset);
  };

  //get unique category & filter by category
  const category = getUniqueProperty(sortedRequestsData, "category");
  const filterByCategory = filterViaProperty(
    sortedRequestsData,
    assetCategory,
    "category"
  );

  //get request locations & filter by location
  const locations = getUniqueProperty(filterByCategory, "location");
  const filterByLocation = filterViaProperty(
    filterByCategory,
    selectedLocation,
    "location"
  );

  //get priority & filter by priority
  const priority = getUniqueProperty(filterByLocation, "priority");
  const filterByPriority = filterViaProperty(
    filterByLocation,
    selectedPriority,
    "priority"
  );
  //Filter by type
  const filterByType = filterViaProperty(filterByPriority, type, "rejected");

  //filter via start date if date is not null
  const filteredByStartDate = startDate
    ? filterByType.filter((item) => {
        const date = new Date(item.submitDate);
        return date.getTime() >= startDate.getTime();
      })
    : filterByType;

  //filter via end date if date is not null
  const filteredByEndDate = endDate
    ? filteredByStartDate.filter((item) => {
        const date = new Date(item.submitDate);
        return date.getTime() <= endDate.getTime();
      })
    : filteredByStartDate;

  // filter via search
  const filteredBySearch = searchAllProperty(filteredByEndDate, search);

  //for pagination
  const indexOfLastRequests = currentPage * RequestsPerPage;
  const indexOfFirstRequests = indexOfLastRequests - RequestsPerPage;
  const currentRequests = filteredBySearch.slice(
    indexOfFirstRequests,
    indexOfLastRequests
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredBySearch.length / RequestsPerPage);

  // Update current page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className="selection-grope">
        <div className="dropdown select-dropdown">
          <button className="select-title" data-bs-toggle="dropdown">
            <span className="fs-13">Asset Category</span>
            <span className="fs-14 d-flex align-items-center gap-1">
              {assetCategory} <DownIcon />
            </span>
          </button>
          <ul className="dropdown-menu select-menu">
            <li onClick={() => handleAssetCategoryClick("")}>
              <b>All</b>
            </li>
            <hr />
            <div className="dropdown-item-content">
              {category.map((category, i) => (
                <li key={i} onClick={() => handleAssetCategoryClick(category)}>
                  {category}
                </li>
              ))}
            </div>
          </ul>
        </div>
        <div className="dropdown select-dropdown">
          <button className="select-title" data-bs-toggle="dropdown">
            <span className="fs-13">Location</span>
            <span className="fs-14 d-flex align-items-center gap-1">
              {selectedLocation} <DownIcon />
            </span>
          </button>
          <ul className="dropdown-menu select-menu">
            <li onClick={() => handleLocationClick("")}>
              <b>All</b>
            </li>
            <hr />
            <div className="dropdown-item-content">
              {locations.map((location, i) => (
                <li key={i} onClick={() => handleLocationClick(location)}>
                  {location}
                </li>
              ))}
            </div>
          </ul>
        </div>
        <div className="dropdown select-dropdown">
          <button className="select-title" data-bs-toggle="dropdown">
            <span className="fs-13">Priority</span>
            <span className="fs-14 d-flex align-items-center gap-1">
              {selectedPriority} <DownIcon />
            </span>
          </button>
          <ul className="dropdown-menu select-menu">
            <li onClick={() => handlePriorityClick("")}>
              <b>All</b>
            </li>
            <hr />
            <div className="dropdown-item-content">
              {priority.map((priority, i) => (
                <li key={i} onClick={() => handlePriorityClick(priority)}>
                  {priority}
                </li>
              ))}
            </div>
          </ul>
        </div>

        {/* Type Filter */}

        <div className="dropdown select-dropdown">
          <button className="select-title" data-bs-toggle="dropdown">
            <span className="fs-13">Type</span>
            <span className="fs-14 d-flex align-items-center gap-1">
              {type} <DownIcon />
            </span>
          </button>
          <ul className="dropdown-menu select-menu">
            <li onClick={() => handleTypeClick("")}>
              <b>All</b>
            </li>
            <li onClick={() => handleTypeClick("Rejected")}>
              <b>Rejected</b>
            </li>
          </ul>
        </div>

        <div className="select-dropdown">
          <div className="select-title">
            <div className="fs-13">Date From:</div>
            <div className="format-date">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={<ExampleCustomInput />}
              />
            </div>
          </div>
        </div>
        <div className="select-dropdown">
          <div className="select-title">
            <div className="fs-13">Date To:</div>
            <div className="format-date">
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                customInput={<ExampleCustomInput />}
              />
            </div>
          </div>
        </div>
        {/* <div className="dropdown select-dropdown">
          <button className="select-title" data-bs-toggle="dropdown">
            <span className="fs-13">Assigned To</span>
            <span className="fs-14 d-flex align-items-center gap-1">
              {selectedAssigned} <DownIcon />
            </span>
          </button>
          <ul className="dropdown-menu select-menu">
            <li onClick={() => handleAssignedClick("")}>
              <b>All</b>
            </li>
            <hr />
            {assignedTo.map((assigned, i) => (
              <li key={i} onClick={() => handleAssignedClick(assigned)}>
                {assigned}
              </li>
            ))}
          </ul>
        </div> */}

        <form action="" className="search__box">
          <button disabled type="submit">
            <SearchIcon />
          </button>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search"
          />
        </form>
      </div>
      <div className="inspection-tables-content">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th
                  className={
                    sortBy === "ref" ? `table-sort-${sortOrder}` : "table-sort"
                  }
                  onClick={() => handleSort("ref")}
                >
                  <span>Ref</span>
                </th>
                <th
                  className={
                    sortBy === "asset"
                      ? `table-sort-${sortOrder}`
                      : "table-sort"
                  }
                  onClick={() => handleSort("asset")}
                >
                  <span>Asset</span>
                </th>
                <th
                  className={
                    sortBy === "location"
                      ? `table-sort-${sortOrder}`
                      : "table-sort"
                  }
                  onClick={() => handleSort("location")}
                >
                  <span>Location</span>
                </th>
                <th>Title</th>
                <th
                  className={
                    sortBy === "priority"
                      ? `table-sort-${sortOrder}`
                      : "table-sort"
                  }
                  onClick={() => handleSort("priority")}
                >
                  <span>Priority</span>
                </th>
                <th
                  className={
                    sortBy === "assignTo"
                      ? `table-sort-${sortOrder}`
                      : "table-sort"
                  }
                  onClick={() => handleSort("assignTo")}
                >
                  <span>Assigned To</span>
                </th>
                <th
                  className={
                    sortBy === "submitDate"
                      ? `table-sort-${sortOrder}`
                      : "table-sort"
                  }
                  onClick={() => handleSort("submitDate")}
                >
                  <span>Date Submitted</span>
                </th>
                <th className="table-th"></th>
              </tr>
            </thead>
            <tbody>
              {currentRequests.map((item, i) => (
                <tr key={i}>
                  <td>{item.ref}</td>
                  <td>{item.asset}</td>
                  <td>{item.location}</td>
                  <td>{item.title}</td>
                  <td>{item.priority}</td>
                  <td>{item.assignTo}</td>
                  <td>{item.submitDate}</td>
                  <td>
                    <div className="table-last-btn d-flex align-items-center justify-content-end">
                      {item.rejected && (
                        <span
                          style={{
                            background: "#FFBBBD",
                            color: "#F40",
                            fontSize: "12px",
                            fontWeight: "600",
                            padding: "5px 10px",
                            display: "inline-block",
                            borderRadius: "15px",
                            marginRight: "7px",
                          }}
                        >
                          {item.rejected}
                        </span>
                      )}
                      <div className="dropdown table-edit-dropdown">
                        <button className="" data-bs-toggle="dropdown">
                          <HiDotsVertical />
                        </button>

                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/work-orders/work-view"
                            >
                              <ViewIcon2 /> View
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/work-orders/add-work-order"
                              className="dropdown-item"
                            >
                              <EditIcon2 /> Edit
                            </Link>
                          </li>
                          <li>
                            <button
                              className="dropdown-item"
                              onClick={() => setRequestsShow(true)}
                            >
                              <DelateIcon2 /> Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-pagination pagination-center">
          <div className="pagination-row">
            Rows per page:
            <div className="dropdown select-dropdown">
              <button className="select-title" data-bs-toggle="dropdown">
                <span className="fs-14 d-flex align-items-center gap-2">
                  {RequestsPerPage} <DropdownIcon />
                </span>
              </button>
              <ul
                className="dropdown-menu select-menu"
                style={{ minWidth: "25px" }}
              >
                <li onClick={() => setRequestsPerPage(5)}>5</li>
                <li onClick={() => setRequestsPerPage(10)}>10</li>
                <li onClick={() => setRequestsPerPage(15)}>15</li>
                <li onClick={() => setRequestsPerPage(20)}>20</li>
              </ul>
            </div>
          </div>
          <div className="pagination-number">
            <div className="fs-14">
              {currentPage} of {totalPages}
            </div>
            <div className="arrow-btn">
              <button
                onClick={() =>
                  currentPage !== 1 && handlePageChange(currentPage - 1)
                }
              >
                <ArrowLeft />
              </button>
              <button
                onClick={() =>
                  totalPages !== currentPage &&
                  handlePageChange(currentPage + 1)
                }
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <DeleteModal show={RequestsShow} onHide={() => setRequestsShow(false)} />
    </>
  );
};

export default NewWork;

const RequestsData = [
  {
    ref: "CM1000001",
    asset: "Mavoko Pump 1 - 1005",
    location: "Mavoko Station",
    title: "Pump leakage",
    order: "CM10005",
    priority: "Medium",
    assignTo: "Projects/ Cathy",
    submitDate: "01/20/2024",
    rejected: "Rejected",
    category: "category 1",
  },
  {
    ref: "CM1000002",
    asset: "Mavoko Pump 1 - 1006",
    location: "Mavoko Station",
    title: "Pump overdisp..",
    order: "NA",
    priority: "High",
    assignTo: "IT/ John",
    submitDate: "01/20/2024",
    category: "category 2",
  },
  {
    ref: "CM1000003",
    asset: "Mavoko Pump 1 - 1007",
    location: "Mavoko Station",
    title: "Faulty screen",
    order: "NA",
    priority: "Medium",
    assignTo: "IT/ Vivian",
    submitDate: "01/01/2024",
    category: "category 3",
  },
  {
    ref: "CM1000004",
    asset: "Mavoko Pump 1 - 1008",
    location: "Kisaju Station",
    title: "Pump leakage",
    order: "NA",
    priority: "High",
    assignTo: "Projects",
    submitDate: "01/02/2024",
    category: "category 4",
  },
  {
    ref: "CM1000005",
    asset: "Mavoko Pump 1 - 1009",
    location: "Kisaju Station",
    title: "Pump leakage",
    order: "CM10010",
    priority: "High",
    assignTo: "Engineering",
    submitDate: "01/11/2024",
    category: "category 5",
  },
  {
    ref: "CM1000006",
    asset: "Mavoko Pump 1 - 1010",
    location: "Kisaju Station",
    title: "Faulty meter",
    order: "CM10011",
    priority: "Medium",
    assignTo: "Engineering",
    submitDate: "01/11/2024",
    rejected: "Rejected",
    category: "category 6",
  },
  {
    ref: "CM1000007",
    asset: "Mavoko Pump 1 - 1011",
    location: "Kisaju Station",
    title: "Faulty submersi..",
    order: "NA",
    priority: "Medium",
    assignTo: "Engineering",
    submitDate: "01/05/2024",
    rejected: "Rejected",
    category: "category 2",
  },
  {
    ref: "CM1000008",
    asset: "Mavoko Pump 1 - 1012",
    location: "Mavoko Station",
    title: "Pump Calibration",
    order: "NA",
    priority: "Low",
    assignTo: "M Contractors",
    submitDate: "01/13/2024",
    category: "category 2",
  },
  {
    ref: "CM1000009",
    asset: "Mavoko Pump 1 - 1013",
    location: "Kisaju Station",
    title: "Pump Calibration",
    order: "NA",
    priority: "Low",
    assignTo: "M Contractors",
    submitDate: "01/11/2024",
    category: "category 3",
  },
];
