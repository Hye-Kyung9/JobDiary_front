import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Accountpage from "./Accountpage";
import Main from "../App";
// import Header from "../components/Header";
import Login from "../layouts/Header";
export default () => (
  <Router>
    {" "}
    <Header />
    {/* 라우터 관리 */}
    <Route exact path="/" component={Main} />{" "}
    {/* <Route path="/Signpage" component={Accountpage} />{" "} */}
    <Route path="/Login" component={Login} />{" "}
  </Router>
);
