import React, { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import ActivityModal from "../Modal/ActivityModal";

const ViewWorkSide = () => {
  const [activityShow, setActivityShow] = React.useState(false);
  const [eventKey, setEventKey] = React.useState("");
  //get url by using useLocation
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/work-orders/work-view") {
      setEventKey("0");
    } else if (location.pathname === "/work-orders/work-view/assets") {
      setEventKey("1");
    } else if (location.pathname === "/work-orders/work-view/costings") {
      setEventKey("2");
    } else if (location.pathname === "/work-orders/work-view/job-cards") {
      setEventKey("3");
    }
  }, [location]);

  return (
    eventKey && (
      <>
        <div className="order-sidebar-content p-0">
          <div className="p-4">
            <div className="fs-13 fw-medium">WORK ORDER INFORMATION</div>
            <div className="washroom-sidebar mt-3 align-items-end">
              <div>
                <div
                  className="fs-16 fw-bold pb-2"
                  style={{ color: "#6C5B51" }}
                >
                  Work Order
                </div>
                <div className="fs-20 fw-bold" style={{ color: "#D57D2A" }}>
                  CM-23-07-00005
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <button
                  onClick={() => setActivityShow(true)}
                  className="fs-16 fw-bold"
                  style={{ color: "#D57D2A", textDecoration: "underline" }}
                >
                  Activity Tracker
                </button>
                <ActivityModal
                  show={activityShow}
                  onHide={() => setActivityShow(false)}
                />
              </div>
            </div>
          </div>

          <Accordion defaultActiveKey={eventKey} className="view-work-sidebar">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <NavLink to="/work-orders/work-view" end>
                  Summary
                </NavLink>
              </Accordion.Header>
              <Accordion.Body>
                <div className="row pb-2">
                  <div className="col-12">
                    <div className="fs-14 fw-medium">Title</div>
                    <div
                      className="fs-14 fw-medium"
                      style={{ color: "#6C5B51" }}
                    >
                      Pumps Calibration
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="fs-14 fw-medium">Description:</div>
                    <div
                      className="fs-14 fw-medium"
                      style={{ color: "#6C5B51" }}
                    >
                      Quarterly pumps calibration for the Rongai station
                      dispensers
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="fs-14 fw-medium">Category of Work</div>
                    <div
                      className="fs-14 fw-medium"
                      style={{ color: "#6C5B51" }}
                    >
                      Engineering
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="fs-14 fw-medium">Priority</div>
                    <div
                      className="fs-14 fw-medium"
                      style={{ color: "#6C5B51" }}
                    >
                      High
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="fs-14 fw-medium">Primary Team Assigned</div>
                    <div
                      className="fs-14 fw-medium"
                      style={{ color: "#6C5B51" }}
                    >
                      AZ Engineers
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="fs-14 fw-medium">User Assigned</div>
                    <div
                      className="fs-14 fw-medium"
                      style={{ color: "#6C5B51" }}
                    >
                      Not Assigned
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="fs-14 fw-medium">Completion Details</div>
                    <div
                      className="fs-14 fw-medium"
                      style={{ color: "#6C5B51" }}
                    >
                      Is signature required: YES
                    </div>
                    <div
                      className="fs-14 fw-medium"
                      style={{ color: "#6C5B51" }}
                    >
                      Estimated hours: 4 Hours
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <NavLink to="/work-orders/work-view/assets">Assets</NavLink>
              </Accordion.Header>
              <Accordion.Body>
                <div className="row pb-2">
                  <div className="col-12">
                    <div className="fs-14 fw-medium">Projected Parts</div>
                    <div
                      className="fs-14 fw-medium"
                      style={{ color: "#6C5B51" }}
                    >
                      Part A - 005788  <span className="ps-2">3 Pieces</span>
                    </div>
                    <div
                      className="fs-14 fw-medium"
                      style={{ color: "#6C5B51" }}
                    >
                      Part B - 781912  <span className="ps-2">1 Pieces</span>
                    </div>
                    <div
                      className="fs-14 fw-medium"
                      style={{ color: "#6C5B51" }}
                    >
                      Part C - 005788  <span className="ps-2">1 Pieces</span>
                    </div>
                  </div>
                  {/* <div className="col-12 pt-2">
                    <div className="fs-14 fw-medium">Checklists</div>
                    <div
                      className="fs-14 fw-medium"
                      style={{ color: "#6C5B51" }}
                    >
                      Pump calibration checklist
                    </div>
                    <div
                      className="fs-14 fw-medium"
                      style={{ color: "#6C5B51" }}
                    >
                      Submersible repairs checklist
                    </div>
                    <div
                      className="fs-14 fw-medium"
                      style={{ color: "#6C5B51" }}
                    >
                      HSE Zone 2 checklist
                    </div>
                  </div> */}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <NavLink to="/work-orders/work-view/costings">Costings</NavLink>
              </Accordion.Header>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <NavLink to="/work-orders/work-view/job-cards">
                  Job Cards
                </NavLink>
              </Accordion.Header>
            </Accordion.Item>
          </Accordion>
        </div>
      </>
    )
  );
};

export default ViewWorkSide;
