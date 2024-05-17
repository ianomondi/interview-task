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

const UpcomingWork = () => {
  const [assetCategories, setAssetCategories] = useState(""); //Asset Select
  const [selectedLocation, setSelectedLocation] = useState(""); //Location Select
  const [selectedPriority, setSelectedPriority] = useState(""); //Priority Select
  const [selectedAssigned, setSelectedAssigned] = useState(""); //Assigned Select
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

  const handleAssignedClick = (Assigned) => {
    setSelectedAssigned(Assigned);
  };

  const handleAssetCategoryClick = (asset) => {
    setAssetCategories(asset);
  };
  //get unique asset category & filter by asset category
  const assetCategory = getUniqueProperty(sortedRequestsData, "category");
  const filterByAsset = filterViaProperty(
    sortedRequestsData,
    assetCategories,
    "category"
  );

  //get request locations & filter by location
  const locations = getUniqueProperty(filterByAsset, "location");
  const filterByLocation = filterViaProperty(
    filterByAsset,
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

  //filter via start date if date is not null
  const filteredByStartDate = startDate
    ? filterByPriority.filter((item) => {
        const date = new Date(item.createdDate);
        return date.getTime() >= startDate.getTime();
      })
    : filterByPriority;

  //filter via end date if date is not null
  const filteredByEndDate = endDate
    ? filteredByStartDate.filter((item) => {
        const date = new Date(item.createdDate);
        return date.getTime() <= endDate.getTime();
      })
    : filteredByStartDate;
  // get unique Assigned by & filter by Assigned by
  const assignedTo = getUniqueProperty(filteredByEndDate, "assignTo");
  const filteredByAssigned = filterViaProperty(
    filteredByEndDate,
    selectedAssigned,
    "assignTo"
  );

  // filter via search
  const filteredBySearch = searchAllProperty(filteredByAssigned, search);

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
              {assetCategories} <DownIcon />
            </span>
          </button>
          <ul className="dropdown-menu select-menu">
            <li onClick={() => handleAssetCategoryClick("")}>
              <b>All</b>
            </li>
            <hr />
            <div className="dropdown-item-content">
              {assetCategory.map((asset, i) => (
                <li key={i} onClick={() => handleAssetCategoryClick(asset)}>
                  {asset}
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

        <div className="select-dropdown">
          <div className="select-title">
            <div className="fs-13">Created From:</div>
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
            <div className="fs-13">Created To:</div>
            <div className="format-date">
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                customInput={<ExampleCustomInput />}
              />
            </div>
          </div>
        </div>
        <div className="dropdown select-dropdown">
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
            <div className="dropdown-item-content">
              {assignedTo.map((assigned, i) => (
                <li key={i} onClick={() => handleAssignedClick(assigned)}>
                  {assigned}
                </li>
              ))}
            </div>
          </ul>
        </div>

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
                    sortBy === "dueDate"
                      ? `table-sort-${sortOrder}`
                      : "table-sort"
                  }
                  onClick={() => handleSort("dueDate")}
                >
                  <span>Due Date</span>
                </th>
                <th
                  className={
                    sortBy === "createdDate"
                      ? `table-sort-${sortOrder}`
                      : "table-sort"
                  }
                  onClick={() => handleSort("createdDate")}
                >
                  <span>Date Created</span>
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
                  <td>{item.dueDate}</td>
                  <td>{item.createdDate}</td>
                  <td>
                    <div className="table-last-btn">
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

export default UpcomingWork;

const RequestsData = [
  {
    ref: "CM1000001",
    asset: "Mavoko Pump 1 - 1005",
    location: "Mavoko Station",
    title: "Pump leakage",
    order: "CM10005",
    priority: "Medium",
    assignTo: "Projects",
    dueDate: "01/20/2024",
    createdDate: "01/20/2024",
    category: "category 1",
  },
  {
    ref: "CM1000002",
    asset: "Mavoko Pump 1 - 1006",
    location: "Mavoko Station",
    title: "Pump overdi..",
    order: "NA",
    priority: "High",
    assignTo: "IT",
    dueDate: "01/20/2024",
    createdDate: "01/20/2024",
    category: "category 1",
  },
  {
    ref: "CM1000003",
    asset: "Mavoko Pump 1 - 1007",
    location: "Mavoko Station",
    title: "Faulty screen",
    order: "NA",
    priority: "Medium",
    assignTo: "IT",
    dueDate: "01/01/2024",
    createdDate: "01/01/2024",
    category: "category 1",
  },
  {
    ref: "CM1000004",
    asset: "Mavoko Pump 1 - 1008",
    location: "Kisaju Station",
    title: "Pump leakage",
    order: "NA",
    priority: "High",
    assignTo: "Projects",
    dueDate: "01/02/2024",
    createdDate: "01/02/2024",
    category: "category 2",
  },
  {
    ref: "CM1000005",
    asset: "Mavoko Pump 1 - 1009",
    location: "Kisaju Station",
    title: "Pump leakage",
    order: "CM10010",
    priority: "High",
    assignTo: "Engineering",
    dueDate: "01/11/2024",
    createdDate: "01/11/2024",
    category: "category 2",
  },
  {
    ref: "CM1000006",
    asset: "Mavoko Pump 1 - 1010",
    location: "Kisaju Station",
    title: "Faulty meter",
    order: "CM10011",
    priority: "Medium",
    assignTo: "Engineering",
    dueDate: "01/11/2024",
    createdDate: "01/11/2024",
    category: "category 2",
  },
  {
    ref: "CM1000007",
    asset: "Mavoko Pump 1 - 1011",
    location: "Kisaju Station",
    title: "Faulty subm..",
    order: "NA",
    priority: "Medium",
    assignTo: "Engineering",
    dueDate: "01/05/2024",
    createdDate: "01/05/2024",
    category: "category 3",
  },
  {
    ref: "CM1000008",
    asset: "Mavoko Pump 1 - 1012",
    location: "Mavoko Station",
    title: "Pump Calib..",
    order: "NA",
    priority: "Low",
    assignTo: "M Contractors",
    dueDate: "01/13/2024",
    createdDate: "01/13/2024",
    category: "category 3",
  },
  {
    ref: "CM1000009",
    asset: "Mavoko Pump 1 - 1013",
    location: "Kisaju Station",
    title: "Pump Calib..",
    order: "NA",
    priority: "Low",
    assignTo: "M Contractors",
    dueDate: "01/11/2024",
    createdDate: "01/11/2024",
    category: "category 3",
  },
];
