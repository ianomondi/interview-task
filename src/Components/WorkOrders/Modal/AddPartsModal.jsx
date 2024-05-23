import React, { useContext, useState } from "react";
import { Dropdown } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import SearchIcon from "../../../Assets/Icons/SearchIcon";
import { WorkOrderFormContext } from "../../../Providers/WorkOrderFormProvider";

const AddPartsModal = (props) => {
  const {formData, setFormData } = useContext(WorkOrderFormContext)
  const [selectedPart, setselectedPart] = useState("Select Part");
  const [selectedPartLocation, setselectedPartLocation] = useState(
    "Select location of part"
  );

  //Dummy part and location data
  
  const partLocationData = [
    { name: "Select  " },
    { name: "location  " },
    { name: "Part" },
    { name: "location 2" },
    { name: "location 3" },
    { name: "location 4" },
  ];

  //part location search input
  const [partLocationSearch, setPartLocationSearch] = useState("");
  //part category search input
  const [partSearch, setPartSearch] = useState("");

// {
//   "spareId": 1,
//   "quantity": 10,
//   "locationId": 10
// }

  //filter part and location data
  const filteredPartData = props.partData.filter((item) => {
    return item.partName.toLowerCase().includes(partSearch.toLowerCase());
  });
  const filteredPartLocationData = partLocationData.filter((item) => {
    return item.name.toLowerCase().includes(partLocationSearch.toLowerCase());
  });

  const handlePartSelect = (eventKey) => {
    const values = eventKey.split('$')

    setselectedPart({
      spareId: Number(values[0]),
      name: values[1], 
      quantity: 0,
    });
    setPartSearch("");
  };
  const handlePartLocationSelect = (eventKey) => {
    setselectedPartLocation(eventKey);
    setPartLocationSearch("");
  };

  function handleQuantityChange(event){
    const { value } = event.target
    setselectedPart(prev => ({...prev, quantity: Number(value)}))
  }

  function handleAddPart(){
    if (selectedPart === 'Select Part'){
      props.onHide()
    }

    setFormData((prev) => {
      const existingParts = prev.projectedParts
      existingParts.push(selectedPart)
      return {
        ...prev,
        projectedParts: existingParts
      }
    })
    props.onHide()
  }

  console.log(formData)
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
                  {selectedPart === 'Select Part' ? 'Select Part': selectedPart.name}
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
                      <Dropdown.Item key={index} eventKey={item.id + '$' + item.partName}>
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
                onChange={handleQuantityChange}
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
