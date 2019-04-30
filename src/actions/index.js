import axios from "./../config/axios";
import cookies from "universal-cookie";

const cookie = new cookies();

export const actionLogin = (email, password) => {
  return dispatch => {
    axios
      .get(`/users/login?email=${email}&password=${password}`)
      .then(res => {
        // console.log(res.data);
        dispatch({
          type: "LOGIN_SUCCESS",
          userData: res.data[0]
        });
        cookie.set("userCookie", res.data[0].userId, { path: "/" });
        const path = window.location.pathname;
        if (path === "/register") window.location.pathname = "/";
      })
      .catch(err => console.log(err));
  };
};

export const actionLogout = () => {
  cookie.remove("userCookie");
  return {
    type: "LOGOUT_SUCCESS"
  };
};

export const actionKeepLogin = id => {
  return dispatch => {
    axios.get(`/users?id=${id}`).then(res => {
      if (res.data.length > 0) {
        dispatch({
          type: "LOGIN_SUCCESS",
          userData: res.data[0]
        });
      }
    });
  };
};

export const actionRegister = (
  firstName,
  lastName,
  email,
  gender,
  password
) => {
  return dispatch => {
    axios
      .post("/users", {
        firstName,
        lastName,
        email,
        gender,
        password
      })
      .then(res => {
        // console.log(res.data);
        axios
          .get(`/users/login?email=${email}&password=${password}`)
          .then(res => {
            // console.log(res.data);
            dispatch({
              type: "LOGIN_SUCCESS",
              userData: res.data[0]
            });
            cookie.set("userCookie", res.data[0].userId, { path: "/" });
            window.location.pathname = "/myaccount";
          })
          .catch(err => console.log(err));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
