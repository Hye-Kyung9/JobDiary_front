import React, { useState } from "react";
import axios from "axios";
import { Navbar, Nav, Button, Container, NavDropdown } from "react-bootstrap";
import SignUpModal from "../modals/SignUpModal";
import SignInModal from "../modals/SignInModal";
import logo from "./imgs/logo.png";

const Header = () => {
  const [signUpModalOn, setSignUpModalOn] = useState(false);
  const [signInModalOn, setSignInModalOn] = useState(false);
  const [authorized, setAuthorized] = useState(sessionStorage.getItem("id"));

  const logout = async () => {
    await axios.get("http://localhost:4000/routes/account/logout", {
      withCredentials: false,
    });

    window.sessionStorage.removeItem("id");
    setAuthorized(sessionStorage.getItem("id"));
  };

  return (
    <>
      <SignUpModal
        show={signUpModalOn}
        onHide={() => setSignUpModalOn(false)}
      />
      <SignInModal
        show={signInModalOn}
        onHide={() => setSignInModalOn(false)}
        authorized={setAuthorized}
      />
      <Navbar bg="light" expand="lg" className="header_nav">
        <Container>
          <Navbar.Brand href="/">
            <img className="logo" src={logo} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/jobs">채용정보</Nav.Link>
            <Nav.Link href="/stack">기업별스택</Nav.Link>
            <Nav.Link href="/study">취준진담</Nav.Link>
            <NavDropdown title="이력서">
              <NavDropdown.Item href="/template">
                이력서 작성하기
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/my_resume">내 이력서</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="/good_resume">
                우수 이력서
              </NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="mypage">
              {/* <NavDropdown.Item href="/daybook">일일 일기</NavDropdown.Item> */}
              <NavDropdown.Item href="/todolist">
                To Do List ☑️
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/calendar">
                Diary & Calendar
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ml-auto">
            {authorized ? (
              <>
                {/* {username} */}
                <Nav.Link>
                  <Button className="logout" onClick={logout} variant="light">
                    logout
                  </Button>
                </Nav.Link>
              </>
            ) : (
              <>
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
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
