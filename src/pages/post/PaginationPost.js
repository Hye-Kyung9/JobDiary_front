// // postsPerPage : 페이지당 표시할 게시글 수

// // totalPosts : 전체 게시글 수

// // currentPage : 현재 페이지

// // paginate : 클릭 시, 부모 component에 페이지 수를 전달

// // 클릭된 페이지 숫자는 color를 다르게 하여, 현재 머물러있는 페이지를 알 수 있도록 한다.

// import React from "react";

// const PaginationPost = ({
//   postsPerPage,
//   totalPosts,
//   currentPage,
//   paginate,
// }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul className="pagination justify-content-center">
//         {pageNumbers.map((number) => (
//           <li key={number} className="page-item">
//             <a
//               onClick={() => paginate(number)}
//               className="page-link"
//               style={currentPage == number ? { color: "#17a2b8" } : null}
//             >
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default PaginationPost;

import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationPost = () => {
  return (
    <div>
      <Pagination
        style={{ width: "fit-content", margin: "10vh auto", color: "black" }}
      >
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

export default PaginationPost;
