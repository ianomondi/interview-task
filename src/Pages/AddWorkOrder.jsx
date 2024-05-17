import React from "react";
import "../Components/WorkOrders/WorkOrders.scss";
import OtherPageNav from "../Components/WorkOrders/AddWorkOrder/OtherPageNav";

import { NavLink, Outlet } from "react-router-dom";

const AddWorkOrder = () => {
  return (
    <div className="work-orders-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="work-header">
              <div className="fs-20"> Work Orders</div>
            </div>
          </div>
          <div className="col-lg-12">
            <OtherPageNav />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="order-details-area ">
              <div className="order-nav-content">
                <div className="fs-19 fw-bold">ADD WORK ORDER</div>
                <div className="order-nav-lists">
                  <NavLink to="/work-orders/add-work-order" end>
                    Assets
                  </NavLink>

                  <NavLink to="/work-orders/add-work-order/details">
                    Work Order Info
                  </NavLink>

                  <NavLink to="/work-orders/add-work-order/information">
                    Other Information
                  </NavLink>

                  <NavLink to="/work-orders/add-work-order/summary">
                    Summary
                  </NavLink>
                </div>
              </div>
              <div className="work-order-contents">
                <Outlet />
              </div>
            </div>
          </div>
          {/* <div className="col-lg-12">
            <div className="order-details-area ">
              <Tab.Container
                id="f3washroom-table"
                defaultActiveKey={tab ? tab : "assets"}
              >
                <div className="order-nav-content">
                  <div className="fs-19 fw-bold">CREATE WORK ORDER</div>
                  <Nav variant="pills" className="order-nav-lists">
                    <Nav.Item>
                      <Nav.Link
                        onClick={() => navigate("?tab=assets")}
                        eventKey="assets"
                      >
                        Assets
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        onClick={() => navigate("?tab=work-order-info")}
                        eventKey="work-order-info"
                      >
                        Work Order Info
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        onClick={() => navigate("?tab=other-information")}
                        eventKey="other-information"
                      >
                        Other Information
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        onClick={() => navigate("?tab=summary")}
                        eventKey="summary"
                      >
                        Summary
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <Tab.Content className="work-order-contents">
                  <Tab.Pane eventKey="assets">
                    <WorkOrderAssets />
                  </Tab.Pane>
                  <Tab.Pane eventKey="work-order-info">
                    <WorkOrderDetails />
                  </Tab.Pane>
                  <Tab.Pane eventKey="other-information">
                    <WorkOrderInformation />
                  </Tab.Pane>
                  <Tab.Pane eventKey="summary">
                    <WorkOrderSummary />
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AddWorkOrder;
