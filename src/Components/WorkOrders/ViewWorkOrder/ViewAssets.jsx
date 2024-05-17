import React, { useState } from "react";
import DeleteIcon from "../../../Assets/Icons/DeleteIcon";
import EditIcon2 from "../../../Assets/Icons/EditIcon2";
import { Accordion, Nav, Tab } from "react-bootstrap";
import ViewIcon2 from "../../../Assets/Icons/ViewIcon2";
import ArrowRight from "../../../Assets/Icons/ArrowRight";
import ArrowLeft from "../../../Assets/Icons/ArrowLeft";
import AddUsedPartsModal from "../Modal/AddUsedPartsModal";
import AddReturnedPartsModal from "../Modal/AddReturnedPartsModal";
import EditReturnedPartsModal from "../Modal/EditReturnedPartsModal";
import AddDiagnosisModal from "../Modal/AddDiagnosisModal";
import DiagnosisDetailsModal from "../Modal/DiagnosisDetailsModal";
import DeleteModal from "../Modal/DeleteModal";
import AddChecklistModal from "../Modal/AddChecklistModal";
import DownloadIcon from "../../../Assets/Icons/DownloadIcon";
import EditUsedPartsModal from "../Modal/EditUsedPartsModal";
import ViewChecklistModal from "../Modal/ViewChecklistModal";
import ViewAssetsChecklist from "./ViewAssetsChecklist";

const ViewAssets = () => {
  const [addUsedPartsShow, setAddUsedPartsShow] = useState(false);
  const [addReturnedPartsShow, setAddReturnedPartsShow] = useState(false);
  const [editReturnedPartsShow, setEditReturnedPartsShow] = useState(false);
  const [addDiagnosisShow, setAddDiagnosisShow] = useState(false);
  const [diagnosisDetailsShow, setDiagnosisDetailsShow] = useState(false);
  const [delateModalShow, setDelateModalShow] = useState(false);
  const [checkListShow, setCheckListShow] = useState(false);
  const [viewCheckListShow, setViewCheckListShow] = useState(false);
  const [editUsedShow, setEditUsedShow] = useState(false);
  const [isBackActive, setIsBackActive] = useState(true);
  const [editData, setEditData] = useState({});
  const [editReturnData, setEditReturnData] = useState({});
  const [showChecklist, setShowChecklist] = useState(false);

  const activateBackButton = () => {
    setIsBackActive(true);
  };

  const activateNextButton = () => {
    setIsBackActive(false);
  };
 
  const toggleChecklist = () => {
    setShowChecklist(!showChecklist);
  };

  return (
    <>
     {!showChecklist && (
      <div className="order-request washroom-right-content responses-cont">
      <div className="washroom-title">
        <div className="fs-13 fw-medium">WORK ORDER ASSETS</div>
      </div>

      <div className="order-request mt-4 p-0">
        <div className="response-checklist view-asset-button">
          <div className="fs-15 fw-bold" style={{ color: "#6C5B51" }}>
            Pump 1 - Serial No. 00578
          </div>
          <div className="response-pagination d-flex align-items-center">
            <div className="pagination-btn">
              <button
                className={isBackActive ? "back-btn " : "back-btn"}
                onClick={activateBackButton}
              >
                Back <ArrowLeft />
              </button>
              <button
                className={
                  isBackActive ? "next-btn active" : "next-btn active"
                }
                onClick={activateNextButton}
              >
                <ArrowRight /> Next
              </button>
            </div>
          </div>
        </div>
        <Accordion defaultActiveKey="1">
          {/* CHECKLIST INFORMATION */}
          <Accordion.Item eventKey="1" className="request-box">
            <Accordion.Header className="request-box-title">
              <div className="fs-13 fw-medium">
                ASSET CHECKLIST INFORMATION
              </div>
            </Accordion.Header>
            <Accordion.Body className="request-box-body p-0">
              <div
                className="table-responsive-sm request_table"
                style={{ maxWidth: "100%" }}
              >
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Work Order Checklists</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {checklistData.map((item) => (
                      <tr key={item.id}>
                        <td>{item.category}</td>
                        <td></td>
                        <td>
                          <div className="button-con">
                            <button onClick={toggleChecklist}>
                              <ViewIcon2 />
                            </button>
                            <button>
                              <DownloadIcon />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-end">
                {/* <button
                  className="add-button my-3"
                  onClick={() => setCheckListShow(true)}
                >
                  Add Checklist
                </button> */}
                <AddChecklistModal
                  show={checkListShow}
                  onHide={() => setCheckListShow(false)}
                />
                <ViewChecklistModal
                  show={viewCheckListShow}
                  onHide={() => setViewCheckListShow(false)}
                />
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* PARTS INFORMATION */}
          <Accordion.Item eventKey="2" className="request-box">
            <Accordion.Header className="request-box-title">
              <div className="fs-13 fw-medium">PARTS INFORMATION</div>
            </Accordion.Header>
            <Accordion.Body className="request-box-body p-0">
              <Tab.Container defaultActiveKey="second">
                <Nav className="table__names" variant="pills">
                  <Nav.Item>
                    <Nav.Link eventKey="second">Used Parts</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Returned parts</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="second">
                    <div
                      className="table-responsive-sm request_table"
                      style={{ maxWidth: "100%" }}
                    >
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Parts</th>
                            <th scope="col">Location</th>
                            <th scope="col">Quantity</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {partsData.map((item) => (
                            <tr key={item.id}>
                              <td>
                                {item.parts} - {item.serial}
                              </td>
                              <td>{item.location}</td>
                              <td>{item.quantity}</td>
                              <td>
                                <div className="button-con">
                                  <button
                                    onClick={() => {
                                      setEditData(item);
                                      setEditUsedShow(true);
                                    }}
                                  >
                                    <EditIcon2 />
                                  </button>
                                  <button
                                    onClick={() => setDelateModalShow(true)}
                                  >
                                    <DeleteIcon />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="text-start">
                      <button
                        className="add-button my-3"
                        onClick={() => setAddUsedPartsShow(true)}
                      >
                        Add Parts
                      </button>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div
                      className="table-responsive-sm request_table"
                      style={{ maxWidth: "100%" }}
                    >
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Parts</th>
                            {/* <th scope="col">Serial No.</th> */}
                            <th scope="col">Location</th>
                            <th scope="col">Quantity</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {partsData.map((item) => (
                            <tr key={item.id}>
                              <td>
                                {item.parts} - {item.serial}
                              </td>
                              <td>{item.location}</td>
                              <td>{item.quantity}</td>
                              <td>
                                <div className="button-con">
                                  <button
                                    onClick={() => {
                                      setEditReturnData(item);
                                      setEditReturnedPartsShow(true);
                                    }}
                                  >
                                    <EditIcon2 />
                                  </button>
                                  <button
                                    onClick={() => setDelateModalShow(true)}
                                  >
                                    <DeleteIcon />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="text-start">
                      <button
                        className="add-button my-3"
                        onClick={() => setAddReturnedPartsShow(true)}
                      >
                        Add Parts
                      </button>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Accordion.Body>
          </Accordion.Item>

          {/* DIAGNOSIS */}
          <Accordion.Item eventKey="3" className="request-box">
            <Accordion.Header className="request-box-title">
              <div className="fs-13 fw-medium">DIAGNOSIS</div>
            </Accordion.Header>
            <Accordion.Body className="request-box-body p-0">
              <div
                className="table-responsive-sm request_table"
                style={{ maxWidth: "100%" }}
              >
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Issue diagnosis and solution</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {diagnosisData.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="d-grid">
                            <div
                              className="fs-14"
                              style={{ color: "#1F2024" }}
                            >
                              PART: {item.part}
                            </div>
                            <div
                              className="fs-13"
                              style={{ color: "#71727A" }}
                            >
                              <b>Diagnosis:</b> {item.diagnosis}
                            </div>
                            <div
                              className="fs-13 pt-2"
                              style={{ color: "#71727A" }}
                            >
                              <b>Solution:</b> {item.solution}
                            </div>
                          </div>
                        </td>
                        <td></td>
                        <td>
                          <div className="button-con">
                            <button
                              onClick={() => setDiagnosisDetailsShow(true)}
                            >
                              <ViewIcon2 />
                            </button>

                            <button onClick={() => setDelateModalShow(true)}>
                              <DeleteIcon />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <DiagnosisDetailsModal
                  show={diagnosisDetailsShow}
                  onHide={() => setDiagnosisDetailsShow(false)}
                />
              </div>
              <div className="text-end">
                <button
                  className="add-button my-3"
                  onClick={() => setAddDiagnosisShow(true)}
                >
                  Add Diagnosis
                </button>
                <AddDiagnosisModal
                  show={addDiagnosisShow}
                  onHide={() => setAddDiagnosisShow(false)}
                />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div> )}

     {showChecklist && <ViewAssetsChecklist toggleChecklist={toggleChecklist}/>} 
     

      <AddUsedPartsModal
        show={addUsedPartsShow}
        onHide={() => setAddUsedPartsShow(false)}
      />
      <EditUsedPartsModal
        data={editData}
        show={editUsedShow}
        onHide={() => setEditUsedShow(false)}
      />

      <AddReturnedPartsModal
        show={addReturnedPartsShow}
        onHide={() => setAddReturnedPartsShow(false)}
      />
      <EditReturnedPartsModal
        data={editReturnData}
        show={editReturnedPartsShow}
        onHide={() => setEditReturnedPartsShow(false)}
      />

      <DeleteModal
        show={delateModalShow}
        onHide={() => setDelateModalShow(false)}
      />
    </>
  );
};

const partsData = [
  {
    id: 0,
    parts: "Part A ",
    serial: "005788",
    location: "Nairabi",
    quantity: "3",
  },
  {
    id: 1,
    parts: "Part B ",
    serial: "781912",
    location: "Mombasa",
    quantity: "1",
  },
  {
    id: 2,
    parts: "Part C ",
    serial: "562782",
    location: "Nairabi",
    quantity: "1",
  },
];

const checklistData = [
  {
    id: 0,
    category: "Pump calibration checklist",
  },
  {
    id: 1,
    category: "Submersible repairs checklist",
  },
  {
    id: 2,
    category: "HSE Zone 2 checklist",
  },
];

const diagnosisData = [
  {
    id: 0,
    part: "Mechanical Meter",
    diagnosis: "No movement on mechanical meter",
    solution:
      "Cleared dust and debris preventing the proper rotation of the meter sprockets and ...",
  },
  {
    id: 1,
    part: "Dispenser Board",
    diagnosis: "Burnt communication IC due to over current ",
    solution:
      "Connected dispenser to voltage stabilizer and replaced the burnt IC. Dispenser still on ...",
  },
  {
    id: 2,
    part: "Flow Meter",
    diagnosis: "Standard calibration",
    solution: "Calibration done. Certificate no. C5747-2024 provided.",
  },
];

export default ViewAssets;
