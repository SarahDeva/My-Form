import React from "react";
import "./App.css";
import Login from "./components/Login";

const App = () => {
  return (
  <div>
    <Login />
  </div>
  );
};

export default App;
// import React, { useState } from 'react';
// import Footer from "./Footer";
// import SideNavigation from "./SideNavigation";
// import { AiOutlineUser } from "react-icons/ai";
// import {
//   Nav,
//   Navbar,
//   NavbarBrand,
//   NavbarText,
//   NavItem,
//   NavLink,
// } from "reactstrap";
// import { Col, Row } from "reactstrap";
// import Todolist from "./Todolist";
// import "./App.css";


// function App() {
//   const [Display, setDisplay] = useState(0)
  

//   const Header = () => {
//     return (
//       <div>
//         <Navbar color="danger" light expand="md">
//           <NavbarBrand onClick={()=>{setDisplay(0)}}>React Application</NavbarBrand>
//           <Nav className="mr-auto" navbar>
//             <NavItem>
//               <NavLink onClick={()=>{setDisplay(1)}}>ToDo List</NavLink>
//             </NavItem>
//           </Nav>
//           <NavbarText>
//             <div>
//               <AiOutlineUser></AiOutlineUser>
//             </div>
//           </NavbarText>
//         </Navbar>
//       </div>
//     );
//   };
//   const styles = {
//     contentDiv: {
//       display: "flex",
//     },
//     contentMargin: {
//       marginLeft: "10px",
//       width: "100%",
//     },
//   };
//   return (
//     <>
//       <Row>
//         <Col>
//           <Header></Header>
//         </Col>
//       </Row>

//       <div style={styles.contentDiv}>
//         <SideNavigation />
//         {
//         Display===0 ? <div style={styles.contentMargin}> <h1 style={{ padding: "20%"}}>This is Content Area</h1> </div> : <Todolist/>
//         }          
//       </div>

//       <Row>
//         <Col>
//           <Footer></Footer>
//         </Col>
//       </Row>
//     </>
//   );
// }

// export default App;

//sidebar navigation


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//default normal and router

