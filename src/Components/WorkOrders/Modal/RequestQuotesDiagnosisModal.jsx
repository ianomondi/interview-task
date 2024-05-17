import React, { useState } from "react";
import { Nav, Tab, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import SearchIcon from "../../../Assets/Icons/SearchIcon";
import DownIcon from "../../../Assets/Icons/DownIcon";

const RequestQuotesDiagnosisModal = (props) => {
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [showChecklistList, setShowChecklistList] = useState(false);
  const [showCheckCategory, setShowCheckCategory] = useState(false);
  const [selectLabourCostSearch, setSelectLabourCostSearch] = useState("");
  const [selectCostSearch, setSelectCostSearch] = useState("");

  const handleCheckboxChange = (asset) => {
    setSelectedAssets((prevSelectedAssets) => {
      if (prevSelectedAssets.includes(asset)) {
        return prevSelectedAssets.filter(
          (selectedAsset) => selectedAsset !== asset
        );
      } else {
        return [...prevSelectedAssets, asset];
      }
    });
  };

  const handleCheckboxCategory = (category) => {
    setSelectedCategory((prevSelectedCategory) => {
      if (prevSelectedCategory.includes(category)) {
        return prevSelectedCategory.filter(
          (selectedCategory) => selectedCategory !== category
        );
      } else {
        return [...prevSelectedCategory, category];
      }
    });
  };

  const categoryWork = [
    { name: "ALL" },
    { name: "Electrical Works" },
    { name: "Mechanical Works" },
    { name: "Civil Works" },
  ];

  const labourCostdata = [
    { name: "ALL" },
    { name: "Nexgen Engineering Limted" },
    { name: "Prowalco Engineers Limited" },
    { name: "M & L Engineering" },
  ];

  // Filter labour cost data by search input
  const filteredLabourCostData = labourCostdata.filter((item) =>
    item.name.toLowerCase().includes(selectLabourCostSearch.toLowerCase())
  );

  // Filter category data by search input
  const filteredCategoryData = categoryWork.filter((item) =>
    item.name.toLowerCase().includes(selectCostSearch.toLowerCase())
  );

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="medium-modal modal-size-780 add-asset-modal"
    >
      <Modal.Body style={{ padding: "28px 30px" }}>
        <div className="delate-content">
          <div className="d-md-flex align-items-center gap-4">
            <span className="fs-16 fw-bold">Request Quotes & Diagnosis</span>
            <div className="fs-14 pt-2 pt-md-0" style={{ color: "#72777A" }}>
              Request contractors/ teams to send quotes and diagnosis for the
              job
            </div>
          </div>
          <div className="fs-16 fw-semibold" style={{ paddingTop: "30px" }}>
            Invite
          </div>
          <Tab.Container defaultActiveKey="first">
            <Nav variant="pills" className="existing-tab-nav row">
              <Nav.Item className="col-md-6">
                <Nav.Link eventKey="first">
                  <div className="fs-15 fw-medium title-text">
                    Selected Teams/ Contractors
                  </div>
                  <div className="fs-13 fs-italic">
                    Only those teams/ contractors chosen here will get the
                    request to send a diagnosis and quote.
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="col-md-6">
                <Nav.Link eventKey="second">
                  <div className="fs-15 fw-medium title-text">
                    All Teams/ Contractors
                  </div>
                  <div className="fs-13 fs-italic">
                    All teams/ contractors in the system will get the request to
                    send a diagnosis and quote.
                  </div>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="row row-gap">
                  <div className="col-md-6">
                    <label className="fw-medium pb-2 fs-14">
                      RFQ/ Diagnosis deadline in hours
                    </label>
                    <input
                      type="text"
                      style={{
                        background: "#F1EFEF",
                        width: "100%",
                        border: "0",
                        height: "50px",
                        borderRadius: "5px",
                        padding: "0 15px",
                      }}
                      placeholder="Enter the RFQ/ Diagnosis deadline in hours"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="fw-medium pb-2 fs-14">
                      Block RFQ/ Diagnosis submission after deadline
                    </label>
                    <Form className="row check-icons-modal">
                      <div className="col-5">
                        <Form.Check
                          inline 
                          label="Yes"
                          name="group1"
                          type="radio"
                          id="inline-radio-1"
                        />
                      </div>
                      <div className="col-6">
                        <Form.Check
                          inline
                          label="No"
                          name="group1"
                          type="radio"
                          id="inline-radio-2"
                        />
                      </div>
                    </Form>
                  </div>
                  <div className="fs-16 pt-3 fw-semibold">
                    Choose Team/ Contractor
                  </div>
                  <div className="col-md-6">
                    <label className="fw-medium pb-2 fs-14">
                      Category of Works
                    </label>
                    <div className="checklist-box select__form">
                      <button
                        className="checklist-btn"
                        onClick={() => setShowCheckCategory(!showCheckCategory)}
                      >
                        {selectedCategory.length === 0 ? (
                          <div>
                            <span style={{ color: "#C5C7CD" }}>
                              Select category of work from list
                            </span>
                            {selectedCategory.length > 0 && (
                              <span style={{ color: "#000" }}>
                                {selectedCategory.join(", ")}
                              </span>
                            )}
                          </div>
                        ) : (
                          <span style={{ color: "#000" }}>
                            {selectedCategory.join(", ")}
                          </span>
                        )}
                        <DownIcon />
                      </button>
                      <div
                        className={`checklist-list ${
                          showCheckCategory ? "" : "hide d-none"
                        }`}
                      >
                        <form className="dropdown-search ps-0">
                          <button disabled>
                            <SearchIcon />
                          </button>
                          <input
                            onChange={(e) =>
                              setSelectCostSearch(e.target.value)
                            }
                            type="text"
                            placeholder="Search"
                          />
                        </form>
                        <ul className="dropdown-item-content mt-2">
                          {filteredCategoryData.map((item, index) => (
                            <li key={index}>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id={item.name}
                                  checked={selectedCategory.includes(item.name)}
                                  onChange={() =>
                                    handleCheckboxCategory(item.name)
                                  }
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
                      Team/ Contractor
                    </label>
                    <div className="checklist-box select__form">
                      <button
                        className="checklist-btn"
                        onClick={() => setShowChecklistList(!showChecklistList)}
                      >
                        {selectedAssets.length === 0 ? (
                          <div>
                            <span style={{ color: "#C5C7CD" }}>
                              Select contractor from list
                            </span>
                            {selectedAssets.length > 0 && (
                              <span style={{ color: "#000" }}>
                                {selectedAssets.join(", ")}
                              </span>
                            )}
                          </div>
                        ) : (
                          <span style={{ color: "#000" }}>
                            {selectedAssets.join(", ")}
                          </span>
                        )}
                        <DownIcon />
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
                          {filteredLabourCostData.map((item, index) => (
                            <li key={index}>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id={item.name}
                                  checked={selectedAssets.includes(item.name)}
                                  onChange={() =>
                                    handleCheckboxChange(item.name)
                                  }
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
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="row row-gap mt-3">
                  <div className="col-md-6">
                    <label className="fw-medium pb-2 fs-14">
                      RFQ/ Diagnosis deadline in hours
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
                      placeholder="Enter the quote deadline in hours"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="fw-medium pb-2 fs-14">
                      Block RFQ/ Diagnosis submission after deadline
                    </label>
                    <Form>
                      <div className="row check-icons-modal">
                        <div className="col-5">
                          <Form.Check
                            inline
                            checked
                            label="Yes"
                            name="group1"
                            type="radio"
                            id="inline-radio-3"
                          />
                        </div>
                        <div className="col-6">
                          <Form.Check
                            inline
                            label="No"
                            name="group1"
                            type="radio"
                            id="inline-radio-4"
                          />
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>

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
              Invite
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RequestQuotesDiagnosisModal;
