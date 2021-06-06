import React, { useState, useEffect } from "react";
import "./../Signup/Signup.css";
import icon from "./../../assets/images/as.png";
import background from "./../../assets/images/n.jpg";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { signUpUser } from "./../../store/actions/AuthActions/asyncActions";
import { Link } from "react-router-dom";

function Signup(props) {
  const [usrename, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [role, setRole] = useState("admin");
  const [password, setPassword] = useState(null);
  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);

  console.log("object");
  const getToken = async () => {
    try {
      let token = localStorage.getItem("token");
      setToken(token);
    } catch (error) {
      console.log(`error`, error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    let _data = {
      full_name: usrename,
      email: email,
      password: role,
      role: password,
      phone_no: phone,
    };
    // let _data = {
    //   full_name: "test",
    //   email: "test7@test.com",
    //   password: "123456",
    //   role: "user",
    //   phone_no: "03002582",
    // };

    signUpUser(_data, setLoading, props.history, token);
  };
  return (
    <div className="signup">
      {loading ? (
        <div className="loader-div">
          <Loader type="Circles" color="white" height={100} width={100} />
        </div>
      ) : (
        <div id="signup-box">
          <img src={icon} alt="Login Icon" />
          <h1>Register</h1>
          <form method="POST">
            <label>
              User Name : <br />
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                name="username"
                placeholder="Enter username"
              />
            </label>
            <br />
            <br />
            <label>
              Email : <br />
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                placeholder="Enter email"
              />
            </label>
            <br />
            <br />
            <label>
              Phone : <br />
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                name="phone"
                placeholder="Enter Phone number"
              />
            </label>
            <br />
            <br />
            <label>
              Role : <br />
              <select
                style={{ width: "100%", height: "30px", color: "black" }}
                onChange={(e) => setRole(e.target.value)}
              >
                <option disabled>Select</option>
                <option value="admin">Admin</option>
                <option value="guard">Guard</option>
              </select>
            </label>
            <br />
            <br />
            <label>
              Password : <br />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="Enter password..."
              />
            </label>
            <br />
            <br />
            <input onClick={onSubmitHandler} type="submit" id="submission" />
            <br />
            <br />
            <Link to="/login" style={{ color: "white" }}>
              Click to Login!!!
            </Link>
          </form>
        </div>
      )}
    </div>
  );
}

export default withRouter(Signup);
