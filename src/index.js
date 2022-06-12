import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
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
import JobPosting from "./pages/jobposting/JobPosting";
import { RequireAuth } from "./RequireAuth";
import "react-datetime/css/react-datetime.css";

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route
        path="/jobs"
        element={
          <RequireAuth>
            <JobPosting />
          </RequireAuth>
        }
      ></Route>
      <Route
        path="/stack"
        element={
          <RequireAuth>
            <Skills />
          </RequireAuth>
        }
      ></Route>
      <Route
        path="/study"
        element={
          <RequireAuth>
            <PostMain />
          </RequireAuth>
        }
      ></Route>
      <Route
        path="/interview"
        element={
          <RequireAuth>
            <NotFound />
          </RequireAuth>
        }
      ></Route>
      <Route
        path="/it-mbti"
        element={
          <RequireAuth>
            <NotFound />
          </RequireAuth>
        }
      ></Route>
      <Route
        path="/template"
        element={
          <RequireAuth>
            <Template />
          </RequireAuth>
        }
      ></Route>
      <Route
        path="/template/write_resume"
        element={
          <RequireAuth>
            <WriteResume />
          </RequireAuth>
        }
      ></Route>
      <Route
        path="/my_resume"
        element={
          <RequireAuth>
            <NotFound />
          </RequireAuth>
        }
      ></Route>
      <Route
        path="/new_post"
        element={
          <RequireAuth>
            <NewPost />
          </RequireAuth>
        }
      ></Route>
      <Route
        path="/good_resume"
        element={
          <RequireAuth>
            <NotFound />
          </RequireAuth>
        }
      ></Route>
      <Route
        path="/todolist"
        element={
          <RequireAuth>
            <Todo />
          </RequireAuth>
        }
      ></Route>
      <Route
        path="/calendar"
        element={
          <RequireAuth>
            <MyCalendar />
          </RequireAuth>
        }
      ></Route>
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
