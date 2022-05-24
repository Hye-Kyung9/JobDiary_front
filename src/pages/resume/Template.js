import React from "react";
import resume_sample from "../resume_sample1.png";
import Footer from "../../layouts/Footer";
import { Container } from "react-bootstrap";

const Template = () => {
  return (
    <>
      <Container className="resume_container">
        <div className="Title_template">템플릿 선택하기</div>
        <div className="template_list">Basic</div>
        <a href="/template/write_resume">
          <img className="template_list_img" src={resume_sample} />
        </a>
      </Container>
      <Footer />
    </>
  );
};

export default Template;
