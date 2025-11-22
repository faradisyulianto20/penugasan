import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1",
});