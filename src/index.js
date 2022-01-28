
// import ReactDOM from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
// ReactDOM.render(<App />, document.getElementById("root"));

//router




// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// todo and normal and todo grid

import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from "./App";
import "./index.css";
import Form from "./components/Form";
import Call from "./Call";
import Login from "./components/Login";
import Page from "./Page";

ReactDOM.render(
  <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route path='/Signupform' element={<Form />} />
        <Route path='/Webpage' element={<Call />} />
        <Route path='/Loginform' element={<Login />} />
        <Route path='/Page' element={<Page />} />
       </Routes>
    </div>
  </Router>,
  document.getElementById("root")
);

//sidebar navigation