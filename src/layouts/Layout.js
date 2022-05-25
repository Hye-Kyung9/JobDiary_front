// import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import JobPosting from "../pages/jobposting/JobPosting";

const Layout = ({}) => {
  return (
    <>
      {/* <Header /> */}
      <Body />
      {/* {children} */}
      <JobPosting />
      <Footer />
    </>
  );
};

export default Layout;
