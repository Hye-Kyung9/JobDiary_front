import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EditorComponent from "./EditorComponent";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const NewPost = () => {
  const navigate = useNavigate();
  const [titleInfo, setTitleInfo] = useState({
    title: "",
  });

  const [contentInfo, setContentInfo] = useState({
    content: "",
  });

  const onTitleChange = (e) => {
    console.log(e);
    const { value, name } = e.target;
    setTitleInfo({
      ...titleInfo,
      [name]: value,
    });
    console.log(titleInfo);
  };

  const onContentChange = (value) => {
    setContentInfo(value);
    console.log(contentInfo);
  };

  const submitPost = async () => {
    await axios.post(
      "http://localhost:4000/routes/board/write",
      {
        username: window.sessionStorage.getItem("username"),
        title: titleInfo.title,
        content: contentInfo,
      },
      {
        withCredentials: true,
      }
    );
    navigate("/study");
  };

  return (
    <>
      <div className="new-post-edit">
        <div className="post-title" style={{ padding: "50px 50px 0 50px" }}>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
            <FormControl
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              name="title"
              onChange={onTitleChange}
            />
          </InputGroup>{" "}
        </div>
        <EditorComponent value={contentInfo} onChange={onContentChange} />
        <div style={{ margin: "0 auto", display: "flex", paddingTop: "20px" }}>
          <Button
            onClick={submitPost}
            style={{ width: "auto", margin: "0 auto", padding: "10px 20px" }}
          >
            작성
          </Button>
        </div>{" "}
      </div>
    </>
  );
};

export default NewPost;
