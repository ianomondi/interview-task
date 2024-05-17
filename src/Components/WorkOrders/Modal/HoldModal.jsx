import React from "react";
import Modal from "react-bootstrap/Modal";

const HoldModal = (props) => {
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
            <span className="fs-16 fw-bold ">Hold Work</span>
            <span style={{ color: "#72777A" }} className="fs-14 ps-3">
              Put work in progress on hold
            </span>
          </div>
          <div className="mt-4 pt-2 d-grid gap-4 modal-forms-content">
            <div className="col-md-12">
              <label className="fw-medium pb-2 fs-14">
                Add comments for putting work on hold
              </label>
              <textarea
                name=""
                style={{
                  background: "#F1EFEF",
                  width: "100%",
                  border: "0",
                  height: "150px",
                  borderRadius: "5px",
                  padding: "15px 15px",
                }}
                placeholder="Enter comment"
              ></textarea>
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
              Hold
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default HoldModal;
