import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import SearchIcon from "../../../Assets/Icons/SearchIcon";
import DownIcon from "../../../Assets/Icons/DownIcon";

const AddChecklistModal = (props) => {
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [showChecklistList, setShowChecklistList] = useState(false); // State to manage the visibility of the checklist list
  //search input
  const [checklistSearch, setChecklistSearch] = useState("");

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

  const checkListData = [
    { name: "Pump Calibration Checklist" },
    { name: "Compressor Checklist" },
    { name: "Laptop Checklist" },
  ];

  //filter part data  by search input
  const filteredChecklistData = checkListData.filter((item) =>
    item.name.toLowerCase().includes(checklistSearch.toLowerCase())
  );

  const toggleChecklistList = () => {
    setShowChecklistList(!showChecklistList);
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
            <span className="fs-16 fw-bold">Add Checklist</span>
            <span className="fs-14" style={{ color: "#72777A" }}>
              Add checklists to be used on the job
            </span>
          </div>
          <div className="mt-4 pt-2 d-grid gap-4 modal-forms-content">
            <div className="col-md-12">
              <label className="fw-medium pb-2">Select Checklist</label>
              <div className="checklist-box select__form">
                <button className="checklist-btn" onClick={toggleChecklistList}>
                  {selectedAssets.length === 0 ? (
                    <div>
                      <span style={{ color: "#C5C7CD" }}>Select checklist</span>
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
                {showChecklistList && (
                  <div className="checklist-list">
                    <form className="dropdown-search ps-0">
                      <button disabled>
                        <SearchIcon />
                      </button>
                      <input
                        onChange={(e) => setChecklistSearch(e.target.value)}
                        type="text"
                        placeholder="Search"
                      />
                    </form>
                    <ul className="dropdown-item-content mt-2">
                      {filteredChecklistData.map((item, index) => (
                        <li key={index}>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id={item.name}
                              checked={selectedAssets.includes(item.name)}
                              onChange={() => handleCheckboxChange(item.name)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={item.name}
                            >
                              {item.name}
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
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

export default AddChecklistModal;
