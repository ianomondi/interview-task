import React from "react";

const SectionThree = ({ toggleChecklist }) => {
  const mainNextClick = () => {
    toggleChecklist();
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div
          className="fs-13 fw-bold text-uppercase"
          style={{ color: "#D57D2A" }}
        >
          SECTION 3: TOTALIZER READINGS
        </div>
        <button className="delate-btn" onClick={mainNextClick}>
          Save & Submit
        </button>
      </div>
      <ul className="section-one">
        {selectionData.map((item) => (
          <li key={item}>
            <div className="fs-15 text-black">{item.title}</div>
            <div className="row">
              <div className="col-md-5">
                <input
                  type="text"
                  className="check-input"
                  placeholder={item.enterResponse}
                />
              </div>
              <div className="col-md-7">
                <input
                  type="text"
                  className="check-input"
                  placeholder={item.comment}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

const selectionData = [
  {
    title: "Arrival 1st Test - Price",
    enterResponse: "Enter response",
    comment: "Comment",
  },
  {
    title: "Arrival 1st Test - Volume",
    enterResponse: "Enter response",
    comment: "Comment",
  },
  {
    title: "Arrival 1st Test - Tol",
    enterResponse: "Enter response",
    comment: "Comment",
  },
  {
    title: "Arrival 2nd Test - Price",
    enterResponse: "Enter response",
    comment: "Comment",
  },
  {
    title: "Arrival 2nd Test - Volume",
    enterResponse: "Enter response",
    comment: "Comment",
  },
  {
    title: "Arrival 2nd Test - Tol",
    enterResponse: "Enter response",
    comment: "Comment",
  },
  {
    title: "20l Fast Flow 1st Test",
    enterResponse: "Enter response",
    comment: "Comment",
  },
  {
    title: "20l Fast Flow 2nd Test",
    enterResponse: "Enter response",
    comment: "Comment",
  },
  {
    title: "20l Fast Flow 3rd Test",
    enterResponse: "Enter response",
    comment: "Comment",
  },
  {
    title: "20l Slow Flow 1st Test",
    enterResponse: "Enter response",
    comment: "Comment",
  },
];

export default SectionThree;
