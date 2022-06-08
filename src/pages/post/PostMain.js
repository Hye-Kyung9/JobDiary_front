import React, { useState } from "react";
import PostHeader from "./PostHeader";
import PostList from "./PostList";
import { Button } from "react-bootstrap";
import PaginationPost from "./PaginationPost";
import Footer from "../../layouts/Footer";

const PostMain = () => {
  const [postsPerPage] = useState(10);

  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <PostHeader />
      <Button className="new_post" href="/new_post">
        새 글 쓰기
      </Button>
      <PostList />
      <PaginationPost /> <Footer />
    </>
  );
};

export default PostMain;
