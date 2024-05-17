import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Nav, Tab } from "react-bootstrap";
import FileChecklist from "./FileChecklist/FileChecklist";
import ViewResponses from "./ViewResponses/ViewResponses";

const ViewAssetsChecklist = ({ toggleChecklist }) => {
  const mainNextClick = () => {
    toggleChecklist();
  };

  return (
    <div className="order-request washroom-right-content responses-cont horizonScroll">
      <div className="washroom-title">
        <button onClick={mainNextClick} className="fw-bold">
          <FaChevronLeft /> BACK TO CHECKLIST LIST
        </button>
      </div>

      <Tab.Container defaultActiveKey="first">
        <Nav variant="pills" className="checklist-link-nav">
          <Nav.Item>
            <Nav.Link eventKey="first">Fill Checklist</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">View Responses</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="first">
            <FileChecklist toggleChecklist={toggleChecklist}/>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <ViewResponses />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default ViewAssetsChecklist;
