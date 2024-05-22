import React, { useState, useEffect } from "react";
import DownIcon from "../../../Assets/Icons/DownIcon";
import SearchIcon from "../../../Assets/Icons/SearchIcon";
import AddPartsModal from "../Modal/AddPartsModal";
import { Link, useLocation } from "react-router-dom";
import EditIcon2 from "../../../Assets/Icons/EditIcon2";
import DelateIcon2 from "../../../Assets/Icons/DelateIcon2";
import { Dropdown, Modal } from "react-bootstrap";
import usefetchData from "../../../hooks/useFetchData";
import { useDispatch, useSelector } from "react-redux";
import {
  setTicketDescription,
  setTicketTitle,
  setEstimatedHours,
  setAssignedTeam,
  setAssignedUser,
  setCategory,
  setTicketPriority,
  addChecklistId,
  removeChecklistId,
  setSignatureRequired,
} from "../../../redux/formSlice";

const WorkOrderDetails = () => {
  const formState = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const [addPartShow, setAddPartShow] = useState(false);
  const [selectedWork, setselectedWork] = useState("Select");
  const [selectedTeam, setselectedTeam] = useState("Select");
  const [selectedAssignWorker, setselectedAssignWorker] = useState("Select");
  const [selectedPart, setselectedPart] = useState("Part B - 200008");
  const [teamId, setTeamId] = useState(null);
  const [categoryofworkId, setCategoryOfWorkId] = useState(formState.categoryOfWorkId);
  //part search input
  const [partSearch, setPartSearch] = useState("");

  const projected = [];

  const locationId = formState.locationId;
  // const categoryofworkId = location.state.categoryofworkId;

  const [projectParts, setProjectParts] = useState([
    { id: 1, part: "Part A - 100005", quantity: 3 },
    { id: 2, part: "Part B - 200008", quantity: 6 },
  ]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //checklist search
  const [search, setSearch] = useState("");

  const [selectedPriority, setSelectedPriority] = useState(null);
  const [selectedChecklist, setSelectedChecklist] = useState(
    "Select Checklist Item"
  );
  const [checklistSearch, setChecklistSearch] = useState("");

  const handlePriorityClick = (items) => {
    const pri = priority.find((item) => item.ticketPrioritiesName === items);
    setSelectedPriority(items);
    dispatch(
      setTicketPriority({
        priority: pri.ticketPrioritiesName,
        priorityId: pri.id,
      })
    );
  };

  const [selectValue, setSelectValue] = useState({
    asset: "Select",
    category: "Select",
    assignTeam: "Select",
    assignAdditionalTeam: "Select",
  });

  const handlePartSelect = (eventKey) => {
    setselectedPart(eventKey);
    setSelectValue({ ...selectValue, part: eventKey });
  };

  const { data: workData } = usefetchData(
    ["work-data"],
    `/CategoryOfWorks`,
    {},
    "Couldn't get work data. Please try again!",
    true
  );

  const { data: teamData } = usefetchData(
    ["team-data", categoryofworkId],
    `/Team/GetTeamsToAssignTicket?locationId=${locationId}&categoryofworkId=${categoryofworkId}`,
    {},
    "Couldn't get team data. Please try again!",
    !!categoryofworkId && !!locationId
  );

  const { data: assignWorkerData } = usefetchData(
    ["assign-worker", teamId],
    `/Team/GetAllUsersByTeam/${teamId}`,
    {},
    "Couldn't get team data. Please try again!",
    !!teamId && !!categoryofworkId
  );

  const { data: priority } = usefetchData(
    ["priority"],
    `/Tickets/GetAllTicketPriorities`,
    {},
    "Couldn't get priority data. Please try again!",
    true
  );

  console.log("priority", priority);

  // get parts
  const { data: parts } = usefetchData(
    ["parts"],
    `/Parts/GetAllParts`,
    {},
    "Couldn't get parts data. Please try again!",
    true
  );

  // get parts location
  const { data: partLocation } = usefetchData(
    ["partLocation"],
    `/Locations/LocationsList`,
    {},
    "Couldn't get part locations data. Please try again!",
    true
  );

  // get checklist data
  const { data: checklist } = usefetchData(
    ["checklist"],
    `/Checklists/GetChecklists?PageNumber=1&PageSize=100`,
    {},
    "Couldn't get part checklist data. Please try again!",
    true
  );

  console.log("work data", categoryofworkId);

  //category of work search input
  const [workSearch, setWorkSearch] = useState("");
  //asign team search input
  const [teamSearch, setTeamSearch] = useState("");
  //asign worker search input
  const [assignWorkerSearch, setAssignWorkerSearch] = useState("");

  //filter category of work data
  const filteredWorkData =
    workData &&
    workData.filter((item) => {
      return item.categoryOfWorkName
        .toLowerCase()
        .includes(workSearch.toLowerCase());
    });

  //filter assign team data
  const filteredTeamData =
    teamData &&
    teamData?.filter((item) => {
      return item.teamName.toLowerCase().includes(teamSearch.toLowerCase());
    });

  //filter assign worker data
  const filteredAssignWorkerData =
    assignWorkerData &&
    assignWorkerData.filter((item) => {
      const firstName = item?.user?.userFirstName.toLowerCase();
      const lastName = item?.user?.userLastName.toLowerCase();
      const fullName = `${firstName} ${lastName}`;
      const searchTerm = assignWorkerSearch.toLowerCase();

      return fullName.includes(searchTerm);
    });

  console.log("team data", filteredAssignWorkerData);

  //filter project parts data
  const filteredProjectParts = projectParts.filter((item) => {
    return item.part.toLowerCase().includes(partSearch.toLowerCase());
  });

  //filter checklist by search
  const filteredCheckList = checklist?.data?.filter((check) =>
    check.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleTitleChange = (e) => {
    dispatch(setTicketTitle(e.target.value));
  };

  const handleDescriptionChange = (e) => {
    dispatch(setTicketDescription(e.target.value));
  };

  const handleSignatureRequiredChange = (e) => {
    dispatch(setSignatureRequired(e.target.checked));
  };

  const handleEstimatedHHoursChange = (e) => {
    dispatch(setEstimatedHours(e.target.value));
  };

  const handleWorkSelect = (eventKey) => {
    alert(locationId);
    const category = workData.find(
      (item) => item.categoryOfWorkName === eventKey
    );
    setselectedWork(category.categoryOfWorkName);
    setCategoryOfWorkId(category.id);
    setSelectValue({ ...selectValue, category: category.categoryOfWorkName });
    dispatch(
      setCategory({
        categoryOfWork: category.categoryOfWorkName,
        categoryOfWorkId: category.id,
      })
    );
    setWorkSearch("");
  };

  console.log("Category ofwork", categoryofworkId);

  const handleTeamSelect = (eventKey) => {
    const team = teamData.find((item) => item.teamName === eventKey);
    setselectedTeam(team.teamName);
    setTeamId(team.id);
    setSelectValue({ ...selectValue, assignTeam: eventKey });
    dispatch(setAssignedTeam({ name: team.categoryOfWorkName, id: team.id }));
    setTeamSearch("");
  };

  const handleAssignWorkerSelect = (eventKey) => {
    setselectedAssignWorker(eventKey);
    setSelectValue({ ...selectValue, assignAdditionalTeam: eventKey });
    setAssignWorkerSearch("");
  };

  const handleChecklistSelect = (event) => {
    const checklistId = parseInt(event.target.value);
    if (event.target.checked) {
      dispatch(addChecklistId(checklistId));
    } else {
      dispatch(removeChecklistId(checklistId));
    }
  };

  const selectedChecklistNames = formState.checklistIds.map((id) => {
    const checklistItem = checklist?.data?.find((item) => item.id === id);
    return checklistItem ? checklistItem.name : "";
  });

  useEffect(() => {
    setSearch("");
  }, [formState.checklistIds]);
  return (
    <>
      <div className="order-details-content pb-lg-4">
        <div className="fs-16 fw-semibold">Work Order Details</div>

        <div className="row details-forms-one pt-5">
          <div className="col-md-6">
            <label>Work Order Title</label>
            <input
              type="text"
              value={formState.ticketTitle}
              onChange={handleTitleChange}
            />
          </div>
          <div className="col-md-6">
            <label>Description</label>
            <textarea
              name="Description"
              value={formState.ticketDescription}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
          <div className="col-md-6">
            <label>Category of Work</label>
            <Dropdown className="select__form" onSelect={handleWorkSelect}>
              <Dropdown.Toggle
                className={`select-title ${
                  selectedWork !== "Select" ? "selected" : ""
                }`}
              >
                {formState.categoryOfWork}
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
                  {filteredWorkData &&
                    filteredWorkData.map((item, index) => (
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
              {priority &&
                priority.map((p) => (
                  <li key={p.ticketPrioritiesName}>
                    <button
                      className={
                        formState.ticketPriority === p.ticketPrioritiesName
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        handlePriorityClick(p.ticketPrioritiesName)
                      }
                    >
                      {p.ticketPrioritiesName}
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
                  {filteredTeamData &&
                    filteredTeamData.map((item, index) => (
                      <Dropdown.Item key={index} eventKey={item?.teamName}>
                        {item?.teamName}
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
                    {filteredAssignWorkerData &&
                      filteredAssignWorkerData.map((item, index) => (
                        <Dropdown.Item
                          key={index}
                          eventKey={item?.user?.userFirstName}
                        >
                          {item?.user?.userFirstName} {item?.user?.userLastName}
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
                checked={formState.signatureRequiredToCompleteWork}
                value={formState.signatureRequiredToCompleteWork}
                onChange={handleSignatureRequiredChange}
                id="required"
              />
              <label className="form-check-label" for="required">
                Technician signature required
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <label>Estimate Hours</label>
            <input type="text" className="input-box" value={formState.estimatedHours} onChange={handleEstimatedHHoursChange}  />
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
                  {formState.projectedParts.map((part, index) => (
                    <tr key={index}>
                      <td>
                        <input readOnly type="text" value={part.partName} />
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
              <ul className="dropdown-menu pb-2">
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
                  {filteredCheckList &&
                    filteredCheckList.map((check, index) => (
                      <li key={index}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value={check.id}
                            id={check.name}
                            checked={formState.checklistIds.includes(check.id)}
                            onChange={handleChecklistSelect}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={check.name}
                          >
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
                {selectedChecklistNames.map((name, index) => (
                  <li key={index}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id={name}
                        checked
                        readOnly
                      />
                      <label className="form-check-label" htmlFor={name}>
                        {name}
                      </label>
                    </div>
                    <button
                      onClick={() =>
                        dispatch(
                          removeChecklistId(
                            checklist?.data?.find((item) => item.name === name)
                              ?.id
                          )
                        )
                      }
                    >
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

      <AddPartsModal
        show={addPartShow}
        onHide={() => setAddPartShow(false)}
        partData={parts}
        partLocationData={partLocation}
      />
    </>
  );
};

export default WorkOrderDetails;
