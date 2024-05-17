import React, { useState } from "react";
import { Dropdown, Nav, Tab } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import SearchIcon from "../../../Assets/Icons/SearchIcon";

const AddLineItemQuotesModal = (props) => {
  const [selectedPartPart, setselectedPartPart] =
    useState("Select a used part");
  const [selectedPartCategory, setselectedPartCategory] = useState(
    "Select cost category"
  );
  //search inputs
  const [partPartSearch, setPartPartSearch] = useState("");
  const [partCategorySearch, setPartCategorySearch] = useState("");

  //demo data
  const partPartData = [
    { name: "Part A - 100005" },
    { name: "Part B - 100002" },
    { name: "Part C - 100001" },
  ];
  const partCategoryData = [
    { name: "Meals" },
    { name: "Meals" },
    { name: "Meals" },
  ];

  //filter part location data  by search input
  const filteredPartPartData = partPartData.filter((item) =>
    item.name.toLowerCase().includes(partPartSearch.toLowerCase())
  );
  const filteredPartCategoryData = partCategoryData.filter((item) =>
    item.name.toLowerCase().includes(partCategorySearch.toLowerCase())
  );
  const handlePartPartSelect = (eventKey) => {
    setselectedPartPart(eventKey);
    setPartPartSearch("");
  };
  const handlePartCategorySelect = (eventKey) => {
    setselectedPartCategory(eventKey);
    setPartCategorySearch("");
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
            <span className="fs-16 fw-bold">Add Line Item</span>
            <span className="fs-14" style={{ color: "#72777A" }}>
              Enter information about the quote line item
            </span>
          </div>
          <div className="mt-4 pt-2 addLien-tab">
            <div className="fs-14 fw-semibold text-black">Cost Type</div>
            <Tab.Container defaultActiveKey="first">
              <Nav variant="pills" className="py-3 mb-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Parts Costs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Other Costs</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="d-grid gap-4 modal-forms-content">
                    <div className="col-md-12">
                      <label className="fw-medium pb-2 fs-14">
                        Select Part
                      </label>
                      <Dropdown
                        className="select__form"
                        onSelect={handlePartPartSelect}
                      >
                        <Dropdown.Toggle
                          className={`select-title ${
                            selectedPartPart !== "Select a used part"
                              ? "selected"
                              : ""
                          }`}
                          style={{ height: "50px" }}
                        >
                          {selectedPartPart}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <form className="dropdown-search">
                            <button disabled>
                              <SearchIcon />
                            </button>
                            <input
                              value={partPartSearch}
                              onChange={(e) =>
                                setPartPartSearch(e.target.value)
                              }
                              type="text"
                              placeholder="Search"
                            />
                          </form>
                          <div className="dropdown-item-content">
                            {filteredPartPartData.map((item, index) => (
                              <Dropdown.Item key={index} eventKey={item.name}>
                                {item.name}
                              </Dropdown.Item>
                            ))}
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="col-md-12">
                      <label className="fw-medium pb-2 fs-14">
                        Part Quantity to be Costed
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
                        }}
                        placeholder="Enter quantity"
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="fw-medium pb-2 fs-14">
                        Enter Unit Cost
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
                        }}
                        placeholder="Enter unit part cost"
                      />
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="d-grid gap-4 modal-forms-content">
                    <div className="col-md-12">
                      <label className="fw-medium pb-2 fs-14">
                        Cost Category
                      </label>
                      <Dropdown
                        className="select__form"
                        onSelect={handlePartCategorySelect}
                      >
                        <Dropdown.Toggle
                          className={`select-title ${
                            selectedPartCategory !== "Select cost category"
                              ? "selected"
                              : ""
                          }`}
                          style={{ height: "50px" }}
                        >
                          {selectedPartCategory}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <form className="dropdown-search">
                            <button disabled>
                              <SearchIcon />
                            </button>
                            <input
                              value={partCategorySearch}
                              onChange={(e) =>
                                setPartCategorySearch(e.target.value)
                              }
                              type="text"
                              placeholder="Search"
                            />
                          </form>
                          <div className="dropdown-item-content">
                            {filteredPartCategoryData.map((item, index) => (
                              <Dropdown.Item key={index} eventKey={item.name}>
                                {item.name}
                              </Dropdown.Item>
                            ))}
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="col-md-12">
                      <label className="fw-medium pb-2 fs-14">
                        Cost Description
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
                        }}
                        placeholder="Enter cost description"
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="fw-medium pb-2 fs-14">Quantity</label>
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
                        placeholder="Enter quantity"
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="fw-medium pb-2 fs-14">
                        Unit Cost (KES)
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
                        }}
                        placeholder="Enter unit cost"
                      />
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
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

export default AddLineItemQuotesModal;
