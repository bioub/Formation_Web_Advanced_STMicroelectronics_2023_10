import { ConsoleWriter } from "./ConsoleWriter.js";
import { Logger } from "./Logger.js";

const writer = new ConsoleWriter();
const logger = new Logger(writer);
await logger.log('Message');
