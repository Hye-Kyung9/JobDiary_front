import React from "react";
import PostHeader from "./PostHeader";
import PostList from "./PostList";
import EditorComponent from "./EditorComponent";
import { Route } from "react-router-dom";

const PostMain = () => {
  let isAuthorized = sessionStorage.getItem("id");

  {
    isAuthorized ? <Route to="/study" /> : <Route to="/" />;
  }

  return (
    <>
      <PostHeader />
      <PostList />
      <EditorComponent />
    </>
  );
};

export default PostMain;
