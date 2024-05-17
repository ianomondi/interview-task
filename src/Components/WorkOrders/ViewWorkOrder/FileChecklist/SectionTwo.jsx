import React from "react";
import { Form } from "react-bootstrap";

const SectionTwo = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div
          className="fs-13 fw-bold text-uppercase"
          style={{ color: "#D57D2A" }}
        >
          SECTION 2: GENERAL
        </div>
        <button className="delate-btn">Save Draft</button>
      </div>
      <ul className="section-one">
        {generalData.map((item) => (
          <li key={item}>
            <div className="fs-15 text-black">{item.title}</div>
            <div className="row">
              <div className="col-md-1">
                <div className="section-checkbox">
                  <Form.Check
                    inline
                    name="group1"
                    type="checkbox"
                    id={`inline-checkbox-${item.id}`}
                  />
                </div>
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

const generalData = [
  {
    id: 1,
    title: " System free of air?",
    comment: "Comment",
  },
  {
    id: 2,
    title: "Fuel clean, clear and suitable for tests?",
    comment: "Comment",
  },
  {
    id: 3,
    title: "Free of damage to meter and equipment which may affect function",
    comment: "Comment",
  },
  {
    id: 4,
    title: "Dispenser in suitably good working conditions",
    comment: "Comment",
  },
  {
    id: 5,
    title: "Dispenser is not able to deliver before reset of display",
    comment: "Comment",
  },
  {
    id: 6,
    title: "Both quantity and value display & dials visible and legible",
    comment: "Comment",
  },
  {
    id: 7,
    title:
      "All dial apertures clearly denominated for quantity and value indications",
    comment: "Comment",
  },
  {
    id: 8,
    title: "A non resetable totaliser fitted (in addition)",
    comment: "Comment",
  },
  {
    id: 9,
    title: "Hose is not leaking & is not expandable",
    comment: "Comment",
  },
  {
    id: 10,
    title: "Hose length does not exceed 5 meters",
    comment: "Comment",
  },
];

export default SectionTwo;
