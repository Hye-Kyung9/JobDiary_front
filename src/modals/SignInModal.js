import React, { useState } from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
import HorizontalLine from "../components/HorizonLine";
import { login } from "../ controller/login";

const SignInModal = ({ show, onHide }) => {
  const [alert_show, alert_setShow] = useState(false);
  const [err, setErr] = useState("");

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
    console.log(userInfo);
  };

  const onSubmitAccount = async () => {
    if (userInfo.email == "") {
      alert_setShow(true);
      setErr("이메일을 입력해주세요");
    } else if (userInfo.password == "") {
      alert_setShow(true);
      setErr("비밀번호를 입력해주세요");
    } else {
      const response_data = await login(userInfo);
      console.log(response_data);
      if (response_data.ok) {
        window.sessionStorage.setItem("id", true);
        window.sessionStorage.setItem("username", response_data.username);

        onHide();
      } else {
        alert_setShow(true);
        setErr(response_data.error);
      }
      console.log(response_data);
    }
  };

  return (
    <>
      <Modal show={alert_show} onHide={alert_setShow} variant="success">
        <Modal.Header>
          <Modal.Title>{err}</Modal.Title>
        </Modal.Header>
      </Modal>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Container>
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Sign In
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={onChange}
                  type="email"
                  placeholder="Enter email"
                  name="email"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={onChange}
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </Form.Group>
              <Button
                onClick={onSubmitAccount}
                variant="info"
                type="button"
                className="my-3"
              >
                Sign In
              </Button>
              <HorizontalLine text={"OR"} />
              <GoogleLogin
                render={(renderProps) => {
                  return (
                    <Button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      style={{
                        backgroundColor: "#176BEF",
                        borderColor: "#176BEF",
                      }}
                    >
                      <i className="fab fa-google"></i>&nbsp; Sign In with
                      Google
                    </Button>
                  );
                }}
              />
            </Form>
          </Modal.Body>
        </Container>
      </Modal>
    </>
  );
};

export default SignInModal;
