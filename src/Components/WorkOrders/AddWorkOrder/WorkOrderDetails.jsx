import React, { useEffect, useState } from "react";
import DownIcon from "../../../Assets/Icons/DownIcon";
import SearchIcon from "../../../Assets/Icons/SearchIcon";
import AddPartsModal from "../Modal/AddPartsModal";
import { Link } from "react-router-dom";
import EditIcon2 from "../../../Assets/Icons/EditIcon2";
import DelateIcon2 from "../../../Assets/Icons/DelateIcon2";
import { Dropdown, Modal } from "react-bootstrap";
import { apiWorkOrderServices } from "../../../utls/services";
import store from "../../../context";
import { useRecoilState, useRecoilValue } from "recoil";

const WorkOrderDetails = () => {
  const [addPartShow, setAddPartShow] = useState(false);
  const [selectedWork, setselectedWork] = useState("Select");
  const [selectedTeam, setselectedTeam] = useState("Select");
  const [selectedAssignWorker, setselectedAssignWorker] = useState("Select");
  const [selectedPart, setSelectedPart] = useState([]);
  const [workData, setworkData] = useState([]);
  const [priorityData, setPriorityData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [assignWorkerData, setAssignWorkerData] = useState([]);
  const [checklistItemsData, setChecklistItemsData] = useState([]);
  const [selectedCheckList, setSelectedCheckList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [estimateHours, setEstimateHours] = useState(null);
  const [isSigned, setIsSigned] = useState(false);
  //part search input
  const [partSearch, setPartSearch] = useState("");

  const [projectParts, setProjectParts] = useRecoilState(store.projectParts);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //checklist search
  const [search, setSearch] = useState("");

  const [selectedPriority, setSelectedPriority] = useState(null);

  const handlePriorityClick = (priority) => {
    setSelectedPriority(priority);
  };

  const [selectValue, setSelectValue] = useState({
    asset: "Select",
    category: "Select",
    assignTeam: "Select",
    assignAdditionalTeam: "Select",
  });
  const selectedLocationAndCategoryId = useRecoilValue(
    store.locatonAndAssetCategoryIds
  );

  //Endpoints
  const CATEGORY_OF_WORKS = "CategoryOfWorks";
  const PRIORITY_ENDPOINT = "Tickets/GetAllTicketPriorities";
  const GET_TEAMS_ENDPOINT = "Team/GetTeamsToAssignTicket";
  const GET_WORKERS_ENDPOINT = "Team/GetAllUsersByTeam";
  const CHECKLIST_ENDPOINT =
    "Checklists/GetChecklists?PageNumber=1&PageSize=100";

  const handlePartSelect = (eventKey) => {
    setSelectedPart(eventKey);
    setSelectValue({ ...selectValue, part: eventKey });
  };

  const updateFormData = async () => {
    const categoryOfWorkRes = await apiWorkOrderServices(
      CATEGORY_OF_WORKS,
      "GET"
    );

    const priorityDataRes = await apiWorkOrderServices(
      PRIORITY_ENDPOINT,
      "GET"
    );

    const checklistItemsDataRes = await apiWorkOrderServices(
      CHECKLIST_ENDPOINT,
      "GET"
    );

    setChecklistItemsData(checklistItemsDataRes.data);
    setworkData(categoryOfWorkRes);
    setPriorityData(priorityDataRes);
  };

  const updateTeamsList = async (selectedWork) => {
    if (selectedWork !== "Select") {
      const selectedWorkId = workData.find(
        (item) => item.categoryOfWorkName === selectedWork
      ).id;
      if (selectedLocationAndCategoryId.length > 0) {
        const [selectedLocationId] = [...selectedLocationAndCategoryId];
        const teamDataUrl = `${GET_TEAMS_ENDPOINT}?locationId=${selectedLocationId}&categoryofworkId=${selectedWorkId}`;
        const teamDataRes = await apiWorkOrderServices(teamDataUrl, "GET");
        setTeamData(teamDataRes);
      }
    }
  };

  const updateWorkerList = async (selectedTeam) => {
    if (selectedTeam !== "Select") {
      const selectedTeamId = teamData.find(
        (item) => item.teamName === selectedTeam
      ).id;

      const workersDataUrl = `${GET_WORKERS_ENDPOINT}/${selectedTeamId}`;
      const workersDataRes = await apiWorkOrderServices(workersDataUrl, "GET");
      setAssignWorkerData(workersDataRes);
    }
  };

  useEffect(() => {
    updateFormData();
  }, []);

  useEffect(() => {
    updateTeamsList(selectedWork);
  }, [selectedWork]);

  useEffect(() => {
    updateWorkerList(selectedTeam);
  }, [selectedTeam]);

  console.log(isSigned);
  //category of work search input
  const [workSearch, setWorkSearch] = useState("");
  //asign team search input
  const [teamSearch, setTeamSearch] = useState("");
  //asign worker search input
  const [assignWorkerSearch, setAssignWorkerSearch] = useState("");

  //filter checklist by search
  const filteredCheckList = checklistItemsData.filter((check) =>
    check.name.toLowerCase().includes(search.toLowerCase())
  );
  //filter category of work data
  const filteredWorkData = workData.filter((item) => {
    return item.categoryOfWorkName
      .toLowerCase()
      .includes(workSearch.toLowerCase());
  });
  //filter assign team data
  const filteredTeamData = teamData.filter((item) => {
    return item.teamName.toLowerCase().includes(teamSearch.toLowerCase());
  });
  //filter assign worker data
  const filteredAssignWorkerData = assignWorkerData
    .map(({ user }) => user.userName)
    .filter((userName) =>
      userName.toLowerCase().includes(assignWorkerSearch.toLowerCase())
    );

  //filter project parts data
  const filteredProjectParts = projectParts.filter((item) => {
    return item.part.toLowerCase().includes(partSearch.toLowerCase());
  });

  const handleWorkSelect = (eventKey) => {
    setselectedWork(eventKey);
    setSelectValue({ ...selectValue, category: eventKey });
    setWorkSearch("");
  };
  const handleTeamSelect = (eventKey) => {
    setselectedTeam(eventKey);
    setSelectValue({ ...selectValue, assignTeam: eventKey });
    setTeamSearch("");
  };
  const handleAssignWorkerSelect = (eventKey) => {
    setselectedAssignWorker(eventKey);
    setSelectValue({ ...selectValue, assignAdditionalTeam: eventKey });
    setAssignWorkerSearch("");
  };

  const handleCheckboxChange = (eventKey) => {
    if (selectedCheckList.includes(eventKey)) return;
    setSelectedCheckList([...selectedCheckList, eventKey]);
  };

  // console.log("selectedPart", projectParts);
  // console.log(checklistItemsData);
  // console.log(checklistItemsData);
  return (
    <>
      <div className="order-details-content pb-lg-4">
        <div className="fs-16 fw-semibold">Work Order Details</div>

        <div className="row details-forms-one pt-5">
          <div className="col-md-6">
            <label>Work Order Title</label>
            <input type="text" />
          </div>
          <div className="col-md-6">
            <label>Description</label>
            <textarea name="Description"></textarea>
          </div>
          <div className="col-md-6">
            <label>Category of Work</label>
            <Dropdown className="select__form" onSelect={handleWorkSelect}>
              <Dropdown.Toggle
                className={`select-title ${
                  selectedWork !== "Select" ? "selected" : ""
                }`}
              >
                {selectedWork}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <form className="dropdown-search">
                  <button disabled>
                    <SearchIcon />
                  </button>
                  <input
                    value={workSearch}
                    onChange={(e) => setWorkSearch(e.target.value)}
                    type="text"
                    placeholder="Search"
                  />
                </form>
                <div className="dropdown-item-content">
                  {filteredWorkData.map((item, index) => (
                    <Dropdown.Item
                      key={index}
                      eventKey={item.categoryOfWorkName}
                    >
                      {item.categoryOfWorkName}
                    </Dropdown.Item>
                  ))}
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-md-6">
            <label>Priority</label>
            <ul className="priority-list">
              {priorityData.map((item, index) => (
                <li key={index}>
                  <button
                    className={
                      selectedPriority === item.ticketPrioritiesName
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      handlePriorityClick(item.ticketPrioritiesName)
                    }
                  >
                    {item.ticketPrioritiesName}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <label>Assign Team (Primary)</label>
            <Dropdown className="select__form" onSelect={handleTeamSelect}>
              <Dropdown.Toggle
                className={`select-title ${
                  selectedTeam !== "Select" ? "selected" : ""
                }`}
              >
                {selectedTeam}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <form className="dropdown-search">
                  <button disabled>
                    <SearchIcon />
                  </button>
                  <input
                    onChange={(e) => setTeamSearch(e.target.value)}
                    type="text"
                    placeholder="Search"
                    value={teamSearch}
                  />
                </form>
                <div className="dropdown-item-content">
                  {filteredTeamData.map((item, index) => (
                    <Dropdown.Item key={index} eventKey={item.teamName}>
                      {item.teamName}
                    </Dropdown.Item>
                  ))}
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {selectValue.assignTeam !== "Select" && (
            <div className="col-md-6">
              <label>Assign Worker</label>
              <Dropdown
                className="select__form"
                onSelect={handleAssignWorkerSelect}
              >
                <Dropdown.Toggle
                  className={`select-title ${
                    selectedAssignWorker !== "Select" ? "selected" : ""
                  }`}
                >
                  {selectedAssignWorker}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <form className="dropdown-search">
                    <button disabled>
                      <SearchIcon />
                    </button>
                    <input
                      value={assignWorkerSearch}
                      onChange={(e) => setAssignWorkerSearch(e.target.value)}
                      type="text"
                      placeholder="Search"
                    />
                  </form>
                  <div className="dropdown-item-content">
                    {filteredAssignWorkerData.map((item, index) => (
                      <Dropdown.Item key={index} eventKey={item}>
                        {item}
                      </Dropdown.Item>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
        </div>
        <hr />
        <div className="row completion-con">
          <div className="col-lg-12">
            <div className="fs-16 fw-semibold completion-title">Completion</div>
            <div class="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="required"
                checked={isSigned}
                onChange={(e) => setIsSigned(e.target.checked)}
              />
              <label className="form-check-label" for="required">
                Technician signature required
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <label>Estimate Hours</label>
            <input
              type="number"
              className="input-box"
              onChange={(e) => setEstimateHours(e.target.value)}
            />
          </div>
        </div>
        <hr />
        <div className="row projected-con">
          <div className="col-lg-12">
            <div className="fs-16 fw-semibold projected-title">
              Projected Parts
            </div>
            <div className="parts-box table-responsive-sm">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Parts</th>
                    <th scope="col">Quantity</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {projectParts.map((part, index) => (
                    <tr key={index}>
                      <td>
                        <input readOnly type="text" value={part.part} />
                      </td>
                      <td>
                        <input readOnly type="number" value={part.quantity} />
                      </td>
                      <td>
                        <div className="button-con">
                          <button onClick={handleShow}>
                            <EditIcon2 />
                          </button>
                          <Modal
                            show={show}
                            onHide={handleClose}
                            centered
                            className="medium-modal"
                          >
                            <div
                              className="delete-content"
                              style={{ padding: "28px 30px" }}
                            >
                              <div className="d-flex align-items-center gap-4">
                                <span className="fs-16 fw-bold">
                                  Edit Parts
                                </span>
                                <span
                                  className="fs-14"
                                  style={{ color: "#72777A" }}
                                >
                                  Select parts and quantities required.
                                </span>
                              </div>
                              <div className="mt-4 pt-2 d-grid gap-4 modal-forms-content">
                                <div className="col-md-12">
                                  <label className="fw-medium pb-2">
                                    Select Part
                                  </label>
                                  <Dropdown
                                    className="select__form"
                                    onSelect={handlePartSelect}
                                  >
                                    <Dropdown.Toggle
                                      className={`select-title ${
                                        selectedPart !== "Select Part"
                                          ? "selected"
                                          : ""
                                      }`}
                                      style={{ height: "50px" }}
                                    >
                                      {selectedPart}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                      <form className="dropdown-search">
                                        <button disabled>
                                          <SearchIcon />
                                        </button>
                                        <input
                                          value={partSearch}
                                          onChange={(e) =>
                                            setPartSearch(e.target.value)
                                          }
                                          type="text"
                                          placeholder="Search"
                                        />
                                      </form>
                                      <div className="dropdown-item-content">
                                        {filteredProjectParts.map(
                                          (item, index) => (
                                            <Dropdown.Item
                                              key={item.id}
                                              eventKey={item.part}
                                            >
                                              {item.part}
                                            </Dropdown.Item>
                                          )
                                        )}
                                      </div>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                                <div className="col-md-12">
                                  <label className="fw-medium pb-2">
                                    Quantity
                                  </label>
                                  <input
                                    type="number"
                                    className="modal-input-box"
                                    style={{
                                      background: "#F1EFEF",
                                      width: "100%",
                                      border: "0",
                                      height: "50px",
                                      borderRadius: "5px",
                                      padding: "0 15px",
                                    }}
                                    max={100}
                                    /* readOnly={!part.isEditable} */
                                    value={part.quantity}
                                    onChange={(e) =>
                                      setProjectParts((prevParts) =>
                                        prevParts.map((item) =>
                                          item.id === part.id
                                            ? {
                                                ...item,
                                                quantity: e.target.value,
                                              }
                                            : item
                                        )
                                      )
                                    }
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
                                <button
                                  className="cancel-btn"
                                  onClick={handleClose}
                                >
                                  Cancel
                                </button>
                                <Link
                                  to=""
                                  className="delate-btn"
                                  onClick={handleClose}
                                >
                                  Update
                                </Link>
                              </div>
                            </div>
                          </Modal>
                          <button
                            onClick={() =>
                              setProjectParts(
                                projectParts.filter(
                                  (item) => item.id !== part.id
                                )
                              )
                            }
                          >
                            <DelateIcon2 />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-end">
                <button
                  className="add-part"
                  onClick={() => setAddPartShow(true)}
                >
                  Add Part
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row checklists-con">
          <div className="col-lg-12">
            <div className="fs-16 fw-semibold">Tasks and Checklists</div>
            <div className="dropdown Checklists-dropdown">
              <button className="btn checklists-btn" data-bs-toggle="dropdown">
                Add Checklists <DownIcon />
              </button>
              <ul class="dropdown-menu pb-2">
                <li>
                  <form className="dropdown-search">
                    <button type="submit">
                      <SearchIcon />
                    </button>
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      type="search"
                      placeholder="Search"
                    />
                  </form>
                </li>
                <ul className="dropdown-item-content my-2">
                  {filteredCheckList.map((check, index) => (
                    <li key={index}>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id={check.name}
                          checked={selectedCheckList.includes(check.name)}
                          onChange={() => handleCheckboxChange(check.name)}
                        />
                        <label className="form-check-label" for={check.name}>
                          {check.name}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </ul>
            </div>
            <div className="checklists-box">
              <div className="fs-15 checklists-title">Checklists</div>
              <ul className="checklists-list">
                {selectedCheckList.map((item, index) => (
                  <li key={index}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id={item}
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                      />
                      <label className="form-check-label" for={item}>
                        {item}
                      </label>
                    </div>
                    <button>
                      <DelateIcon2 />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="details-buttons d-flex justify-content-between">
          <Link to="/work-orders/add-work-order" className="next-btn ms-0">
            Previous
          </Link>
          <Link
            to="/work-orders/add-work-order/information"
            className="next-btn ms-0"
          >
            Next
          </Link>
        </div>
      </div>
      <AddPartsModal show={addPartShow} onHide={() => setAddPartShow(false)} />
    </>
  );
};

const checkList = [
  {
    id: 1,
    name: "Pump Nozzle Checklist",
    isCompleted: false,
  },
  {
    id: 2,
    name: "Pump Monitor Checklist",
    isCompleted: false,
  },
  {
    id: 3,
    name: "Pump Monitor 1",
    isCompleted: false,
  },
  {
    id: 4,
    name: "Pump Monitor 10",
    isCompleted: false,
  },
  {
    id: 5,
    name: "Pump Monitor 11",
    isCompleted: false,
  },
  {
    id: 6,
    name: "Pump Monitor 12",
    isCompleted: false,
  },
];

export default WorkOrderDetails;
