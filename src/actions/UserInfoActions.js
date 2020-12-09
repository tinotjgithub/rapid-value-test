import { getUserInfo } from "../services/UserService";
export const UserInfoAction = (param) => (dispatch) => {
  let payload = [];
  getUserInfo(param).then((res) => {
    payload = res.data;
    dispatch({
      type: "GET_USER_INFO",
      payload,
    });
  });
};
