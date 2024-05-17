import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import SearchIcon from "../../../Assets/Icons/SearchIcon";

const AssetTransferModal = (props) => {
  const [selectCategory, setSelectCategory] = useState();
  const [selectMake, setSelectMake] = useState();
  const [selectTeam, setSelectTeam] = useState();

  const assetCatagory = [
    { name: "Nairobi Region" },
    { name: "North Rift Region" },
  ];
  const assetMake = [{ name: "Rubis Kisaju  " }, { name: "Rubis Lungalunga" }];
  const catagoryWork = [{ name: "Rubis Kisaju" }, { name: "Rubis Lungalunga" }];

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
            <span className="fs-16 fw-bold">Asset Transfer</span>
            <span className="fs-14" style={{ color: "#72777A" }}>
              Transfer asset to a new location
            </span>
          </div>
          <div className="pt-4">
            <div className="fs-14 fw-medium">Asset to be moved</div>
            <div className="fs-15 pt-2 pb-1 fw-medium">
              Pump 1 - Gilbarco Frontier - Serial 540019382{" "}
            </div>
            <div className="fs-13" style={{ color: "#A9ACB4" }}>
              Current Location: Rubis Kisaju
            </div>
          </div>
          <div className="mt-4 pt-2 d-grid gap-4 modal-forms-content">
            <div className="col-md-12">
              <label className="fw-medium pb-2">
                Destination Location Grouping
              </label>
              <Dropdown className="select__form" onSelect={handleSelectTeam}>
                <Dropdown.Toggle
                  className={`select-title`}
                  style={{ height: "50px" }}
                >
                  <div>
                    <span className="selected">Select location grouping</span>
                    <span style={{color: "#6C5B51", fontWeight: "700", paddingLeft: "10px"}}>{selectTeam}</span>
                  </div>
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
            <div className="col-md-12">
              <label className="fw-medium pb-2">
                Destination Parent Location
              </label>
              <Dropdown
                className="select__form"
                onSelect={handleSelectCategory}
              >
                <Dropdown.Toggle
                  className={`select-title`}
                  style={{ height: "50px" }}
                >
                  <div>
                    <span className="selected">Select parent location</span>
                    <span style={{color: "#6C5B51", fontWeight: "700", paddingLeft: "10px"}}>{selectCategory}</span>
                  </div> 
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <form className="dropdown-search">
                    <button disabled>
                      <SearchIcon />
                    </button>
                    <input
                      onChange={(e) => setSelectCategorySearch(e.target.value)}
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
            <div className="col-md-12">
              <label className="fw-medium pb-2">New Asset Location</label>
              <Dropdown className="select__form" onSelect={handleSelectMake}>
              <Dropdown.Toggle
                  className={`select-title`}
                  style={{ height: "50px" }}
                >
                  <div>
                    <span className="selected">Select the new target asset location</span>
                    <span style={{color: "#6C5B51", fontWeight: "700", paddingLeft: "10px"}}>{selectMake}</span>
                  </div> 
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <form className="dropdown-search">
                    <button disabled>
                      <SearchIcon />
                    </button>
                    <input
                      onChange={(e) => setSelectMakeSearch(e.target.value)}
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
              Transfer Asset
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AssetTransferModal;
