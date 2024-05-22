import React, { useState } from "react";
import AttachIcon from "../../../Assets/Icons/AttachIcon";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import DeleteIcon from "../../../Assets/Icons/DeleteIcon";
import { useDispatch, useSelector } from "react-redux";
import { addFile, deleteFile } from "../../../redux/formSlice";
import { fileToBase64 } from "../../../utls/convertToBase64";

const WorkOrderInformation = () => {
  const [attachShow, setAttachShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileType, setSelectedFileType] = useState(null);

  const dispatch = useDispatch();
  const attachments = useSelector((state) => state.form.files);

  const handleClose = () => {
    setAttachShow(false);
    setSelectedFile(null);
    setSelectedFileType(null);
  };

  const handleFileChange = async (e) => {
    const selectedFiles = Array.from(e.target.files);
    selectedFiles.forEach(async (file) => {
      const base64 = await fileToBase64(file);
      const fileType = file.name.split('.').pop().toLowerCase();
      const newFile = {
        encodedFile: base64,
        fileName: file.name,
        url: "",
        fileType: fileType
      };
      dispatch(addFile(newFile));
    });
  };

  const deleteFileHandler = (fileName) => {
    dispatch(deleteFile(fileName));
  };

  const handleFileClick = (file) => {
    setSelectedFile(file);
    setSelectedFileType(file.fileType);
    setAttachShow(true);
  };


  return (
    <div className="order-details-content pb-lg-4">
      <div className="fs-16 fw-semibold">Other Information</div>

      <div className="upload-documents pt-5">
        <div className="fs-15 fw-regular">Upload Documents</div>
        <div className="attach-file mt-3">
          <label
            htmlFor="fileInput"
            className="attach-button"
            style={{
              cursor: "pointer",
              background: "#F1EFEF",
              padding: "10px 15px",
              borderRadius: "5px",
            }}
          >
            <AttachIcon /> Click to attach
            <input
              type="file"
              id="fileInput"
              onChange={handleFileChange}
              multiple
              style={{ display: "none" }}
            />
          </label>
          {attachments.length < 1 && (
            <span
              className="fs-15 fw-medium text-black "
              style={{ fontStyle: "italic", paddingLeft: "15px" }}
            >
              No file chosen
            </span>
          )}
        </div>
        <div className="pt-4" style={{ maxWidth: "280px" }}>
          <div className="fs-14 fw-medium" style={{ color: "#0000007d" }}>
            Files uploaded:
          </div>
          {attachments.length > 0 ? (
            attachments.map((file, index) => (
              <div
                key={index}
                className="fs-14 fw-medium d-flex align-items-center justify-content-between gap-3 mt-2 pt-1"
                style={{ color: "#D57D2A", cursor: "pointer" }}
              >
                <button
                  className="upload-file-name"
                  style={{ color: "#D57D2A" }}
                  onClick={() => handleFileClick(file)}
                >
                  {file?.fileName?.length > 30 ? `${file?.fileName?.substring(0, 30)}...` : file?.fileName}{" "}
                </button>
                <button
                  onClick={() => deleteFileHandler(file?.fileName)}
                  className="ms-2"
                  style={{ color: "#6C5B51", fontSize: "18px" }}
                >
                  <DeleteIcon />
                </button>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>

      <Modal
        size={
          selectedFileType === "video" || selectedFileType === "document"
            ? "lg"
            : undefined
        }
        show={attachShow}
        onHide={handleClose}
        centered
      >
        <Modal.Body>
          <div className="delete-content p-2">
            <div className="d-flex align-items-center gap-4">
              <span className="fs-16 fw-bold">
                {selectedFileType === "image" && "Image"}
                {selectedFileType === "video" && "Video"}
                {selectedFileType === "document" && "Document"}
              </span>
              <span className="fs-14" style={{ color: "#72777A" }}>
                {selectedFile?.fileName}
              </span>
            </div>
            <div className="mt-4 pt-2 d-grid gap-4 modal-forms-content">
              <div className="col-md-12">
                {selectedFileType === "image" && (
                  <img
                    src={selectedFile.encodedFile}
                    alt=""
                    style={{ width: "100%" }}
                  />
                )}
                {selectedFileType === "video" && (
                  <video width="100%" height="auto" controls>
                    <source src={selectedFile.encodedFile} type="video/mp4" />
                  </video>
                )}
                {selectedFileType === "document" && (
                  <iframe
                    title="pdf-viewer"
                    src={selectedFile.encodedFile}
                    width="100%"
                    height="500px"
                  ></iframe>
                )}
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
                href={selectedFile?.encodedFile}
                download={selectedFile?.fileName}
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
          to="/work-orders/add-work-order/details"
          className="next-btn mt-lg-5 ms-0"
        >
          Previous
        </Link>
        <Link
          to="/work-orders/add-work-order/summary"
          className="next-btn mt-lg-5 ms-0"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default WorkOrderInformation;
