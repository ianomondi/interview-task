import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import SearchIcon from "../../../Assets/Icons/SearchIcon";

const SummaryEditOtherCostsModal = ({ show, data, onHide }) => {
  const costCategoryData = [
    { name: "Meals  " },
    { name: "Category  " },
    { name: "Cost" },
  ];
  //get search input
  const [costCategorySearch, setCostCategorySearch] = useState("");

  const [selectCostCat, setSelectCat] = useState("Select cost category");

  //update category by old data
  useEffect(() => {
    if (data?.category) {
      setSelectCat(data.category);
    }
  }, [data]);

  const filterCostCategoryData = costCategoryData.filter((item) =>
    item.name.toLowerCase().includes(costCategorySearch.toLowerCase())
  );

  const handleSelectWorker = (eventKey) => {
    setCostCategorySearch("");
    setSelectCat(eventKey);
  };

  return (
    <Modal
      onHide={onHide}
      show={show}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="medium-modal"
    >
      <Modal.Body style={{ padding: "28px 30px" }}>
        <div className="delate-content">
          <div className="d-flex align-items-center gap-4">
            <span className="fs-16 fw-bold">Edit Other Costs</span>
            <span className="fs-14" style={{ color: "#72777A" }}>
              Provide any extra costs incurred in doing the work.
            </span>
          </div>
          <div className="mt-4 pt-2 d-grid gap-4 modal-forms-content">
            <div className="col-md-12">
              <label className="fw-medium pb-2">Cost Description</label>
              <input
                defaultValue={data?.description}
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
              <label className="fw-medium pb-2">Cost Category</label>
              <Dropdown className="select__form" onSelect={handleSelectWorker}>
                <Dropdown.Toggle
                  className={`select-title ${
                    selectCostCat !== "Select cost category" ? "selected" : ""
                  }`}
                  style={{ height: "50px" }}
                >
                  {selectCostCat}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <form className="dropdown-search">
                    <button disabled>
                      <SearchIcon />
                    </button>
                    <input
                      onChange={(e) => setCostCategorySearch(e.target.value)}
                      value={costCategorySearch}
                      type="text"
                      placeholder="Search"
                    />
                  </form>
                  <div className="dropdown-item-content">
                    {filterCostCategoryData.map((item, index) => (
                      <Dropdown.Item key={index} eventKey={item.name}>
                        {item.name}
                      </Dropdown.Item>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col-md-12">
              <label className="fw-medium pb-2">Quantity</label>
              <input
                defaultValue={data?.quantity}
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
              <label className="fw-medium pb-2">Unit Cost (KES)</label>
              <input
                defaultValue={data.unit}
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
            <Link to="" className="delate-btn" onClick={onHide}>
              Add
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SummaryEditOtherCostsModal;
