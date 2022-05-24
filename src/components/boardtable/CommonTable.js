import React from "react";
import "./CommonTable.css";

const CommonTable = (props) => {
  const { headersName, children } = props;

  return (
    <table className="common-table">
      <thead>
        <tr>
          {headersName.map((item, index) => {
            return (
              <td className="common-table-header-column" key={index}>
                {item}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default CommonTable;
// 1. CommonTable.js : 게시판리스트

// 2. NoticeDetailComponent.js : 게시글 상세화면

// 3. NoticeModifyComponent.js : 게시글 수정화면

// 4. NoticeWriteComponent.js : 게시글 작성화면, 3과 4는 합쳐도 됩니다.

// 5. EditorComponent.js : 글 작성할 에디터 화면

// 6. Pagination.js : 게시글 밑에 pagination component

// 7. UploadFiles.js : 첨부파일 component
