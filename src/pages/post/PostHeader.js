import React from "react";
// import { Button } from "react-bootstrap";

const PostHeader = () => {
  return (
    <div className="study_head">
      <h1 className="study_with_me">Study With Me : </h1>

      {/* <Button className="new_post">글 작성</Button> */}
    </div>
  );
};

export default PostHeader;

// api는 아래와 같다.

// 1. /noticeList : 게시글 리스트 가져오기

// 2. /saveNotice : 게시글 저장하기

// 3. /noticeDetail : 게시글 상세조회

// 4. /deleteNotice : 게시글 삭제

// 5. /updateNotice : 게시글 수정하기

// 6. /saveNoticeView : 조회수 수정

// 7. /files : 첨부파일 업로드
