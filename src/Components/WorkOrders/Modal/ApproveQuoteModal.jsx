import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FaCircleExclamation } from "react-icons/fa6";
import DownIcon from "../../../Assets/Icons/DownIcon";
import SearchIcon from "../../../Assets/Icons/SearchIcon";
import { Dropdown, Form } from "react-bootstrap";
import ApproveQuoteErrorModal from "./ApproveQuoteErrorModal";

const ApproveQuoteModal = (props) => {
  const [selectedPriority, setSelectedPriority] = useState("High");
  const [selectedCheckList, setSelectedCheckList] = useState([]);
  const [showChecklistList, setShowChecklistList] = useState(false);
  const [selectLabourCostSearch, setSelectLabourCostSearch] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [selectCategoryOfWork, setSelectCategoryOfWork] = useState(
    "Select category of work"
  );
  const [selectCOWSearch, setSelectCOWSearch] = useState("");

  const handleCreateOrder = () => {
    setModalShow(true);
    props.onHide();
  };

  const handlePriorityClick = (priority) => {
    setSelectedPriority(priority);
  };

  const handleCheckboxChange = (asset) => {
    setSelectedCheckList((prevSelectedAssets) => {
      if (prevSelectedAssets.includes(asset)) {
        return prevSelectedAssets.filter(
          (selectedAsset) => selectedAsset !== asset
        );
      } else {
        return [...prevSelectedAssets, asset];
      }
    });
  };

  const handleSelectCategoryOFWorkData = (eventKey) => {
    setSelectCategoryOfWork(eventKey);
    setSelectCOWSearch("");
  };

  const checlistData = [
    { name: "Pump Calibration" },
    { name: "HSE Checklist" },
    { name: "Wayne Repair Checklist" },
    { name: "Gilbarco Checklist" },
  ];

  //filter labour cost data  by search input
  const filteredCheckListData = checlistData.filter((item) =>
    item.name.toLowerCase().includes(selectLabourCostSearch.toLowerCase())
  );

  const categoryOfWorkData = [
    { name: "Electrical Works  " },
    { name: "Mechanical Works" },
    { name: "Civil Works" },
    { name: "Plumbing Works" },
  ];
  const filterSelectCategoryOfWorkData = categoryOfWorkData.filter((item) =>
    item.name.toLowerCase().includes(selectCOWSearch.toLowerCase())
  );
  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="medium-modal"
      >
        <Modal.Body style={{ padding: "28px 30px" }}>
          <div className="delate-content">
            <div className="">
              <span className="fs-16 fw-bold ">Approve Quote</span>
              <span className="fs-14 ps-3">Approve contractor quote</span>
            </div>
            <div
              className="delate-warning"
              style={{
                background: "#F1EFEF",
                minHeight: "230px",
                display: "grid",
                alignItems: "center",
                textAlign: "center",
                padding: "20px",
                marginTop: "30px",
                borderRadius: "5px",
              }}
            >
              <div>
                <FaCircleExclamation
                  style={{ color: "#D57D2A", fontSize: "70px" }}
                />
                <div
                  className="fs-19 fw-medium "
                  style={{
                    lineHeight: "1.4",
                    marginTop: "10px",
                    color: "#292D32",
                  }}
                >
                  Please confirm quote approval. The request will be converted
                  to a work order and assigned to this team.
                  <div className="fs-13 pt-4">
                    <b> Note:</b> This will also close request for quotes and
                    contractors will not be able to submit further quotes.
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-gap mt-4">
              <div className="pt-12">
                <label className="fw-medium pb-2 fs-14">Work Order Title</label>
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
                    fontSize: "15px",
                  }}
                  placeholder="Enter the title to be used for the work order"
                />
              </div>
              <div className="pt-12">
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
                      className={
                        selectedPriority === "Critical" ? "active" : ""
                      }
                      onClick={() => handlePriorityClick("Critical")}
                    >
                      Critical
                    </button>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <label className="fw-medium pb-2">
                  Select Category of Work
                </label>
                <Dropdown
                  className="select__form"
                  onSelect={handleSelectCategoryOFWorkData}
                >
                  <Dropdown.Toggle
                    className={`select-title ${
                      selectCategoryOfWork !== "Select category of work"
                        ? "selected"
                        : ""
                    }`}
                    style={{ height: "50px" }}
                  >
                    {selectCategoryOfWork}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <form className="dropdown-search">
                      <button disabled>
                        <SearchIcon />
                      </button>
                      <input
                        value={selectCOWSearch}
                        onChange={(e) => setSelectCOWSearch(e.target.value)}
                        type="text"
                        placeholder="Search"
                      />
                    </form>
                    <div className="dropdown-item-content">
                      {filterSelectCategoryOfWorkData.map((item, index) => (
                        <Dropdown.Item key={index} eventKey={item.name}>
                          {item.name}
                        </Dropdown.Item>
                      ))}
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="col-md-6">
                <label className="fw-medium pb-2 fs-14">Select Checklist</label>
                <div className="checklist-box select__form">
                  <button
                    className="checklist-btn"
                    onClick={() => setShowChecklistList(!showChecklistList)}
                  >
                    {selectedCheckList.length === 0 ? (
                      <div>
                        <span style={{ color: "#C5C7CD" }}>
                          Select checklist
                        </span>
                        {selectedCheckList.length > 0 && (
                          <span style={{ color: "#000" }}>
                            {selectedCheckList.join(", ")}
                          </span>
                        )}
                      </div>
                    ) : (
                      <span style={{ color: "#000" }}>
                        {selectedCheckList.join(", ")}
                      </span>
                    )}
                    <DownIcon style={{ color: "rgba(0, 0, 0, 0.29)" }} />
                  </button>
                  <div
                    className={`checklist-list ${
                      showChecklistList ? "" : "hide d-none"
                    }`}
                  >
                    <form className="dropdown-search ps-0">
                      <button disabled>
                        <SearchIcon />
                      </button>
                      <input
                        onChange={(e) =>
                          setSelectLabourCostSearch(e.target.value)
                        }
                        type="text"
                        placeholder="Search"
                      />
                    </form>
                    <ul className="dropdown-item-content mt-2">
                      {filteredCheckListData.map((item, index) => (
                        <li key={index}>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id={item.name}
                              checked={selectedCheckList.includes(item.name)}
                              onChange={() => handleCheckboxChange(item.name)}
                            />
                            <label
                              className="form-check-label"
                              style={{ fontSize: "14px" }}
                              htmlFor={item.name}
                            >
                              {item.name}
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label className="fw-medium pb-2 fs-14">
                  Work Estimate Hours
                </label>
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
                    fontSize: "15px",
                  }}
                  placeholder="Enter the amount of hours "
                />
              </div>
              <div className="col-md-6">
                <label className="fw-medium pb-2 fs-14">
                  Is the technician signature required
                </label>
                <Form.Check type="checkbox" id="default-checkbox" label="" />
              </div>
              <div className="col-md-6"></div>
            </div>
            <div
              className="button-group"
              style={{
                marginTop: "25px",
                display: "flex",
                justifyContent: "end",
                gap: "20px",
              }}
            >
              <button className="cancel-btn" onClick={props.onHide}>
                Cancel
              </button>
              <button className="delate-btn" onClick={handleCreateOrder}>
                Approve & Create Work
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <ApproveQuoteErrorModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ApproveQuoteModal;
