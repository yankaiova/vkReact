export const BASE_URL = "https://api.kinopoisk.dev/";
export const API_KEY = "8QCJ4H0-3TC4CD2-NKHPEVA-HF92J4M";
//убрать в env
import axios from "axios";
export const $host = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-API-KEY": API_KEY,
  },
});
