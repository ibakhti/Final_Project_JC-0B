import axios from "axios";

export const actionLogin = (email, password) => {
  return dispatch => {
    axios
      .get("http://localhost:8080/users", {
        params: {
          email,
          password
        }
      })
      .then(res => {
        console.log(res.data);
        dispatch({
          type: "LOGIN_SUCCESS",
          userData: res.data[0]
        });
      })
      .catch(err => console.log(err));
  };
};

// window.action = actionLogin;
