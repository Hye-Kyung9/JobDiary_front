import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import useNavigate from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import PostMain from "./pages/post/PostMain";
import Header from "./layouts/Header";
// import Footer from "./layouts/default";
import Template from "./pages/resume/Template";
import WriteResume from "./pages/resume/WriteResume";
import Todo from "./pages/mypage/ToDo/TodoMain";
import MyCalendar from "./pages/mypage/Cal/MyCalendar";
import Skills from "./pages/stack/Skills";
import NewPost from "./pages/post/NewPost";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/jobs" element={<NotFound />}></Route>
        <Route path="/stack" element={<Skills />}></Route>
        <Route path="/study" element={<PostMain />}></Route>
        <Route path="/study/QnA" element={<NotFound />}></Route>
        <Route path="/interview" element={<NotFound />}></Route>
        <Route path="/it-mbti" element={<NotFound />}></Route>
        <Route path="/template" element={<Template />}></Route>
        <Route path="/template/write_resume" element={<WriteResume />}></Route>
        <Route path="/my_resume" element={<NotFound />}></Route>
        <Route path="/new_post" element={<NewPost />}></Route>
        <Route path="/good_resume" element={<NotFound />}></Route>
        <Route path="/daybook" element={<NotFound />}></Route>
        <Route path="/todolist" element={<Todo />}></Route>
        <Route path="/calendar" element={<MyCalendar />}></Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
