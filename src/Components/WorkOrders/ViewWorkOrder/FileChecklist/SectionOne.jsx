import React, { useState } from "react";
import { Dropdown, Form } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";

const SectionOne = () => {
  const [startDate, setStartDate] = useState(null);
  const [selectCategory, setSelectCategory] = useState("Select response");
  const assetCatagory = [
    { name: "Response 1" },
    { name: "Response 2" },
    { name: "Response 3" },
    { name: "Response 4" },
  ];
  const [selectCategorySearch, setSelectCategorySearch] = useState("");
  const filterassetCatagory = assetCatagory.filter((item) =>
    item.name.toLowerCase().includes(selectCategorySearch.toLowerCase())
  );
  const handleSelectCategory = (eventKey) => {
    setSelectCategory(eventKey);
    setSelectCategorySearch("");
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div
          className="fs-13 fw-bold text-uppercase"
          style={{ color: "#D57D2A" }}
        >
          SECTION 1: different input types
        </div>
        <button className="delate-btn">Save Draft</button>
      </div>
      <ul className="section-one">
        <li>
          <div className="fs-15 text-black">Text field input sample</div>
          <div className="row">
            <div className="col-md-5">
              <input
                type="text"
                className="check-input"
                placeholder="Enter response"
              />
            </div>
            <div className="col-md-7">
              <input
                type="text"
                className="check-input"
                placeholder="Comment"
              />
            </div>
          </div>
        </li>
        <li>
          <div className="fs-15 text-black">Radio button input sample</div>
          <div className="row">
            <div className="col-md-3">
              <div className="radio-buttons">
                <Form.Check
                  inline
                  label="Yes"
                  name="group1"
                  type="radio"
                  id={`inline-radio-1`}
                />
                <Form.Check
                  inline
                  label="No"
                  name="group1"
                  type="radio"
                  id={`inline-radio-2`}
                />
              </div>
            </div>
            <div className="col-md-7">
              <input
                type="text"
                className="check-input"
                placeholder="Comment"
              />
            </div>
          </div>
        </li>
        <li>
          <div className="fs-15 text-black">Checkbox input sample</div>
          <div className="row">
            <div className="col-md-2">
              <div className="section-checkbox">
                <Form.Check
                  inline
                  name="group1"
                  type="checkbox"
                  id={`inline-checkbox-2`}
                />
              </div>
            </div>
            <div className="col-md-7">
              <input
                type="text"
                className="check-input"
                placeholder="Comment"
              />
            </div>
          </div>
        </li>
        <li>
          <div className="fs-15 text-black">
            Switch option input sample - off
          </div>
          <div className="row">
            <div className="col-md-2">
              <div className="section-switch ">
                <Form.Check
                  type="switch"
                  id="custom-switch-1"
                  className="section-switch"
                />
              </div>
            </div>
            <div className="col-md-7">
              <input
                type="text"
                className="check-input"
                placeholder="Comment"
              />
            </div>
          </div>
        </li>
        <li>
          <div className="fs-15 text-black">Switch option input sample</div>
          <div className="row">
            <div className="col-md-2">
              <div className="section-switch">
                <Form.Check
                  type="switch"
                  id="custom-switch-2"
                  className="section-switch"
                />
              </div>
            </div>
            <div className="col-md-7">
              <input
                type="text"
                className="check-input"
                placeholder="Comment"
              />
            </div>
          </div>
        </li>
        <li>
          <div className="fs-15 text-black">
            Dropdown or select box input sample
          </div>
          <div className="row">
            <div className="col-md-5">
              <Dropdown
                className="select__form"
                onSelect={handleSelectCategory}
              >
                <Dropdown.Toggle
                  className={`select-title ${
                    selectCategory !== "Select response" ? "selected" : ""
                  }`}
                  style={{ height: "40px" }}
                >
                  {selectCategory}
                </Dropdown.Toggle>
                <Dropdown.Menu>
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
            <div className="col-md-7">
              <input
                type="text"
                className="check-input"
                placeholder="Commente"
              />
            </div>
          </div>
        </li>
        <li>
          <div className="fs-15 text-black">Date input sample</div>
          <div className="row">
            <div className="col-md-5">
              <div className="section-datePicker">
                <ReactDatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  disabledKeyboardNavigation
                  placeholderText="Select date"
                />
              </div>
            </div>
            <div className="col-md-7">
              <input
                type="text"
                className="check-input"
                placeholder="Comment"
              />
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default SectionOne;
