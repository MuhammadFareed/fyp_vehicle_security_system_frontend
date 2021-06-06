import { apiLiveUrl } from './../config.json';
import axios from "axios";

const LIVE_URL = apiLiveUrl;

export function PostService(Method, Body, header) {
  return axios.post(LIVE_URL + Method, Body, header);
}

export function GetService(Method) {
  return axios.get(LIVE_URL + Method);
}