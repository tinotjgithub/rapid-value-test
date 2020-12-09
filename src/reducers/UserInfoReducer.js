const initialState = {
  userInfo: []
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_INFO":
      return {
        userInfo: [...action.payload],
      };
    default:
      return state;
  }
};
