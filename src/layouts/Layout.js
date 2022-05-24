// import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <Body />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
