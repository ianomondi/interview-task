import React from "react";
import Modal from "react-bootstrap/Modal";

const ExtendRFQTimeModal = (props) => {
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
            <span className="fs-16 fw-bold ">Extend RFQ/ Diagnosis Time</span>
            {/* <span className="fs-14 ps-3">End the quoting session</span> */}
          </div>
          <div className="fs-14 pt-4" style={{ color: "#72777A" }}>
            Add more time to get quotes
          </div>
          <div className="pt-4">
            <div className="fs-14 fw-medium text-black pb-3">
              Current Deadline
            </div>
            <div className="fs-20 fw-bold" style={{ color: "#D57D2A" }}>
              18/04/2024 10:30 AM
            </div>
          </div>
          <div className="pt-4">
            <label className="fw-medium pb-2">Time Extension (Hours)</label>
            <input
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
              placeholder="Enter the time extension in hours"
            />
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
              Save
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ExtendRFQTimeModal;
