import React, { Component } from "react";
import "./Login.css";
import icon from "./../../assets/images/as.png";
import background from "./../../assets/images/n.jpg";
import axios from "axios";
import { Redirect, Route } from "react-router-dom";
import { exact } from "prop-types";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default class Login extends Component {
  state = {
    usrename: null,
    password: null,
    loading: false,
  };
  onSubmitHandler = (e) => {
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 100000);
    e.preventDefault();

    let opts = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(opts);
    fetch("http://127.0.0.1:5000/login", {
      method: "post",
      body: JSON.stringify(opts),
    }).then((r) => console.log(r));
    setTimeout(() => {
      this.props.history.push("/admin");
    }, 1000);

    // const form = new FormData();x
    // form.append("username", this.state.usrename);
    // form.append("password", this.state.password);

    // axios.post('http://localhost:5000/login/', form).then(res => console.log(res))
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
          <div id="box">
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
            </form>
          </div>
        )}
      </div>
    );
  }
}
