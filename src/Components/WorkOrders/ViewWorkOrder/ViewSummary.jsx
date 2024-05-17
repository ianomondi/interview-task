import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import EditIcon2 from "../../../Assets/Icons/EditIcon2";
import DeleteIcon from "../../../Assets/Icons/DeleteIcon";
import EyesIcon from "../../../Assets/Icons/EyesIcon";
import DownloadIcon from "../../../Assets/Icons/DownloadIcon";
import AddFileModal from "../Modal/AddFileModal";
import SummaryLabourCostsModal from "../Modal/SummaryLabourCostsModal";
import SummaryEditLabourCostsModal from "../Modal/SummaryEditLabourCostsModal";
import DeleteModal from "../Modal/DeleteModal";
import SummaryAddOtherCostsModal from "../Modal/SummaryAddOtherCostsModal";
import SummaryEditOtherCostsModal from "../Modal/SummaryEditOtherCostsModal";
import ViewImage from "../Modal/ViewImage";
import ViewVideo from "../Modal/ViewVideo";
import ViewDocument from "../Modal/ViewDocument";

const ViewSummary = () => {
  const [addFileShow, setAddFileShow] = useState(false);
  const [labourCosts, setLabourCosts] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [delateModalShow, setDelateModalShow] = useState(false);
  const [otherModalShow, setOtherModalShow] = useState(false);
  const [editModalData, setEditModalData] = useState({});
  const [editOtherModalData, setOtherModalData] = useState({});
  const [editOtherShow, setEditOtherShow] = useState(false);
  const [imageShow, setImageShow] = useState({
    isShow: false,
    image: "",
    file_name: "",
  });
  const [videoShow, setVideoShow] = useState({
    isShow: false,
    video: "",
    file_name: "",
  });
  const [documentShow, setDocumentShow] = useState({
    isShow: false,
    document: "",
    file_name: "",
  });

  //function to download files
  const handleDownload = (fileUrl) => {
    fetch(fileUrl)
      .then((response) => response.blob()) // Convert response to a Blob
      .then((blob) => {
        const url = window.URL.createObjectURL(blob); // Create a temporary URL
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileUrl); // Set the downloaded file name
        link.click(); // Simulate a click on the link to initiate download

        // Optional: Clean up the temporary URL after download (recommended)
        setTimeout(() => window.URL.revokeObjectURL(url), 1000); // Revoke after 1 second
      })
      .catch((error) => console.error("Error downloading file:", error));
  };

  return (
    <>
      <div className="order-request washroom-right-content responses-cont">
        <div className="washroom-title">
          <div className="fs-13 fw-medium">WORK ORDER SUMMARY</div>
          <div className="fs-13 fw-bold">
            Status: <button className="primary-text fw-bold">ON HOLD</button>
          </div>
        </div>
        <div className="order-request mt-4 p-0">
          <Accordion defaultActiveKey="0">
            {/* FILES */}
            <Accordion.Item eventKey="0" className="request-box">
              <Accordion.Header className="request-box-title">
                <div className="fs-13 fw-medium">FILES</div>
              </Accordion.Header>
              <Accordion.Body className="request-box-body p-0">
                <div className="fs-14 fw-medium black-38">Files uploaded</div>
                {fileData.map((item) => (
                  <div className="upload-details" key={item.id}>
                    <div>
                      <div className="fs-14" style={{ color: "#1F2024" }}>
                        {item.fileName}
                      </div>
                      <div className="fs-13 gray-c">
                        Added: {item.uploadedTime}{" "}
                      </div>
                    </div>
                    <div className="upload-icons">
                      <button
                        onClick={() =>
                          item.file.includes(
                            ".jpg" ||
                              ".jpeg" ||
                              ".png" ||
                              ".JPG" ||
                              ".JPEG" ||
                              ".PNG"
                          )
                            ? setImageShow({
                                isShow: true,
                                image: item.file,
                                file_name: item.fileName,
                              })
                            : item.file.includes(".pdf" || "PDF")
                            ? setDocumentShow({
                                isShow: true,
                                document: item.file,
                                file_name: item.fileName,
                              })
                            : item.file.includes(
                                ".mp4" ||
                                  ".AVI" ||
                                  "3GP" ||
                                  "MP4" ||
                                  ".avi" ||
                                  "3gp"
                              ) &&
                              setVideoShow({
                                isShow: true,
                                video: item.file,
                                file_name: item.fileName,
                              })
                        }
                      >
                        <EyesIcon />
                      </button>

                      <button onClick={() => handleDownload(item.file)}>
                        <DownloadIcon />
                      </button>
                      <button onClick={() => setDelateModalShow(true)}>
                        <DeleteIcon />
                      </button>
                    </div>
                  </div>
                ))}
                <div className="text-end">
                  <button
                    className="add-button my-3 "
                    onClick={() => setAddFileShow(true)}
                  >
                    Add File
                  </button>
                  <AddFileModal
                    show={addFileShow}
                    onHide={() => setAddFileShow(false)}
                  />
                </div>
              </Accordion.Body>
            </Accordion.Item>

            {/* LABOUR COSTS */}
            <Accordion.Item eventKey="1" className="request-box">
              <Accordion.Header className="request-box-title">
                <div className="fs-13 fw-medium">LABOUR COSTS</div>
              </Accordion.Header>
              <Accordion.Body className="request-box-body p-0">
                <div
                  className="table-responsive-sm request_table"
                  style={{ maxWidth: "100%" }}
                >
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Staff Name</th>
                        <th scope="col">Team</th>
                        <th scope="col">Hours</th>
                        <th scope="col">Rate per Hour</th>
                        <th scope="col">Total Cost</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {labourData.map((item) => (
                        <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>{item.team}</td>
                          <td>{item.hours}</td>
                          <td>{item.rate}</td>
                          <td>{item.cost}</td>
                          <td>
                            <div className="button-con">
                              <button
                                onClick={() => {
                                  setEditModalData(item);
                                  setEditModalShow(true);
                                }}
                              >
                                <EditIcon2 />
                              </button>

                              <button onClick={() => setDelateModalShow(true)}>
                                <DeleteIcon />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <SummaryEditLabourCostsModal
                  show={editModalShow}
                  data={editModalData}
                  onHide={() => setEditModalShow(false)}
                />

                <div className="text-end">
                  <button
                    className="add-button my-3"
                    onClick={() => setLabourCosts(true)}
                  >
                    Add Labour Costs
                  </button>
                  <SummaryLabourCostsModal
                    show={labourCosts}
                    onHide={() => setLabourCosts(false)}
                  />
                </div>
              </Accordion.Body>
            </Accordion.Item>

            {/* OTHER COSTS */}
            <Accordion.Item eventKey="2" className="request-box">
              <Accordion.Header className="request-box-title">
                <div className="fs-13 fw-medium">OTHER COSTS</div>
              </Accordion.Header>
              <Accordion.Body className="request-box-body">
                <div
                  className="table-responsive-sm request_table"
                  style={{ maxWidth: "100%" }}
                >
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Category</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Unit Cost</th>
                        <th scope="col">Total Cost</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {otherData.map((item) => (
                        <tr key={item.id}>
                          <td>{item.category}</td>
                          <td>{item.description}</td>
                          <td>{item.quantity}</td>
                          <td>{item.unit}</td>
                          <td>{item.total}</td>
                          <td>
                            <div className="button-con">
                              <button
                                onClick={() => {
                                  setOtherModalData(item);
                                  setEditOtherShow(true);
                                }}
                              >
                                <EditIcon2 />
                              </button>

                              <button onClick={() => setDelateModalShow(true)}>
                                <DeleteIcon />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <SummaryEditOtherCostsModal
                  show={editOtherShow}
                  data={editOtherModalData}
                  onHide={() => setEditOtherShow(false)}
                />
                <div className="text-end">
                  <button
                    onClick={() => setOtherModalShow(true)}
                    className="add-button my-3"
                  >
                    Add Other Costs
                  </button>
                  <SummaryAddOtherCostsModal
                    show={otherModalShow}
                    onHide={() => setOtherModalShow(false)}
                  />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>

      {/* Modal function */}
      <ViewImage show={imageShow} onHide={() => setImageShow(false)} />
      <ViewVideo show={videoShow} onHide={() => setVideoShow(false)} />
      <ViewDocument show={documentShow} onHide={() => setDocumentShow(false)} />

      <DeleteModal
        show={delateModalShow}
        onHide={() => setDelateModalShow(false)}
      />
    </>
  );
};

const fileData = [
  {
    id: 0,
    fileName: "Pump calibration manual.pdf",
    uploadedTime: "19/01/2022 10:33 AM",
    file: "/demo/1.pdf",
  },
  {
    id: 1,
    fileName: "Example Image 1.jpg",
    uploadedTime: "19/01/2022 10:33 AM",
    file: "/demo/1.jpg",
  },
  {
    id: 2,
    fileName: "Example Video 1.mp4",
    uploadedTime: "19/01/2022 10:33 AM",
    file: "/demo/1.mp4",
  },
];

const labourData = [
  {
    id: 0,
    name: "John Doe",
    team: "A - Z Engineering",
    hours: "4",
    rate: "KES 8,000",
    cost: "KES 32,000",
  },
  {
    id: 1,
    name: "John Doe",
    team: "A - Z Engineering",
    hours: "4",
    rate: "KES 8,000",
    cost: "KES 32,000",
  },
  {
    id: 2,
    name: "John Doe",
    team: "A - Z Engineering",
    hours: "4",
    rate: "KES 8,000",
    cost: "KES 32,000",
  },
];

const otherData = [
  {
    id: 0,
    category: "Meals",
    description: "Lunch 31 Jan 24",
    quantity: "1",
    unit: "KES 2,000",
    total: "KES 2,000",
  },
  {
    id: 1,
    category: "Transport",
    description: "Taxi to site",
    quantity: "1",
    unit: "KES 4,000",
    total: "KES 4,000",
  },
  {
    id: 2,
    category: "John Doe",
    description: "To Kisumu",
    quantity: "400",
    unit: "KES 100",
    total: "KES 40,000",
  },
];

export default ViewSummary;
