import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const WorkOrderSummary = () => {
  const [imageShow, setImageShow] = useState(false);
  const [videoShow, setVideoShow] = useState(false);
  const [documentShow, setDocumentShow] = useState(false);
  const handleClose = () => {
    setImageShow(false);
    setVideoShow(false);
    setDocumentShow(false);
  };

  return (
    <>
      <div className="order-details-content pb-lg-4">
        <div className="fs-16 fw-semibold">Summary</div>

        <div className="work-order-summary mt-5">
          <div
            className="fs-14 fw-semibold pb-4"
            style={{ color: "#00000061" }}
          >
            ASSET DETAILS
          </div>
          <div className="row" style={{ rowGap: "24px" }}>
            <div className="col-md-3">
              <div
                className="fs-14 fw-semibold pb-2"
                style={{ color: "#00000061" }}
              >
                Location
              </div>
              <div className="fs-14 fw-medium">Gigiri</div>
            </div>
            <div className="col-md-3">
              <div
                className="fs-14 fw-semibold pb-2"
                style={{ color: "#00000061" }}
              >
                Asset Category
              </div>
              <div className="fs-14 fw-medium">Pumps</div>
            </div>
            <div className="col-md-3">
              <div
                className="fs-14 fw-semibold pb-2"
                style={{ color: "#00000061" }}
              >
                Assets
              </div>
              <div className="fs-14 fw-medium">Pump1, Pump 2</div>
            </div>
          </div>
          <hr />
          <div
            className="fs-14 fw-semibold pb-4"
            style={{ color: "#00000061" }}
          >
            WORK ORDER DETAILS
          </div>
          <div className="row" style={{ rowGap: "24px" }}>
            <div className="col-md-3">
              <div
                className="fs-14 fw-semibold pb-2"
                style={{ color: "#00000061" }}
              >
                Work Order Title:
              </div>
              <div className="fs-14 fw-medium">Pump Maintenance</div>
            </div>
            <div className="col-md-3">
              <div
                className="fs-14 fw-semibold pb-2"
                style={{ color: "#00000061" }}
              >
                Category of Work:
              </div>
              <div className="fs-14 fw-medium">Engineering</div>
            </div>
            <div className="col-md-3">
              <div
                className="fs-14 fw-semibold pb-2"
                style={{ color: "#00000061" }}
              >
                Team:
              </div>
              <div className="fs-14 fw-medium">AZ Engineers</div>
            </div>
            <div className="col-md-3">
              <div
                className="fs-14 fw-semibold pb-2"
                style={{ color: "#00000061" }}
              >
                Worker:
              </div>
              <div className="fs-14 fw-medium">Not Assigned</div>
            </div>
            <div className="col-md-6">
              <div
                className="fs-14 fw-semibold pb-2"
                style={{ color: "#00000061" }}
              >
                Description:
              </div>
              <div className="fs-14 fw-medium" style={{ lineHeight: "1.3" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="fs-14 fw-semibold pb-2"
                style={{ color: "#00000061" }}
              >
                Priority:
              </div>
              <div className="fs-14 fw-bold" style={{ color: "#D57D2A" }}>
                HIGH
              </div>
            </div>
          </div>
          <hr />
          <div
            className="fs-14 fw-semibold pb-3"
            style={{ color: "#00000061" }}
          >
            COMPLETION DETAILS
          </div>
          <div className="row">
            <div className="col-md-3">
              <div
                className="fs-14 fw-semibold pb-2"
                style={{ color: "#00000061", letterSpacing: "-.4px" }}
              >
                Technician Signature Required?
              </div>
              <div className="fs-14 fw-medium">Yes</div>
            </div>
            <div className="col-md-3">
              <div
                className="fs-14 fw-semibold pb-2"
                style={{ color: "#00000061" }}
              >
                Estimated Hours
              </div>
              <div className="fs-14 fw-medium">20 Hours</div>
            </div>
          </div>
          <hr />
          <div
            className="fs-14 fw-semibold pb-3"
            style={{ color: "#00000061" }}
          >
            PROJECTED PARTS DETAILS
          </div>
          <div className="row">
            <div className="col-md-3 d-grid gap-2">
              <div className="fs-14 fw-medium">Part A - 100005, 3 Pieces</div>
              <div className="fs-14 fw-medium">Part A - 100005, 3 Pieces</div>
            </div>
          </div>
          <hr />
          <div
            className="fs-14 fw-semibold pb-3"
            style={{ color: "#00000061" }}
          >
            CHECKLIST DETAILS
          </div>
          <div className="row">
            <div className="col-md-3 d-grid gap-2">
              <div className="fs-14 fw-medium">Pump Nozzle Checklist</div>
              <div className="fs-14 fw-medium">Pump Monitor Checklist</div>
            </div>
          </div>
          <hr />
          <div
            className="fs-14 fw-semibold pb-3"
            style={{ color: "#00000061" }}
          >
            OTHER INFORMATION
          </div>
          <div className="row">
            <div className="col-md-3">
              <div
                className="fs-14 fw-medium"
                style={{ color: "rgba(0, 0, 0, 0.38)" }}
              >
                Files:
              </div>
              <div className="d-grid gap-2 mt-2">
                <button
                  onClick={() => setImageShow(true)}
                  className="fs-14 fw-medium text-start"
                  style={{ color: "#D57D2A" }}
                >
                  Pump1.jpg
                </button>
                <button
                  onClick={() => setVideoShow(true)}
                  className="fs-14 fw-medium text-start"
                  style={{ color: "#D57D2A" }}
                >
                  Pump1 Meter.mp4
                </button>
                <button
                  onClick={() => setDocumentShow(true)}
                  className="fs-14 fw-medium text-start"
                  style={{ color: "#D57D2A" }}
                >
                  Calibration manual.pdf
                </button>
              </div>
            </div>
          </div>
        </div>

        <Modal show={imageShow} onHide={handleClose} centered>
          <Modal.Body>
            <div className="delate-content p-2">
              <div className="d-flex align-items-center gap-4">
                <span className="fs-16 fw-bold">Image</span>
                <span className="fs-14" style={{ color: "#72777A" }}>
                  Pump1.jpg
                </span>
              </div>
              <div className="mt-4 pt-2 d-grid gap-4 modal-forms-content">
                <div className="col-md-12">
                  <img
                    src="/images/Pump1.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  />
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
                  href="/images/Pump1.jpg"
                  download
                  className="cancel-btn download-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
                <button className="delate-btn" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <Modal show={videoShow} onHide={handleClose} centered size="lg">
          <Modal.Body>
            <div className="delate-content p-2">
              <div className="d-flex align-items-center gap-4">
                <span className="fs-16 fw-bold">Video</span>
                <span className="fs-14" style={{ color: "#72777A" }}>
                  Pump1 Meter.mp4
                </span>
              </div>
              <div className="mt-4 pt-2 d-grid gap-4 modal-forms-content">
                <div className="col-md-12">
                  <video width="100%" height="auto" controls>
                    <source src="/images/Pump1 Meter.mp4" type="" />
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
                  href="/images/Pump1 Meter.mp4"
                  download
                  className="cancel-btn download-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
                <button className="delate-btn" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <Modal show={documentShow} onHide={handleClose} centered size="lg">
          <Modal.Body>
            <div className="delate-content p-2">
              <div className="d-flex align-items-center gap-4">
                <span className="fs-16 fw-bold">Document</span>
                <span className="fs-14" style={{ color: "#72777A" }}>
                  Calibration manual.pdf
                </span>
              </div>
              <div className="mt-4 pt-2 d-grid gap-4 modal-forms-content">
                <div className="col-md-12">
                  <iframe
                    title="pdf-viewer"
                    src="/images/Calibration manual.pdf"
                    width="100%"
                    height="500px"
                  ></iframe>
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
                  href="/images/Calibration manual.pdf"
                  download
                  className="cancel-btn download-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
                <button className="delate-btn" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <div className="details-buttons pt-lg-5 d-flex justify-content-between">
          <Link
            to="/work-orders/add-work-order/information"
            className="next-btn ms-0"
          >
            Previous
          </Link>
          <Link to="/work-orders" className="next-btn ms-0">
            Submit
          </Link>
        </div>
      </div>
    </>
  );
};

export default WorkOrderSummary;
