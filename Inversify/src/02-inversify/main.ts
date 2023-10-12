import { FileWriter } from "./FileWriter.js";
import { Logger } from "./Logger.js";

const writer = new FileWriter("app.log");
const logger = new Logger(writer);
await logger.log('Message');
