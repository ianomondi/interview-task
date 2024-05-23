import React, { useState, useContext, useEffect } from "react";
import DownIcon from "../../../Assets/Icons/DownIcon";
import SearchIcon from "../../../Assets/Icons/SearchIcon";
import AddPartsModal from "../Modal/AddPartsModal";
import { Link } from "react-router-dom";
import EditIcon2 from "../../../Assets/Icons/EditIcon2";
import DelateIcon2 from "../../../Assets/Icons/DelateIcon2";
import { Dropdown, Modal } from "react-bootstrap";
import { WorkOrderFormContext } from "../../../Providers/WorkOrderFormProvider";
import { get } from "../../../Pages/Services/ApiHelper";

const WorkOrderDetails = () => {
  // Form Context (keeps track of formv values)
  const {formData, setFormData } = useContext(WorkOrderFormContext)

  const [addPartShow, setAddPartShow] = useState(false);
  const [selectedWork, setselectedWork] = useState(formData.workCategory.name === '' ? 'Select': formData.workCategory.name);
  const [selectedTeam, setselectedTeam] = useState(formData.assignedTeam.name === '' ? "Select": formData.assignedTeam.name);
  const [selectedAssignWorker, setselectedAssignWorker] = useState(formData.assignedUser.name === '' ? "Select": formData.assignedUser.name);
  const [selectedPart, setselectedPart] = useState("Part B - 200008");
  //part search input
  const [partSearch, setPartSearch] = useState("");

  const [projectParts, setProjectParts] = useState([
    { id: 1, part: "Part A - 100005", quantity: 3 },
    { id: 2, part: "Part B - 200008", quantity: 6 },
  ]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //checklist search
  const [search, setSearch] = useState("");

  const [selectedPriority, setSelectedPriority] = useState(formData.ticketPriority.id === 0 ? null : formData.ticketPriority.name);

  const handlePriorityClick = (priority) => {
    setSelectedPriority(priority.ticketPrioritiesName);
    setFormData({
      ...formData,
      ticketPriority: {
        id: priority.id,
        name: priority.ticketPrioritiesName
      }
    })
  };

  // dynamic data for form 
  const [workData, setWorkData] = useState([])
  const [ticketPriorityData, setTicketPriorityData] = useState([])
  const [teamData, setTeamData] = useState([])
  const [assignWorkerData, setWorkerData] = useState([])
  const [checkList, setCheckList] = useState([])
  const [parts, setParts] = useState([])
  const [partToEdit, setPartToEdit] = useState([])


  const [selectValue, setSelectValue] = useState({
    asset: "Select",
    category: formData.workCategory.name === '' ? 'Select': formData.workCategory.name,
    assignTeam: formData.assignedTeam.name === '' ? "Select": formData.assignedTeam.name,
    assignAdditionalTeam: formData.assignedUser.name === '' ? "Select": formData.assignedUser.name,
  });

  //filter checklist by search
  const filteredCheckList = checkList.filter((check) =>
    check.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleUpdatePartSelect = (eventKey) => {
    const values = eventKey.split('$')
    const spareId = Number(values[0])
    setFormData((prev) => {
      const partExists = prev.projectedParts.some(
        (part) => part.spareId === Number(values[0])
      )

      let updatedPartList
      if (partExists) {
        updatedPartList = prev.projectedParts.map((part) =>
          part.spareId === spareId
            ? { ...part, quantity: 12 } // Update quantity to the desired value
            : part
        );
      } else {
        updatedPartList = [
          ...prev.projectedParts,
          { spareId: spareId, name: Number(values[1]), quantity: 12 }, // Add new part if it does not exist
        ];
      }

      return {
        ...prev,
        projectedParts: updatedPartList,
        selectedPart: { spareId, name: Number(values[1]), quantity: 12 },
      };
    })
  };

  useEffect(() => {
    const token = localStorage.getItem('bearerToken')
    if (!token){
      return
    }
    get('https://saharadeskbackend.azurewebsites.net/api/CategoryOfWorks', token)
    .then(data => {
      setWorkData(data)
    })

    get('https://saharadeskbackend.azurewebsites.net/api/Tickets/GetAllTicketPriorities', token)
    .then(data => {
      setTicketPriorityData(data)
    })

    get('https://saharadeskbackend.azurewebsites.net/api/Checklists/GetChecklists?PageNumber=1&PageSize=100', token)
    .then(data => {
      setCheckList(data.data)
    })

    get('https://saharadeskbackend.azurewebsites.net/api/Parts/GetAllParts', token)
    .then(data => {
      setParts(data)
    })
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('bearerToken')
    if (!token){
      return
    }

    if (formData.location.locationId === null || formData.workCategory.id === null){
      return
    }

    get(`https://saharadeskbackend.azurewebsites.net/api/Team/GetTeamsToAssignTicket?locationId=${formData.location.locationId}&categoryofworkId=${formData.workCategory.id}`, token)
    .then(data => {
      setTeamData(data)
    })

  }, [formData.location.locationId, formData.workCategory.id])

  useEffect(() => {
    const token = localStorage.getItem('bearerToken')
    if (!token){
      return
    }

    if (formData.assignedTeam.id === null) {
      return
    }
    get(`https://saharadeskbackend.azurewebsites.net/api/Team/GetAllUsersByTeam/${formData.assignedTeam.id}`, token)
    .then(data => {
      setWorkerData(data)
    })
  }, [formData.assignedTeam.id])

  //category of work search input
  const [workSearch, setWorkSearch] = useState("");
  //asign team search input
  const [teamSearch, setTeamSearch] = useState("");
  //asign worker search input
  const [assignWorkerSearch, setAssignWorkerSearch] = useState("");

  //filter category of work data
  const filteredWorkData = workData.filter((item) => {
    return item.categoryOfWorkName.toLowerCase().includes(workSearch.toLowerCase());
  });
  //filter assign team data
  const filteredTeamData = teamData.filter((item) => {
    return item.teamName.toLowerCase().includes(teamSearch.toLowerCase());
  });
  //filter assign worker data
  const filteredAssignWorkerData = assignWorkerData.filter((item) => {
    return item.user.userName.toLowerCase().includes(assignWorkerSearch.toLowerCase());
  });
  //filter project parts data
  const filteredProjectParts = parts.filter((item) => {
    return item.partName.toLowerCase().includes(partSearch.toLowerCase());
  });

  const handleWorkSelect = (eventKey) => {
    const values = eventKey.split('$')

    setselectedWork(values[1]);
    setSelectValue({ ...selectValue, category: values[1] });
    setWorkSearch("");
    setFormData({
      ...formData,
      workCategory: {
        id: Number(values[0]),
        name: values[1]
      }
    })
  };
  const handleTeamSelect = (eventKey) => {
    const values = eventKey.split('$')
    setselectedTeam(values[1]);
    setSelectValue({ ...selectValue, assignTeam: values[1] });
    setTeamSearch("");
    setFormData((prev) => ({
      ...prev,
      assignedTeam: {
        id: Number(values[0]),
        name: values[1]
      }
    }))
  };
  const handleAssignWorkerSelect = (eventKey) => {
    const values = eventKey.split('$')
    setselectedAssignWorker(values[1]);
    setSelectValue({ ...selectValue, assignAdditionalTeam: values[1] });
    setAssignWorkerSearch("");
    setFormData((prev) => ({
      ...prev,
      assignedUser: {
        id: Number(values[0]),
        name: values[1]
      }
    }))
  };

  function handleWorkOrderTitleChange(event) {
    const { value } = event.target
    setFormData((prev) => ({
      ...prev,
      ticketTitle: value
    }))
  }

  function handleDescriptionChange(event){
    const { value } = event.target 
    setFormData((prev) => ({
      ...prev, 
      ticketDescription: value
    }))
  }

  function handleTechnicianSignature(event){
    setFormData((prev) => ({
      ...prev,
      signatureRequiredToCompleteWork : !formData.signatureRequiredToCompleteWork
    }))
  }

  function handleEstimatedHours(event){
    const {value} = event.target
    setFormData((prev) => ({
      ...prev, 
      estimatedHours: value
    }))
  }

  function handleCheckListChange(value){
    setFormData((prev) => {
      const assertExists = prev.checklist.some(
        (asset) => asset.id === value.id
      )

      let updatedCheckList;
      if (assertExists){
        updatedCheckList = prev.checklist.filter(
          (asset) => asset.id !== value.id
        );
      } else {
        updatedCheckList = [
          ...prev.checklist,
          { id: value.id, name: value.name}
        ]
      }
      
      return {
        ...prev,
        checklist: updatedCheckList
      }
    })
  }

  function handleRemoveChecklistItem(value) {
    setFormData((prev) => {
      const updatedCheckList = prev.checklist.filter(
        (asset) => asset.id !== value.id
      )

      return {
        ...prev,
        checklist: updatedCheckList
      }
    })
  }

  function handleRemoveProjectedPart(id) {
    setFormData((prev) => {
      const updatedProjectedParts = prev.projectedParts.filter(
        (part) => part.id !== id
      )
      return {
        ...prev,
        projectedParts: updatedProjectedParts
      }
    })
  }

  function handleUpdateProjectPart(value){
    console.log(value)
  }

  return (
    <>
      <div className="order-details-content pb-lg-4">
        <div className="fs-16 fw-semibold">Work Order Details</div>

        <div className="row details-forms-one pt-5">
          <div className="col-md-6">
            <label>Work Order Title</label>
            <input type="text" onChange={handleWorkOrderTitleChange} value={formData.ticketTitle}/>
          </div>
          <div className="col-md-6">
            <label>Description</label>
            <textarea name="Description" onChange={handleDescriptionChange} value={formData.ticketDescription}></textarea>
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
                    value={formData.workCategory.name}
                    onChange={(e) => setWorkSearch(e.target.value)}
                    type="text"
                    placeholder="Search"
                  />
                </form>
                <div className="dropdown-item-content">
                  {filteredWorkData.map((item, index) => (
                    <Dropdown.Item key={index} eventKey={item.id + '$' + item.categoryOfWorkName}>
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
              {ticketPriorityData.length > 0 && (
                ticketPriorityData.map(data => (
                  <li>
                    <button
                      className={selectedPriority === data.ticketPrioritiesName ? "active" : ""}
                      onClick={() => handlePriorityClick(data)}
                    >
                      {data.ticketPrioritiesName}
                    </button>
                  </li>
                ))
              )}
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
                    value={formData.assignedTeam.name}
                  />
                </form>
                <div className="dropdown-item-content">
                  {filteredTeamData.map((item, index) => (
                    <Dropdown.Item key={index} eventKey={item.id + '$' + item.teamName}>
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
                      value={formData.assignedUser.name}
                      onChange={(e) => setAssignWorkerSearch(e.target.value)}
                      type="text"
                      placeholder="Search"
                    />
                  </form>
                  <div className="dropdown-item-content">
                    {filteredAssignWorkerData.map((item, index) => (
                      <Dropdown.Item key={index} eventKey={item.user.id + '$' + item.user.userName}>
                        {item.user.userName}
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
                id="required"
                checked={formData.signatureRequiredToCompleteWork}
                onChange={handleTechnicianSignature}
              />
              <label className="form-check-label" for="required">
                Technician signature required
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <label>Estimate Hours</label>
            <input type="number" className="input-box" onChange={handleEstimatedHours} value={formData.estimatedHours}/>
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
                  {formData.projectedParts.length > 0 && formData.projectedParts.map((part, index) => (
                    <tr key={index}>
                      <td>
                        <input readOnly type="text" value={part.name} />
                      </td>
                      <td>
                        <input readOnly type="number" value={part.quantity} />
                      </td>
                      <td>
                        <div className="button-con">
                          <button 
                            onClick={e => {
                              setPartToEdit(part)
                              handleShow()
                            }}
                          >
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
                                    onSelect={handleUpdatePartSelect}
                                  >
                                    <Dropdown.Toggle
                                      className={`select-title ${
                                        selectedPart !== "Select Part"
                                          ? "selected"
                                          : ""
                                      }`}
                                      style={{ height: "50px" }}
                                    >
                                      {partToEdit.name}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                      <form className="dropdown-search">
                                        <button disabled>
                                          <SearchIcon />
                                        </button>
                                        <input
                                          value={partToEdit.name}
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
                                              key={index}
                                              eventKey={item.id + '$' + item.partName}
                                            >
                                              {item.partName}
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
                            onClick={e => handleRemoveProjectedPart(part.id)}
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
                          onChange={e => handleCheckListChange(check)}
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
                {formData.checklist.length > 0 && (
                  formData.checklist.map(v => (
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked
                        id={v.name}
                      />
                      <label className="form-check-label" for="Nozzle">
                        {v.name}
                      </label>
                    </div>
                    <button onClick={e => handleRemoveChecklistItem(v)}>
                      <DelateIcon2 />
                    </button>
                  </li>
                  ))
                )}
                
                
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
      <AddPartsModal show={addPartShow} onHide={() => setAddPartShow(false)} partData={parts}/>
    </>
  );
};


export default WorkOrderDetails;
