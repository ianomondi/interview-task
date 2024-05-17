import React from "react"; 
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom"; 

const AddDiagnosisModal = (props) => {
  
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
            <span className="fs-16 fw-bold">Add Diagnosis</span>
            <span className="fs-14" style={{ color: "#72777A" }}>
              Provide diagnosis for work done
            </span>
          </div>
          <div className="mt-4 pt-2 d-grid gap-4 modal-forms-content">
            <div className="col-md-12">
              <label className="fw-medium pb-2">What was faulty?</label>
              <input
                type="text"
                style={{
                  background: "#F1EFEF",
                  width: "100%",
                  border: "0",
                  height: "50px",
                  borderRadius: "5px",
                  padding: "0 15px",
                  
                }}
                placeholder="Enter the part that was worked on"
              />
            </div>
            <div className="col-md-12">
              <label className="fw-medium pb-2">What caused the fault (Diagnosis)?</label>
              <textarea
                className="modal-input-box"
                type="text"
                style={{
                  background: "#F1EFEF",
                  width: "100%",
                  border: "0",
                  height: "150px",
                  borderRadius: "5px",
                  padding: "15px 15px",
                }}
                placeholder="Enter description of the issue"
              />
            </div>
            <div className="col-md-12">
              <label className="fw-medium pb-2">How did you solve the fault (Solution)?</label>
              <textarea
                className="modal-input-box"
                type="text"
                style={{
                  background: "#F1EFEF",
                  width: "100%",
                  border: "0",
                  height: "150px",
                  borderRadius: "5px",
                  padding: "15px 15px",
                }}
                placeholder="Enter solution provided"
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
            <button className="cancel-btn" onClick={props.onHide}>
              Cancel
            </button>
            <Link to="" className="delate-btn" onClick={props.onHide}>
              Add
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddDiagnosisModal;
