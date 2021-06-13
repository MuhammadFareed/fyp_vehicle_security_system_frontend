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

function success(successMessage, history, login) {
  Modal.success({
    content: successMessage,
    onOk() {
      if (login) {
        history.push("/admin/dashboard");
      } else {
        history.push("/login");
      }
    },
  });
}

export const signUpUser = async (data, setLoading, history, token) => {
  const { dispatch } = store;
  dispatch(signupInitiated());
  const header = {
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
      Medium: "Web",
      Authorization: `Token ${token}`,
    },
  };
  PostService("actuarial/users/create/", data, header)
    .then((response) => {
      console.log(response);
      debugger;
      if (
        response.status === parseInt(200) &&
        response.data.data.status === "success"
      ) {
        dispatch(signupSuccess());
        setLoading(false);
        let login = false;
        success(
          "Account created successfully! You can login now.",
          history,
          login
        );
      } else {
        debugger;
        dispatch(signupFailed());
        setLoading(false);
        error(`Sign up failed! ${response.data}`);
      }
    })
    .catch((err) => {
      debugger;
      dispatch(signupFailed());
      setLoading(false);
      error("Sign up failed! Something went wrong. Please try again!", err);
    });
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
        let login = true;
        success("Logged In successfully!", history, login);
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
  history.push('/login');
};
