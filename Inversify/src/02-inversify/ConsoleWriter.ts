import { WriterInterface } from "./WriterInterface.js";

export class ConsoleWriter implements WriterInterface {
  async write(msg: string): Promise<void> {
    console.log(msg);
  }
}
