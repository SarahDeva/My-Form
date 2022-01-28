import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Signupformsuccess = () => {

  const users = localStorage.getItem("USERS");
  console.log(users);
  return (
    <div className="account">
      <div className="app-wrapper">
        <h2 className="form-success"><center><b>Account Created<br></br> Successfully!</b></center></h2>
        <div>
          <br />
          <br />
          <button className="login" >
            <Link to='/Loginform'>Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signupformsuccess;      