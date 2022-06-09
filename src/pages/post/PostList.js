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
          <CommonTableColumn>
            헤드헌터 이용할 시 주의사항이 있나요?
          </CommonTableColumn>
          <CommonTableColumn>2022-06-10</CommonTableColumn>
          <CommonTableColumn>6</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>2</CommonTableColumn>
          <CommonTableColumn>직장 고민</CommonTableColumn>
          <CommonTableColumn>2022-06-10</CommonTableColumn>
          <CommonTableColumn>5</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>3</CommonTableColumn>
          <CommonTableColumn>구직</CommonTableColumn>
          <CommonTableColumn>2022-06-10</CommonTableColumn>
          <CommonTableColumn>1</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>4</CommonTableColumn>
          <CommonTableColumn>
            스타트업에서 커리어 시작해도 괜찮을까요? 🤔
          </CommonTableColumn>
          <CommonTableColumn>2022-06-10</CommonTableColumn>
          <CommonTableColumn>2</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>5</CommonTableColumn>
          <CommonTableColumn>이직</CommonTableColumn>
          <CommonTableColumn>2022-06-10</CommonTableColumn>
          <CommonTableColumn>4</CommonTableColumn>
        </CommonTableRow>
      </CommonTable>
    </>
  );
};

export default PostList;
