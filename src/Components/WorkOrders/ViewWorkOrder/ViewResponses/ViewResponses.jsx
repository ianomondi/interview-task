import React, { useState } from "react";
import ArrowLeft from "../../../../Assets/Icons/ArrowLeft";
import ArrowRight from "../../../../Assets/Icons/ArrowRight";
import ViewResponsesOne from "./ViewResponsesOne";
import ViewResponsesTwo from "./ViewResponsesTwo";
import ViewResponsesThree from "./ViewResponsesThree";

const ViewResponses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalSections = 3;

  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalSections));
  };

  const handleBackClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  return (
    <div className="view-checklist-box checklist-view-work">
      <div className="order-request p-0">
        <div className="response-checklist">
          <div className="fs-15 fw-bold" style={{ color: "#6C5B51" }}>
            Preventive Maintenance Worksheet Pumps / Dispensers
          </div>
          <div className="response-pagination d-flex align-items-center">
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
          </div>
        </div>
      </div>
      <div className="response-list-content">
        {currentPage === 1 ? (
          <ViewResponsesOne />
        ) : currentPage === 2 ? (
          <ViewResponsesTwo />
        ) : (
          <ViewResponsesThree />
        )}
      </div>
    </div>
  );
};

export default ViewResponses;
