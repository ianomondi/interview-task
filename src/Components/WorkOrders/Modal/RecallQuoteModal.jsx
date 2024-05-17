import React from "react";
import Modal from "react-bootstrap/Modal";
import { FaCircleExclamation } from "react-icons/fa6";

const RecallQuoteModal = (props) => {
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
            <span className="fs-16 fw-bold ">RECALL QUOTE</span>
            <span className="fs-14 ps-3">
              Confirm and recall the quote submitted
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
                  color: "#72777A",
                }}
              >
                Please confirm that you want to recall this quote. The quote
                requester will be notified of this recall.
                <i className="fs-13 pt-4 d-block lh-sm">
                  <b> Note:</b> A quote that has been recalled will not be
                  considered for evaluation. You will need to re-submit the
                  quote for it to be considered.
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
            <button
              className="delate-btn"
              onClick={() => {
                props.handleRecallQuote();
                props.setShowSubmitQuoteContent(true);
              }}
            >
              Recall
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RecallQuoteModal;
