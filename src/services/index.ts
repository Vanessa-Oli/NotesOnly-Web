import axios from "axios";

export const api = axios.create({
  baseURL: "https://notes-only.onrender.com",
});