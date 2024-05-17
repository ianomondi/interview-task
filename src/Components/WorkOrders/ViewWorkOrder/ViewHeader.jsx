import React, { useState } from "react";
import DownIcon from "../../../Assets/Icons/DownIcon";
import AddIcon from "../../../Assets/Icons/AddIcon";
import AssingModal from "../Modal/AssingModal";
import AcceptModal from "../Modal/AcceptModal";
import RequestModal from "../Modal/RequestModal";
import ConfirmModal from "../Modal/ConfirmModal";
import RequestClosureModal from "../Modal/RequestClosureModal";
import StartWorkModal from "../Modal/StartWorkModal";
import ConfirmWorkModal from "../Modal/ConfirmWorkModal";
import CloseWorkModal from "../Modal/CloseWorkModal";
// import ViewImage from "../Modal/ViewImage";
// import ViewVideo from "../Modal/ViewVideo";
import HoldModal from "../Modal/HoldModal";
import AcceptHoldModal from "../Modal/AcceptHoldModal";
import ResumeModal from "../Modal/ResumeModal";

const ViewHeader = () => {
  const [assignShow, setAssignShow] = useState(false);
  const [acceptShow, setAcceptShow] = useState(false);
  const [requestShow, setRequestShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  const [startWorkShow, setStartWorkShow] = useState(false);
  const [holdShow, setHoldShow] = useState(false);
  const [acceptHoldShow, setAcceptHoldShow] = useState(false);
  const [resumeShow, setResumeShow] = useState(false);
  const [requestClosureShow, setRequestClosureShow] = useState(false);
  const [confirmWorkShow, setConfirmWorkShow] = useState(false);
  const [closeWorkShow, setCloseWorkShow] = useState(false);
  // const [imageShow, setImageShow] = useState(false);
  // const [videoShow, setVideoShow] = useState(false);
  return (
    <>
      <div className="work-header">
        <div className="fs-20">View Work Orders</div>
        <div className="dropdown select-dropdown">
          <button className="select-title" data-bs-toggle="dropdown">
            <span className="fs-15 d-flex align-items-center gap-2">
              Actions <DownIcon />
            </span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end select-menu">
            <li>
              <button onClick={() => setAssignShow(true)}>
                <AddIcon /> Assign Work
              </button>
              <AssingModal
                show={assignShow}
                onHide={() => setAssignShow(false)}
              />
            </li>
            <li>
              <button onClick={() => setAcceptShow(true)}>
                <AddIcon /> Accept Work
              </button>
              <AcceptModal
                show={acceptShow}
                onHide={() => setAcceptShow(false)}
              />
            </li>
            <li>
              <button onClick={() => setRequestShow(true)}>
                <AddIcon /> Request Arrival
              </button>
              <RequestModal
                show={requestShow}
                onHide={() => setRequestShow(false)}
              />
            </li>
            <li>
              <button onClick={() => setConfirmShow(true)}>
                <AddIcon /> Confirm Arrival
              </button>
              <ConfirmModal
                show={confirmShow}
                onHide={() => setConfirmShow(false)}
              />
            </li>
            <li>
              <button onClick={() => setStartWorkShow(true)}>
                <AddIcon /> Start Work
              </button>
              <StartWorkModal
                show={startWorkShow}
                onHide={() => setStartWorkShow(false)}
              />
            </li>
            <li>
              <button onClick={() => setHoldShow(true)}>
                <AddIcon /> Hold Work
              </button>
              <HoldModal show={holdShow} onHide={() => setHoldShow(false)} />
            </li>
            <li>
              <button onClick={() => setAcceptHoldShow(true)}>
                <AddIcon /> Confirm Hold Work
              </button>
              <AcceptHoldModal
                show={acceptHoldShow}
                onHide={() => setAcceptHoldShow(false)}
              />
            </li>
            <li>
              <button onClick={() => setResumeShow(true)}>
                <AddIcon /> Resume Work
              </button>
              <ResumeModal
                show={resumeShow}
                onHide={() => setResumeShow(false)}
              />
            </li>
            <li>
              <button onClick={() => setRequestClosureShow(true)}>
                <AddIcon /> Request Closure
              </button>
              <RequestClosureModal
                show={requestClosureShow}
                onHide={() => setRequestClosureShow(false)}
              />
            </li>
            <li>
              <button onClick={() => setConfirmWorkShow(true)}>
                <AddIcon /> Confirm Work
              </button>
              <ConfirmWorkModal
                show={confirmWorkShow}
                onHide={() => setConfirmWorkShow(false)}
              />
            </li>
            <li>
              <button onClick={() => setCloseWorkShow(true)}>
                <AddIcon /> Close Work
              </button>
              <CloseWorkModal
                show={closeWorkShow}
                onHide={() => setCloseWorkShow(false)}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ViewHeader;
