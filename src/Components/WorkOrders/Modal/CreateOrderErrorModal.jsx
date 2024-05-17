import React from "react";
import Modal from "react-bootstrap/Modal";
import { FaCircleExclamation } from "react-icons/fa6";

const CreateOrderErrorModal = (props) => {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="medium-modal"
      animation={false}
    >
      <Modal.Body style={{ padding: "28px 30px" }}>
        <div className="delate-content">
          <div className="">
            <span className="fs-16 fw-bold ">Create Work Order Error</span>
            <span className="fs-14 ps-3">
              Error encountered creating work order
            </span>
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
              marginTop: "30px",
              borderRadius: "5px",
            }}
          >
            <div>
              <FaCircleExclamation
                style={{ color: "#D57D2A", fontSize: "70px" }}
              />
              <div
                className="fs-20 fw-medium "
                style={{
                  lineHeight: "1.4",
                  marginTop: "10px",
                  color: "#292D32",
                }}
              >
                This request cannot be converted to a work order as it has an
                ongoing request for quotes.
                <br />
                <br />
                Kindly approve a quote to convert this request to a work order
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
            {/* <button className="cancel-btn" onClick={props.onHide}>
              Cancel
            </button> */}
            <button className="delate-btn" onClick={props.onHide}>
              Okay
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CreateOrderErrorModal;
