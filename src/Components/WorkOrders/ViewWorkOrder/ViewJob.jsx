import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import EyesIcon from "../../../Assets/Icons/EyesIcon";
import DownloadIcon from "../../../Assets/Icons/DownloadIcon";
import DeleteIcon from "../../../Assets/Icons/DeleteIcon";
import AddJobCardModal from "../Modal/AddJobCardModal";
import DeleteModal from "../Modal/DeleteModal";
import ViewImage from "../Modal/ViewImage";
import ViewVideo from "../Modal/ViewVideo";
import ViewDocument from "../Modal/ViewDocument";

const ViewJob = () => {
  const [jobCardShow, setJobCardShow] = useState(false);
  const [delateModalShow, setDelateModalShow] = useState(false);
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
          <div className="fs-13 fw-medium">WORK ORDER JOB CARDS</div>
        </div>
        <div className="order-request mt-4 p-0">
          <Accordion defaultActiveKey="0">
            {/* JOB CARDS */}
            <Accordion.Item eventKey="0" className="request-box">
              <Accordion.Header className="request-box-title">
                <div className="fs-13 fw-medium">JOB CARDS</div>
              </Accordion.Header>
              <Accordion.Body className="request-box-body p-0">
                <div className="fs-14 fw-medium black-38">
                  Job cards uploaded
                </div>
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
                    onClick={() => setJobCardShow(true)}
                  >
                    Add Job Card
                  </button>
                  <AddJobCardModal
                    show={jobCardShow}
                    onHide={() => setJobCardShow(false)}
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

export default ViewJob;
