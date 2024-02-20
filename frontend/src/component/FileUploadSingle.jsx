/**
 * The above code is a React component that allows users to upload a single file to a server using
 * axios.
 * @returns The component is returning a div containing an input element of type "file" and a button.
 */
import React, { useState } from "react";
import axios from "axios";
const FileUploadSingle = () => {
  const [selectedFile, setSelectedFile] = useState({
    fileInput: "",
  });

  const handleFileChange = (event) => {
    // console.log(event.target.files[0]);
    setSelectedFile((prv) => ({ ...prv, fileInput: event.target.files[0] }));
  };

  const handleUpload = () => {
    if (selectedFile.fileInput) {
      const formData = new FormData();
      formData.append("fileInput", selectedFile.fileInput);
      // console.log("formdata" + formData);
      axios
        .post(
          "https://blog-backend-3dcg.onrender.com/api/file/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          alert("Submited");
          // console.log("File uploaded successfully:", response.data.fileName);
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
          if (error.response) {
            // The request was made and the server responded with a status code
            console.error(
              "Server responded with status",
              error.response.status
            );
            console.error("Server response data:", error.response.data);
          } else if (error.request) {
            // The request was made but no response was received
            console.error("No response received from the server");
          } else {
            // Something happened in setting up the request
            console.error("Error setting up the request", error.message);
          }
        });
    } else {
      console.warn("No file selected for upload.");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};
export default FileUploadSingle;
