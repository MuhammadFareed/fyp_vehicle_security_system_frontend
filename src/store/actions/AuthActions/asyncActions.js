import { signupInitiated, signupSuccess, signupFailed } from "./signUpActions";
import {
  loginInitiated,
  loginSuccess,
  loginFailed,
  loggedOut,
} from "./logInActions";
import store from "./../../store";
import { PostService } from "../../../services/GeneralServices";
import { Modal } from "antd";

function error(errorMessage) {
  Modal.error({
    content: errorMessage,
  });
}

function success(successMessage, history) {
  debugger
  Modal.success({
    content: successMessage,
    onOk() {
      history.push("/admin/dashboard");
    },
  });
}

export const signUpUser = async (data, setLoading, history) => {
  const { dispatch } = store;
  dispatch(signupInitiated());

  let token = localStorage.getItem("token");
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    'Authorization': `Token ${token}`,
  };
  try {
    let response = await fetch(
      "http://0a876a9047f2.ngrok.io/api/v1/actuarial/users/create/",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      }
    );
    console.log(response);
    response = await response.json();
    console.log(response);
    if (response.status === 'success') {
      success('Account created successfully!', history, false);
    } else {
      error("Signup Failed. Please try again!");
      setLoading(false);
    }
  } catch (e) {
    error("Signup Failed. Please try again!");
    setLoading(false);
  }
};

export const logInUser = async (data, setLoading, history) => {
  const { dispatch } = store;
  dispatch(loginInitiated());
  const header = {
    header: {
      contentType: "application/json",
      Medium: "Web",
    },
  };
  PostService("actuarial/users/login", data, header)
    .then((response) => {
      console.log(response);
      if (
        response.status === parseInt(200) &&
        response.data.status === "success"
      ) {
        dispatch(loginSuccess());
        let token = response.data.token;
        console.log(token);
        localStorage.setItem("token", token);
        setLoading();
        success("Logged In successfully!", history);
      } else {
        dispatch(loginFailed());
        setLoading();
        error("Failed to login! Invalid Credentials. Please try again.");
      }
    })
    .catch((err) => {
      debugger;
      dispatch(loginFailed());
      setLoading();
      console.error("Error : ", err);
      error("Failed to login! Please try again.");
    });
};

export const logOutUser = async (history) => {
  const { dispatch } = store;
  dispatch(loggedOut());
  localStorage.setItem('token', '');
  history.push("/login");
};
