import React, { useState } from "react";
import { Dropdown, Nav, Tab } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import SearchIcon from "../../../Assets/Icons/SearchIcon";
import DownIcon from "../../../Assets/Icons/DownIcon";

const AddAssetModal = (props) => {
  const [selectCategory, setSelectCategory] = useState("Select asset category");
  const [selectMake, setSelectMake] = useState("Select asset make");
  const [selectTeam, setSelectTeam] = useState("Select asset category");
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [showChecklistList, setShowChecklistList] = useState(false);
  const [selectLabourCostSearch, setSelectLabourCostSearch] = useState("");

  //demo data
  const assetCatagory = [
    { name: "Pumps & Dispensers" },
    { name: "Tanks" },
    { name: "Generators" },
    { name: "Sirens & Alarms" },
  ];
  const assetMake = [
    { name: "Gilbarco Frontier " },
    { name: "Wayne Helix" },
    { name: "Mekser" },
    { name: "Tokheim China" },
  ];
  const catagoryWork = [
    { name: "Pumps and Dispensers" },
    { name: "Fuel Tanks" },
    { name: "Generators and Gensets" },
    { name: "Alarms and Sirens" },
  ];

  //get search input
  const [selectCategorySearch, setSelectCategorySearch] = useState("");
  const [selectMakeSearch, setSelectMakeSearch] = useState("");
  const [selectTeamSearch, setSelectTeamSearch] = useState("");

  //filter via search input
  const filterassetCatagory = assetCatagory.filter((item) =>
    item.name.toLowerCase().includes(selectCategorySearch.toLowerCase())
  );
  const filterassetMake = assetMake.filter((item) =>
    item.name.toLowerCase().includes(selectMakeSearch.toLowerCase())
  );
  const filtercatagoryWork = catagoryWork.filter((item) =>
    item.name.toLowerCase().includes(selectTeamSearch.toLowerCase())
  );

  //handle select
  const handleSelectCategory = (eventKey) => {
    setSelectCategory(eventKey);
    setSelectCategorySearch("");
  };
  const handleSelectMake = (eventKey) => {
    setSelectMake(eventKey);
    setSelectMakeSearch("");
  };
  const handleSelectTeam = (eventKey) => {
    setSelectTeam(eventKey);
    setSelectTeamSearch("");
  };

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

  const labourCostdata = [
    { name: "Pump 1, 540019382, Gilbarco Frontier F160" },
    { name: "Pump 2, 640019382, Gilbarco Frontier F160" },
    { name: "Pump 3, 740019382, Wayne Helix 3G Max" },
    { name: "Pump 4, 840019382, Wayne Helix 3G Max" },
  ];

  //filter labour cost data  by search input
  const filteredLabourCostData = labourCostdata.filter((item) =>
    item.name.toLowerCase().includes(selectLabourCostSearch.toLowerCase())
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
            <span className="fs-16 fw-bold">Add Asset</span>
            <div className="fs-14 pt-2 pt-md-0" style={{ color: "#72777A" }}>
              Add an asset to this location
            </div>
          </div>
          <div className="fs-16 fw-semibold" style={{ paddingTop: "30px" }}>
            Mode
          </div>
          <Tab.Container defaultActiveKey="first">
            <Nav variant="pills" className="existing-tab-nav row">
              <Nav.Item className="col-md-6">
                <Nav.Link eventKey="first">
                  <div className="fs-15 fw-medium title-text">
                    Add Existing Asset
                  </div>
                  <div className="fs-13 fs-italic">
                    This option allows you to add an asset that already exists
                    in the system
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="col-md-6">
                <Nav.Link eventKey="second">
                  <div className="fs-15 fw-medium title-text">
                    Add New Asset
                  </div>
                  <div className="fs-13 fs-italic">
                    This options allows you to add an asset that does not exist
                    in the system
                  </div>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="fs-16 fw-semibold">Asset</div>
                <div className="row row-gap mt-3">
                  <div className="col-md-6">
                    <label className="fw-medium pb-2">
                      Select asset category
                    </label>
                    <Dropdown
                      className="select__form"
                      onSelect={handleSelectTeam}
                    >
                      <Dropdown.Toggle
                        className={`select-title ${
                          selectTeam !== "Select asset category"
                            ? "selected"
                            : ""
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
                            onChange={(e) =>
                              setSelectTeamSearch(e.target.value)
                            }
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
                    <label className="fw-medium pb-2">Select asset</label>
                    <div className="checklist-box select__form">
                      <button
                        className="checklist-btn"
                        onClick={() => setShowChecklistList(!showChecklistList)}
                      >
                        {selectedAssets.length === 0 ? (
                          <div>
                            <span style={{ color: "#C5C7CD" }}>
                              Select asset from list
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
                                  className="form-check-label" style={{fontSize: "14px"}}
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
                <div className="fs-16 mt-3 fw-semibold">Asset</div>
                <div className="row row-gap mt-3">
                  <div className="col-md-6">
                    <label className="fw-medium pb-2">Name</label>
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
                      placeholder="Enter asset name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="fw-medium pb-2">Serial Number</label>
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
                      placeholder="Enter asset serial number"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="fw-medium pb-2">Asset Category</label>
                    <Dropdown
                      className="select__form"
                      onSelect={handleSelectCategory}
                    >
                      <Dropdown.Toggle
                        className={`select-title ${
                          selectCategory !== "Select asset category"
                            ? "selected"
                            : ""
                        }`}
                        style={{ height: "50px" }}
                      >
                        {selectCategory}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <form className="dropdown-search">
                          <button disabled>
                            <SearchIcon />
                          </button>
                          <input
                            onChange={(e) =>
                              setSelectCategorySearch(e.target.value)
                            }
                            value={selectCategorySearch}
                            type="text"
                            placeholder="Search"
                          />
                        </form>
                        <div className="dropdown-item-content">
                          {filterassetCatagory.map((item, index) => (
                            <Dropdown.Item key={index} eventKey={item.name}>
                              {item.name}
                            </Dropdown.Item>
                          ))}
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="col-md-6">
                    <label className="fw-medium pb-2">Asset Make</label>
                    <Dropdown
                      className="select__form"
                      onSelect={handleSelectMake}
                    >
                      <Dropdown.Toggle
                        className={`select-title ${
                          selectMake !== "Select asset make" ? "selected" : ""
                        }`}
                        style={{ height: "50px" }}
                      >
                        {selectMake}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <form className="dropdown-search">
                          <button disabled>
                            <SearchIcon />
                          </button>
                          <input
                            onChange={(e) =>
                              setSelectMakeSearch(e.target.value)
                            }
                            type="text"
                            placeholder="Search"
                            value={selectMakeSearch}
                          />
                        </form>
                        <div className="dropdown-item-content">
                          {filterassetMake.map((item, index) => (
                            <Dropdown.Item key={index} eventKey={item.name}>
                              {item.name}
                            </Dropdown.Item>
                          ))}
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="col-md-6">
                    <label className="fw-medium pb-2">Asset Model</label>
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
                      placeholder="Enter asset  model"
                    />
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
              Add
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddAssetModal;
