import React from "react";
import { createGlobalStyle } from "styled-components";
import StackHeader from "./StackHeader";
import StackBody from "./StackBody";
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
    </div>
  );
};

export default skills;
