import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Home from "./views/Home";
import ContentPage from "./views/ContentPage";
import "./asset/styles/main.scss";

function App() {
  return (
    <Router>
      <div className="something">
        <Navbar />
        <Container fluid={true}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:name" component={ContentPage} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
