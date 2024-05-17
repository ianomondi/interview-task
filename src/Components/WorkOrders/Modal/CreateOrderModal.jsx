import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FaCircleExclamation } from "react-icons/fa6";
import CreateOrderErrorModal from "./CreateOrderErrorModal";

const CreateOrderModal = (props) => {
  const [modalShow, setModalShow] = useState(false);

  const handleCreateOrder = () => { 
    setModalShow(true); 
    props.onHide();
  };

  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="medium-modal"
      >
        <Modal.Body style={{ padding: "28px 30px" }}>
          <div className="delate-content">
            <div className="">
              <span className="fs-16 fw-bold ">Create Work Order</span>
              <span className="fs-14 ps-3">
                Convert the request to a work order
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
                  className="fs-20 fw-medium "
                  style={{
                    lineHeight: "1.4",
                    marginTop: "10px",
                    color: "#292D32",
                  }}
                >
                  Please confirm that you want to convert the request to a work
                  order.
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
              <button className="delate-btn" onClick={handleCreateOrder}>
                Create
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <CreateOrderErrorModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default CreateOrderModal;
