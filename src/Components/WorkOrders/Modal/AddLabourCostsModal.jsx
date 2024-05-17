import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import SearchIcon from "../../../Assets/Icons/SearchIcon";
import DownIcon from "../../../Assets/Icons/DownIcon";

const AddLabourCostsModal = (props) => {
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [showChecklistList, setShowChecklistList] = useState(false);
  const [selectLabourCostSearch, setSelectLabourCostSearch] = useState("");

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
    { name: "John Doe (KES 32,000)" },
    { name: "Ann may (KES 10,000)" },
    { name: "Liz Mua (KES 5,000)" },
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
      className="medium-modal"
    >
      <Modal.Body style={{ padding: "28px 30px" }}>
        <div className="delate-content">
          <div className="d-flex align-items-center gap-4">
            <span className="fs-16 fw-bold">Add Labour Costs</span>
            <span className="fs-14" style={{ color: "#72777A" }}>
              You can only include costs from labour cost list
            </span>
          </div>
          <div className="mt-4 pt-2 d-grid gap-4 modal-forms-content">
            <div className="col-md-12">
              <label className="fw-medium pb-2">Select Labour Costs</label>
              <div className="checklist-box select__form">
                <button
                  className="checklist-btn"
                  onClick={() => setShowChecklistList(!showChecklistList)}
                >
                  {selectedAssets.length === 0 ? (
                    <div>
                      <span style={{ color: "#C5C7CD" }}>
                        Select costs from list
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

export default AddLabourCostsModal;
