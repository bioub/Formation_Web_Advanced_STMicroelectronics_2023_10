import axios from "axios";
import { HttpClientInterface } from "./HttpClientInterface";
import { injectable } from "inversify";

@injectable()
export class HttpClient implements HttpClientInterface {
  async get<T>(url: string): Promise<T> {
    const res = await axios.get<T>(url);
    return res.data;
  }
}