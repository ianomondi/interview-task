import React from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const AddLocationGroupingModal = (props) => {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="medium-modal"
    >
      <Modal.Body style={{ padding: "28px 30px" }}>
        <div className="delate-content">
          <div className="d-md-flex align-items-center gap-4">
            <span className="fs-16 fw-bold">Add Location Grouping</span>
            <div className="fs-14 pt-2 pt-md-0" style={{ color: "#72777A" }}>
              Add a new location grouping
            </div>
          </div>
          <div className="mt-4 pt-2 row row-gap-4 modal-forms-content">
            <div className="col-md-12">
              <label className="fw-medium pb-2">Location Grouping </label>
              <input
                className="modal-input-box"
                type="text"
                style={{
                  background: "#F1EFEF",
                  width: "100%",
                  border: "0",
                  height: "50px",
                  borderRadius: "5px",
                  padding: "0 15px",
                }}
                placeholder="Enter location grouping name"
              />
            </div>
            <div className="col-md-12">
              <label className="fw-medium pb-2">Description</label>
              <textarea
                className="modal-input-box"
                type="text"
                style={{
                  background: "#F1EFEF",
                  width: "100%",
                  border: "0",
                  height: "90px",
                  borderRadius: "5px",
                  padding: "15px 15px",
                }}
                placeholder="Enter location grouping description"
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
              Save
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddLocationGroupingModal;
