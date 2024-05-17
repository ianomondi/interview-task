import React from "react";
import Modal from "react-bootstrap/Modal";
import { FaCircleCheck } from "react-icons/fa6";

const ResumeModal = (props) => {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="medium-modal"
    >
      <Modal.Body style={{ padding: "28px 30px" }}>
        <div className="delate-content">
          <div className="">
            <span className="fs-16 fw-bold ">Resume Work</span>
            <span className="fs-14 ps-3">Resume work that was on hold</span>
          </div>
          <div
            className="delate-warning"
            style={{
              background: "#F1EFEF",
              height: "267px",
              display: "grid",
              alignItems: "center",
              textAlign: "center",
              padding: "20px",
              marginTop: "30px",
              borderRadius: "5px",
            }}
          >
            <div>
              <FaCircleCheck style={{ color: "#D57D2A", fontSize: "70px" }} />
              <div
                className="fs-20 fw-medium "
                style={{
                  lineHeight: "1.4",
                  marginTop: "10px",
                  color: "#72777A",
                }}
              >
                Please confirm that you want to resume the <br /> work that was
                on hold.
              </div>
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
            <button className="delate-btn" onClick={props.onHide}>
              Resume
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ResumeModal;
