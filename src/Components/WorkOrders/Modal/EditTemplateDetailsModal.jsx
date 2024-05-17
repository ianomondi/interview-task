import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import SearchIcon from "../../../Assets/Icons/SearchIcon";

const EditTemplateDetailsModal = (props) => {
  const [selectTeam, setSelectTeam] = useState("Pump Maintenance");
  const [selectWorker, setSelectWorker] = useState("Pumps & Dispensers");
  const [selectedPriority, setSelectedPriority] = useState("High");
  const [selectedday, setselectedday] = useState("Months");
  const [daySearch, setdaySearch] = useState("");

  const handlePriorityClick = (priority) => {
    setSelectedPriority(priority);
  };

  //demo data
  const catagoryWork = [
    { name: "Pump Maintenance  " },
    { name: "Pump" },
    { name: "Maintenance" },
    { name: "Location" },
    { name: "Places" },
  ];
  const assetCategory = [
    { name: "Pumps & Dispensers  " },
    { name: "Pumps  " },
    { name: "Pumps" },
    { name: "Location" },
    { name: "Places" },
  ];

  const handleSelect = (eventKey) => {
    setselectedday(eventKey);
    setdaySearch("");
  };
  //Dummy and asset data
  const dayData = [
    { name: "Days" },
    { name: "Weeks" },
    { name: "Months" },
    { name: "Years" },
  ];
  const filteredDayData = dayData.filter((item) => {
    return item.name.toLowerCase().includes(daySearch.toLowerCase());
  });

  //get search input
  const [selectTeamSearch, setSelectTeamSearch] = useState("");
  const [selectWorkerSearch, setSelectWorkerSearch] = useState("");

  //filter via search input
  const filtercatagoryWork = catagoryWork.filter((item) =>
    item.name.toLowerCase().includes(selectTeamSearch.toLowerCase())
  );
  const filterassetCategory = assetCategory.filter((item) =>
    item.name.toLowerCase().includes(selectWorkerSearch.toLowerCase())
  );

  //handle select
  const handleSelectTeam = (eventKey) => {
    setSelectTeam(eventKey);
    setSelectTeamSearch("");
  };
  const handleSelectWorker = (eventKey) => {
    setSelectWorker(eventKey);
    setSelectWorkerSearch("");
  };

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="medium-modal modal-size-780"
    >
      <Modal.Body style={{ padding: "28px 30px" }}>
        <div className="delate-content">
          <div className="d-md-flex align-items-center gap-4">
            <span className="fs-16 fw-bold">Edit Template Detailsk</span>
            <div className="fs-14 pt-2 pt-md-0" style={{ color: "#72777A" }}>
              Edit the template details
            </div>
          </div>
          <div className="mt-4 pt-2 row row-gap-4 modal-forms-content">
            <div className="col-md-12">
              <label className="fw-medium pb-2">Template Name</label>
              <input
                className="modal-input-box"
                type="text"
                style={{
                  background: "#F1EFEF",
                  width: "100%",
                  border: "0",
                  height: "50px",
                  borderRadius: "5px",
                  padding: "0 15px",
                }}
                placeholder=""
                value="Pump calibration template"
              />
            </div>
            <div className="col-md-12">
              <label className="fw-medium pb-2">Description</label>
              <textarea
                className="modal-input-box"
                type="text"
                style={{
                  background: "#F1EFEF",
                  width: "100%",
                  border: "0",
                  height: "90px",
                  borderRadius: "5px",
                  padding: "15px 15px",
                }}
                placeholder=""
                value="Template to be used in setting up pump calibration preventive maintenance work"
              />
            </div>
            <div className="col-md-6">
              <label className="fw-medium pb-2">Category of Work</label>
              <Dropdown className="select__form" onSelect={handleSelectTeam}>
                <Dropdown.Toggle
                  className={`select-title ${
                    selectTeam !== "Pump Maintenanc" ? "selected" : ""
                  }`}
                  style={{ height: "50px" }}
                >
                  {selectTeam}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <form className="dropdown-search">
                    <button disabled>
                      <SearchIcon />
                    </button>
                    <input
                      onChange={(e) => setSelectTeamSearch(e.target.value)}
                      value={selectTeamSearch}
                      type="text"
                      placeholder="Search"
                    />
                  </form>
                  <div className="dropdown-item-content">
                    {filtercatagoryWork.map((item, index) => (
                      <Dropdown.Item key={index} eventKey={item.name}>
                        {item.name}
                      </Dropdown.Item>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col-md-6">
              <label className="fw-medium pb-2">Asset Category</label>
              <Dropdown className="select__form" onSelect={handleSelectWorker}>
                <Dropdown.Toggle
                  className={`select-title ${
                    selectWorker !== "Pumps & Dispenser" ? "selected" : ""
                  }`}
                  style={{ height: "50px" }}
                >
                  {selectWorker}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <form className="dropdown-search">
                    <button disabled>
                      <SearchIcon />
                    </button>
                    <input
                      onChange={(e) => setSelectWorkerSearch(e.target.value)}
                      type="text"
                      placeholder="Search"
                      value={selectWorkerSearch}
                    />
                  </form>
                  <div className="dropdown-item-content">
                    {filterassetCategory.map((item, index) => (
                      <Dropdown.Item key={index} eventKey={item.name}>
                        {item.name}
                      </Dropdown.Item>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col-lg-6">
              <label className="fw-medium pb-2">Work recurs every</label>
              <div className="d-flex justify-content-between gap-3 w-100">
                <input
                  className="modal-input-box"
                  type="text"
                  style={{
                    background: "#F1EFEF",
                    width: "100px",
                    border: "0",
                    height: "50px",
                    borderRadius: "5px",
                    padding: "0 15px",
                  }}
                  placeholder=""
                  value="6"
                />
                <Dropdown
                  className="select__form w-100"
                  onSelect={handleSelect}
                >
                  <Dropdown.Toggle
                    style={{ height: "50px" }}
                    className={`select-title ${
                      selectedday !== "Select" ? "selected" : ""
                    }`}
                  >
                    {selectedday}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <div className="dropdown-item-content">
                      {filteredDayData.map((item, index) => (
                        <Dropdown.Item key={index} eventKey={item.name}>
                          {item.name}
                        </Dropdown.Item>
                      ))}
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="col-lg-6">
              <label className="fw-medium pb-2">Time Estimate Hours</label>
              <input
                className="modal-input-box"
                type="text"
                style={{
                  background: "#F1EFEF",
                  width: "100%",
                  border: "0",
                  height: "50px",
                  borderRadius: "5px",
                  padding: "0 15px",
                }}
                placeholder=""
                value="5"
              />
            </div>
            <div className="col-lg-7">
              <label className="fw-medium pb-2">Priority</label>
              <ul className="priority-list">
                <li>
                  <button
                    className={selectedPriority === "Low" ? "active" : ""}
                    onClick={() => handlePriorityClick("Low")}
                  >
                    Low
                  </button>
                </li>
                <li>
                  <button
                    className={selectedPriority === "Medium" ? "active" : ""}
                    onClick={() => handlePriorityClick("Medium")}
                  >
                    Medium
                  </button>
                </li>
                <li>
                  <button
                    className={selectedPriority === "High" ? "active" : ""}
                    onClick={() => handlePriorityClick("High")}
                  >
                    High
                  </button>
                </li>
                <li>
                  <button
                    className={selectedPriority === "Critical" ? "active" : ""}
                    onClick={() => handlePriorityClick("Critical")}
                  >
                    Critical
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="button-group"
            style={{
              marginTop: "25px",
              display: "flex",
              justifyContent: "end",
              gap: "30px",
            }}
          >
            <button className="cancel-btn" onClick={props.onHide}>
              Cancel
            </button>
            <Link to="" className="delate-btn" onClick={props.onHide}>
              Save
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EditTemplateDetailsModal;
