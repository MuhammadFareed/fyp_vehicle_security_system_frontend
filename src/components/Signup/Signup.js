import React, { Component } from "react";
import "./../Signup/Signup.css";
import icon from "./../../assets/images/as.png";
import background from "./../../assets/images/n.jpg";
import axios from "axios";
import { Redirect, Route } from "react-router-dom";
import { exact } from "prop-types";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default class Signup extends Component {
  state = {
    usrename: null,
    email: null,
    role: "admin",
    password: null,
    loading: false,
  };
  onSubmitHandler = async (e) => {
    let _data = {
      user_name: this.state.username,
      email: this.state.email,
      role: this.state.role,
      password: this.state.password,
    };
    console.log(_data);

  };
  render() {
    let loader = (
      <div className="loader-div">
        <Loader
          type="Circles"
          color="white"
          height={100}
          width={100}
          // timeout={3000} //3 secs
        />
      </div>
    );
    return (
      <div className="signup">
        {this.state.loading ? (
          loader
        ) : (
          <div id="signup-box">
            <img src={icon} alt="Login Icon" />
            <h1>Register</h1>
            <form method="POST">
              <label>
                User Name : <br />
                <input
                  onChange={(e) => this.setState({ username: e.target.value })}
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
                  onChange={(e) => this.setState({ email: e.target.value })}
                  type="text"
                  name="email"
                  placeholder="Enter email"
                />
              </label>
              <br />
              <br />
              <label>
                Role : <br />
                <select
                  style={{ width: "100%", height: "30px" }}
                  onChange={(e) => this.setState({ role: e.target.value })}
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
                  onChange={(e) => this.setState({ password: e.target.value })}
                  type="password"
                  name="password"
                  placeholder="Enter password..."
                />
              </label>
              <br />
              <br />
              <input
                onClick={this.onSubmitHandler}
                type="submit"
                id="submission"
              />
              <br />
              <br />
            </form>
          </div>
        )}
      </div>
    );
  }
}
