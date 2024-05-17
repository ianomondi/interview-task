import React from "react";
import Modal from "react-bootstrap/Modal";
import { FiPlus } from "react-icons/fi";

const ActivityModal = (props) => {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="medium-modal"
    >
      <Modal.Body style={{ padding: "28px 30px" }}>
        <div className="delate-content">
          <div className="d-flex align-items-center gap-4 mb-2">
            <span className="fs-16 fw-bold">Activity Logs</span>
            <span className="fs-14" style={{ color: "#72777A" }}>
              Work order activity logs
            </span>
          </div>
          <div className="activity-4">
            {activityData.map((item) => (
              <div className="activity-contents" key={item.id}>
                <div className="pluse-icon">
                  <FiPlus />
                </div>
                <div className="activity-text">
                  <div className="d-flex align-items-center justify-content-between pb-2">
                    <div className="fs-16 fw-bold orange-c">{item.name}</div>
                    <div className="fs-14" style={{ color: "#6C5B51" }}>
                      {item.time}
                    </div>
                  </div>
                  <div className="fs-16 fw-bold" style={{ color: "#6C5B51" }}>
                    Created Work Order - {item.orderTitle}
                  </div>
                  <div
                    className="fs-14 fw-medium pt-1"
                    style={{ color: "#6C5B51" }}
                  >
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
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
            <button className="delate-btn" onClick={props.onHide}>
              Close
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const activityData = [
  {
    id: 0,
    name: "Vivian Keya",
    orderTitle: "CM-23-07-0005",
    desc: "Pump Leakage at Rongai Station",
    time: "23-01-2024 8:55 AM",
  },
  {
    id: 1,
    name: "Vivian Keya",
    orderTitle: "CM-23-07-0005",
    desc: "Pump Leakage at Rongai Station",
    time: "23-01-2024 8:55 AM",
  },
  {
    id: 2,
    name: "Vivian Keya",
    orderTitle: "CM-23-07-0005",
    desc: "Pump Leakage at Rongai Station",
    time: "23-01-2024 8:55 AM",
  },
  {
    id: 3,
    name: "Vivian Keya",
    orderTitle: "CM-23-07-0005",
    desc: "Pump Leakage at Rongai Station",
    time: "23-01-2024 8:55 AM",
  },
  {    
    id: 4,
    name: "Vivian Keya",
    orderTitle: "CM-23-07-0005",
    desc: "Pump Leakage at Rongai Station",
    time: "23-01-2024 8:55 AM",
  },
];

export default ActivityModal;
