import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const StackBody = () => {
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {/* {Array.from({ length: 9 }).map((_, idx) => ( */}
        <Col>
          <Card>
            <img
              align="left"
              src="https://static.codenary.co.kr/company_logo/1.png"
              alt=""
              className="logo_img"
            />
            <Card.Body>
              <Card.Title>네이버</Card.Title>
              <div className="region">경기도 성남시</div>
              <div className="image-group">
                <img className="stack-card"></img>
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
          <Card>
            <img
              src="https://static.codenary.co.kr/company_logo/2.png"
              alt=""
              className="logo_img"
              align="left"
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
          <Card>
            <img
              src="https://static.codenary.co.kr/company_logo/3.png"
              alt=""
              className="logo_img"
              align="left"
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
                  alt=""
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
          <Card>
            <img
              src="https://static.codenary.co.kr/company_logo/4.png"
              alt=""
              align="left"
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
          <Card>
            <img
              align="left"
              src="https://static.codenary.co.kr/company_logo/5.png"
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
          <Card>
            <img
              src="https://static.codenary.co.kr/company_logo/6.png"
              alt=""
              align="left"
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
              src="https://static.codenary.co.kr/company_logo/7.png"
              alt=""
              align="left"
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
              align="left"
              src="https://static.codenary.co.kr/company_logo/8.png"
              alt=""
              className="logo_img"
            ></img>
            <Card.Body>
              <Card.Title>직방</Card.Title>
              <div className="region">서울특별시 서초구</div>
              <div className="image-group">
                <img
                  src="https://static.codenary.co.kr/framework_logo/nodejs.png"
                  alt=""
                  className="stack-card"
                />
                <img
                  src="https://static.codenary.co.kr/framework_logo/expressjs.png"
                  alt=""
                  className="stack-card"
                />
                <img
                  src="https://static.codenary.co.kr/framework_logo/nestjs.png"
                  alt=""
                  className="stack-card"
                />
                <img
                  src="https://static.codenary.co.kr/framework_logo/nextjs.png"
                  alt=""
                  className="stack-card"
                />
                <img
                  src="https://static.codenary.co.kr/framework_logo/reactnative.png"
                  alt=""
                  className="stack-card"
                />
                <img
                  src="https://static.codenary.co.kr/framework_logo/github.png"
                  alt=""
                  className="stack-card"
                />
                <img
                  src="https://static.codenary.co.kr/framework_logo/azuredevops.png"
                  alt=""
                  className="stack-card"
                />
                <img
                  src="https://static.codenary.co.kr/framework_logo/reactjs.png"
                  alt=""
                  className="stack-card"
                />
                <img
                  src="https://static.codenary.co.kr/framework_logo/mysql.png"
                  alt=""
                  className="stack-card"
                />
                <img
                  src="https://static.codenary.co.kr/framework_logo/hadoop.png"
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
              src="https://static.codenary.co.kr/company_logo/9.png"
              alt=""
              align="left"
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
              src="https://static.codenary.co.kr/company_logo/11.png"
              alt=""
              align="left"
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
        {/* <Col>
          <Card>
            <img
              src="https://static.codenary.co.kr/company_logo/12.png"
              align="left"
              alt=""
              className="logo_img"
            ></img>
            <Card.Body>
              <Card.Title>카카오뱅크</Card.Title>
              <div className="region">경기도 성남시</div>
              <div className="image-group"></div>
            </Card.Body>
          </Card>
        </Col> */}
        {/* ))} */}
      </Row>
    </div>
  );
};

export default StackBody;
