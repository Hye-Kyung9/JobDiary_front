import React, { useState } from "react";
import { Navbar, Nav, Button, Container, NavDropdown } from "react-bootstrap";
import SignUpModal from "../modals/SignUpModal";
import SignInModal from "../modals/SignInModal";
import logo from "./imgs/logo.png";
import { Link } from "react-router-dom";
// import page from "../pages/index.js";

const Header = () => {
  const [signUpModalOn, setSignUpModalOn] = useState(false);
  const [signInModalOn, setSignInModalOn] = useState(false);
  return (
    <>
      <SignUpModal
        show={signUpModalOn}
        onHide={() => setSignUpModalOn(false)}
      />
      <SignInModal
        show={signInModalOn}
        onHide={() => setSignInModalOn(false)}
      />
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            {/* <Link to="/"></Link> */}
            <img class="logo" src={logo} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/jobs">채용정보</Nav.Link>
            <Nav.Link to="/stack">기업별스택</Nav.Link>
            <NavDropdown
              // href="/community"
              title="커뮤니티"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                QnA
                {/* <Nav.Link href="/board">QnA</Nav.Link> */}
              </NavDropdown.Item>
              <NavDropdown.Item>스터디</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown href="/profile" title="이력서" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">내 이력서</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">우수이력서</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                자소서 첨삭🔥
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown href="/mypage" title="mypage" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">일일 일기</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                To Do List☑️
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                내 일정(calendar)
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ml-auto">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav.Link>
                <Button variant="dark" onClick={() => setSignInModalOn(true)}>
                  Sign In
                </Button>
              </Nav.Link>
              <Nav.Link>
                <Button
                  variant="light"
                  className="signup"
                  onClick={() => setSignUpModalOn(true)}
                >
                  Sign Up
                </Button>
              </Nav.Link>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
      {/* <Routes>
        <Route path="/board" component={BoardContainer} />
      </Routes> */}
    </>
  );
};

export default Header;
