export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      return { currentUser: action.payload };
    }

    case "LOGOUT": {
      return null;
    }

    default:
      return state;
  }
};
