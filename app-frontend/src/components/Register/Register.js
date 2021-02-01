import React, {useState} from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import MailIcon from "@material-ui/icons/Mail";
import "./Register.css";
import { Link, Redirect } from "react-router-dom";
import { registerUser } from "../../redux/actions/auth";

import {useSelector,useDispatch} from 'react-redux'

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userState = useSelector((state) => state.isAllowed)

  console.log(userState)

  const dispatch = useDispatch();

  const submitHandler = () => {

    if(email && name && password){
      
      dispatch(registerUser(name,email,password));

    }

    setName('');
    setEmail('');
    setPassword('');
  }


  return (
    <div>
      {!userState ? (
        <div className="container">
        <div className="form-sec">
          <h1>Register</h1>

          <div className="form-input">
            <AccountBoxIcon />
            <input
              type="name"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>

          <div className="form-input">
            <MailIcon />
            <input type="email" value={email} placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)} ></input>
          </div>

          <div className="form-input">
            <VpnKeyIcon />
            <input type="password" value={password} placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)} ></input>
          </div>

          <button onClick={() => submitHandler()}>Register</button>

          <p className="bottom-message">
            Already registered?{" "}
            <span>
              <Link to="/signin">Sign-in</Link>
            </span>
          </p>
        </div>
      </div>
      ) : <Redirect to="/"/>}
    </div>
  );
};

export default Register;
