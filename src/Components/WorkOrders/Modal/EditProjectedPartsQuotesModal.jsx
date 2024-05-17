import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import SearchIcon from "../../../Assets/Icons/SearchIcon";

const EditProjectedPartsQuotesModal = (props) => {
  const [selectedPartProject, setselectedPartProject] =
    useState("Part A - 100005");
  //search inputs
  const [partProjectSearch, setPartProjectSearch] = useState("");

  //demo data
  const partProjectData = [
    { name: "Part A - 100005" },
    { name: "Part B - 100002" },
    { name: "Part C - 100001" },
  ];

  //filter part location data  by search input
  const filteredPartProjectData = partProjectData.filter((item) =>
    item.name.toLowerCase().includes(partProjectSearch.toLowerCase())
  );
  const handlePartProjectSelect = (eventKey) => {
    setselectedPartProject(eventKey);
    setPartProjectSearch("");
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
            <span className="fs-16 fw-bold">Edit Projected Parts</span>
            <span className="fs-14" style={{ color: "#72777A" }}>
              Select parts and quantities required.
            </span>
          </div>
          <div className="mt-4 pt-2 d-grid gap-4 modal-forms-content">
            <div className="col-md-12">
              <label className="fw-medium pb-2">Select Part</label>
              <Dropdown
                className="select__form"
                onSelect={handlePartProjectSelect}
              >
                <Dropdown.Toggle
                  className={`select-title ${
                    selectedPartProject !== "Select part" ? "selected" : ""
                  }`}
                  style={{ height: "50px" }}
                >
                  {selectedPartProject}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <form className="dropdown-search">
                    <button disabled>
                      <SearchIcon />
                    </button>
                    <input
                      value={partProjectSearch}
                      onChange={(e) => setPartProjectSearch(e.target.value)}
                      type="text"
                      placeholder="Search"
                    />
                  </form>
                  <div className="dropdown-item-content">
                    {filteredPartProjectData.map((item, index) => (
                      <Dropdown.Item key={index} eventKey={item.name}>
                        {item.name}
                      </Dropdown.Item>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col-md-12">
              <label className="fw-medium pb-2">Quantity</label>
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
                placeholder="Enter quantity required"
                value="3"
              />
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
              Add
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EditProjectedPartsQuotesModal;
