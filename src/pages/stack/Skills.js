import React from "react";
import { createGlobalStyle } from "styled-components";
import StackHeader from "./StackHeader";
import StackBody from "./StackBody";
import Footer from "../../layouts/Footer";

const skills = () => {
  const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
  return (
    <div className="skills_main_layout">
      <GlobalStyle />
      <StackHeader />
      <StackBody />
      <Footer />
    </div>
  );
};

export default skills;
