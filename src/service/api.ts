import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openai.com/v1/chat/completions",
  timeout: 5000,
});

export default api;
