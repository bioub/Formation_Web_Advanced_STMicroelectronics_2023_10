import axios from "axios";
import { HttpClientInterface } from "./HttpClientInterface";

export class HttpClient implements HttpClientInterface {
  async get<T>(url: string): Promise<T> {
    const res = await axios.get<T>(url);
    return res.data;
  }
}