import React from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const DiagnosisDetailsModal = (props) => {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="medium-modal"
    >
      <Modal.Body style={{ padding: "28px 30px" }}>
        <div className="delate-content">
          <div className="d-flex align-items-center gap-4">
            <span className="fs-16 fw-bold">Diagnosis Details</span>
            <span className="fs-14" style={{ color: "#72777A" }}>
              Information of diagnosis
            </span>
          </div>
          <div className="mt-4 pt-2 d-grid gap-4 modal-forms-content">
            <div className="col-md-12">
              <div className="fw-medium pb-2">PART</div>
              <div className="fs-14 lh-sm" style={{ color: "#71727A" }}>
                Mechanical meter
              </div>
            </div>
            <div className="col-md-12">
              <div className="fw-medium pb-2">Diagnosis</div>
              <div className="fs-14 lh-sm" style={{ color: "#71727A" }}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do.
                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do.
                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do.
              </div>
            </div>
            <div className="col-md-12">
              <div className="fw-medium pb-2">Solution</div>
              <div className="fs-14 lh-sm" style={{ color: "#71727A" }}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do.
                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do.
                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do.
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
            <Link to="" className="delate-btn" onClick={props.onHide}>
              Cancel
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DiagnosisDetailsModal;
