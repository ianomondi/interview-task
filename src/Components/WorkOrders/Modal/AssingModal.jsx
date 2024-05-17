import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import SearchIcon from "../../../Assets/Icons/SearchIcon";

const AssingModal = (props) => {
  const [selectTeam, setSelectTeam] = useState("Select team");
  const [selectWorker, setSelectWorker] = useState("Select worker");

  //demo data
  const selectTeamData = [
    { name: "Select  " },
    { name: "team" },
    { name: "Part" },
    { name: "Location" },
    { name: "Places" },
  ];
  const selectWorkdersData = [
    { name: "Select  " },
    { name: "worker  " },
    { name: "Part" },
    { name: "Location" },
    { name: "Places" },
  ];

  //get search input
  const [selectTeamSearch, setSelectTeamSearch] = useState("");
  const [selectWorkerSearch, setSelectWorkerSearch] = useState("");

  //filter via search input
  const filterSelectTeamData = selectTeamData.filter((item) =>
    item.name.toLowerCase().includes(selectTeamSearch.toLowerCase())
  );
  const filterSelectWorkdersData = selectWorkdersData.filter((item) =>
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
      className="medium-modal"
    >
      <Modal.Body style={{ padding: "28px 30px" }}>
        <div className="delate-content">
          <div className="d-flex align-items-center gap-4">
            <span className="fs-16 fw-bold">Assign Work</span>
            <span className="fs-14" style={{ color: "#72777A" }}>
              Select the team and worker to execute the work order.
            </span>
          </div>
          <div className="mt-4 pt-2 d-grid gap-4 modal-forms-content">
            <div className="col-md-12">
              <label className="fw-medium pb-2">Select Team</label>
              <Dropdown className="select__form" onSelect={handleSelectTeam}>
                <Dropdown.Toggle
                  className={`select-title ${
                    selectTeam !== "Select team" ? "selected" : ""
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
                    {filterSelectTeamData.map((item, index) => (
                      <Dropdown.Item key={index} eventKey={item.name}>
                        {item.name}
                      </Dropdown.Item>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col-md-12">
              <label className="fw-medium pb-2">Select Worker</label>
              <Dropdown className="select__form" onSelect={handleSelectWorker}>
                <Dropdown.Toggle
                  className={`select-title ${
                    selectWorker !== "Select worker" ? "selected" : ""
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
                    {filterSelectWorkdersData.map((item, index) => (
                      <Dropdown.Item key={index} eventKey={item.name}>
                        {item.name}
                      </Dropdown.Item>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
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
              Assign
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AssingModal;
