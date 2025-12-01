import axios from "axios";

export const localClient = axios.create({
  baseURL: "https://be-mendadak.vercel.app/api",
});
