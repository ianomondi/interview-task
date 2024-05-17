import React from "react";
import Modal from "react-bootstrap/Modal";

const ViewImage = ({ onHide, show }) => {
  return (
    <Modal
      show={show.isShow}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="delate-content p-2">
          <div className="d-flex align-items-center gap-4">
            <span className="fs-16 fw-bold">Image</span>
            <span className="fs-14" style={{ color: "#72777A" }}>
              {show.file_name}
            </span>
          </div>
          <div className="mt-4 pt-2 d-grid gap-4 modal-forms-content">
            <div className="col-md-12">
              <img src={show.image} alt="" style={{ width: "100%" }} />
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
            <a
              href={show.image}
              download
              className="cancel-btn download-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
            <button className="delate-btn" onClick={onHide}>
              Close
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ViewImage;
