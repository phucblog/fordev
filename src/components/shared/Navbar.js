import React from "react";
// import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
const TopNavbar = () => {
  // let location = useLocation();
  // // const [status, setStatus] = useState({
  // //   isHome: false
  // // });

  // const [isHome, setIsHome] = useState(false);
  // useEffect(() => {
  //   async function checkStatus() {
  //     if (location.pathname === "/") {
  //       setIsHome(true);
  //     }
  //     console.log(isHome);
  //   }
  //   checkStatus();
  // }, [location]);

  return (
    <Navbar
      sticky="top"
      expand="lg"
      
      className="justify-content-between"
      style={{ backgroundColor: "white" }}
    >
      <Container>
        <Nav.Item>
          <Link to="/">
            <i className="fas fa-arrow-left" style={{ color: "green" }}></i>
          </Link>
        </Nav.Item>
        <Navbar.Brand>ForDev</Navbar.Brand>
        <Nav.Item>
          <Nav.Link href="https://github.com/phucblog/fordev">Github</Nav.Link>
        </Nav.Item>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
