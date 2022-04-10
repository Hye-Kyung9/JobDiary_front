import React, { useState } from "react";
import { Navbar, Nav, Button, Container, NavDropdown } from "react-bootstrap";
import SignUpModal from "../modals/SignUpModal";
import SignInModal from "../modals/SignInModal";
import logo from "./imgs/logo.png";

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
          <Navbar.Brand href="/">
            <img class="logo" src={logo} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/jobs">채용정보</Nav.Link>
            <Nav.Link href="/stack">기업별스택</Nav.Link>
            <Nav.Link href="/study">Study With Me</Nav.Link>
            <NavDropdown title="이력서">
              <NavDropdown.Item href="/my_resume">내 이력서</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/good_resume">
                우수이력서
              </NavDropdown.Item>
              <NavDropdown.Item href="/edit">자소서 첨삭🔥</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="mypage">
              <NavDropdown.Item href="/daybook">일일 일기</NavDropdown.Item>
              <NavDropdown.Item href="/todolist">
                To Do List ☑️
              </NavDropdown.Item>
              <NavDropdown.Item href="/calendar">
                내 일정(calendar)
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ml-auto">
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            {/* <Navbar.Collapse id="basic-navbar-nav"> */}
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
            {/* </Navbar.Collapse> */}
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
