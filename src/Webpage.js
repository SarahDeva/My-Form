import React, { useState } from 'react';
import Footer from "./Footer";
import SideNavigation from "./SideNavigation";
import { AiOutlineUser } from "react-icons/ai";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavItem,
  NavLink,
} from "reactstrap";
import { Col, Row } from "reactstrap";
import Todolist from "./Todolist";
import "./App.css";
import logo from './logo.svg';
import Page from "./Page";
import Images from "./Images";
import Stepper from "./Stepper";



function Webpage() {
  const [Display, setDisplay] = useState(0);

  const Header = () => {
    return (
      <div className='scroll'>
        <div>
          <Navbar color="danger" light expand="md">
            <NavbarBrand onClick={() => { setDisplay(0) }}>React Application</NavbarBrand>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink onClick={() => { setDisplay(1) }}>ToDo List</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => { setDisplay(2) }}>Items</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => { setDisplay(3) }}>Gallery</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => { setDisplay(4) }}>Stepper</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              <div>
                <AiOutlineUser></AiOutlineUser>
              </div>
            </NavbarText>
          </Navbar>
        </div>
      </div>
    );
  };
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft: "10px",
      width: "100%",
    },
  };
  return (
    <>
      <div className='scroll'>
        <Row>
          <Col>
            <Header></Header>
          </Col>
        </Row>

        <div style={styles.contentDiv}>
          <SideNavigation />
          {
            Display === 0 ?
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </header>
              </div> : Display === 1 ? <Todolist /> : Display === 2 ? < Page /> : Display === 3 ? <Images /> : <Stepper />
             
          }
        </div>

        <Row>
          <Col>
            <Footer></Footer>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Webpage;
