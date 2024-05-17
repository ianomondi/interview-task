import React from "react";
import Modal from "react-bootstrap/Modal";
import { FaCircleExclamation } from "react-icons/fa6";

const ApproveQuoteContractorModal = (props) => {
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
            <span className="fs-16 fw-bold ">Approve Quote</span>
            <span className="fs-14 ps-3">Approve contractor quote</span>
          </div>
          <div
            className="delate-warning"
            style={{
              background: "#F1EFEF",
              minHeight: "267px",
              display: "grid",
              alignItems: "center",
              textAlign: "center",
              padding: "20px",
              margin: "30px auto 0",
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                margin: "0 auto 0",
                maxWidth: "463px",
              }}
            >
              <FaCircleExclamation
                style={{ color: "#D57D2A", fontSize: "70px" }}
              />
              <div
                className="fs-19 fw-medium "
                style={{
                  lineHeight: "1.4",
                  marginTop: "10px",
                  color: "#292D32",
                }}
              >
                Please confirm quote approval. The request will be converted to
                a work order and assigned to this contractor in the process.
                <i className="fs-13 pt-4 d-block lh-sm">
                  <b> Note:</b> This will also close request for quotes and
                  contractors will not be able to submit further quotes.
                </i>
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
              Approve
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ApproveQuoteContractorModal;
