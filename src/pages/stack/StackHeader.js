import React from "react";
import { Stack, Form, Button } from "react-bootstrap";

const StackHeader = () => {
  return (
    <div className="header-main">
      <div className="header-heading-title">기업별 스택</div>
      <Stack direction="horizontal" gap={3} className="skills-header-search">
        <Form.Control className="search" placeholder="기업 검색" />
        <Button variant="secondary" style={{ width: "auto" }}>
          Submit
        </Button>
        <div className="vr" />
        <Button variant="outline-danger" style={{ width: "6vw" }}>
          + 기업
        </Button>
      </Stack>
    </div>
  );
};

export default StackHeader;
