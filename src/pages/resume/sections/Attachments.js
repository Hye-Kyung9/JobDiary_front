import React, { useEffect, useState } from "react";
import axios from "axios";

const Attachments = () => {
  const [file, changeFile] = useState();
  const [fileName, changeFileName] = useState("");

  return (
    <div className="filebox">
      <input
        type="file"
        onChange={(e) => {
          changeFile(e.target.files[0]);
          changeFileName(e.target.files[0].name);
        }}
        onClick={() => {
          const formData = new formData();

          formData.append("file", file);
          formData.append("fileName", fileName);
          try {
            axios
              .post("http://localhost:4000/fileUpload", formData)
              .then((response) => {
                console.log(response);
              });
          } catch (exception) {
            console.log(exception);
          }
        }}
      />
      <button className="file_upload" />
    </div>
  );
};

export default Attachments;
