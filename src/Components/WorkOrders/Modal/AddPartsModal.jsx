import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import SearchIcon from "../../../Assets/Icons/SearchIcon";
import { useDispatch, useSelector } from "react-redux";
import { addProjectedPart } from "../../../redux/formSlice";

const AddPartsModal = ({ onHide, show, partData, partLocationData }) => {
  const formState = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const [selectedPart, setSelectedPart] = useState("Select Part");
  const [selectedPartLocation, setSelectedPartLocation] = useState(
    "Select location of part"
  );
  const [quantity, setQuantity] = useState("");

  // Part location search input
  const [partLocationSearch, setPartLocationSearch] = useState("");
  // Part category search input
  const [partSearch, setPartSearch] = useState("");

  // Filter part and location data
  const filteredPartData =
    partData &&
    partData.filter((item) => {
      return item.partName.toLowerCase().includes(partSearch.toLowerCase());
    });
  const filteredPartLocationData =
    partLocationData &&
    partLocationData.filter((item) => {
      return item.locationName
        .toLowerCase()
        .includes(partLocationSearch.toLowerCase());
    });

  const handlePartSelect = (eventKey) => {
    setSelectedPart(eventKey);
    setPartSearch("");
  };

  const handlePartLocationSelect = (eventKey) => {
    setSelectedPartLocation(eventKey);
    setPartLocationSearch("");
  };

  const handleAddPart = () => {
    const part = partData.find((item) => item.partName === selectedPart);
    const location = partLocationData.find(
      (item) => item.locationName === selectedPartLocation
    );

    if (part && location && quantity) {
      const partObject = {
        partId: part.id,
        partName: part.partName,
        locationId: location.id,
        locationName: location.locationName,
        quantity: Number(quantity),
      };

      dispatch(addProjectedPart(partObject));
      onHide();
    } else {
      // Handle validation errors (e.g., show a message to the user)
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="medium-modal"
    >
      <Modal.Body style={{ padding: "28px 30px" }}>
        <div className="delate-content">
          <div className="d-flex align-items-center gap-4">
            <span className="fs-16 fw-bold">Add Parts</span>
            <span className="fs-14" style={{ color: "#72777A" }}>
              Select parts and quantities required.
            </span>
          </div>
          <div className="mt-4 pt-2 d-grid gap-4 modal-forms-content">
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
                    {filteredPartData &&
                      filteredPartData.map((item, index) => (
                        <Dropdown.Item key={index} eventKey={item.partName}>
                          {item.partName}
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
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
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
                      onChange={(e) => setPartLocationSearch(e.target.value)}
                      type="text"
                      placeholder="Search"
                      value={partLocationSearch}
                    />
                  </form>
                  <div className="dropdown-item-content">
                    {filteredPartLocationData &&
                      filteredPartLocationData.map((item, index) => (
                        <Dropdown.Item key={index} eventKey={item.locationName}>
                          {item.locationName}
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
            <button className="cancel-btn" onClick={onHide}>
              Cancel
            </button>
            <button className="delate-btn" onClick={handleAddPart}>
              Add
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddPartsModal;
