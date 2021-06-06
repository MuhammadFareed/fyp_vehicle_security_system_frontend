import React, { useState } from "react";
import "./Login.css";
import icon from "./../../assets/images/as.png";
import background from "./../../assets/images/n.jpg";
import { Link, withRouter } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { logInUser } from "./../../store/actions/AuthActions/asyncActions";

function Login(props) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    let _data = {
      username: username,
      password: password,
    };
    logInUser(_data, setLoading, props.history);
  };
  return (
    <div className="login">
      {loading ? (
        <div className="loader-div">
          <Loader type="Circles" color="white" height={100} width={100} />
        </div>
      ) : (
        <div id="login-box">
          <img src={icon} alt="Login Icon" />
          <h1>Login Here</h1>
          <form method="POST">
            <label>
              Email : <br />
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                name="username"
                placeholder="Enter email..."
              />
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
            <Link to="/signup" style={{ color: "white" }}>
              Click to Register!!!
            </Link>
          </form>
        </div>
      )}
    </div>
  );
}

export default withRouter(Login);
