import React from 'react'
import "./Signin.css"
import MailIcon from "@material-ui/icons/Mail";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

import { Link } from "react-router-dom";

const Signin = () => {
    return (
      <div>
        <div className="container">
          <div className="form-sec">
            <h1>Sign-in</h1>

            <div className="form-input">
              <MailIcon />
              <input placeholder="Enter email : "></input>
            </div>

            <div className="form-input">
              <VpnKeyIcon />
              <input placeholder="Enter password : "></input>
            </div>

            <button>Sign-in</button>

            <p className="bottom-message">
              Not registered?{" "}
              <span>
                <Link to="/">Register</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
}

export default Signin
