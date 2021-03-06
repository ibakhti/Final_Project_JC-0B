const initialState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  avatar: "",
  isAdmin: 0,
  error: ""
};

const userAcountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        id: action.userData.userId,
        firstName: action.userData.firstName,
        lastName: action.userData.lastName,
        email: action.userData.email,
        gender: action.userData.gender,
        avatar: action.userData.avatar,
        isAdmin: action.userData.isAdmin
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        avatar: "",
        isAdmin: 0
      };
    case "REGISTER_ERROR":
      return {
        ...state,
        error: action.messege
      };

    case "AVATAR_TAKE":
      return {
        ...state,
        avatar: action.data
      };
    default:
      return state;
  }
};

export default userAcountReducer;
