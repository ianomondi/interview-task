import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./index.scss";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard";
import WorkOrders from "./Pages/WorkOrders";
import AddWorkOrder from "./Pages/AddWorkOrder";
import Login from "./Pages/Login";

import WorkOrderAssets from "./Components/WorkOrders/AddWorkOrder/WorkOrderAssets";
import WorkOrderDetails from "./Components/WorkOrders/AddWorkOrder/WorkOrderDetails";
import WorkOrderInformation from "./Components/WorkOrders/AddWorkOrder/WorkOrderInformation";
import WorkOrderSummary from "./Components/WorkOrders/AddWorkOrder/WorkOrderSummary";
import NewWork from "./Components/WorkOrders/NewWork";
import OngoingWork from "./Components/WorkOrders/OngoingWork";
import PendingClosure from "./Components/WorkOrders/PendingClosure";
import ClosedWork from "./Components/WorkOrders/ClosedWork";
import UpcomingWork from "./Components/WorkOrders/UpcomingWork";
import ViewWorkOrder from "./Pages/ViewWorkOrder";
import ViewSummary from "./Components/WorkOrders/ViewWorkOrder/ViewSummary";
import ViewAssets from "./Components/WorkOrders/ViewWorkOrder/ViewAssets";
import ViewCostings from "./Components/WorkOrders/ViewWorkOrder/ViewCostings";
import ViewJob from "./Components/WorkOrders/ViewWorkOrder/ViewJob";
import ForgotPasswords from "./Pages/ForgotPassword";


function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
      setTimeout(() => {
        document.documentElement.scrollTo(0, 0);
      }, 0);
    }, [location.pathname, location.search]);
    return children;
  };

  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route
            index
            path="/"
            element={
              <div className="root-wrapper">
                <Navbar />
                <Login />
              </div>
            }
          />
          <Route
            path="/work-orders"
            element={
              <div className="root-wrapper">
                <Navbar />
                <WorkOrders />
              </div>
            }
          >
            <Route index path="/work-orders/" element={<NewWork />} />
            <Route path="/work-orders/ongoing-work" element={<OngoingWork />} />
            <Route
              path="/work-orders/pending-closure"
              element={<PendingClosure />}
            />
            <Route path="/work-orders/closed-work" element={<ClosedWork />} />
            <Route
              path="/work-orders/upcoming-work"
              element={<UpcomingWork />}
            />
          </Route>


          <Route
            path="/work-orders/add-work-order"
            element={
              <div className="root-wrapper">
                <Navbar />
                <AddWorkOrder />
              </div>
            }
          >
            <Route
              index
              path="/work-orders/add-work-order"
              element={<WorkOrderAssets />}
            />
            <Route
              path="/work-orders/add-work-order/details"
              element={<WorkOrderDetails />}
            />
            <Route
              path="/work-orders/add-work-order/information"
              element={<WorkOrderInformation />}
            />
            <Route
              path="/work-orders/add-work-order/summary"
              element={<WorkOrderSummary />}
            />
          </Route>
          
          
          <Route
            path="/work-orders/work-view"
            element={
              <div className="root-wrapper">
                <Navbar />
                <ViewWorkOrder />
              </div>
            }
          >
            <Route
              index
              path="/work-orders/work-view"
              element={<ViewSummary />}
            />
            <Route
              index
              path="/work-orders/work-view/assets"
              element={<ViewAssets />}
            />
            <Route
              index
              path="/work-orders/work-view/costings"
              element={<ViewCostings />}
            />
            <Route
              index
              path="/work-orders/work-view/job-cards"
              element={<ViewJob />}
            />
          </Route>

          <Route path="/sign-in" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPasswords />} />

          
        
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
