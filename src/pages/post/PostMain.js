import React, { Component } from "react";
import PostHeader from "./PostHeader";
import PostList from "./PostList";
import { Button } from "react-bootstrap";
import PaginationPost from "./PaginationPost";
import Footer from "../../layouts/Footer";
import { NavLink } from "react-router-dom";

class CommonTableRow extends Component {
  render() {
    return (
      <tr>
        <td>
          <NavLink
            to={{ pathname: "/board/detail", query: { _id: this.props._id } }}
          >
            {this.props.createdAt.substring(0, 10)}
          </NavLink>
        </td>
        <td>
          <NavLink
            to={{ pathname: "/board/detail", query: { _id: this.props._id } }}
          >
            {this.props.title}
          </NavLink>
        </td>
      </tr>
    );
  }
}

const PostMain = () => {
  // state = {
  //   boardList: []
  // };

  // componentDidMount() {
  //   this.getBoardList();
  // }

  // getBoardList = () => {
  //   const send_param = {
  //     headers,
  //     _id: $.cookie("login_id")
  //   };
  //   axios
  //     .post("http://localhost:4000/board/getBoardList", send_param)
  //     .then(returnData => {
  //       let boardList;
  //       if (returnData.data.list.length > 0) {
  //         // console.log(returnData.data.list.length);
  //         const boards = returnData.data.list;
  //         boardList = boards.map(item => (
  //           <CommonTableRow
  //             key={Date.now() + Math.random() * 500}
  //             _id={item._id}
  //             createdAt={item.createdAt}
  //             title={item.title}
  //           ></CommonTableRow>
  //         ));
  //         // console.log(boardList);
  //         this.setState({
  //           boardList: boardList
  //         });
  //       } else {
  //         boardList = (
  //           <tr>
  //             <td colSpan="2">작성한 게시글이 존재하지 않습니다.</td>
  //           </tr>
  //         );
  //         this.setState({
  //           boardList: boardList
  //         });
  //         // window.location.reload();
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

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
