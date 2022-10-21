// import { set } from "mongoose";
import React, { useState } from "react";
import { Row, Col, Card, Modal, Container, Button } from "react-bootstrap";

const StackBody = () => {
  const [show, setShow] = useState(false);

  const [name, setName] = useState("");

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (className) => {
    setShow(true);
    setName(className);
  };

  function ModalCard() {
    if (name === "naver") {
      return (
        <>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            style={{ top: "10vh" }}
          >
            <Container>
              <Row>
                <Col xs={3} style={{ display: "flex", alignItems: "center" }}>
                  <div className="stack-modal-header stack-block">
                    <span>
                      <img
                        align="left"
                        src="https://static.codenary.co.kr/company-logo/1246.png"
                        alt=""
                        className="logo_img"
                        style={{ marginLeft: "10px", marginRight: "10px" }}
                      />
                    </span>
                    <span
                      className="stack-name"
                      style={{
                        fontSize: "15px",
                        fontWeight: "500",
                        fontFamily: "Pretendard Variable",
                      }}
                    >
                      네이버
                    </span>
                  </div>
                </Col>
                <Col>
                  <Row style={{ marginLeft: "20px", marginTop: "20px" }}>
                    <span style={{ fontSize: "15px", fontWeight: "500" }}>
                      언어
                    </span>{" "}
                    <br />
                    <span style={{ fontSize: "12px", color: "#909090" }}>
                      * 총 9개의 기술 스택
                    </span>
                  </Row>
                  <div className="stack-modal-body">
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/javascript.png"
                          alt=""
                          className="stack-card"
                        />
                      </span>
                      <span className="stack-name">Javascript</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/kotlin.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Kotlin</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/java.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Java</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/typescript.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Typescript</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/go.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Go</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/python.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Python</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/scala.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Scala</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/cplusplus.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">C++</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/swift.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Swift</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
    if (name === "kakao") {
      return (
        <>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            style={{ top: "10vh" }}
          >
            <Container>
              <Row>
                <Col xs={3} style={{ display: "flex", alignItems: "center" }}>
                  <div className="stack-modal-header stack-block">
                    <span>
                      <img
                        align="left"
                        src="https://static.codenary.co.kr/company-logo/1376.png"
                        alt=""
                        className="logo_img"
                        style={{ marginLeft: "10px", marginRight: "10px" }}
                      />
                    </span>
                    <span
                      className="stack-name"
                      style={{
                        fontSize: "15px",
                        fontWeight: "500",
                        fontFamily: "Pretendard Variable",
                      }}
                    >
                      카카오
                    </span>
                  </div>
                </Col>
                <Col>
                  <Row style={{ marginLeft: "20px", marginTop: "20px" }}>
                    <span style={{ fontSize: "15px", fontWeight: "500" }}>
                      언어
                    </span>{" "}
                    <br />
                    <span style={{ fontSize: "12px", color: "#909090" }}>
                      * 총 11개의 기술 스택{" "}
                    </span>
                  </Row>
                  <div className="stack-modal-body">
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/kotlin.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Kotlin</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/javascript.png"
                          alt=""
                          className="stack-card"
                        />
                      </span>
                      <span className="stack-name">Javascript</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/typescript.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Typescript</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/java.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Java</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/python.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Python</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/scala.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Scala</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/swift.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Swift</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/r.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">R</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/cplusplus.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">C++</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/go.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Go</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/objectivec.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Objective-C</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
    if (name === "line") {
      return (
        <>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            style={{ top: "10vh" }}
          >
            <Container>
              <Row>
                <Col xs={3} style={{ display: "flex", alignItems: "center" }}>
                  <div className="stack-modal-header stack-block">
                    <span>
                      <img
                        align="left"
                        src="https://static.codenary.co.kr/company-logo/324.png"
                        alt=""
                        className="logo_img"
                        style={{ marginLeft: "10px", marginRight: "10px" }}
                      />
                    </span>
                    <span
                      className="stack-name"
                      style={{
                        fontSize: "15px",
                        fontWeight: "500",
                        fontFamily: "Pretendard Variable",
                      }}
                    >
                      라인
                    </span>
                  </div>
                </Col>
                <Col>
                  <Row style={{ marginLeft: "20px", marginTop: "20px" }}>
                    <span style={{ fontSize: "15px", fontWeight: "500" }}>
                      언어
                    </span>{" "}
                    <br />
                    <span style={{ fontSize: "12px", color: "#909090" }}>
                      * 총 11개의 기술 스택{" "}
                    </span>
                  </Row>
                  <div className="stack-modal-body">
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/kotlin.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Kotlin</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/javascript.png"
                          alt=""
                          className="stack-card"
                        />
                      </span>
                      <span className="stack-name">Javascript</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/typescript.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Typescript</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/java.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Java</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/python.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Python</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/scala.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Scala</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/swift.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Swift</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/r.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">R</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/cplusplus.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">C++</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/go.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Go</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/objectivec.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Objective-C</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
    if (name === "coupang") {
      return (
        <>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            style={{ top: "10vh" }}
          >
            <Container>
              <Row>
                <Col xs={3} style={{ display: "flex", alignItems: "center" }}>
                  <div className="stack-modal-header stack-block">
                    <span>
                      <img
                        align="left"
                        src="https://static.codenary.co.kr/company-logo/53.png"
                        alt=""
                        className="logo_img"
                        style={{ marginLeft: "10px", marginRight: "10px" }}
                      />
                    </span>
                    <span
                      className="stack-name"
                      style={{
                        fontSize: "15px",
                        fontWeight: "500",
                        fontFamily: "Pretendard Variable",
                      }}
                    >
                      쿠팡
                    </span>
                  </div>
                </Col>
                <Col>
                  <Row style={{ marginLeft: "20px", marginTop: "20px" }}>
                    <span style={{ fontSize: "15px", fontWeight: "500" }}>
                      언어
                    </span>{" "}
                    <br />
                    <span style={{ fontSize: "12px", color: "#909090" }}>
                      * 총 12개의 기술 스택{" "}
                    </span>
                  </Row>
                  <div className="stack-modal-body">
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/javascript.png"
                          alt=""
                          className="stack-card"
                        />
                      </span>
                      <span className="stack-name">Javascript</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/typescript.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Typescript</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/java.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Java</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/python.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Python</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/r.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">R</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/kotlin.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Kotlin</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/perl.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Perl</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/scala.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Scala</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/swift.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Swift</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/cplusplus.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">C++</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/go.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Go</span>
                    </div>
                    <div className="stack-block">
                      <span>
                        <img
                          src="https://static.codenary.co.kr/framework_logo/objectivec.png"
                          className="stack-card"
                          alt=""
                        />
                      </span>
                      <span className="stack-name">Objective-C</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }

  return (
    <>
      <div>
        <Row xs={1} md={2} className="g-4">
          {/* {Array.from({ length: 9 }).map((_, idx) => ( */}
          {/* <ModalCard /> */}
          {ModalCard()}
          <Col>
            <Card onClick={() => handleShow("naver")}>
              <img
                align="left"
                src="https://static.codenary.co.kr/company-logo/1246.png"
                alt=""
                className="logo_img"
                style={{ marginLeft: "10px" }}
              />
              <Card.Body>
                <Card.Title>네이버</Card.Title>
                <div className="region">경기도 성남시</div>
                <div className="image-group">
                  {/* <img className="stack-card"></img> */}
                  <img
                    src="https://static.codenary.co.kr/framework_logo/reactjs.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/spark.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/zeppelin.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/spring.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/springboot.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/liquibase.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/redux.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/apollo.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/graphql.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/github.png"
                    className="stack-card"
                    alt=""
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card onClick={() => handleShow("kakao")}>
              <img
                src="https://static.codenary.co.kr/company-logo/1376.png"
                alt=""
                className="logo_img"
                align="left"
                style={{ marginLeft: "10px" }}
              ></img>{" "}
              <Card.Body>
                <Card.Title>카카오</Card.Title>
                <div className="region">경기도 성남시</div>
                <div className="image-group">
                  <img
                    src="https://static.codenary.co.kr/framework_logo/argocd.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/jenkins.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/mysql.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/presto.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/mlflow.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/kubeflow.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/druid.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/postgresql.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/redis.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/mongodb.png"
                    className="stack-card"
                    alt=""
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card onClick={() => handleShow("line")}>
              <img
                src="https://static.codenary.co.kr/company-logo/324.png"
                alt=""
                className="logo_img"
                align="left"
                style={{ marginLeft: "10px" }}
              ></img>
              {/* <Card.Img variant="top" src="holder.js/100px160" alt=""
                /> */}
              <Card.Body>
                <Card.Title>라인</Card.Title>
                <div className="region">경기도 성남시</div>
                <div className="image-group">
                  <img
                    src="https://static.codenary.co.kr/framework_logo/spring.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/docker.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/kubernetes.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/retrofit.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/helm.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/kafka.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/elasticsearch.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/kibana.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/springboot.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/hbase.png"
                    className="stack-card"
                    alt=""
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card onClick={() => handleShow("coupang")}>
              <img
                src="https://static.codenary.co.kr/company-logo/53.png"
                alt=""
                align="left"
                style={{ marginLeft: "10px" }}
                className="logo_img"
              ></img>
              <Card.Body>
                <Card.Title>쿠팡</Card.Title>
                <div className="region">서울특별시 송파구</div>
                <div className="image-group">
                  <img
                    src="https://static.codenary.co.kr/framework_logo/nodejs.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/expressjs.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/nestjs.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/spring.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/reactjs.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/redux.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/jest.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/storybook.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/github.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/docker.png"
                    className="stack-card"
                    alt=""
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card onClick={() => handleShow("bamin")}>
              <img
                align="left"
                style={{ marginLeft: "10px" }}
                src="https://static.codenary.co.kr/company-logo/102.png"
                alt=""
                className="logo_img"
              ></img>
              <Card.Body>
                <Card.Title>우아한형제들</Card.Title>
                <div className="region">서울특별시 송파구</div>
                <div className="image-group">
                  <img
                    src="https://static.codenary.co.kr/framework_logo/spring.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/springboot.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/nodejs.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/kafka.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/hbase.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/flink.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/mongodb.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/elasticsearch.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/kibana.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/hadoop.png"
                    className="stack-card"
                    alt=""
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card onClick={() => handleShow("carrot")}>
              <img
                src="https://static.codenary.co.kr/company-logo/2826.png"
                alt=""
                align="left"
                style={{ marginLeft: "10px" }}
                className="logo_img"
              ></img>
              <Card.Body>
                <Card.Title>당근마켓</Card.Title>
                <div className="region">서울특별시 서초구</div>
                <div className="image-group">
                  <img
                    src="https://static.codenary.co.kr/framework_logo/reactivex.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/alamofire.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/githubaction.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/googlefirebase.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/fastlane.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/github.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/bitrise.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/kubernetes.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/terraform.png"
                    className="stack-card"
                    alt=""
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/argocd.png"
                    className="stack-card"
                    alt=""
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <img
                src="https://static.codenary.co.kr/company-logo/113.png"
                alt=""
                align="left"
                style={{ marginLeft: "10px" }}
                className="logo_img"
              ></img>
              <Card.Body>
                <Card.Title>비바리퍼블리카</Card.Title>
                <div className="region">서울특별시 강남구</div>
                <div className="image-group">
                  <img
                    src="https://static.codenary.co.kr/framework_logo/spring.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/springboot.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/hibernate.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/mysql.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/mongodb.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/hadoop.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/redis.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/memcached.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/kubernetes.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/docker.png"
                    alt=""
                    className="stack-card"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <img
                src="https://static.codenary.co.kr/company-logo/4924.png"
                alt=""
                align="left"
                style={{ marginLeft: "10px" }}
                className="logo_img"
              ></img>
              <Card.Body>
                <Card.Title>야놀자</Card.Title>
                <div className="region">서울특별시 강남구</div>
                <div className="image-group">
                  <img
                    src="https://static.codenary.co.kr/framework_logo/spring.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/kafka.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/nodejs.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/springboot.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/docker.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/kubernetes.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/ansible.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/terraform.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/prometheus.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/grafana.png"
                    alt=""
                    className="stack-card"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <Col>
          <Card>
            <img
              src="https://static.codenary.co.kr/company_logo/10.png"
              alt=""
              align="left"
              style={{ marginLeft: "10px" }}
              className="logo_img"
            ></img>
            <Card.Body>
              <Card.Title>네이버페이</Card.Title>
              <div className="region">경기도 성남시</div>
              <div className="image-group"></div>
            </Card.Body>
          </Card>
        </Col> */}
          <Col>
            <Card>
              <img
                src="https://static.codenary.co.kr/company-logo/1529.png"
                alt=""
                align="left"
                style={{ marginLeft: "10px" }}
                className="logo_img"
              ></img>
              <Card.Body>
                <Card.Title>카카오페이</Card.Title>
                <div className="region">경기도 성남시</div>
                <div className="image-group">
                  <img
                    src="https://static.codenary.co.kr/framework_logo/reactivex.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/spring.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/mysql.png"
                    alt="mysql"
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/reactjs.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/vuejs.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/jenkins.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/docker.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/kubernetes.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/redis.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/memcached.png"
                    alt=""
                    className="stack-card"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <img
                src="https://static.codenary.co.kr/company-logo/593.png"
                alt=""
                align="left"
                style={{ marginLeft: "10px" }}
                className="logo_img"
              ></img>
              <Card.Body>
                <Card.Title>카카오뱅크</Card.Title>
                <div className="region">경기도 성남시</div>
                <div className="image-group">
                  <img
                    src="https://static.codenary.co.kr/framework_logo/reactivex.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/spring.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/mysql.png"
                    alt="mysql"
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/reactjs.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/vuejs.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/jenkins.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/docker.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/kubernetes.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/redis.png"
                    alt=""
                    className="stack-card"
                  />
                  <img
                    src="https://static.codenary.co.kr/framework_logo/memcached.png"
                    alt=""
                    className="stack-card"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default StackBody;
