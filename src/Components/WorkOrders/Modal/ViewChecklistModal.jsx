import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import ArrowLeft from "../../../Assets/Icons/ArrowLeft";
import ArrowRight from "../../../Assets/Icons/ArrowRight";
import { Form } from "react-bootstrap";

const ViewChecklistModal = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalSections = 2;

  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalSections));
  };

  const handleBackClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
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
            <span className="fs-16 fw-bold">Checklist</span>
            <span className="fs-14" style={{ color: "#72777A" }}>
              View filled in checklist
            </span>
          </div>
          <div className="order-request washroom-right-content responses-cont">
            <div className="response-checklist">
              <div className="fs-15 fw-bold" style={{ color: "#6C5B51" }}>
                HSE Zone 2 Checklist
              </div>
              <d iv className="response-pagination d-flex align-items-center">
                <div className="page-number fs-14">
                  Page {currentPage} of {totalSections}
                </div>
                <div className="pagination-btn">
                  <button
                    className="back-btn"
                    onClick={handleBackClick}
                    disabled={currentPage === 1}
                  >
                    Back <ArrowLeft />
                  </button>
                  <button
                    className="next-btn"
                    onClick={handleNextClick}
                    disabled={currentPage === totalSections}
                  >
                    <ArrowRight /> Next
                  </button>
                </div>
              </d>
            </div>

            <div className="response-list-content">
              {currentPage === 1 ? <SectionOne /> : <SectionTwo />}
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
              Download
            </button>
            <Link to="" className="delate-btn" onClick={props.onHide}>
              Close
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const SectionOne = () => {
  return (
    <>
      <div className="response-item">
        <div
          className="fs-13 fw-bold mb-3"
          style={{ color: "#D57D2A", textTransform: "uppercase" }}
        >
          SECTION 1: flammable & risk materials check
        </div>
        <Form.Check
          inline
          label="Has the power to the dispenser been shut down?"
          name="group1"
          type="checkbox"
          id="response-checkbox-1"
        />
        <div className="pl-25">
          <input className="res-input mb-3" type="text" value="Yes" />
        </div>
        <Form.Check
          inline
          label="Is there any visible fuel leak from the dispenser?"
          name="group2"
          type="checkbox"
          id="response-checkbox-2"
        />
        <div className="pl-25">
          <input className="res-input mb-3" type="text" value="Yes" />
        </div>
        <Form.Check
          inline
          label="Are there any naked flames on site?"
          name="group1"
          type="checkbox"
          id="response-checkbox-3"
        />
        <div className="pl-25">
          <input className="res-input mb-3" type="text" value="Yes" />
        </div>
        <Form.Check
          inline
          label="Have you checked for naked live wires/"
          name="group2"
          type="checkbox"
          id="response-checkbox-4"
        />
        <div className="pl-25">
          <input className="res-input mb-3" type="text" value="Yes" />
        </div>
      </div>
    </>
  );
};

const SectionTwo = () => {
  return (
    <>
      <div className="response-item">
        <div
          className="fs-13 fw-bold mb-3"
          style={{ color: "#D57D2A", textTransform: "uppercase" }}
        >
          SECTION 2: PERSONAL safety check
        </div>
        <Form.Check
          inline
          label="Are you wearing all the required PPEs"
          name="group1"
          type="checkbox"
          id="response-checkbox-1"
        />
        <div className="pl-25">
          <input className="res-input mb-3" type="text" value="Yes" />
        </div>
        <Form.Check
          inline
          label="Are you on-site with an actual work partner (Safety Buddy)?"
          name="group2"
          type="checkbox"
          id="response-checkbox-2"
        />
        <div className="pl-25">
          <input className="res-input mb-3" type="text" value="Yes" />
        </div>

        <Form.Check
          inline
          label="Is your work partner within 10 meters from where you are working?"
          name="group1"
          type="checkbox"
          id="response-checkbox-3"
        />
        <div className="pl-25">
          <input className="res-input mb-3" type="text" value="Yes" />
        </div>
        <Form.Check
          inline
          label="Provide the name of your work partner."
          name="group2"
          type="checkbox"
          id="response-checkbox-4"
        />
        <div className="pl-25">
          <input className="res-input mb-3" type="text" value="Elvis Mwangi" />
        </div>
      </div>
    </>
  );
};

export default ViewChecklistModal;
