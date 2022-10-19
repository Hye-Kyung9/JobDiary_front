import React from "react";
import { Button } from "react-bootstrap";

const ViewList = () => {
  const onPrepare = () => {
    alert("✨준비중입니다✨");
  };
  return (
    <div>
      <Button className="view-list" onClick={onPrepare}>
        🗒 리스트로 보기
      </Button>
    </div>
  );
};

export default ViewList;
