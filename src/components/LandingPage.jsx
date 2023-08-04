import "../components/basic/LandingPage.css";
import "../components/logins/Login";

import { Link } from "react-router-dom";
import Login from "../components/logins/Login";

const LandingPage = () => {
  return (
    <div className="landing-container d-flex continer container-fluid ">
      <div className="image-container">
        <input type="image" img="true" src="./images/page1.png" alt="photo" />
      </div>
      <div className="text">
        <h1>InstaClone-Dnyanesh</h1>
        <Login />
        <div className="register"></div>
      </div>
    </div>
  );
};

export default LandingPage;
