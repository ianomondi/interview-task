import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { WorkOrderFormContext } from "../../../Providers/WorkOrderFormProvider";
import { post } from "../../../Pages/Services/ApiHelper";

const WorkOrderSummary = () => {
  let navigate = useNavigate();
  const [imageShow, setImageShow] = useState(false);
  const [videoShow, setVideoShow] = useState(false);
  const [documentShow, setDocumentShow] = useState(false);
  const handleClose = () => {
    setImageShow(false);
    setVideoShow(false);
    setDocumentShow(false);
  };
  const {formData, setFormData } = useContext(WorkOrderFormContext)

  function handleFormSubmit() {
    const requestData = {
      locationId: formData.location.locationId,
      categoryOfWorkId: formData.workCategory.id,
      assetListIds: formData.assetList.map(v => v.assetListId),
      ticketTitle: formData.ticketTitle,
      ticketDescription: formData.ticketDescription,
      files: formData.files,
      checklistIds: formData.checklist.map(v => v.id),
      ticketPriorityId: formData.ticketPriority.id,
      assignedTeam: formData.assignedTeam,
      assignedUser: formData.assignedUser,
      signatureRequiredToCompleteWork: formData.signatureRequiredToCompleteWork,
      estimatedHours: Number(formData.estimatedHours),
      projectedParts: formData.projectedParts.map(v => ({spareId: v.id, quantity: v.quantity, location: 10})),
      requestId: 0
    }

    const token = localStorage.getItem('bearerToken')
    if (!token) {
      return
    }

    post('https://saharadeskbackend.azurewebsites.net/api/Tickets/RaiseTicket', requestData, token)
    .then(res => {
      console.log(res)
      if (res.succeeded) {
        setFormData({
          location: {
            locationName: '',
            locationId: null
          },
          assetCategory: {
            categoryName: '',
            categoryId: null
          },
          assetList: [],
          ticketTitle: '',
          ticketDescription: '',
          workCategory: {
            id: null,
            name: ''
          },
          files: [],
          checklistIds: [],
          ticketPriority: { 
            id: 0,
            name: ''
          },
          assignedTeam: {
            id: null,
            name: ''
          },
          assignedUser: {
            id: null,
            name: ''
          },
          signatureRequiredToCompleteWork: false,
          estimatedHours: 0,
          projectedParts: [],
          checklist: [],
          requestId: 0,
        })
        navigate('/work-orders')
      }

      return
    })


  }

  return (
    <>
      <div className="order-details-content pb-lg-4">
        <div className="fs-16 fw-semibold">Summary</div>

        <div className="work-order-summary mt-5">
          <div
            className="fs-14 fw-semibold pb-4"
            style={{ color: "#00000061" }}
          >
            ASSET DETAILS
          </div>
          <div className="row" style={{ rowGap: "24px" }}>
            <div className="col-md-3">
              <div
                className="fs-14 fw-semibold pb-2"
                style={{ color: "#00000061" }}
              >
                Location
              </div>
              <div className="fs-14 fw-medium">{formData.location.locationName}</div>
            </div>
            <div className="col-md-3">
              <div
                className="fs-14 fw-semibold pb-2"
                style={{ color: "#00000061" }}
              >
                Asset Category
              </div>
              <div className="fs-14 fw-medium">{formData.assetCategory.categoryName}</div>
            </div>
            <div className="col-md-3">
              <div
                className="fs-14 fw-semibold pb-2"
                style={{ color: "#00000061" }}
              >
                Assets
              </div>
              <div className="fs-14 fw-medium">{formData.assetList.map(v => v.assetName+ ', ')}</div>
            </div>
          </div>
          <hr />
          <div
            className="fs-14 fw-semibold pb-4"
            style={{ color: "#00000061" }}
          >
            WORK ORDER DETAILS
          </div>
          <div className="row" style={{ rowGap: "24px" }}>
            <div className="col-md-3">
              <div
                className="fs-14 fw-semibold pb-2"
                style={{ color: "#00000061" }}
              >
                Work Order Title:
              </div>
              <div className="fs-14 fw-medium">{formData.ticketTitle}</div>
            </div>
            <div className="col-md-3">
              <div
                className="fs-14 fw-semibold pb-2"
                style={{ color: "#00000061" }}
              >
                Category of Work:
              </div>
              <div className="fs-14 fw-medium">{formData.ticketPriority.name}</div>
            </div>
            <div className="col-md-3">
              <div
                className="fs-14 fw-semibold pb-2"
                style={{ color: "#00000061" }}
              >
                Team:
              </div>
              <div className="fs-14 fw-medium">{formData.assignedTeam.name}</div>
            </div>
            <div className="col-md-3">
              <div
                className="fs-14 fw-semibold pb-2"
                style={{ color: "#00000061" }}
              >
                Worker:
              </div>
              <div className="fs-14 fw-medium">{formData.assignedUser.name}</div>
            </div>
            <div className="col-md-6">
              <div
                className="fs-14 fw-semibold pb-2"
                style={{ color: "#00000061" }}
              >
                Description:
              </div>
              <div className="fs-14 fw-medium" style={{ lineHeight: "1.3" }}>
                {formData.ticketDescription}
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="fs-14 fw-semibold pb-2"
                style={{ color: "#00000061" }}
              >
                Priority:
              </div>
              <div className="fs-14 fw-bold" style={{ color: "#D57D2A" }}>
                {formData.ticketPriority.name}
              </div>
            </div>
          </div>
          <hr />
          <div
            className="fs-14 fw-semibold pb-3"
            style={{ color: "#00000061" }}
          >
            COMPLETION DETAILS
          </div>
          <div className="row">
            <div className="col-md-3">
              <div
                className="fs-14 fw-semibold pb-2"
                style={{ color: "#00000061", letterSpacing: "-.4px" }}
              >
                Technician Signature Required?
              </div>
              <div className="fs-14 fw-medium">{formData.signatureRequiredToCompleteWork === true ? 'Yes' : 'No'}</div>
            </div>
            <div className="col-md-3">
              <div
                className="fs-14 fw-semibold pb-2"
                style={{ color: "#00000061" }}
              >
                Estimated Hours
              </div>
              <div className="fs-14 fw-medium">{formData.estimatedHours} Hours</div>
            </div>
          </div>
          <hr />
          <div
            className="fs-14 fw-semibold pb-3"
            style={{ color: "#00000061" }}
          >
            PROJECTED PARTS DETAILS
          </div>
          <div className="row">
            <div className="col-md-3 d-grid gap-2">
              {formData.projectedParts.map(v => (
                <div className="fs-14 fw-medium">{v.name}</div>
              ))}
            </div>
          </div>
          <hr />
          <div
            className="fs-14 fw-semibold pb-3"
            style={{ color: "#00000061" }}
          >
            CHECKLIST DETAILS
          </div>
          <div className="row">
            <div className="col-md-3 d-grid gap-2">
              {formData.checklist.map(v => (
                <div className="fs-14 fw-medium">{v.name}</div>
              ))}
              <div className="fs-14 fw-medium">Pump Monitor Checklist</div>
            </div>
          </div>
          <hr />
          <div
            className="fs-14 fw-semibold pb-3"
            style={{ color: "#00000061" }}
          >
            OTHER INFORMATION
          </div>
          <div className="row">
            <div className="col-md-3">
              <div
                className="fs-14 fw-medium"
                style={{ color: "rgba(0, 0, 0, 0.38)" }}
              >
                Files:
              </div>
              <div className="d-grid gap-2 mt-2">
                <button
                  onClick={() => setImageShow(true)}
                  className="fs-14 fw-medium text-start"
                  style={{ color: "#D57D2A" }}
                >
                  {formData.files[0].fileName !== undefined ? formData.files[0].fileName : ''}
                </button>
              </div>
            </div>
          </div>
        </div>

        <Modal show={imageShow} onHide={handleClose} centered>
          <Modal.Body>
            <div className="delate-content p-2">
              <div className="d-flex align-items-center gap-4">
                <span className="fs-16 fw-bold">Image</span>
                <span className="fs-14" style={{ color: "#72777A" }}>
                  {formData.files[0].fileName}
                </span>
              </div>
              <div className="mt-4 pt-2 d-grid gap-4 modal-forms-content">
                <div className="col-md-12">
                  <img
                    src={formData.files[0].encodedFile}
                    alt=""
                    style={{ width: "100%" }}
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
                <a
                  href="/images/Pump1.jpg"
                  download
                  className="cancel-btn download-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
                <button className="delate-btn" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <Modal show={videoShow} onHide={handleClose} centered size="lg">
          <Modal.Body>
            <div className="delate-content p-2">
              <div className="d-flex align-items-center gap-4">
                <span className="fs-16 fw-bold">Video</span>
                <span className="fs-14" style={{ color: "#72777A" }}>
                  Pump1 Meter.mp4
                </span>
              </div>
              <div className="mt-4 pt-2 d-grid gap-4 modal-forms-content">
                <div className="col-md-12">
                  <video width="100%" height="auto" controls>
                    <source src="/images/Pump1 Meter.mp4" type="" />
                  </video>
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
                <a
                  href="/images/Pump1 Meter.mp4"
                  download
                  className="cancel-btn download-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
                <button className="delate-btn" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <Modal show={documentShow} onHide={handleClose} centered size="lg">
          <Modal.Body>
            <div className="delate-content p-2">
              <div className="d-flex align-items-center gap-4">
                <span className="fs-16 fw-bold">Document</span>
                <span className="fs-14" style={{ color: "#72777A" }}>
                  Calibration manual.pdf
                </span>
              </div>
              <div className="mt-4 pt-2 d-grid gap-4 modal-forms-content">
                <div className="col-md-12">
                  <iframe
                    title="pdf-viewer"
                    src="/images/Calibration manual.pdf"
                    width="100%"
                    height="500px"
                  ></iframe>
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
                <a
                  href="/images/Calibration manual.pdf"
                  download
                  className="cancel-btn download-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
                <button className="delate-btn" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <div className="details-buttons pt-lg-5 d-flex justify-content-between">
          <Link
            to="/work-orders/add-work-order/information"
            className="next-btn ms-0"
          >
            Previous
          </Link>
          <btn className="next-btn ms-0"
            onClick={e => handleFormSubmit()}
          >
            Submit
          </btn>
        </div>
      </div>
    </>
  );
};

export default WorkOrderSummary;
