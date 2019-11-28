import React from "react";
import { Container, Row, Col, ButtonToolbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../asset/styles/home.scss";
import doc from "../data/doc-router";

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="home-header">
            <h1>Cheatsheets For Dev</h1>
            <p>
              Hi! I'm a @bot and this is a collection of cheatsheets I've
              collected
            </p>
          </div>
          {/* <Link to="/js">To Js Page</Link> */}
          <ButtonToolbar>
            {Object.keys(doc).map(function(key) {
              return (
                <Button
                  size="lg"
                  className="button-item"
                  key={doc[key].id}
                  style={{
                    width: "200px",
                    backgroundColor: doc[key].bgColor,
                    borderColor: doc[key].bgColor
                  }}
                >
                  <Link
                    to={doc[key].link}
                    style={{ color: doc[key].nameColor }}
                  >
                    {doc[key].name}
                  </Link>
                </Button>
              );
            })}
            {/* <Button variant="warning" size="lg" className="button-item">
              Javascript
            </Button>
            <Button variant="secondary" size="lg" className="button-item">
              Large button
            </Button> */}
          </ButtonToolbar>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
