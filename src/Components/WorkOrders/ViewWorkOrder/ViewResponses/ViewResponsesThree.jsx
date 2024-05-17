import React from "react";

const ViewResponsesThree = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div
          className="fs-13 fw-bold text-uppercase"
          style={{ color: "#D57D2A" }}
        >
          SECTION 3: TOTALIZER READINGS
        </div>
      </div>
      <ul className="different-data ">
        {summaryData.map((item) => (
          <li key={item.title}>
            <div className="fs-15 text-black">{item.title}</div>
            <div className="fs-15" style={{ color: "#71727A" }}>
              <b>Response:</b> {item.response}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

const summaryData = [
  {
    title: "System free of air?",
    response: "Yes",
  }, 
  {
    title: "Fuel clean, clear and suitable for tests?",
    response: "Yes",
  }, 
  {
    title: "Free of damage to meter and equipment which may affect function",
    response: "Yes",
  }, 
  {
    title: "Dispenser in suitably good working conditions",
    response: "Yes",
  }, 
  {
    title: "Dispenser is not able to deliver before reset of display",
    response: "Yes",
  }, 
  {
    title: "Both quantity and value display & dials visible and legible",
    response: "Yes",
  }, 
  {
    title: "All dial apertures clearly denominated for quantity and value indications",
    response: "Yes",
  }, 
  {
    title: "A non resetable totaliser fitted (in addition)",
    response: "Yes",
  }, 
  {
    title: "Hose is not leaking & is not expandable",
    response: "Yes",
  }, 
  {
    title: "Hose length does not exceed 5 meters",
    response: "Yes",
  }, 
];

export default ViewResponsesThree;
