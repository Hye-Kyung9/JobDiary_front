import { Container } from "react-bootstrap";
import Layout from "./layouts/Layout";
import React from "react";

function App() {
  return (
    <Layout>
      <Container style={{ minHeight: "75vh" }}>App</Container>
    </Layout>
  );
}

export default App;
