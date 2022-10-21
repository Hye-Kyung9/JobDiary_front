import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container className="footer">
        <div
          style={{
            textAlign: "center",
            width: "100%",
            // height: "99999px" /* footer의 높이 */,
            // position: "fixed",
            paddingTop: "10%",
            bottom: "0",
            left: "0",
          }}
        >
          &copy; 2022 . All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
