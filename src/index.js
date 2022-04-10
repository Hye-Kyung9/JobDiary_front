import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Study from "./pages/community/Study";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/jobs" element={<NotFound />}></Route>
        <Route path="/stack" element={<NotFound />}></Route>
        <Route path="/study" element={<Study />}></Route>
        <Route path="/my_resume" element={<NotFound />}></Route>
        <Route path="/good_resume" element={<NotFound />}></Route>
        <Route path="/edit" element={<NotFound />}></Route>
        <Route path="/daybook" element={<NotFound />}></Route>
        <Route path="/todolist" element={<NotFound />}></Route>
        <Route path="/calendar" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
