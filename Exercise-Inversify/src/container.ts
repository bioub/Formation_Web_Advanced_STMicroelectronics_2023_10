import { Container } from "inversify";
import { HttpClient } from "./HttpClient";
import { UserService } from "./UserService";
import { UserPage } from "./UserPage";
import { HttpClientInterface } from "./HttpClientInterface";

export const container = new Container();

container.bind(HttpClient).toSelf().inSingletonScope();
container.bind(UserService).toSelf().inSingletonScope();
container.bind(UserPage).toSelf().inSingletonScope();

container.bind(HttpClientInterface).toService(HttpClient);
