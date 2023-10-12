import fs from "node:fs/promises";
import { WriterInterface } from "./WriterInterface.js";

export class FileWriter implements WriterInterface {
  constructor(private filePath: string) {}

  async write(msg: string) {
    await fs.appendFile(this.filePath, msg);
  }
}
