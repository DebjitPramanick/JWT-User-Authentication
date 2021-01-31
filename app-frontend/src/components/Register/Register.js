import React, {useState} from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import MailIcon from "@material-ui/icons/Mail";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const submitHandler = () => {
      const data ={
          name : name,
          email : email,
          password : password
      }

      console.log(data);

      setName('');
      setEmail('');
      setPassword('');
  }

  return (
    <div>
      <div className="container">
        <div className="form-sec">
          <h1>Register</h1>

          <div className="form-input">
            <AccountBoxIcon />
            <input
              type="name"
              value={name}
              placeholder="Enter name : "
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>

          <div className="form-input">
            <MailIcon />
            <input type="email" value={email} placeholder="Enter email : "
            onChange={(e) => setEmail(e.target.value)} ></input>
          </div>

          <div className="form-input">
            <VpnKeyIcon />
            <input type="number" value={password} placeholder="Enter password : "
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
    </div>
  );
};

export default Register;
