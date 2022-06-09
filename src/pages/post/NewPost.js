import React from "react";
import EditorComponent from "./EditorComponent";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const NewPost = () => {
  return (
    <>
      <div className="new-post-edit">
        <div className="post-title" style={{ padding: "50px 50px 0 50px" }}>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
            <FormControl
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>{" "}
        </div>
        <EditorComponent />
        <div style={{ margin: "0 auto", display: "flex", paddingTop: "20px" }}>
          <Button
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
