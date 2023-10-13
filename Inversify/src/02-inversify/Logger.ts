import { inject, injectable } from "inversify";
import { WriterInterface } from "./WriterInterface.js";


@injectable()
export class Logger {
  constructor(@inject(WriterInterface) private writer: WriterInterface) {}

  async log(msg: string) {
    const formatted = `${new Date().toISOString()} - ${msg}\n`;
    await this.writer.write(formatted);
  }
}
