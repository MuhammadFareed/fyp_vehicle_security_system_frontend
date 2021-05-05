import React, { Component } from "react";
import "./Login.css";
import icon from "./../../assets/images/as.png";
import background from "./../../assets/images/n.jpg";
import axios from "axios";
import { Link, Redirect, Route } from "react-router-dom";
import { exact } from "prop-types";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default class Login extends Component {
  state = {
    usrename: null,
    password: null,
    loading: false,
  };
  onSubmitHandler = async (e) => {
    this.setState({
      loading: true,
    });
    e.preventDefault();

    let _data = {
      user_name: this.state.username,
      password: this.state.password,
    };
    try {
      let response = await fetch("http://127.0.0.1:5000/login/", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(_data),
      });
      if (response.status === 200) {
        let data = await response.json();
        if(data.status == 200) {
          this.props.history.push("/admin/dashboard");
        } else {
          this.setState({loading : false});
          alert('Invalid Credentials!!! Please try again!');
        }
      } else {
        let data = await response.json();
        throw data;
      }
    } catch (e) {
      throw e;
    }
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
      <div className="login">
        {this.state.loading ? (
          loader
        ) : (
          <div id="login-box">
            <img src={icon} alt="Login Icon" />
            <h1>Login Here</h1>
            <form method="POST">
              <label>
                User Name : <br />
                <input
                  onChange={(e) => this.setState({ username: e.target.value })}
                  type="text"
                  name="username"
                  placeholder="Enter username..."
                />
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
              <Link to="/signup" style={{ color: "white" }}>
                Click to Register!!!
              </Link>
            </form>
          </div>
        )}
      </div>
    );
  }
}
