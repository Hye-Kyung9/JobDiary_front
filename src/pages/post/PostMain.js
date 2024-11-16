import React from "react";
import PostHeader from "./PostHeader";
import PostList from "./PostList";
import { Button } from "react-bootstrap";
import PaginationPost from "./PaginationPost";
import Footer from "../../layouts/Footer";

const PostMain = () => {
  return (
    <>
      <PostHeader />
      <Button className="new_post" href="/new_post">
        새 글 쓰기
      </Button>
      <PostList />
      <PaginationPost />
      <Footer />
    </>
  );
};

export default PostMain;
