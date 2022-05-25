import React from "react";
import { Button } from "react-bootstrap";

const PrintBtn = (props) => {
  return (
    <>
      <Button
        className="printbtn"
        variant="secondary"
        onClick={props.handlePrint}
      >
        print
      </Button>
    </>
  );
};

export default PrintBtn;
