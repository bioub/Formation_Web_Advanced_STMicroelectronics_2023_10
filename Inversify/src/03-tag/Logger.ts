import { inject, injectable, tagged } from "inversify";
import { WriterInterface } from "./WriterInterface.js";

@injectable()
export class Logger {
  constructor(@tagged('env', process.env.NODE_ENV ?? 'development') @inject(WriterInterface) private writer: WriterInterface) {}

  async log(msg: string) {
    const formatted = `${new Date().toISOString()} - ${msg}\n`;
    await this.writer.write(formatted);
  }
}
