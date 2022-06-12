import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const auth = window.sessionStorage.getItem("username");
  if (!auth) {
    alert("로그인을 해주세요🥺");
    return <Navigate to="/" />;
  }

  return children;
};
