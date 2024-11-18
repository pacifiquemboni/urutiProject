import { getToken } from "@helpers/token";
import ax from "axios";

const server = process.env.REACT_APP_API_URL;
const token = getToken();

const axios = ax.create({ baseURL: server });
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export { server, axios, token };
