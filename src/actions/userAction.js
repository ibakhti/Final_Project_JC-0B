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
      .catch(err => console.log("err from actionlogin" + err));
  };
};

export const actionLogout = () => {
  cookie.remove("userCookie");
  window.location.pathname = "/";

  return {
    type: "LOGOUT_SUCCESS"
  };
};

export const actionKeepLogin = id => {
  return dispatch => {
    axios
      .get(`/users?id=${id}`)
      .then(res => {
        if (res.data.length > 0) {
          dispatch({
            type: "LOGIN_SUCCESS",
            userData: res.data[0]
          });
        }
      })
      .catch(err => console.log("err from actionkeeplogin " + err));
  };
};

export const actionRegister = (
  userName,
  firstName,
  lastName,
  email,
  gender,
  password
) => {
  return dispatch => {
    axios
      .post("/users", {
        userName,
        firstName,
        lastName,
        email,
        gender,
        password
      })
      .then(res => {
        if (typeof res.data === typeof "") {
          const mssg = res.data.match(/email/)
            ? "Email Has Been Taken"
            : res.data.match(/userName/)
            ? "Username Has Been Taken"
            : res.data;
          dispatch({
            type: "REGISTER_ERROR",
            messege: mssg
          });
        } else {
          axios
            .get(`/users/login?email=${email}&password=${password}`)
            .then(res => {
              // console.log(res.data);
              dispatch({
                type: "LOGIN_SUCCESS",
                userData: res.data[0]
              });
              cookie.set("userCookie", res.data[0].userId, { path: "/" });
              window.location.pathname = "/myregaddress";
            })
            .catch(err => console.log(err));
        }
      })
      .catch(err => {
        dispatch({
          type: "REGISTER_ERROR",
          messege: "All Column Must Be Filled"
        });
      });
  };
};

export const actionRegisterError = () => ({
  type: "REGISTER_ERROR",
  messege: ""
});

export const userAvatarAction = img => ({
  type: "AVATAR_TAKE",
  data: img
});

export const actionRegisterAddress = (
  address,
  city,
  state,
  zip,
  phoneNumber,
  userId
) => {
  return dispatch => {};
};
