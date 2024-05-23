import React, { useState } from "react";
import AttachIcon from "../../../Assets/Icons/AttachIcon";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import DeleteIcon from "../../../Assets/Icons/DeleteIcon";
import store from "../../../context";
import { useRecoilState } from "recoil";
import useInitializeRecoilStates from "../../../hooks/useInitializeRecoilStates ";

const WorkOrderInformation = () => {
  const { workOrderSummary, setWorkOrderSummary } = useInitializeRecoilStates();
  const [attachments, setAttachments] = useRecoilState(store.attachments);
  const [attachShow, setAttachShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileType, setSelectedFileType] = useState(null);

  const handleClose = () => {
    setAttachShow(false);
    setSelectedFile(null);
    setSelectedFileType(null);
  };

  const handleFileChange = async (e) => {
    const selectedFiles = Array.from(e.target.files);
    const newFiles = await Promise.all(
      selectedFiles.map(async (file) => {
        const base64 = await toBase64(file);
        return {
          encodedFile: base64,
          fileName: file.name,
          url: "",
          fileType: getFileType(file.name),
        };
      })
    );
    setAttachments((prevAttachments) => [
      ...prevAttachments,
      ...newFiles.filter(
        (newFile) =>
          !prevAttachments.some((file) => file.fileName === newFile.fileName)
      ),
    ]);
    setWorkOrderSummary((workOrderSummary) => ({
      ...workOrderSummary,
      files: workOrderSummary.files
        ? [...workOrderSummary.files, ...newFiles]
        : [...newFiles],
    }));
  };

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const deleteFile = (attachment) => {
    setAttachments((prevAttachments) =>
      prevAttachments.filter((file) => file.fileName !== attachment.fileName)
    );
    setWorkOrderSummary((workOrderSummary) => ({
      ...workOrderSummary,
      files: workOrderSummary.files.filter(
        (file) => file.fileName !== attachment.fileName
      ),
    }));
  };

  const handleFileClick = (file) => {
    setSelectedFile(file.fileName);
    const fileType = getFileType(file.fileName);
    setSelectedFileType(fileType);
    setAttachShow(true);
  };

  const getFileType = (fileName) => {
    const extension = fileName.split(".").pop().toLowerCase();
    if (["jpg", "jpeg", "png", "gif"].includes(extension)) {
      return "image";
    } else if (["mp4", "avi", "mkv"].includes(extension)) {
      return "video";
    } else if (["pdf", "doc", "docx"].includes(extension)) {
      return "document";
    }
    return "unknown";
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
                  {file.fileName.length > 30
                    ? `${file.fileName.substring(0, 30)}...`
                    : file.fileName}{" "}
                </button>
                <button
                  onClick={() => deleteFile(file)}
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
                {selectedFile}
              </span>
            </div>
            <div className="mt-4 pt-2 d-grid gap-4 modal-forms-content">
              <div className="col-md-12">
                {selectedFileType === "image" && (
                  <img
                    src={`/images/${selectedFile}`}
                    alt=""
                    style={{ width: "100%" }}
                  />
                )}
                {selectedFileType === "video" && (
                  <video width="100%" height="auto" controls>
                    <source src={`/images/${selectedFile}`} type="video/mp4" />
                  </video>
                )}
                {selectedFileType === "document" && (
                  <iframe
                    title="pdf-viewer"
                    src={`/images/${selectedFile}`}
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
                href={`/images/${selectedFile}`}
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
