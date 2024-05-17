import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import ImageIcon from "../../../Assets/Icons/ImageIcon";
import LoadingIcon from "../../../Assets/Icons/LoadingIcon";
import { ProgressBar } from "react-bootstrap";
import DeleteIcon from "../../../Assets/Icons/DeleteIcon";
import CloseIcon from "../../../Assets/Icons/CloseIcon";
import { FileUploader } from "react-drag-drop-files";
import toast from "react-hot-toast";

const CloseWorkModal = (props) => {
  const fileTypes = ["JPEG", "JPG", "PNG"];
  const [files, setFiles] = useState([]);

  const handleChange = (newFiles) => {
    // Ensure newFiles is an array
    const filesToAdd = Array.isArray(newFiles) ? newFiles : [newFiles];

    // Filter out files that already exist based on name and size
    const filteredFiles = filesToAdd.filter((newFile) => {
      return !files.some(
        (existingFile) =>
          existingFile.name === newFile.name &&
          existingFile.size === newFile.size
      );
    });

    // Verify the file type
    filteredFiles.forEach((file) => {
      const fileType = file.name.split(".").pop().toUpperCase();
      if (!fileTypes.includes(fileType)) {
        toast.error("Invalid file type");
        return;
      }
    });

    // Verify the file size
    if (filteredFiles.some((file) => file.size > 2 * 1024 * 1024)) {
      toast.error("File size should not exceed 2MB");
      return; // Stop further execution of the function
    }

    // Add status property to the every filteredFiles
    filteredFiles.forEach((file) => {
      file.status = "Uploading...";
      file.uploading = 50;
    });

    // Concatenate the filtered files with the existing files and set to state
    setFiles([...filteredFiles]);
  };

  //handle delete file
  const handleDelete = (file) => {
    const newFiles = files.filter((f) => f.name !== file.name);
    setFiles(newFiles);
  };

  // change the status of the file after 2 seconds of adding the file and also update the uploading percentage from 0 to 50 to 100
  useEffect(() => {
    const timer = setTimeout(() => {
      const newFiles = files.map((file) => {
        if (file.status === "Uploading...") {
          file.status = "Completed";
          file.uploading = 100;
        }
        return file;
      });
      setFiles(newFiles);
    }, 2000);
    return () => clearTimeout(timer);
  }, [files]);

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="medium-modal"
    >
      <Modal.Body style={{ padding: "28px 30px" }}>
        <div className="delate-content">
          <div className="">
            <span className="fs-16 fw-bold ">Close Work</span>
            <span className="fs-14 ps-3">Sign and close the work</span>
          </div>
          <div className="browse-file-upload mt-4">
            <FileUploader
              hoverTitle=" "
              children={
                <div>
                  <ImageIcon />
                  <div
                    className="fs-16 fw-medium pt-3 pb-2"
                    style={{ color: "#292D32" }}
                  >
                    Choose your signature from file or drag & drop it here
                  </div>
                  <div className="fs-16 fw-medium" style={{ color: "#A9ACB4" }}>
                    JPEG or PNG up to 2MB
                  </div>
                  <input
                    fileOrFiles="files"
                    type="file"
                    accept="image/*"
                    /* onChange={handleFileChange} */
                    style={{ display: "none" }}
                    id="fileInput"
                  />
                  <label
                    htmlFor="fileInput"
                    className="browse-file cursor-pointer"
                  >
                    Browse File
                  </label>
                </div>
              }
              classes="cursor-pointer"
              maxFileSize={50}
              multiple={false}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
              onTypeError={(error) => toast.error(error)}
              onSizeError={(error) => toast.error(error)}
            />
          </div>
          <div className="d-grid gap-3 mt-3">
            {files.map((f) =>
              f.status === "Uploading..." ? (
                <div className="uploading-content">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <div
                        className="fs-16 fw-medium"
                        style={{ color: "#292D32" }}
                      >
                        {f.name}
                      </div>
                      <div
                        className="fs-13 pt-1 pb-2"
                        style={{ color: "#A9ACB4" }}
                      >
                        {/* {uploadedImage.size} */}
                        {parseInt(f.size / 1024) * (f.uploading / 100)} KB of{" "}
                        {parseInt(f.size / 1024)} KB •
                        <span style={{ color: "#292D32", paddingLeft: "10px" }}>
                          <LoadingIcon /> Uploading...
                        </span>
                      </div>
                    </div>
                    <button>
                      <CloseIcon />
                    </button>
                  </div>
                  <ProgressBar variant="warning" now={f.uploading} />
                </div>
              ) : (
                <div className="uploading-content d-flex align-items-center justify-content-between">
                  {/* <img src={signature} alt="" height={43} /> */}
                  {/* use the file as source of image */}
                  <img
                    src={URL.createObjectURL(f)}
                    alt=""
                    height={43}
                    width={43}
                  />
                  <button
                    onClick={() => handleDelete(f)}
                    style={{ color: "#6C5B51" }}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              )
            )}
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
            <button className="border-btn" onClick={props.onHide}>
              Cancel
            </button>
            <button className="cancel-btn" onClick={props.onHide}>
              Close without signature
            </button>
            <button className="delate-btn" onClick={props.onHide}>
              Close
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CloseWorkModal;
