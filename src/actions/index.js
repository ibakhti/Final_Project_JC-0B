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
          dispatch({
            type: "REGISTER_ERROR",
            messege: res.data
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

export const actionCartGetData = userId => {
  return dispatch => {
    axios.get(`/cart?userId=${userId}`).then(res => {
      dispatch({
        type: "GET_CART",
        data: res.data
      });
    });
  };
};

export const actionRemoveCart = sku => {};
