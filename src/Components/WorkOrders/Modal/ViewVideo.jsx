import React from "react";
import Modal from "react-bootstrap/Modal";

const ViewVideo = ({ show, onHide }) => {
  return (
    <Modal
      show={show.isShow}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
    >
      <Modal.Body>
        <div className="delate-content p-2">
          <div className="d-flex align-items-center gap-4">
            <span className="fs-16 fw-bold">Video</span>
            <span className="fs-14" style={{ color: "#72777A" }}>
              {show.file_name}
            </span>
          </div>
          <div className="mt-4 pt-2 d-grid gap-4 modal-forms-content">
            <div className="col-md-12">
              <video width="100%" height="auto" controls>
                <source src={show.video} type="" />
              </video>
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
              href={show.video}
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

export default ViewVideo;
