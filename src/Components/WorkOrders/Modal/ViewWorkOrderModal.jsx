import React from "react";
import Modal from "react-bootstrap/Modal";
import { FaCircleExclamation } from "react-icons/fa6";

const ViewWorkOrderModal = (props) => {
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
            <span className="fs-16 fw-bold ">View Work Order</span>
            <span className="fs-14 ps-3" style={{ color: "#72777A" }}>
              No related work order for this request
            </span>
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
                There is no work order tied to this request.
                <i className="fs-13 pt-4 d-block lh-sm">
                  <b> Note:</b> This could mean that the request is yet to be
                  converted to a <br className="d-none d-md-block" /> work order
                  or the request was rejected or the are pending approval for{" "}
                  <br className="d-none d-md-block" /> quotes.
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
            <button className="delate-btn" onClick={props.onHide}>
              Cancel
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ViewWorkOrderModal;
