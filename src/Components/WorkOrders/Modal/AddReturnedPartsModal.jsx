import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import SearchIcon from "../../../Assets/Icons/SearchIcon";

const AddReturnedPartsModal = (props) => {
  const [selectedPart, setselectedPart] = useState("Select Part");
  const [selectedPartLocation, setselectedPartLocation] = useState(
    "Select location of part"
  );
  //search inputs
  const [partLocationSearch, setPartLocationSearch] = useState("");
  const [partSearch, setPartSearch] = useState("");

  //demo data
  const partData = [{ name: "Select  " }, { name: "Part" }];
  const partLocationData = [
    { name: "Select  " },
    { name: "location  " },
    { name: "Part" },
  ];

  //filter part data  by search input
  const filteredPartData = partData.filter((item) =>
    item.name.toLowerCase().includes(partSearch.toLowerCase())
  );
  //filter part location data  by search input
  const filteredPartLocationData = partLocationData.filter((item) =>
    item.name.toLowerCase().includes(partLocationSearch.toLowerCase())
  );

  //handle select part
  const handlePartSelect = (eventKey) => {
    setselectedPart(eventKey);
    setPartSearch("");
  };
  const handlePartLocationSelect = (eventKey) => {
    setselectedPartLocation(eventKey);
    setPartLocationSearch("");
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
            <span className="fs-16 fw-bold">Add Returned Parts</span>
            <span className="fs-14" style={{ color: "#72777A" }}>
              Includes parts not used and parts removed from asset
            </span>
          </div>
          <div className="mt-4 pt-2 d-grid gap-4 modal-forms-content">
            <div className="col-md-12">
              <label className="fw-medium pb-2">Part Location</label>
              <Dropdown
                className="select__form"
                onSelect={handlePartLocationSelect}
              >
                <Dropdown.Toggle
                  className={`select-title ${
                    selectedPartLocation !== "Select location of part"
                      ? "selected"
                      : ""
                  }`}
                  style={{ height: "50px" }}
                >
                  {selectedPartLocation}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <form className="dropdown-search">
                    <button disabled>
                      <SearchIcon />
                    </button>
                    <input
                      value={partLocationSearch}
                      onChange={(e) => setPartLocationSearch(e.target.value)}
                      type="text"
                      placeholder="Search"
                    />
                  </form>
                  <div className="dropdown-item-content">
                    {filteredPartLocationData.map((item, index) => (
                      <Dropdown.Item key={index} eventKey={item.name}>
                        {item.name}
                      </Dropdown.Item>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col-md-12">
              <label className="fw-medium pb-2">Select Part</label>
              <Dropdown className="select__form" onSelect={handlePartSelect}>
                <Dropdown.Toggle
                  className={`select-title ${
                    selectedPart !== "Select Part" ? "selected" : ""
                  }`}
                  style={{ height: "50px" }}
                >
                  {selectedPart}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <form className="dropdown-search">
                    <button disabled>
                      <SearchIcon />
                    </button>
                    <input
                      value={partSearch}
                      onChange={(e) => setPartSearch(e.target.value)}
                      type="text"
                      placeholder="Search"
                    />
                  </form>
                  <div className="dropdown-item-content">
                    {filteredPartData.map((item, index) => (
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

export default AddReturnedPartsModal;
