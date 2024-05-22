import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import SearchIcon from "../../../Assets/Icons/SearchIcon";
import { apiWorkOrderServices } from "../../../utls/services";
import store from "../../../context";
import { useRecoilState } from "recoil";

const AddPartsModal = (props) => {
  const [selectedPart, setselectedPart] = useState("Select Part");
  const [selectedQuantity, setselectedQuantity] = useState(null);
  const [selectedPartLocation, setselectedPartLocation] = useState(
    "Select location of part"
  );
  const [projectParts, setProjectParts] = useRecoilState(store.projectParts);
  const [partData, setPartData] = useState([]);
  const [partLocationData, setPartLocationData] = useState([]);

  // endPoints
  const GET_PARTS_ENDPOINT = "Parts/GetAllParts";
  const GET_PARTS_LOCATION_ENDPOINT = "Locations/LocationsList";

  const updateFormData = async () => {
    const partDataRes = await apiWorkOrderServices(GET_PARTS_ENDPOINT, "GET");
    const partLocationDataRes = await apiWorkOrderServices(
      GET_PARTS_LOCATION_ENDPOINT,
      "GET"
    );
    setPartData(partDataRes);
    setPartLocationData(partLocationDataRes);
  };

  useEffect(() => {
    updateFormData();
  }, []);

  //part location search input
  const [partLocationSearch, setPartLocationSearch] = useState("");
  //part category search input
  const [partSearch, setPartSearch] = useState("");

  //filter part and location data
  const filteredPartData = partData.filter((item) => {
    return item.partName.toLowerCase().includes(partSearch.toLowerCase());
  });
  const filteredPartLocationData = partLocationData.filter((item) => {
    return item.locationName
      .toLowerCase()
      .includes(partLocationSearch.toLowerCase());
  });

  const handlePartSelect = (eventKey) => {
    setselectedPart(eventKey);
    setPartSearch("");
  };
  const handlePartLocationSelect = (eventKey) => {
    setselectedPartLocation(eventKey);
    setPartLocationSearch("");
  };

  const handleSubmitParts = () => {
    if (selectedPart !== "Select Part" && selectedQuantity !== null) {
      const selectedPartId = partData.find(
        (item) => item.partName === selectedPart
      ).id;
      const part = {
        id: selectedPartId,
        part: selectedPart,
        quantity: selectedQuantity,
      };
      setProjectParts([...projectParts, part]);
    }
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
                    {filteredPartData.map((item, index) => (
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
                type="number"
                style={{
                  background: "#F1EFEF",
                  width: "100%",
                  border: "0",
                  height: "50px",
                  borderRadius: "5px",
                  padding: "0 15px",
                }}
                placeholder="Enter quantity required"
                onChange={(e) => setselectedQuantity(e.target.value)}
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
                    {filteredPartLocationData.map((item, index) => (
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
            <button className="cancel-btn" onClick={props.onHide}>
              Cancel
            </button>
            <Link
              to=""
              className="delate-btn"
              onClick={() => {
                handleSubmitParts();
                props.onHide();
              }}
            >
              Add
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddPartsModal;
