import React from "react";

const ViewResponsesOne = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div
          className="fs-13 fw-bold text-uppercase"
          style={{ color: "#D57D2A" }}
        >
          SECTION 1: different input types summary
        </div>
      </div>
      <ul className="different-data ">
        {summaryData.map((item) => (
          <li key={item.title}>
            <div className="fs-15 text-black">{item.title}</div>
            <div className="fs-15" style={{color: "#71727A"}}>
              <b>Response:</b> {item.response}
            </div>
            <div className="fs-15" style={{color: "#71727A"}}>
              <b>Comment:</b> {item.comment}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

const summaryData = [
  {
    title: "Text field input sample",
    response: "Text field input sample",
    comment: "Text field input sample",
  },
  {
    title: "Radio button input sample",
    response: "Radio button input sample",
    comment: "Radio button input sample",
  },
  {
    title: "Checkbox input sample",
    response: "Checkbox input sample",
    comment: "Checkbox input sample",
  },
  {
    title: "Switch option input sample",
    response: "Switch option input sample",
    comment: "Switch option input sample",
  },
  {
    title: "Dropdown or select box input sample",
    response: "Dropdown or select box input sample",
    comment: "Dropdown or select box input sample",
  },
  {
    title: "Date input sample",
    response: "Date input sample",
    comment: "Date input sample",
  },
];

export default ViewResponsesOne;
