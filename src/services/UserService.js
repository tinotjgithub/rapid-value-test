import { environment } from "../environment";
import axios from "axios";
export function getUserInfo() {
  return axios.get(environment.SERVER_API_URL + `/users`);
}
