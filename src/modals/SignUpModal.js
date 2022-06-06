import React, { useState } from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
import HorizontalLine from "../components/HorizonLine";
import { register } from "../controller/register";
import Icon from "./icon";

const SignUpModal = ({ show, onHide }) => {
  const [alert_show, alert_setShow] = useState(false);
  const [err, setErr] = useState("");

  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
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
    if (userInfo.username == "") {
      alert_setShow(true);
      setErr("이름을 입력해주세요");
    } else if (userInfo.email == "") {
      alert_setShow(true);
      setErr("이메일을 입력해 주세요");
    } else if (userInfo.password == "") {
      alert_setShow(true);
      setErr("비밀번호를 입력해주세요");
    } else if (userInfo.confirm_password == "") {
      alert_setShow(true);
      setErr("confirm_passowd");
    } else {
      const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

      if (exptext.test(userInfo.email) == true) {
        if (userInfo.password == userInfo.confirm_password) {
          const response_data = await register(userInfo);
          if (response_data.ok) {
            alert("회원가입 완료");
            onHide();
          } else {
            alert_setShow(true);
            setErr(response_data.error);
          }
        } else {
          alert_setShow(true);
          setErr("비밀번호가 일치하지 않습니다");
        }
      } else {
        alert("이메일형식이 올바르지 않습니다.");
      }
    }
  };

  const googleSuccess = async (res) => {
    console.log(res);
    // const result = res?.profileObj;
    // const token = res?.tokenId;

    try {
      // dispatch({ type: "AUTH", data: { result, token } });
    } catch (err) {
      console.log(err);
    }
  };
  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign In was unsuccessful. Try Again Later");
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
              Sign Up
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={onChange}
                  placeholder="Enter your Name"
                  name="username"
                />
              </Form.Group>
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
              <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  onChange={onChange}
                  type="password"
                  placeholder="Confirm Password"
                  name="confirm_password"
                />
              </Form.Group>
              <Button
                onClick={onSubmitAccount}
                block
                variant="info"
                type="button"
                className="my-3"
              >
                Sign Up
              </Button>
              <HorizontalLine text={"OR"} />
              <GoogleLogin
                clientId="419434129222-9bkbrbdh9vapuch860ebvsbpkd2mete8.apps.googleusercontent.com"
                render={(renderProps) => {
                  return (
                    <Button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      startIcon={<Icon />}
                      variant="contained"
                      style={{
                        backgroundColor: "#176BEF",
                        borderColor: "#176BEF",
                        color: "#ffffff",
                      }}
                    >
                      <i className="fab fa-google"></i>&nbsp; Sign Up with
                      Google
                    </Button>
                  );
                }}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
              />
            </Form>
          </Modal.Body>
        </Container>
      </Modal>
    </>
  );
};
export default SignUpModal;
