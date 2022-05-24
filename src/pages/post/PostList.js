import React from "react";
import CommonTable from "../../components/boardtable/CommonTable";
import CommonTableColumn from "../../components/boardtable/CommonTableColumn";
import CommonTableRow from "../../components/boardtable/CommonTableRow";
import "../../index.css";

const PostList = (props) => {
  return (
    <>
      <CommonTable headersName={["글번호", "제목", "등록일", "조회수"]}>
        <CommonTableRow>
          <CommonTableColumn>1</CommonTableColumn>
          <CommonTableColumn>게시글 테스팅.</CommonTableColumn>
          <CommonTableColumn>2022-04-03</CommonTableColumn>
          <CommonTableColumn>6</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>2</CommonTableColumn>
          <CommonTableColumn>두번째 게시글입니다.</CommonTableColumn>
          <CommonTableColumn>2022-04-03</CommonTableColumn>
          <CommonTableColumn>5</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>3</CommonTableColumn>
          <CommonTableColumn>세번째 게시글입니다.</CommonTableColumn>
          <CommonTableColumn>2022-04-03</CommonTableColumn>
          <CommonTableColumn>1</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>4</CommonTableColumn>
          <CommonTableColumn>네번째 게시글입니다.</CommonTableColumn>
          <CommonTableColumn>2022-04-03</CommonTableColumn>
          <CommonTableColumn>2</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>5</CommonTableColumn>
          <CommonTableColumn>다섯번째 게시글입니다.</CommonTableColumn>
          <CommonTableColumn>2022-04-03</CommonTableColumn>
          <CommonTableColumn>4</CommonTableColumn>
        </CommonTableRow>
      </CommonTable>
    </>
  );
};

export default PostList;
