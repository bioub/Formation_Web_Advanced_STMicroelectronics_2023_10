import axios from "axios";

export class HttpClient {
  async get<T>(url: string) {
    const res = await axios.get<T>(url);
    return res.data;
  }
}