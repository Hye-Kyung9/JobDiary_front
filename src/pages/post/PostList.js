import axios from "axios";
import React, { useState, useEffect } from "react";
import CommonTable from "../../components/boardtable/CommonTable";
import CommonTableColumn from "../../components/boardtable/CommonTableColumn";
import CommonTableRow from "../../components/boardtable/CommonTableRow";
import "../../index.css";
import moment from "moment";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setPosts(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        //
        const response_data = await axios.get(
          "http://localhost:4000/routes/board/getBoardList"
        );

        if (response_data.data.ok) {
          setPosts(response_data.data.data);
        }
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading)
    return (
      <div class="loading dot">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  if (error) return <div>에러가 발생했습니다</div>;
  if (!posts) return null;

  return (
    <>
      <CommonTable headersName={["제목", "등록일", "작성자"]}>
        {posts.map((post) => (
          <CommonTableRow>
            <CommonTableColumn>{post.title}</CommonTableColumn>
            <CommonTableColumn>
              {moment(post.createdAt).format("MM.DD")}
            </CommonTableColumn>
            <CommonTableColumn>{post.writer}</CommonTableColumn>
          </CommonTableRow>
        ))}
      </CommonTable>
    </>
  );
};

export default PostList;
