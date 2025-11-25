import axios from "axios";

export const visionClient = axios.create({
  baseURL: "http://localhost:3001/api/v1",
});
