import { HttpClient } from "./HttpClient";
import { HttpClientInterface } from "./HttpClientInterface";
import { User } from "./model";

export class UserService {

  // protected httpClient: HttpClient;

  // constructor(param: HttpClient) {
  //   this.httpClient = param;
  // }

  constructor(protected httpClient: HttpClientInterface) {}

  async fetchUsers() {
    return await this.httpClient.get<User[]>('http://localhost:3200/users');
  }
}