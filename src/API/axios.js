import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase function to run locally
  // baseURL: "http://127.0.0.1:5001/clone-tek/us-central1/api",
  headers: { "Content-Type": "application/json" },
  //deployed amazon-api url address on render.com
  baseURL: "https://amazon-api-m4iw.onrender.com"
});

export { axiosInstance };
